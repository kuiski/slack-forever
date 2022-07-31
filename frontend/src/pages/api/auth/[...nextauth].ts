import NextAuth from 'next-auth'
import { nextAuthOptions } from '@/lib/auth/next-auth-options'

export default NextAuth(nextAuthOptions)
