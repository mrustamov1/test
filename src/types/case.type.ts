import { z } from "zod"

export const CaseSchema = z.object({
  image: z.string().optional(),
  title: z.string().optional(),
  icon: z.string().optional(),
  location: z.string().optional(),
  className: z.string().optional(),
  overlayTitle: z.string().optional(),
})

export type caseType = z.infer<typeof CaseSchema>
