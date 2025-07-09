import { images } from "../../../assets/images"
import styles from "./client-project.module.css"
import { Container } from "../../../ui-component/container/container.component"

export function ClientProject() {
  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------
  const data = [
    {
      photo: images.manufacturing,
      title: "Innovation Leadership, Collaborative Win-Win",
      desc: "Forge in-depth collaborations with industry forums and communications standards associations to conduct forward-looking technological exploration and guide the industry's development.",
    },

    {
      photo: images.manufacturing,
      title: "Innovation Leadership, Collaborative Win-Win",
      desc: "Forge in-depth collaborations with industry forums and communications standards associations to conduct forward-looking technological exploration and guide the industry's development.",
    },
    {
      photo: images.manufacturing,
      title: "Innovation Leadership, Collaborative Win-Win",
      desc: "Forge in-depth collaborations with industry forums and communications standards associations to conduct forward-looking technological exploration and guide the industry's development.",
    },
  ]

  // ---------------------------------------------------------------------------
  return (
    <>
      <section className={styles.content}>
        <Container className={styles.container}>
          <h2>Client Projects</h2>
          <div className={styles.info}>
            <div className={styles.data}>
              <span className={styles.title}>800GW</span>
              <p className={styles.desc}>Annual Power Generation</p>
            </div>
            <div className={styles.data}>
              <span className={styles.title}>10GW</span>
              <p className={styles.desc}>Annual Production Capacity</p>
            </div>
            <div className={styles.data}>
              <span className={styles.title}>1400 GWh</span>
              <p className={styles.desc}>Ship products</p>
            </div>
          </div>
          <div className={styles.img}></div>
        </Container>
      </section>
      <div className={styles.companyPhoto}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            <img className={styles.photo} src={item.photo} alt="Photo" />
            <div className={styles.overlay}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
