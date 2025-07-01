import { useState } from "react"
import styles from "./faq.module.css"
import { data } from "./faq-data.component"
import { Icon } from "../../../ui-component/icon/icon.component"

export function Faq() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const [active, setActive] = useState<string | null>(null)

  // ---------------------------------------------------------------------------
  // functiions
  // ---------------------------------------------------------------------------
  function handleDropdown(id: string) {
    setActive((prev) => (prev === id ? null : id))
  }

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.faq}>
      <div className={styles.headerFaq}>
        <span>FAQ</span>
      </div>
      <div className={styles.card}>
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => handleDropdown(item.id.toString())}
            className={styles.details}
          >
            <div className={styles.titleAndIcon}>
              <h4>
                {item.title}
                <Icon
                  className={
                    active === item.id.toString()
                      ? styles.active
                      : styles.default
                  }
                  name="fa-light fa-chevron-right"
                  size="tiny"
                />
              </h4>
            </div>
            {active === item.id.toString() && (
              <p className={styles.desc}>{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
