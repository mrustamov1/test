import styles from "./company-history.module.css"
import { Container } from "../../../ui-component/container/container.component"

export function CompanyHistory() {
  return (
    <section className={styles.content}>
      <Container className={styles.container}>
        <h2>Company History</h2>
        <div className={styles.timeline}>
          <div className={styles.line} />
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.card}>
                <span className={styles.year}>2025</span>
                <p>
                  Renamed from "Shanghai Huijue Network Communication Equipment
                  Co., Ltd." to “Shanghai HuiJue Technologies Group Co., Ltd”
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.card}>
                <span className={styles.year}>2025</span>
                <p>
                  Won the title of "Shanghai Enterprise Technology Center".
                  "Integrated Power Supply" was recognized as one of the top 100
                  projects in Shanghai.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.card}>
                <span className={styles.year}>2025</span>
                <p>
                  Sold the first “Container Energy Storage Cabinet” to Northern
                  Europe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
