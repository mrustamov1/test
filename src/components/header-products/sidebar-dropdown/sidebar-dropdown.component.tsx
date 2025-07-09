import { Icon } from "../../../ui-component/icon/icon.component"
import styles from "./sidebar-dropdown.module.css"
export function SidebarDropdownItem({
  id,
  label,
  isOpen,
  onToggle,
  content,
}: {
  id: string
  label: string
  isOpen: boolean
  onToggle: (id: string) => void
  content: React.ReactNode
}) {
  return (
    <>
      <div className={styles.sidebarProductData} onClick={() => onToggle(id)}>
        <span>{label}</span>
        <Icon
          name={isOpen ? "fa-solid fa-x" : "fa-solid fa-plus"}
          style={{ fontSize: "1rem" }}
        />
      </div>
      {isOpen && <div className={styles.dropdownContent}>{content}</div>}
    </>
  )
}
