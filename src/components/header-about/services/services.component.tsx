import styles from "./services.module.css"
import { images } from "../../../assets/images"
import { Container } from "../../../ui-component/container/container.component"

export function ProfessionalServices() {
  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------
  const data = [
    {
      photo: images.proServices,
      title: "Our service advantages",
      desc: "With years of industry experience and accumulated industry insights and technological advantages, we are able to accurately grasp market trends and provide forward-looking and feasible solutions",
      number: "01",
    },
    {
      photo: images.proServices,
      title: "Our service advantages",
      desc: "With years of industry experience and accumulated industry insights and technological advantages, we are able to accurately grasp market trends and provide forward-looking and feasible solutions",
      number: "02",
    },
    {
      photo: images.proServices,
      title: "Our service advantages",
      desc: "With years of industry experience and accumulated industry insights and technological advantages, we are able to accurately grasp market trends and provide forward-looking and feasible solutions",
      number: "03",
    },
    {
      photo: images.proServices,
      title: "Our service advantages",
      desc: "With years of industry experience and accumulated industry insights and technological advantages, we are able to accurately grasp market trends and provide forward-looking and feasible solutions",
      number: "04",
    },
  ]

  // ---------------------------------------------------------------------------
  return (
    <>
      <section className={styles.content}>
        <Container className={styles.container}>
          <h2>Professional Services</h2>
          <p className={styles.topDesc}>
            Focusing on Energy Storage and Communication Solutions for 20+years
          </p>
          <div className={styles.card}>
            {data.map((item, index) => (
              <div className={styles.innerCard} key={index}>
                <img src={item.photo} alt="Photo" />
                <div className={styles.bottom}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <span className={styles.cardNum}>{item.number}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
