import clsx from "clsx"
import styles from "./schema-card.module.css"
import { Icon } from "../icon/icon.component"
import type { CardSchemaType } from "../../types/schema-card.type"

export function SchemaCard({
  photo,
  icon,
  title,
  overlayIcon,
  overlayTitle,
  description,
}: CardSchemaType) {
  // ---------------------------------------------------------------------------
  return (
    <>
      <div
        className={clsx(styles.default, {
          [styles.default]: true,
        })}
      >
        <img className={styles.cardImage} src={photo} alt="Image" />
        <div className={styles.overlay}>
          {overlayIcon && <Icon name={overlayIcon} style={{ fontSize: "3rem" }} className={styles.overlayIcon}/>}
          <h3 className={styles.overlayTitle}>{overlayTitle}</h3>
          {description && <p className={styles.desc}>{description}</p>}
        </div>
        <div className={styles.bottom}>
          <div className={styles.icon}>
            {icon && <Icon name={icon} style={{ fontSize: "3rem" }} />}
          </div>
          {title && <h3 className={styles.title}>{title}</h3>}
        </div>
      </div>
    </>
  )
}
