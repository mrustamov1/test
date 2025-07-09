import styles from "./case.module.css"
import { images } from "../../assets/images"
import { useTranslation } from "react-i18next"
import { Case } from "../../ui-component/case/case.component"
import { Button } from "../../ui-component/button/button.component"
import { Container } from "../../ui-component/container/container.component"

export function Cases() {
  // ---------------------------------------------------------------------------
  const { t: translate } = useTranslation()

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.content}>
      <Container className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>{translate("case.case")}</h1>
          <p className={styles.desc}>{translate("case.description")}</p>
          <div>
            <Button
              title={translate("button.more-case")}
              iconName="fa-solid fa-chevron-right"
              titleSize="medium"
            />
          </div>
        </div>

        <div className={styles.cases}>
          <>
            <Case
              image={images.headerCase1}
              title={translate("case.title")}
              icon="fa-light fa-location-dot"
              location="Laos"
              overlayTitle="500Ah 2.5kPw"
              className={styles.case}
            />
            <Case
              image={images.headerCase1}
              title={translate("case.title")}
              icon="fa-light fa-location-dot"
              location="Laos"
              overlayTitle="500Ah 2.5kPw"
            />
            <Case
              image={images.headerCase1}
              title={translate("case.title")}
              icon="fa-light fa-location-dot"
              location="Laos"
              overlayTitle="500Ah 2.5kPw"
            />
          </>
        </div>
      </Container>
    </section>
  )
}
