import { z } from "zod"

export const ContactSchema = z.object({
  id: z.number(),
  icon: z.string(),
  title: z.string(),
  subTitle: z.string(),
})

export type contactType = z.infer<typeof ContactSchema>
