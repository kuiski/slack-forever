import { Bucket, Storage } from '@google-cloud/storage'
import DataLoader from 'dataloader'
import dayjs from 'dayjs'
import { Channel, ChannelSchema } from '@/entities/channel'
import { User, UserSchema } from '@/entities/user'
import { Message } from '@/entities/message'

export abstract class SlackLogDatasource {
  abstract getUser(id: string): Promise<any>
  abstract getUsers(): Promise<any[]>
  abstract getChannel(id: string): Promise<any>
  abstract getChannels(): Promise<any[]>
  abstract getJoinedChannels(userId: string): Promise<any[]>
  abstract getChannelMembers(channelId: string): Promise<User[] | undefined>
  abstract getChannelMessages(
    channelId: string,
    date: string
  ): Promise<Message[] | undefined>
}

export class CloudStorageDatasource extends SlackLogDatasource {
  storage: Storage
  bucket: Bucket
  userLoader: DataLoader<string, User>
  channelLoader: DataLoader<string, Channel>
  channelMemberLoader: DataLoader<string, User[]>
  channelMessageLoader: DataLoader<[string, string], Message[]>

  constructor(storage: Storage, bucket: string) {
    super()
    this.storage = storage
    this.bucket = this.storage.bucket(bucket)
    this.userLoader = new DataLoader(async (ids) => {
      const users = await this._fetchUsers()
      const res = ids.map((id) => users.find((user) => user.id === id))
      return res
    })

    this.channelLoader = new DataLoader(async (ids) => {
      const channels = await this._fetchChannels()
      const res = ids.map((id) =>
        channels.find((channel: any) => channel.id === id)
      )

      return res
    })

    this.channelMemberLoader = new DataLoader(async (ids) => {
      const rawChannels: any[] = await this._fetchChannels()
      const filteredRawChannels = ids.map((id) =>
        rawChannels.find((channel) => channel.id === id)
      )
      const res = []
      for (let rawChannel of filteredRawChannels) {
        const members = []
        for (let memberId of rawChannel.members) {
          members.push(await this.getUser(memberId))
        }
        res.push(members)
      }

      return res
    })

    this.channelMessageLoader = new DataLoader(async (ids) => {
      const promises = ids.map(([channelId, date]) => {
        return this._fetchMessages(channelId, date)
      })

      return await Promise.all(promises)
    })
  }

  async _fetchUsers() {
    const contents = await this.bucket
      .file('slack_export/users.json')
      .download()
    const users: any[] = JSON.parse(contents.toString()).map(UserSchema.parse)

    for (let user of users) {
      this.userLoader.prime(user.id, user)
    }

    return users
  }

  async getUser(id: string) {
    return this.userLoader.load(id)
  }

  async getUsers() {
    return this._fetchUsers()
  }

  async _fetchChannels(): Promise<any[]> {
    const contents = await this.bucket
      .file('slack_export/channels.json')
      .download()
    return JSON.parse(contents.toString())
  }

  async _addUserProfile(message: Message) {
    if ('user' in message && !('user_profile' in message)) {
      const user = await this.userLoader.load(message.user)
      if (!user) return message

      return {
        ...message,
        user_profile: user.profile,
      }
    }

    return message
  }

  async _fetchMessages(channelId: string, date: string): Promise<Message[]> {
    const dateFormat = dayjs(date).format('YYYY-MM-DD')
    const objPath = `slack_export/${channelId}/${dateFormat}.json` // Need escape
    try {
      const contents = await this.bucket.file(objPath).download()
      const messages = JSON.parse(contents.toString())
      return await Promise.all(messages.map(this._addUserProfile, this))
    } catch (err: any) {
      if (err.code === 404) return []
      else throw err
    }
  }

  async getChannel(id: string) {
    return this.channelLoader.load(id)
  }

  async getChannels() {
    const rawChannels = await this._fetchChannels()
    const channels: Channel[] = JSON.parse(rawChannels.toString()).map(
      ({ members, ...rest }: any) => ChannelSchema.parse(rest)
    )

    for (let channel of channels) {
      this.channelLoader.prime(channel.id, channel)
    }

    return channels
  }

  async getJoinedChannels(userId: string) {
    const rawChannels: any[] = await this._fetchChannels()
    const joinedChannels = rawChannels.reduce((acc, { members, ...rest }) => {
      return members.includes(userId)
        ? acc.concat(ChannelSchema.parse(rest))
        : acc
    }, [])

    for (let channel of joinedChannels) {
      this.channelLoader.prime(channel.id, channel)
    }

    return joinedChannels
  }

  async getChannelMembers(channelId: string) {
    return this.channelMemberLoader.load(channelId)
  }

  async getChannelMessages(channelId: string, date: string) {
    return this.channelMessageLoader.load([channelId, date])
  }
}
