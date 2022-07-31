import { z } from 'zod'
import { UserSchema } from './user'

export const ChannelSchema = z.object({
  id: z.string(),
  name: z.string(),
  created: z.number(),
  creator: z.string(),
  is_archived: z.boolean(),
  is_general: z.boolean(),
  members: z.optional(UserSchema),
  topic: z.object({
    value: z.string(),
    creator: z.string(),
    last_set: z.number(),
  }),
  purpose: z.object({
    value: z.string(),
    creator: z.string(),
    last_set: z.number(),
  }),
})

export type Channel = z.infer<typeof ChannelSchema>
