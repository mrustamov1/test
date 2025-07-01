import styles from "./company-manufacturing.module.css"
import { data } from "./company-manufacturing-data.component"
import { Container } from "../../../ui-component/container/container.component"

export function CompanyManufacturing() {
  // ---------------------------------------------------------------------------
  return (
    <Container className={styles.container}>
      <h2>Company R&D and Manufacturing</h2>
      <p>Focusing on Energy Storage and Communication Solutions for 20+years</p>
      <div className={styles.photos}>
        {data.map((item, index) => (
          <div className={styles.photoWrapper} key={index}>
            <img className={styles.img} src={item.photo} alt="Photo" />
          </div>
        ))}
      </div>
    </Container>
  )
}
