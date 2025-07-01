import styles from "./products.module.css"
import { images } from "../../assets/images"
import { useTranslation } from "react-i18next"
import { Button } from "../../ui-component/button/button.component"
import { Simple } from "../../ui-component/products/simple/simple.component"
import { Container } from "../../ui-component/container/container.component"

export function Products() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const { t: translate } = useTranslation()

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.main}>
      <Container>
        <div className={styles.container}>
          <h1>{translate("products.product")}</h1>
          <p className={styles.desc}>{translate("products.description")}</p>
          <div>
            <Button title={translate("button.view-more")} iconName="fa-solid fa-chevron-right"/>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* SIMPLE PRODUCTS */}
        {/* --------------------------------------------------------------------------- */}
        <div className={styles.simple}>
          <Simple
            photo={images.card1}
            title={translate("products.first-card-title")}
            icon="fa-light fa-arrow-right-long"
          />
          <Simple
            photo={images.card2}
            title={translate("products.second-card-title")}
            icon="fa-light fa-arrow-right-long"
          />
          <Simple
            photo={images.card3}
            title={translate("products.third-card-title")}
            icon="fa-light fa-arrow-right-long"
          />
          <Simple
            photo={images.card4}
            title={translate("products.fourth-card-title")}
            icon="fa-light fa-arrow-right-long"
          />
        </div>
      </Container>
    </section>
  )
}
