import styles from "./sub-somponent.module.css"
import { Icon } from "../../../ui-component/icon/icon.component"
export function SidebarProduct({
  icon,
  label,
}: {
  icon: string
  label: string
}) {
  return (
    <div className={styles.sidebarProduct}>
      <Icon name={icon} size="large" />
      <span>{label}</span>
    </div>
  )
}
