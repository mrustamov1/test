import styles from "./company-trust.module.css"
import { Container } from "../../../ui-component/container/container.component"

export function CompanyTrust() {
  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------
  const data = [
    "1 . Please contact The Economic and Commercial Office of the Embassy of the People’s Republic of China in local country, ask the officers to help confirm that our company is real in China.",
    "2 . Complete name of the company is: Shanghai HuiJue Technologies Group Co., Ltd.",
    "3 . Official Website: www.hj-ess.com",
    "4 . Alibaba Website: https://j-net.en.alibaba.com/",
    "5 . Our address: No.333 Fengcun Road, Fengxian District, Shanghai, China",
  ]

  // ---------------------------------------------------------------------------
  return (
    <Container className={styles.content}>
      <h2 className={styles.title}>
        How to check and confirm that we are a real company?
      </h2>
      <div className={styles.lineWrapper}>
        <span className={styles.line} />
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p className={styles.desc}>{item}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}
