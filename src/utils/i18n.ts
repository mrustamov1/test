import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationEn from "../../public/lang/en.json"
import translationRu from "../../public/lang/ru.json"
import translationTj from "../../public/lang/tj.json"

const resources = {
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
  tj: {
    translation: translationTj,
  },
}

i18n.use(initReactI18next as never).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
} as never)

export default i18n
