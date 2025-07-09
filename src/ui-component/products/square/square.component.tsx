import clsx from "clsx"
import styles from "./square.module.css"
import { Button } from "../../button/button.component"
export function Square({
  image,
  title,
  className,
  overlayTitle,
}: {
  image?: string
  title?: string
  icon?: string
  className?: string
  overlayTitle?: string
}) {
  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function truncateByChars(text: string, limit: number): string {
    return text.length > limit ? text.slice(0, limit).trim() + "..." : text
  }
  const truncatedTitle = title ? truncateByChars(title, 31) : ""

  // ---------------------------------------------------------------------------
  return (
    <>
      <div className={styles.content}>
        <div
          className={clsx(className, {
            [styles.default]: true,
          })}
        >
          <img className={styles.cardImage} src={image} alt="Image" />
          <div className={styles.overlay}>
            <h3 className={styles.overlayTitle}>{overlayTitle}</h3>
            <Button title="More" mode="primary-small" />
          </div>
          <div className={styles.bottom} title={title}>
            {truncatedTitle}
          </div>
        </div>
      </div>
    </>
  )
}
