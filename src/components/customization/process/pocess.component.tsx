import styles from "./process.module.css"
import { data } from "./process-data.component"
import { Container } from "../../../ui-component/container/container.component"
import { useResize } from "../../../context/dimension.context"

export function Process() {
  const { isSmall } = useResize()
  return (
    <section className={styles.content}>
      <Container className={styles.container}>
        <h2 className={styles.title}>Customized Process</h2>
        <div className={styles.line}>
          {isSmall ? (
            <div className={styles.card}>
              {data.map((item, index) => (
                <div key={index}>
                  <div className={styles.subCard}>
                    <div className={styles.mainNumber}>
                      <span className={styles.number}>{item.number}</span>
                    </div>
                    <p className={styles.desc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.mobileCard}>
              {data.map((item, index) => (
                <div key={index}>
                  <div className={styles.subCard}>
                    <div className={styles.mainNumber}>
                      <span className={styles.number}>{item.number}</span>
                    </div>
                    <p className={styles.desc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
