import styles from "./company-history.module.css"
import { Scroll } from "../../../ui-component/scroll/scroll.component"
import { Container } from "../../../ui-component/container/container.component"

export function CompanyHistory() {
  // ---------------------------------------------------------------------------
  return (
    <section className={styles.content}>
      <Container className={styles.container}>
        <h2>Company History</h2>
        <Scroll>
          <div className={styles.main}>
            <div>
              <div className={styles.firstLine}></div>
            </div>
            <div className={styles.topBottomWrapper}>
              <div className={styles.scrollInner}>
                <div className={styles.wrapper}>
                  <div className={styles.history}>
                    <span className={styles.title}>2025</span>
                    <p className={styles.desc}>
                      Renamed from "Shanghai Huijue Network Communication
                      Equipment Co., Ltd." to “Shanghai HuiJue Technologies
                      Group Co., Ltd
                    </p>
                  </div>
                  <div className={styles.history}>
                    <span className={styles.title}>2025</span>
                    <p className={styles.desc}>
                      Won the title of "Shanghai Enterprise Technology Center",
                      "Integrated Power Supply" was recognized as one of the top
                      100 projects for the transformation of high-tech
                      achievements in Shanghai, Huijue’s first “Container Energy
                      Storage Cabinet” product was officially sold to Northern
                      Europe.
                    </p>
                  </div>
                  <div className={styles.history}>
                    <span className={styles.title}>2025</span>
                    <p className={styles.desc}>
                      Won the title of "Shanghai Enterprise Technology Center",
                      "Integrated Power Supply" was recognized as one of the top
                      100 projects for the transformation of high-tech
                      achievements in Shanghai, Huijue’s first “Container Energy
                      Storage Cabinet” product was officially sold to Northern
                      Europe.
                    </p>
                  </div>
                </div>
                <div>
                  <div className={styles.line} />
                </div>
                <div className={styles.secondWrapper}>
                  <div className={styles.history}>
                    <span className={styles.title}>2025</span>
                    <p className={styles.desc}>
                      Renamed from "Shanghai Huijue Network Communication
                      Equipment Co., Ltd." to “Shanghai HuiJue Technologies
                      Group Co., Ltd
                    </p>
                  </div>
                  <div className={styles.history}>
                    <span className={styles.title}>2025</span>
                    <p className={styles.desc}>
                      Won the title of "Shanghai Enterprise Technology Center",
                      "Integrated Power Supply" was recognized as one of the top
                      100 projects for the transformation of high-tech
                      achievements in Shanghai, Huijue’s first “Container Energy
                      Storage Cabinet” product was officially sold to Northern
                      Europe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Scroll>
      </Container>
    </section>
  )
}
