import z from "zod"

export const LanguageContextSchema = z.object({
  activeLang: z.string(),
  setActiveLang: z.function().args(z.string()).returns(z.void()),
})

export type languageContextType = z.infer<typeof LanguageContextSchema>
