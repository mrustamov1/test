import i18n from "../../../utils/i18n"
import styles from "./languages.module.css"
import { Fragment, useEffect } from "react"
import { images } from "../../../assets/images"
import { useLanguage } from "../../../context/language.context"
import type { onCloseType } from "../../../types/header-on-close.type"

export function Languages({ onCloseDropdown }: onCloseType) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const { activeLang, setActiveLang } = useLanguage()

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
      setActiveLang(savedLanguage as "en" | "ru" | "tj")
    }
  }, [])

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function changeLanguage(language: string) {
    i18n.changeLanguage(language)
    localStorage.setItem("language", language)
    setActiveLang(language as "en" | "ru" | "tj")
  }

  // ---------------------------------------------------------------------------
  return (
    <Fragment>
      {/* --------------------------------------------------------------------------- */}
      {/* ENGLISH */}
      {/* --------------------------------------------------------------------------- */}
      <div
        className={`${styles.lang} ${activeLang === "en" ? styles.activeLang : ""}`}
        onClick={() => {
          changeLanguage("en")
          onCloseDropdown()
        }}
      >
        <img src={images.en} className={styles.langImg} />
        <span>English</span>
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* RUSSION */}
      {/* --------------------------------------------------------------------------- */}
      <div
        className={`${styles.lang} ${activeLang === "ru" ? styles.activeLang : ""}`}
        onClick={() => {
          changeLanguage("ru")
          onCloseDropdown()
        }}
      >
        <img src={images.ru} className={styles.langImg} />
        <span>Russian</span>
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* TAJIK */}
      {/* --------------------------------------------------------------------------- */}
      <div
        className={`${styles.lang} ${activeLang === "tj" ? styles.activeLang : ""}`}
        onClick={() => {
          changeLanguage("tj")
          onCloseDropdown()
        }}
      >
        <img src={images.tj} className={styles.langImg} />
        <span>Tajikistan</span>
      </div>
    </Fragment>
  )
}
