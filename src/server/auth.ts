import { DrizzleAdapter } from '@auth/drizzle-adapter'
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

import { db } from './db'

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth
} = NextAuth({
  trustHost: true,
  adapter: DrizzleAdapter(db),
  providers: [Google]
})
