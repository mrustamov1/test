import styles from "./solution.module.css"
import { useTranslation } from "react-i18next"
import { images } from "../../../assets/images"
import { useResize } from "../../../context/dimension.context"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import type { onCloseType } from "../../../types/header-on-close.type"

export function Solution({ onCloseDropdown }: onCloseType) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate()
  const location = useLocation()
  const { t: translate } = useTranslation()
  const { isSmall } = useResize()

  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------
  const data = [
    {
      label: translate("header-dropdown-solution.base"),
      path: "base-station-energy",
    },
    { label: translate("header-dropdown-solution.pv"), path: "pv-bess-ev" },
    {
      label: translate("header-dropdown-solution.residental"),
      path: "residential-energy",
    },
    {
      label: translate("header-dropdown-solution.ic"),
      path: "ic-energy-storage",
    },
    {
      label: translate("header-dropdown-solution.Off-grid-microgrid"),
      path: "offgrid-microgrid",
    },
    {
      label: translate("header-dropdown-solution.Off-grid-solution"),
      path: "off-grid-solution",
    },
    {
      label: translate("header-dropdown-solution.on-grid-solution"),
      path: "on-grid-solution",
    },
    {
      label: translate("header-dropdown-solution.hybrid"),
      path: "hybrid-storage",
    },
  ]

  // ---------------------------------------------------------------------------
  return (
    <>
      <section className={styles.content}>
        <div className={styles.subMenuSolutions}>
          {data.map(({ label, path }) => {
            const fullPath = `/solutions/${path}`
            const isActive = location.pathname === fullPath
            return (
              <span
                key={path}
                onClick={() => {
                  onCloseDropdown()
                  navigate(fullPath)
                }}
                aria-current={isActive ? "page" : undefined}
                className={styles.menuItem}
              >
                {label}
              </span>
            )
          })}
        </div>
        {isSmall && (
          <div className={styles.subMenuSolutionsPhoto}>
            <img src={images.subMenuSolution1} alt="Sub Menu Solutions" />
          </div>
        )}
      </section>
      {/* --------------------------------------------------------------------------- */}
      {/* OUTLET */}
      {/* --------------------------------------------------------------------------- */}
      <Outlet />
    </>
  )
}
