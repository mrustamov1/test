import styles from "./news.module.css"
import type { newsType } from "../../types/news.type"

export function News({
  id,
  photo,
  title,
  description,
  year,
  button,
}: newsType) {
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.cards} id={id}>
      <div className={styles.card}>
        <img src={photo} alt="First Card" />
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
          <div className={styles.yearAndIcon}>
            <span>{year}</span>
            <span className={styles.button}>{button}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
