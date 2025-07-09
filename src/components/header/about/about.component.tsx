// import { useState } from "react"
import styles from "./about.module.css"
import { useNavigate } from "react-router-dom"
import type { onCloseType } from "../../../types/header-on-close.type"

export function About({ onCloseDropdown }: onCloseType) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  //   const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  // ---------------------------------------------------------------------------
  return (
    <section>
      <div className={styles.container}>
        <span
          onClick={() => {
            onCloseDropdown()
            navigate("/about-us")
          }}
          className={styles.menuItem}
        >
          About us
        </span>
        <span
          onClick={() => {
            onCloseDropdown()
            navigate("/news")
          }}
          className={styles.menuItem}
        >
          News
        </span>
        <span
          onClick={() => {
            onCloseDropdown()
            navigate("/partner-recruitment")
          }}
          className={styles.menuItem}
        >
          Partner Recruitment
        </span>
        <span
          className={styles.menuItem}
          onClick={() => {
            onCloseDropdown()
            navigate("/blog")
          }}
        >
          Blog
        </span>
        <span
          className={styles.menuItem}
          onClick={() => {
            onCloseDropdown()
            navigate("/product-brochure")
          }}
        >
          Product Brochure
        </span>
      </div>
    </section>
  )
}
