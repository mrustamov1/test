import styles from "./search.module.css"
import { Input } from "../../../ui-component/input/input.component"
import { Button } from "../../../ui-component/button/button.component"

export function Search() {
  return (
    <section className={styles.content}>
      <div>
        <form className={styles.search}>
          <Input className={styles.input} placeholder="Search" type="text" />
          <Button type="submit" className={styles.button} title="Search" />
        </form>
        <div className={styles.info}>
          <span className={styles.title}>Hot products:</span>
          <div className={styles.desc}>
            <p>Floor-standing lithium-ion battery</p>
            <p>Stand-mounted all-in-one machine</p>
            <p>Single-phase off-grid inverter</p>
          </div>
        </div>
      </div>
    </section>
  )
}
