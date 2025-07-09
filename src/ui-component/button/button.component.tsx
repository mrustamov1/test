import type { PropsWithChildren } from "react"
import { memoComponent } from "../memo-component/memo-component.component"
import clsx from "clsx"
import styles from "./button.module.css"
import { Icon } from "../icon/icon.component"

export const Button = memoComponent(
  "Button",
  function ({
    iconName,
    frontIcon,
    title,
    titleSize = "small",
    subTitle,
    mode = "primary",
    ...otherProps
  }: PropsWithChildren<
    {
      iconName?: string
      titleSize?: "small" | "medium" | "large"
      frontIcon?: string
      subTitle?: string
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
        {frontIcon && <Icon className={styles.frontIcon} name={frontIcon} />}
        <div className={styles.name}>
          {title && (
            <span
              className={clsx(styles.title, {
                [styles.titleSmall]: titleSize === "small",
                [styles.titleMedium]: titleSize === "medium",
                [styles.titleLarge]: titleSize === "large",
              })}
            >
              {title}
            </span>
          )}
          {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
        </div>
        {iconName && (
          <div className={styles.iconWrapper}>
            <Icon
              name={clsx(iconName, styles.icon)}
              style={{ fontSize: "0.7rem" }}
            />
          </div>
        )}
      </button>
    )
  },
)
