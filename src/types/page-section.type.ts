import type { ReactNode } from "react"
import { z } from "zod"

export const PageSectionSchema = z.object({
  children: z.string() as z.ZodType<ReactNode>,
  contentClassName: z.string().optional(),
  containerClassName: z.string().optional(),
})

export type pageSectionType = z.infer<typeof PageSectionSchema>
