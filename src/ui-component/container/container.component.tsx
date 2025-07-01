import type { ReactNode, CSSProperties } from "react"
import styles from "./container.module.css"

export function Container({
  children,
  className = "",
  maxWidth,
}: {
  children?: ReactNode
  className?: string
  maxWidth?: string | number
}) {
  const style: CSSProperties = maxWidth ? { maxWidth } : {}

  return (
    <div className={`${styles.container} ${className}`} style={style}>
      {children}
    </div>
  )
}
