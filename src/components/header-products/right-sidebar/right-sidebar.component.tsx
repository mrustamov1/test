import { images } from "../../../assets/images"
import styles from "./right-sidebar.module.css"
import { MainProduct } from "../../../ui-component/products/main/main.component"
import { Faq } from "../faq/faq.component"

export function RightSidebar() {
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.bottomSidebar}>
      <article className={styles.rightSidebar}>
        <h3>Base Station Energy Storage</h3>
        <p className={styles.rightSidebarDesc}>
          Huijue Group offers professional Base Station Energy Storage Products,
          which ensure that telecommunication infrastructures will have reliable
          backup power during an outage or peak demand periods.
        </p>
      </article>
      <article className={styles.rightSidebar}>
        <div className={styles.productCards}>
          <MainProduct
            photo={images.product1}
            title="Mains power /Photovoltaic /Diesel generation"
            model="6KW-48KW/10KWh-40KWh"
            overlayTitle="View More"
            overlayButton="View More"
          />
          <MainProduct
            photo={images.product2}
            title="Mains power /Photovoltaic /Diesel generation"
            model="6KW-48KW/10KWh-40KWh"
            overlayTitle="View More"
            overlayButton="View More"
          />
          <MainProduct
            photo={images.product3}
            title="Mains power /Photovoltaic /Diesel generation"
            model="6KW-48KW/10KWh-40KWh"
            overlayTitle="View More"
            overlayButton="View More"
          />
          <MainProduct
            photo={images.product4}
            title="Mains power /Photovoltaic /Diesel generation"
            model="6KW-48KW/10KWh-40KWh"
            overlayTitle="View More"
            overlayButton="View More"
          />
          <MainProduct
            photo={images.product5}
            title="Mains power /Photovoltaic /Diesel generation"
            model="6KW-48KW/10KWh-40KWh"
            overlayTitle="View More"
            overlayButton="View More"
          />
          <MainProduct
            photo={images.product6}
            title="Mains power /Photovoltaic /Diesel generation"
            model="6KW-48KW/10KWh-40KWh"
            overlayTitle="View More"
            overlayButton="View More"
          />
          <MainProduct
            photo={images.product7}
            title="Mains power /Photovoltaic /Diesel generation"
            model="6KW-48KW/10KWh-40KWh"
            overlayTitle="View More"
            overlayButton="View More"
          />
        </div>
      </article>
      <Faq />
    </div>
  )
}
