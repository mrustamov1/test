import styles from "./icon.styles.module.css"
import clsx from "clsx"
export function Icon({
  hidden,
  className,
  name,
  size = "small",
  bg = false,
  danger = false,
  onClick,
  clickable,
  iconRef,
  style = {},
}: {
  hidden?: boolean
  className?: string
  name: string
  size?: "tiny" | "small" | "medium" | "large" | "auto"
  bg?: boolean
  danger?: boolean
  clickable?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => any
  iconRef?: React.MutableRefObject<any | null>
  style?: React.CSSProperties
}) {
  const fontSize =
    size === "tiny"
      ? "0.75rem"
      : size === "small"
        ? "1.4rem"
        : size === "medium"
          ? "1.8rem"
          : size === "large"
            ? "2.2rem"
            : size === "auto"
              ? undefined
              : size + "rem"

  const Icon = (
    <i
      ref={iconRef}
      hidden={hidden}
      onClick={onClick}
      style={{
        fontSize: fontSize,
        lineHeight: "normal",
        ...style,
      }}
      className={clsx(name, className, {
        [styles.bg]: bg === true,
        [styles.danger]: danger === true,
        [styles.hover]: clickable ? true : false,
      })}
    />
  )

  return Icon
}
