import { useState } from "react"
import styles from "./contact-form.module.css"
import { useTranslation } from "react-i18next"
import { Icon } from "../../../ui-component/icon/icon.component"
import { Input } from "../../../ui-component/input/input.component"
import { ProfessionalServices } from "../services/services.component"
import { Button } from "../../../ui-component/button/button.component"

export function ContactForm() {
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
  return (
    <section className={styles.content}>
      <form className={styles.form}>
        <div className={styles.topDesc}>
          <p>* Submit a solar energy storage inquiry today!</p>
          <p>
            Our experts will help you find the perfect residential, commercial,
            or industrial solar storage solution.
          </p>
        </div>
        <div className={styles.inputWrapper}>
          <Input
            className={styles.input}
            label="Name"
            type="text"
            placeholder="Enter your name"
          />

          <Input
            className={styles.input}
            label="Email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            className={styles.input}
            label="Country"
            type="text"
            placeholder="+992"
          />
          <Input
            className={styles.input}
            label="Whatsapp/phone"
            type="text"
            placeholder="Whatsapp/phone"
          />
        </div>
        <div className={styles.dropdown} onClick={toggle}>
          <Icon
            name={
              isActive ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
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
          placeholder="Your requirement"
        />
        <div className={styles.buttons}>
          <Button className={styles.button} title="Submit" titleSize="medium" />
        </div>
      </form>
      <ProfessionalServices />
    </section>
  )
}
