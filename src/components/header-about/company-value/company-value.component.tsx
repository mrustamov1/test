import styles from "./company-value.module.css"
import { images } from "../../../assets/images"
import { Container } from "../../../ui-component/container/container.component"

export function CompanyValue() {
  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------
  const data = [
    {
      photo: images.company1,
      title: "Vision",
      desc: "To be the bidirectional enabler in the era of energy - information integration",
    },
    {
      photo: images.company1,
      title: "Vision",
      desc: "To be the bidirectional enabler in the era of energy - information integration",
    },
    {
      photo: images.company1,
      title: "Vision",
      desc: "To be the bidirectional enabler in the era of energy - information integration",
    },
    {
      photo: images.company1,
      title: "Vision",
      desc: "To be the bidirectional enabler in the era of energy - information integration",
    },
  ]

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.content}>
      <Container className={styles.container}>
        <h1 className={styles.title}>Company Values</h1>
        <p className={styles.desc}>
          We always prioritize the needs of our customers to ensure that every
          product and service meets their expectations.
        </p>
        <div className={styles.companyPhoto}>
          {data.map((item, index) => (
            <div className={styles.card} key={index}>
              <img className={styles.img} src={item.photo} alt="Photo" />
              <div className={styles.overlay}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
