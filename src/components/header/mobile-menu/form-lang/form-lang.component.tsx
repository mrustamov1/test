import { useState } from "react"
import styles from "./form-lang.module.css"
import { images } from "../../../../assets/images"
import { Languages } from "../../languages/languages.component"
import { useLanguage } from "../../../../context/language.context"
import { Icon } from "../../../../ui-component/icon/icon.component"
import { Input } from "../../../../ui-component/input/input.component"
import { Button } from "../../../../ui-component/button/button.component"

export function FormAndLang() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const { activeLang } = useLanguage()
  const [isActiveLang, setIsActiveLang] = useState(false)

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function langOpen() {
    setIsActiveLang((prev) => !prev)
  }

  // ---------------------------------------------------------------------------
  return (
    <>
      <form className={styles.search}>
        <Input className={styles.input} placeholder="Search" type="text" />
        <Button type="submit" className={styles.button} title="Search" />
      </form>

      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <Icon name="fa-light fa-envelope" />
          <span>chinahuijue@gmail.com</span>
        </div>
        <div className={styles.contactItem}>
          <Icon name="fa-brands fa-whatsapp" />
          <span>+8699735352632</span>
        </div>
        <div className={styles.language} onClick={langOpen}>
          <img src={images[activeLang]} alt="Active Lang" />
          <Icon
            name="fa-light fa-chevron-down"
            className={`${styles.icon} ${isActiveLang ? styles.rotate : ""}`}
            size="tiny"
          />
        </div>
        {isActiveLang && <Languages onCloseDropdown={() => {}} />}
      </div>
    </>
  )
}
