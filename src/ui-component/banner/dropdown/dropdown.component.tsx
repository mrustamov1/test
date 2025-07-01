import clsx from "clsx"
import styles from "./dropdown.module.css"
import { Icon } from "../../icon/icon.component"

export function Dropdown({
  isOpen,
  items,
  onToggle,
}: {
  isOpen: boolean
  items: string[]
  onToggle: () => void
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div className={styles.searchWrapper}>
      <div
        className={styles.categoryAndIcon}
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
      >
        <span className={styles.category}>Category</span>
        <Icon
          className={styles.icon}
          name={isOpen ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down"}
          size="tiny"
          aria-hidden="true"
        />
      </div>
      {isOpen && (
        <div
          className={clsx(styles.searchCategory, styles.open)}
          role="listbox"
        >
          {items.map((item, index) => (
            <div
              key={item + index}
              className={styles.activeDropdown}
              role="option"
              tabIndex={-1}
            >
              <span className={styles.productCategory}>{item}</span>
              <Icon
                name="fa-light fa-arrow-right"
                size="tiny"
                className={styles.searchIcon}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
