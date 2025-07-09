import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react"
import i18n from "../utils/i18n"
import type { Language, languageContextType } from "../types/languages.type"

const LanguageContext = createContext<languageContextType | undefined>(
  undefined,
)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [activeLang, setActiveLang] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || "en",
  )
  useEffect(() => {
    i18n.changeLanguage(activeLang)
    localStorage.setItem("language", activeLang)
  }, [activeLang])

  return (
    <LanguageContext.Provider value={{ activeLang, setActiveLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}
