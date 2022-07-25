import { z } from 'zod'

export const UserProfileSchema = z.object({
  title: z.string(),
  real_name: z.string(),
  real_name_normalized: z.string(),
  display_name: z.string(),
  status_text: z.string(),
  status_emoji: z.string(),
  avatar_hash: z.string(),
  image_24: z.string(),
  image_32: z.string(),
  image_48: z.string(),
  image_72: z.string(),
  image_192: z.string(),
  image_512: z.string(),
  image_original: z.optional(z.string()),
  team: z.string(),
})

export const UserSchema = z.object({
  id: z.string(),
  team_id: z.string(),
  name: z.string(),
  deleted: z.boolean(),
  updated: z.number(),
  profile: UserProfileSchema,
})

export type UserProfile = z.infer<typeof UserProfileSchema>
export type User = z.infer<typeof UserSchema>
