import { useState } from "react"
import styles from "./left-sidebar.module.css"
import { sidebarItems } from "../sidebar-items.component"
import { SidebarProduct } from "../sub-component/sub-component.component"
import { SidebarDropdownItem } from "../sidebar-dropdown/sidebar-dropdown.component"

export function LeftSidebar() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const [openId, setOpenId] = useState<string | null>(null)

  // ---------------------------------------------------------------------------
  // functiions
  // ---------------------------------------------------------------------------
  function handleToggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <article>
      <div className={styles.sidebar}>
        <div className={styles.hotProducts}>
          <SidebarProduct icon="fa-solid fa-fire" label="Hot Product" />
          <SidebarProduct icon="fa-light fa-stars" label="New Product" />
        </div>

        <div className={styles.productDetails}>
          {sidebarItems.map(({ id, label, content }) => (
            <SidebarDropdownItem
              key={id}
              id={id}
              label={label}
              isOpen={openId === id}
              onToggle={handleToggle}
              content={content}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
