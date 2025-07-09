import styles from "./case-info.module.css"
export function CaseInfo({ title, desc }: { title?: string; desc?: string }) {
  return (
    <div className={styles.info}>
      <h4 className={styles.infoTitle}>{title}</h4>
      <p className={styles.infoDesc}>{desc}</p>
    </div>
  )
}
