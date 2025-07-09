import { images } from "../../../assets/images"
import styles from "./application.module.css"
export function Application() {
  return (
    <section>
      <img className={styles.img} src={images.application} alt="Application" />
    </section>
  )
}
