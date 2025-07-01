import { z } from "zod"

export const BannerSchema = z.object({
  title: z.string().optional().optional(),
  sliderImages: z.array(z.string()).optional(),
  type: z.union([z.literal("product"), z.string()]).optional(),
})

export type bannerType = z.infer<typeof BannerSchema>
