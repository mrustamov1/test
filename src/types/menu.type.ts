import { z } from "zod"

export const MenuDataSchema = z.object({
  key: z.string().optional(),
  label: z.string().optional(),
  submenu: z.array(z.string()).optional(),
})

export type menuDataType = z.infer<typeof MenuDataSchema>

export const MobileMenuChema = z.object({
  isOpen: z.boolean(),
  onClose: z.function().args().returns(z.void()),
})

export type mobileMenuType = z.infer<typeof MobileMenuChema>
