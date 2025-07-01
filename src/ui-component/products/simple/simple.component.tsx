import styles from "./simple.module.css"
import { Icon } from "../../icon/icon.component"

export function Simple({
  photo,
  title,
  icon,
}: {
  photo: string
  title: string
  icon: string
}) {
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.card}>
      <img src={photo} alt="First Card" />
      <div className={styles.info}>
        <span>{title}</span>
        <Icon className={styles.icon} name={icon} size="tiny" />
      </div>
    </div>
  )
}
