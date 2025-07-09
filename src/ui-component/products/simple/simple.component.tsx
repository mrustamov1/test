import styles from "./simple.module.css"
import { Icon } from "../../icon/icon.component"
import { useResize } from "../../../context/dimension.context"

export function Simple({
  photo,
  title,
  icon,
}: {
  photo: string
  title: string
  icon: string
}) {
  const { isSmall } = useResize()
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.card}>
      <img src={photo} alt="First Card" />
      {isSmall ? (
        <div className={styles.info}>
          <span>{title}</span>
          <Icon className={styles.icon} name={icon} size="tiny" />
        </div>
      ) : (
        <div className={styles.info}>
          <span>{title}</span>
        </div>
      )}
    </div>
  )
}
