import clsx from "clsx"
import styles from "./page-section.module.css"
import type { pageSectionType } from "../../types/page-section.type"

export const PageSection = ({
  children,
  contentClassName,
  containerClassName,
}: pageSectionType) => {
  return (
    <div className={clsx(styles.content, contentClassName)}>
      <div className={clsx(styles.container, containerClassName)}>
        {children}
      </div>
    </div>
  )
}
