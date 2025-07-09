import { data } from "./data.component"
import styles from "./product-ic.module.css"
import { images } from "../../../assets/images"
import { LeftSidebar } from "../left-sidebar/left-sidebar.component"
import { Banner } from "../../../ui-component/banner/banner.component"
import { RightSidebar } from "../right-sidebar/right-sidebar.component"
import { Container } from "../../../ui-component/container/container.component"

export function ProductICEnergyStorage() {
  // ---------------------------------------------------------------------------
  return (
    <>
      <Banner
        sliderImages={[images.banner1]}
        type="product"
        title="Product Inquiry"
      />
      <section className={styles.content}>
        <Container maxWidth={1300}>
          <div className={styles.models}>
            {data.map((item, index) => (
              <div className={styles.productInfo} key={index}>
                <h4>{item.label}</h4>
                <div className={styles.desc}>
                  {Array.isArray(item.desc) ? (
                    item.desc.map((text, i) => <span key={i}>{text}</span>)
                  ) : (
                    <span className={styles.descItem}>{item.desc}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* --------------------------------------------------------------------------- */}
          {/* SIDEBARS */}
          {/* --------------------------------------------------------------------------- */}
          <div className={styles.productPageInfo}>
            <LeftSidebar />
            <RightSidebar />
          </div>
        </Container>
      </section>
    </>
  )
}
