import styles from "./home-page.module.css"
import { images } from "../../assets/images"
import { Cases } from "../case/case.component"
import { MainNews } from "../news/news.component"
import { Products } from "../products/products.component"
import { Stations } from "../stations/stations.component"
import { Customers } from "../customers/customers.component"
import { Banner } from "../../ui-component/banner/banner.component"
import { RequestQuote } from "../../ui-component/request-quote/request-quote.component"

export function HomePage() {
  //---------------------------------------------------------------------------
  return (
    <main className={styles.section}>
      {/* --------------------------------------------------------------------------- */}
      {/* BANNER */}
      {/* --------------------------------------------------------------------------- */}
      <div className={styles.snapSection}>
        <Banner sliderImages={[images.banner5, images.banner2]} />
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* STATIONS */}
      {/* --------------------------------------------------------------------------- */}
      <div className={styles.snapSection}>
        <Stations />
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* PRODUCTS */}
      {/* --------------------------------------------------------------------------- */}
      <div className={styles.snapSection}>
        <Products />
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* CASES */}
      {/* --------------------------------------------------------------------------- */}
      <div className={styles.snapSection}>
        <Cases />
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* MAINNEWS */}
      {/* --------------------------------------------------------------------------- */}
      <div className={styles.snapSection}>
        <MainNews />
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* REQUEST QUOTE */}
      {/* --------------------------------------------------------------------------- */}
      <div className={styles.snapSection}>
        <RequestQuote />
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* CUSTOMERS */}
      {/* --------------------------------------------------------------------------- */}
      <div className={styles.snapSection}>
        <Customers />
      </div>
    </main>
  )
}
