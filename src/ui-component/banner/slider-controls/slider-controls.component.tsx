import { Icon } from "../../icon/icon.component"
import styles from "./slider-controls.module.css"

export function SliderControls({
  onPrev,
  onNext,
}: {
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div className={styles.bannerIcons}>
      <Icon
        name="fa-light fa-chevrons-left"
        onClick={onPrev}
        className={styles.slider}
        size="large"
      />
      <Icon
        name="fa-light fa-chevrons-right"
        onClick={onNext}
        className={styles.slider}
        size="large"
      />
    </div>
  )
}
