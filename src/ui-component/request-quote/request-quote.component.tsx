import { useState } from "react"
import { Icon } from "../icon/icon.component"
import { useTranslation } from "react-i18next"
import styles from "./request-quote.module.css"
import { Input } from "../input/input.component"
import { Button } from "../button/button.component"
import { Container } from "../container/container.component"

export function RequestQuote() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const [isActive, setIsActive] = useState(false)
  const { t: translate } = useTranslation()
  const data = [
    translate("input.first-dropdown.first"),
    translate("input.first-dropdown.second"),
    translate("input.first-dropdown.third"),
    translate("input.first-dropdown.fourth"),
    translate("input.first-dropdown.fifth"),
    translate("input.first-dropdown.sixth"),
    translate("input.first-dropdown.seventh"),
  ]

  // ---------------------------------------------------------------------------
  // funcitions
  // ---------------------------------------------------------------------------
  function toggle() {
    setIsActive((prev) => !prev)
  }

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.content}>
      <div className={styles.cover}>
        <Container className={styles.container}>
          <form className={styles.form}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className={styles.title}>{translate("form.request")}</h2>
              <div className={styles.input}>
                <Input
                  className={styles.inputItself}
                  type="text"
                  placeholder={translate("input.name")}
                  required={true}
                />
                <Icon
                  className={styles.inputIcon}
                  style={{ fontSize: 15 }}
                  name="fa-solid fa-user"
                />
              </div>
              <div className={styles.input}>
                <Input
                  className={styles.inputItself}
                  type="text"
                  placeholder={translate("input.email")}
                  required={true}
                />
                <Icon
                  className={styles.inputIcon}
                  style={{ fontSize: 15 }}
                  name="fa-solid fa-envelope"
                />
              </div>
              <div className={styles.input}>
                <Input
                  className={styles.inputItself}
                  type="text"
                  placeholder={translate("input.phone")}
                />
                <Icon
                  className={styles.inputIcon}
                  style={{ fontSize: 15 }}
                  name="fa-solid fa-phone"
                />
              </div>
              <div className={styles.dropdown} onClick={toggle}>
                <Icon
                  name={
                    isActive
                      ? "fa-solid fa-chevron-up"
                      : "fa-solid fa-chevron-down"
                  }
                  style={{ fontSize: 15 }}
                />
                {translate("input.dropdown")}
              </div>
              {isActive && (
                <div className={styles.dropdownItems}>
                  {data.map((item, index) => (
                    <div key={index}>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
              <textarea
                className={styles.textarea}
                rows={4}
                placeholder={translate("input.textarea")}
              />
              <Button title={translate("button.find-more")} />
            </div>
          </form>
          <div className={styles.requestInfo}>
            <h3 className={styles.requestInfoTitle}>
              {translate("form.title")}
            </h3>
            <p className={styles.desc}>{translate("form.description")}</p>
            <ul className={styles.menu}>
              <li className={styles.link}>
                <Icon name="fa-light fa-user" style={{ fontSize: 18 }} />
                {translate("form.support")}
              </li>
              <li className={styles.link}>
                <Icon name="fa-light fa-phone" style={{ fontSize: 18 }} />
                {translate("form.phone")}
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  )
}
