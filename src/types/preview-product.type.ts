import { z } from "zod"

export const PreviewProductSchema = z.object({
  image: z.string().optional(),
  subImage: z.string().optional(),
  subImageBottom: z.array(z.string()).optional(),
  title: z.string().optional(),
  desc: z.string().optional(),
  type: z.string().optional(),
  typeDesc: z.string().optional(),
  cooling: z.string().optional(),
  coolingDesc: z.string().optional(),
  power: z.string().optional(),
  powerDesc: z.string().optional(),
  model: z.string().optional(),
  modelDesc: z.string().optional(),
  capacity: z.string().optional(),
  capacityDesc: z.string().optional(),
  batterySell: z.string().optional(),
  batterySellDesc: z.string().optional(),
  size: z.string().optional(),
  sizeDesc: z.string().optional(),
})

export type previewProductType = z.infer<typeof PreviewProductSchema>
