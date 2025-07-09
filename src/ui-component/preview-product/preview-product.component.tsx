import styles from "./preview-product.module.css"
import { Container } from "../container/container.component"
import type { previewProductType } from "../../types/preview-product.type"
import { Button } from "../button/button.component"
export function UiPreviewProducts({
  image,
  subImage,
  subImageBottom,
  title,
  type,
  typeDesc,
  cooling,
  coolingDesc,
  power,
  powerDesc,
  model,
  modelDesc,
  capacity,
  capacityDesc,
  batterySell,
  batterySellDesc,
  size,
  sizeDesc,
  desc,
}: previewProductType) {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.bannerImage}>
          {image && <img src={image} alt="Bg Image" />}
        </div>
        <Container>
          <div className={styles.innerCard}>
            <div className={styles.images}>
              {subImage && (
                <img
                  className={styles.subImage}
                  src={subImage}
                  alt="Sub Image"
                />
              )}
              <div className={styles.subImageBottomWrapper}>
                {subImageBottom?.map((src, index) => (
                  <img
                    className={styles.subImageBottom}
                    key={index}
                    src={src}
                    alt={`Sub Image Bottom ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.subTitleAndTitleDesc}>
                <strong>{type}</strong>
                <p>{typeDesc}</p>
              </div>
              <div className={styles.subTitleAndTitleDesc}>
                <strong>{cooling}</strong>
                <p>{coolingDesc}</p>
              </div>
              <div className={styles.subTitleAndTitleDesc}>
                <strong>{power}</strong>
                <p>{powerDesc}</p>
              </div>
              <div className={styles.subTitleAndTitleDesc}>
                <strong>{model}</strong>
                <p>{modelDesc}</p>
              </div>
              <div className={styles.subTitleAndTitleDesc}>
                <strong>{capacity}</strong>
                <p>{capacityDesc}</p>
              </div>
              <div className={styles.subTitleAndTitleDesc}>
                <strong>{batterySell}</strong>
                <p>{batterySellDesc}</p>
              </div>
              <div className={styles.subTitleAndTitleDesc}>
                <strong>{size}</strong>
                <p>{sizeDesc}</p>
              </div>
              <p className={styles.description}>{desc}</p>
              <div className={styles.buttons}>
                <Button
                  className={styles.button}
                  title="DOWNLOAD PDF"
                  frontIcon="fa-regular fa-cloud-arrow-down"
                  titleSize="medium"
                />
                <Button
                  className={`${styles.button} ${styles.lastButton}`}
                  title="GET THE PRICE"
                  frontIcon="fa-regular fa-user-headset"
                  titleSize="medium"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
