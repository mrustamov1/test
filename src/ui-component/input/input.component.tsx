import { useEffect, useState, type CSSProperties } from "react"
import styles from "./input.styles.module.css"
import clsx from "clsx"

export function Input({
  containerClassName,
  wrapperClassName,
  label,
  required = false,
  type,
  description,
  showErrorText = true,
  error,
  iconClassName,
  onIconClick,
  onValueChange,
  inputRef,
  ...otherProps
}: {
  containerClassName?: string
  wrapperClassName?: string
  label?: string
  required?: boolean
  type: React.HTMLInputTypeAttribute
  description?: string
  showErrorText?: boolean
  error?: string
  iconClassName?: string | undefined
  iconStyle?: CSSProperties
  onIconClick?: () => void
  onValueChange?: (value: string) => void
  autofocus?: boolean
  inputRef?: React.MutableRefObject<HTMLInputElement | null>
} & React.InputHTMLAttributes<HTMLInputElement>) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isFocused, setFocused] = useState<boolean>(false)
  const [inputType, setInputType] = useState<
    React.HTMLInputTypeAttribute | undefined
  >()

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {
    setInputType(type)
  }, [type])

  // ---------------------------------------------------------------------------
  return (
    <div
      className={clsx({
        [containerClassName ? containerClassName : ""]: true,
        [styles.container]: true,
      })}
    >
      {/* --------------------------------------------------------------------------- */}
      {/* LABEL */}
      {/* --------------------------------------------------------------------------- */}

      {label && (
        <>
          <span
            className={styles.label}
            style={otherProps.disabled ? { color: "#A0ACB0" } : {}}
          >
            {label}
          </span>
        </>
      )}

      <div
        className={clsx({
          [styles.error]: error,
          [wrapperClassName ? wrapperClassName : ""]: wrapperClassName,
          [styles.focused]: isFocused,
        })}
        style={otherProps.disabled ? { background: "#F7F7F7" } : {}}
      >
        {/* --------------------------------------------------------------------------- */}
        {/* INPUT */}
        {/* --------------------------------------------------------------------------- */}

        <div className={styles.mendatory}>
          <input
            ref={inputRef}
            type={inputType}
            onChange={
              onValueChange
                ? (e) => {
                    onValueChange(e.target.value)
                  }
                : undefined
            }
            onFocus={() => {
              setFocused(true)
            }}
            onBlur={() => {
              setFocused(false)
            }}
            {...otherProps}
          />
          {required && <span className={styles.required}>*</span>}
        </div>

        {/* --------------------------------------------------------------------------- */}
        {/* EYE FOR PASSWORD */}
        {/* --------------------------------------------------------------------------- */}

        {type === "password" && (
          <>
            <div className={styles.iconEyeWrapper}>
              {!showPassword ? (
                <i
                  onClick={() => {
                    setShowPassword(!showPassword)
                    setInputType("text")
                  }}
                  className="far fa-eye-slash"
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <i
                  onClick={() => {
                    setShowPassword(!showPassword)
                    setInputType("password")
                  }}
                  className="far fa-eye"
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </>
        )}

        {type === "search" && (
          <>
            <div className={styles.iconEyeWrapper}>
              <i
                onClick={onIconClick}
                className={iconClassName}
                style={{ cursor: "pointer" }}
              />
            </div>
          </>
        )}
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* DESCRIPTION */}
      {/* --------------------------------------------------------------------------- */}

      {description && <span className={styles.description}>{description}</span>}

      {/* --------------------------------------------------------------------------- */}
      {/* ERROR */}
      {/* --------------------------------------------------------------------------- */}

      {error && showErrorText && (
        <span className={styles.errorText}>{error}</span>
      )}
    </div>
  )
}
