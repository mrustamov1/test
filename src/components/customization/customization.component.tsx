import { Form } from "./form/form.component"
import { images } from "../../assets/images"
import styles from "./customization.module.css"
import { Process } from "./process/pocess.component"
import { Advantages } from "./advantages/advantages.component"
import { Banner } from "../../ui-component/banner/banner.component"
import { customizationItems } from "./customization-data.component"
import { RelatedCases } from "./related-cases/related-cases.component"
import { Container } from "../../ui-component/container/container.component"

export function Customization() {
  // ---------------------------------------------------------------------------
  return (
    <>
      {/* --------------------------------------------------------------------------- */}
      {/* BANNER */}
      {/* --------------------------------------------------------------------------- */}
      <Banner
        sliderImages={[images.banner3]}
        // title="One-stop customization service"
      />
      <div className={styles.content}>
        <Container>
          <h1 className={styles.title}>Customizable items</h1>
          <div className={styles.main}>
            {customizationItems.map((item, index) => (
              <div
                key={index}
                className={`${styles.customization} ${
                  index % 2 === 1 ? styles.reverse : ""
                }`}
              >
                <img src={item.image} alt={item.title} />
                <div className={styles.customizationInfo}>
                  <h4 className={styles.customizationInfoTitle}>
                    {item.title}
                  </h4>
                  <p className={styles.customizationInfoDesc}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* ADVANTAGES */}
      {/* --------------------------------------------------------------------------- */}
      <Advantages />
      {/* --------------------------------------------------------------------------- */}
      {/* PROCESS */}
      {/* --------------------------------------------------------------------------- */}
      <Process />
      {/* --------------------------------------------------------------------------- */}
      {/* FORM */}
      {/* --------------------------------------------------------------------------- */}
      <Form />
      {/* --------------------------------------------------------------------------- */}
      {/* RELATED CASES */}
      {/* --------------------------------------------------------------------------- */}
      <RelatedCases />
    </>
  )
}
