import styles from "./main.module.css"
import type { productType } from "../../../types/product.type"

export function MainProduct({
  title,
  model,
  photo,
  overlayTitle,
  overlayButton,
}: productType) {
  return (
    <article className={styles.rightSidebar}>
      <div className={styles.productCards}>
        <div className={styles.productItself}>
          <h3>{title}</h3>
          <p>{model}</p>
          <div className={styles.imageWrapper}>
            <img
              className={styles.prodcuctImage}
              src={photo}
              alt="Product One"
            />
            <div className={styles.hoverOverlay}>
              <span>{overlayTitle}</span>
              <button>{overlayButton}</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
