import styles from "./services.module.css"
import { Container } from "../../../ui-component/container/container.component"
import { Icon } from "../../../ui-component/icon/icon.component"

export function ProfessionalServices() {
  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------
  const data = [
    {
      title: "Shanghai Huijue Intelligent Communication Technologies Co.,Ltd",
      desc: " No.333 Fengcun Road,Fengxian District,Shanghai,China",
      phone: "+86-021-57471000",
      number: "01",
    },

    {
      title: "Shanghai Huijue Intelligent Communication Technologies Co.,Ltd",
      desc: " No.333 Fengcun Road,Fengxian District,Shanghai,China",
      phone: "+86-021-57471000",
      number: "02",
    },

    {
      title: "Shanghai Huijue Intelligent Communication Technologies Co.,Ltd",
      desc: " No.333 Fengcun Road,Fengxian District,Shanghai,China",
      phone: "+86-021-57471000",
      number: "03",
    },

    {
      title: "Shanghai Huijue Intelligent Communication Technologies Co.,Ltd",
      desc: " No.333 Fengcun Road,Fengxian District,Shanghai,China",
      phone: "+86-021-57471000",
      number: "04",
    },
  ]

  // ---------------------------------------------------------------------------
  return (
    <>
      <section className={styles.content}>
        <Container className={styles.container}>
          <h2>Our Worldwide Locations</h2>
          <p className={styles.topDesc}>
            Explore our global network and get direct access to our regional
            representatives.
          </p>
          <div className={styles.card}>
            {data.map((item, index) => (
              <div className={styles.innerCard} key={index}>
                <div className={styles.bottom}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>
                    <Icon name="fa-solid fa-map-marker-alt" size="tiny" />
                    {item.desc}
                  </p>
                  <span className={styles.cardPhone}>
                    <Icon name="fa-solid fa-phone-plus" size="tiny" />
                    {item.phone}
                  </span>
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
