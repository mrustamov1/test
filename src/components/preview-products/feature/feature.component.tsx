import { Container } from "../../../ui-component/container/container.component"
import { Icon } from "../../../ui-component/icon/icon.component"
import styles from "./feature.module.css"

export function Feature() {
  const data = [
    {
      icon: "fa-light fa-home",
      title: "Multiple energy access",
      description:
        " Supports the introduction of multiple green power sources such photovoltaic, wind, and generator.",
    },
    {
      icon: "fa-light fa-home",
      title: "Multiple energy access",
      description:
        " Supports the introduction of multiple green power sources such photovoltaic, wind, and generator.",
    },
    {
      icon: "fa-light fa-home",
      title: "Multiple energy access",
      description:
        " Supports the introduction of multiple green power sources such photovoltaic, wind, and generator.",
    },
    {
      icon: "fa-light fa-home",
      title: "Multiple energy access",
      description:
        " Supports the introduction of multiple green power sources such photovoltaic, wind, and generator.",
    },
    {
      icon: "fa-light fa-home",
      title: "Multiple energy access",
      description:
        " Supports the introduction of multiple green power sources such photovoltaic, wind, and generator.",
    },
    {
      icon: "fa-light fa-home",
      title: "Multiple energy access",
      description:
        " Supports the introduction of multiple green power sources such photovoltaic, wind, and generator.",
    },
  ]
  return (
    <div className={styles.main}>
      <Container>
        <h1 className={styles.title}>Feature</h1>
        <div className={styles.cards}>
          {data.map((item) => (
            <div className={styles.card}>
              <div className={styles.topIcon}>
                <Icon name={item.icon} />
              </div>
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
