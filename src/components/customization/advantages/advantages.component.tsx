import styles from "./advantages.module.css"
import { Icon } from "../../../ui-component/icon/icon.component"
import { Container } from "../../../ui-component/container/container.component"
import { useResize } from "../../../context/dimension.context"

export function Advantages() {
  const { isPhone } = useResize()
  return (
    <section className={styles.content}>
      <Container className={styles.container}>
        <h2 className={styles.title}>Advantages of customized services</h2>
        <div className={styles.advantagesIcon}>
          <div className={styles.iconAndDesc}>
            <div className={styles.iconAndBorder}>
              <Icon
                name="fa-light fa-users"
                className={styles.icon}
                style={isPhone ? { fontSize: "2rem" } : { fontSize: "3rem" }}
              />
            </div>
            <span>Professional Team</span>
          </div>

          <div className={styles.iconAndDesc}>
            <div className={styles.iconAndBorder}>
              <Icon
                name="fa-light fa-users"
                className={styles.icon}
                style={isPhone ? { fontSize: "2rem" } : { fontSize: "3rem" }}
              />
             
            </div>
            <span>Professional Team</span>
          </div>

          <div className={styles.iconAndDesc}>
            <div className={styles.iconAndBorder}>
              <Icon
                name="fa-light fa-users"
                className={styles.icon}
                style={isPhone ? { fontSize: "2rem" } : { fontSize: "3rem" }}
              />
            </div>
            <span>Professional Team</span>
          </div>

          <div className={styles.iconAndDesc}>
            <div className={styles.iconAndBorder}>
              <Icon
                name="fa-light fa-users"
                className={styles.icon}
                style={isPhone ? { fontSize: "2rem" } : { fontSize: "3rem" }}
              />
            </div>
            <span>Professional Team</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
