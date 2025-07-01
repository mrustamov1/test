import styles from "./products.module.css"
import { useTranslation } from "react-i18next"
import { images } from "../../../assets/images"
import { useResize } from "../../../context/dimension.context"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import type { onCloseType } from "../../../types/header-on-close.type"
import { MainProduct } from "../../../ui-component/products/main/main.component"

export function Products({ onCloseDropdown }: onCloseType) {
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
      label: translate("header-dropdown-products.ic"),
      path: "ic-energy-storage",
    },
    {
      label: translate("header-dropdown-products.base"),
      path: "base-station-energy",
    },
    {
      label: translate("header-dropdown-products.residential"),
      path: "residential-energy",
    },
    {
      label: translate("header-dropdown-products.photovoltaic"),
      path: "photovoltic-module",
    },
    {
      label: translate("header-dropdown-products.energy-storage"),
      path: "energy-storage-inverter",
    },
    {
      label: translate("header-dropdown-products.energy-management"),
      path: "energy-managment-system",
    },
    {
      label: translate("header-dropdown-products.customized"),
      path: "customized-products",
    },
    {
      label: translate("header-dropdown-products.energy-storage-accessories"),
      path: "energy-storage-accessories",
    },
  ]

  // ---------------------------------------------------------------------------
  return (
    <>
      <section className={styles.content}>
        <div className={styles.subMenuSolutions}>
          {data.map(({ label, path }) => {
            const fullPath = `/products/${path}`
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
        {/* --------------------------------------------------------------------------- */}
        {/* MAIN PRODUCTS */}
        {/* --------------------------------------------------------------------------- */}
        {isSmall && (
          <>
            <MainProduct
              photo={images.product1}
              title="Mains power /Photovoltaic /Diesel generation"
              model="6KW-48KW/10KWh-40KWh"
              overlayTitle="View More"
              overlayButton="View More"
            />
            <MainProduct
              photo={images.product1}
              title="Mains power /Photovoltaic /Diesel generation"
              model="6KW-48KW/10KWh-40KWh"
              overlayTitle="View More"
              overlayButton="View More"
            />
            <MainProduct
              photo={images.product1}
              title="Mains power /Photovoltaic /Diesel generation"
              model="6KW-48KW/10KWh-40KWh"
              overlayTitle="View More"
              overlayButton="View More"
            />
          </>
        )}
      </section>
      {/* --------------------------------------------------------------------------- */}
      {/* OUTLET */}
      {/* --------------------------------------------------------------------------- */}
      <Outlet />
    </>
  )
}
