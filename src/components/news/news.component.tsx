import styles from "./news.module.css"
import { images } from "../../assets/images"
import { useTranslation } from "react-i18next"
import { News } from "../../ui-component/news/news.component"
import { Button } from "../../ui-component/button/button.component"
import { Container } from "../../ui-component/container/container.component"
import { useNavigate } from "react-router-dom"

export function MainNews() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate()
  const { t: translate } = useTranslation()

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.main}>
      <Container>
        <div className={styles.content}>
          <div className={styles.container}>
            <h1>{translate("news.new")}</h1>
            <p className={styles.topDesc}>{translate("news.description")}</p>
            <div>
              <Button
                title={translate("button.view-more")}
                iconName="fa-solid fa-chevron-right"
                titleSize="medium"
                onClick={() => navigate("/news")}
              />
            </div>
          </div>
          {/* --------------------------------------------------------------------------- */}
          {/* NEWS */}
          {/* --------------------------------------------------------------------------- */}
          <div className={styles.cards}>
            <News
              photo={images.news}
              title={translate("news.card-title")}
              description={translate("news.card-desc")}
              year="2025-05-23"
              button="more"
            />
            <News
              photo={images.news}
              title={translate("news.card-title")}
              description={translate("news.card-desc")}
              year="2025-05-23"
              button="more"
            />
            <News
              photo={images.news}
              title={translate("news.card-title")}
              description={translate("news.card-desc")}
              year="2025-05-23"
              button="more"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
