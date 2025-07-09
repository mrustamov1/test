import { images } from "../../assets/images"
import styles from "./header-case.module.css"
import { cases } from "./header-case-data.component"
import { Banner } from "../../ui-component/banner/banner.component"
import { Container } from "../../ui-component/container/container.component"
import { PreviewCase } from "../../ui-component/preview-case/preview-case.component"

export function HeaderCase() {
  // ---------------------------------------------------------------------------
  return (
    <>
      <Banner sliderImages={[images.banner4]} />
      <Container className={styles.content}>
        {cases.map((item, index) => (
          <div key={index} className={styles.container}>
            <PreviewCase
              className={index % 2 !== 0 ? styles.reverse : ""}
              title={item.title}
              image={item.image}
              application={item.application}
              equipment={item.equipment}
              parameter={item.parameter}
              address={item.address}
            />
          </div>
        ))}
      </Container>
    </>
  )
}
