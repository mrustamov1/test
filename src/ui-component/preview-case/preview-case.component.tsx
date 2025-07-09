import styles from "./preview-case.module.css"
import { Button } from "../button/button.component"
import clsx from "clsx"

export function PreviewCase({
  title,
  image,
  application,
  parameter,
  equipment,
  address,
  className,
}: {
  title?: string
  image?: string
  application?: string
  parameter?: string
  equipment?: string
  address?: string
  className?: string
}) {
  return (
    <div className={clsx(styles.defaultRootClass, className)}>
      <div className={styles.default}>
        <img className={styles.cardImage} src={image} alt="Case Image" />
        <div className={styles.overlay}>
          <h3 className={styles.overlayTitle}>Overlay title</h3>
          <Button title="More" mode="primary-small" />
        </div>
      </div>

      <div className={styles.caseInfo}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.data}>
          <span>Application</span>
          <p className={styles.desc}>{application}</p>
        </div>

        <div className={`${styles.data} ${styles.parameter}`}>
          <span>Parameter</span>
          <p className={styles.desc}>{parameter}</p>
        </div>

        <div className={styles.data}>
          <span>Equipment</span>
          <p className={styles.desc}>{equipment}</p>
        </div>

        <div className={`${styles.data} ${styles.address}`}>
          <span>Address</span>
          <p className={styles.desc}>{address}</p>
        </div>

        <Button
          title="VIEW MORE"
          className={styles.headerCaseButton}
          iconName="fa-solid fa-chevron-right"
          titleSize="medium"
        />
      </div>
    </div>
  )
}
