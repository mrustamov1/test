// import { logo } from "./customers-data.component"
import styles from "./customers.module.css"

export function Customers() {
  return (
    <section className={styles.content}>
      {/* <div className={styles.container}>
        <h1 className={styles.title}>Our Customers</h1>
        <div className={styles.customers}>
          {logo.map((item, index) => (
            <img key={index} src={item.photo} alt="Customers" />
          ))}
        </div>
      </div> */}
    </section>
  )
}
