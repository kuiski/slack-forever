import { NextAuthOptions } from 'next-auth'
import SlackProvider from 'next-auth/providers/slack'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    SlackProvider({
      clientId: process.env.SLACK_CLIENT_ID,
      clientSecret: process.env.SLACK_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      /*console.log(JSON.stringify(account));
      console.log(JSON.stringify(token));
      console.log(JSON.stringify(user)); */
      if (account?.access_token) {
        token.accessToken = account.access_token
      }
      return token
    },
    session({ session, token, user }) {
      if (!token.accessToken || !token.sub) {
        throw Error('Token must have accessToken and sub')
      }
      session.accessToken = token.accessToken
      session.user.id = token.sub
      return session
    },
  },
}
