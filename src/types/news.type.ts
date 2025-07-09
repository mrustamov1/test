import { z } from "zod"

export const NewsSchema = z.object({
  id: z.string().optional(),
  photo: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  year: z.string().optional(),
  button: z.string().optional(),
})

export type newsType = z.infer<typeof NewsSchema>
