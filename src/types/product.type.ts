import { z } from "zod"

export const ProductSchema = z.object({
  title: z.string().optional(),
  model: z.string().optional(),
  photo: z.string().optional(),
  overlayTitle: z.string().optional(),
  overlayButton: z.string().optional(),
})

export type productType = z.infer<typeof ProductSchema>
