import { Link, useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  const { t: translate } = useTranslation()
  const data = [
    {
      id: "1",
      photo: images.card1,
      title: translate("products.first-card-title"),
      icon: "fa-light fa-arrow-right-long",
    },
    {
      id: "2",
      photo: images.card2,
      title: translate("products.first-card-title"),
      icon: "fa-light fa-arrow-right-long",
    },
    {
      id: "3",
      photo: images.card3,
      title: translate("products.first-card-title"),
      icon: "fa-light fa-arrow-right-long",
    },
    {
      id: "4",
      photo: images.card4,
      title: translate("products.first-card-title"),
      icon: "fa-light fa-arrow-right-long",
    },
  ]

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.main}>
      <Container>
        <div className={styles.container}>
          <h1 className={styles.title}>{translate("products.product")}</h1>
          <p className={styles.desc}>{translate("products.description")}</p>
          <div>
            <Button
              title={translate("button.view-more")}
              iconName="fa-solid fa-chevron-right"
              titleSize="medium"
              onClick={() => navigate("/allproducts")}
            />
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* SIMPLE PRODUCTS */}
        {/* --------------------------------------------------------------------------- */}
        <div className={styles.simple}>
          {data.map((product) => (
            <Link
              className={styles.link}
              key={product.id}
              to={`/preview/products/${product.id}`}
            >
              <Simple
                photo={product.photo}
                title={product.title}
                icon={product.icon}
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
