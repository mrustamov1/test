import styles from "./solutions.module.css"
import { useTranslation } from "react-i18next"
import { images } from "../../../assets/images"
import { Container } from "../../../ui-component/container/container.component"
import { Icon } from "../../../ui-component/icon/icon.component"

export function PreviewProductSolutions() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const { t: translate } = useTranslation()

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.content}>
      <Container className={styles.container}>
        <h1 className={styles.topTitle}>Solution</h1>
        <article className={styles.stationInfo}>
          <img className={styles.photo} src={images.stations1} alt="Stations" />
          <div className={styles.titleAndDesc}>
            <div>
              <h1 className={styles.title}>Residental Storage Energy</h1>
              <p>
                Huijue Group's Home Energy Storage Solution integrates advanced
                lithium battery technology with solar systems. Residental
                Storage Energy It reduces electricity bills and serves as
                emergency backup power, providing a seamless, intelligent, and
                one-stop energy solution.
              </p>
            </div>
            <span className={styles.viewMore}>
              {translate("button.view-more")}
              <Icon
                name="fa-light fa-arrow-right-long"
                style={{ fontSize: 14 }}
              />
            </span>
          </div>
        </article>
      </Container>
    </section>
  )
}
