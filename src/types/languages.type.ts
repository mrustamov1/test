import z from "zod"

export const LanguageEnum = z.enum(["en", "ru", "tj"])
export type Language = z.infer<typeof LanguageEnum>

export const LanguageContextSchema = z.object({
  activeLang: LanguageEnum,
  setActiveLang: z.function().args(LanguageEnum).returns(z.void()),
})

export type languageContextType = z.infer<typeof LanguageContextSchema>
