import { z } from "zod"

export const CardSchema = z.object({
  photo: z.string().optional(),
  icon: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  overlayIcon: z.string().optional(),
  overlayTitle: z.string().optional(),
})

export type CardSchemaType = z.infer<typeof CardSchema>
