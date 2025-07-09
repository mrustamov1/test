import { z } from "zod"

export const OnCloseSchema = z.object({
  onCloseDropdown: z.function().args().returns(z.void()),
})

export type onCloseType = z.infer<typeof OnCloseSchema>
