import type { PropsWithChildren } from "react"
import { memoComponent } from "../memo-component/memo-component.component"
import clsx from "clsx"
import styles from "./button.module.css"

export const Button = memoComponent(
  "Button",
  function ({
    iconName,
    title,
    mode = "primary",
    ...otherProps
  }: PropsWithChildren<
    {
      iconName?: string
      title?: string
      mode?: "primary" | "primary-small"
    } & React.ButtonHTMLAttributes<HTMLButtonElement>
  >) {
    // ---------------------------------------------------------------------------
    return (
      <button
        type="button"
        {...otherProps}
        className={clsx(otherProps.className, {
          [styles.button]: true,
          [styles.primary]: mode === "primary" || mode === "primary-small",
          [styles.small]: mode === "primary-small",
        })}
      >
        {title}
        {iconName && <i className={clsx(iconName, styles.icon)} />}
      </button>
    )
  },
)
