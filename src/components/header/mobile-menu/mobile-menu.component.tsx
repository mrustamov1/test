import { useState } from "react"
import styles from "./mobile-menu.module.css"
import { useNavigate } from "react-router-dom"
import { About } from "../about/about.component"
import { menuData } from "./mobile-menu.data.component"
import { Solution } from "../solution/solution.component"
import { Products } from "../products/products.component"
import { FormAndLang } from "./form-lang/form-lang.component"
import type { mobileMenuType } from "../../../types/menu.type"
import { Icon } from "../../../ui-component/icon/icon.component"
import { HeaderCase } from "../../header-case/header-case.component"
import { Customization } from "../../customization/customization.component"

export function MobileMenu({ isOpen, onClose }: mobileMenuType) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate()
  const [openKey, setOpenKey] = useState<string | null>(null)

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  function toggleSubmenu(key: string) {
    setOpenKey((prevKey) => (prevKey === key ? null : key))
  }

  function renderSubmenu(key: string) {
    switch (key) {
      case "Solutions":
        return <Solution onCloseDropdown={() => {}} />
      case "Products":
        return <Products onCloseDropdown={() => {}} />
      case "Case":
        return <HeaderCase />
      case "About":
        return <About onCloseDropdown={() => {}} />
      case "Customization":
        return <Customization />
      default:
        return null
    }
  }

  function handleMenuClick(key: string, hasSubmenu: boolean) {
    if (hasSubmenu) {
      toggleSubmenu(key)
      return
    }

    switch (key) {
      case "Case":
        navigate("/header-case")
        break
      case "Customization":
        navigate("/customization")
        break
      case "Services":
        navigate("/services")
        break
      case "Contact":
        navigate("/contact")
        break
      default:
        break
    }

    onClose()
  }

  if (!isOpen) return null

  // ---------------------------------------------------------------------------
  return (
    <div className={styles.overlay} onClick={onClose}>
      <nav className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <Icon name="fa-light fa-x" size="tiny" />
        </button>

        <ul className={styles.menuList}>
          {menuData.map(({ key, label, submenu }) => {
            const hasSubmenu = Array.isArray(submenu) && submenu.length > 0

            return (
              <li key={key}>
                <button
                  className={styles.menuItem}
                  onClick={() => handleMenuClick(key!, hasSubmenu)}
                >
                  <span>{label}</span>
                  {hasSubmenu && (
                    <span
                      className={`${styles.chevron} ${
                        openKey === key ? styles.rotate : ""
                      }`}
                    >
                      ›
                    </span>
                  )}
                </button>

                {openKey === key && hasSubmenu && (
                  <ul className={styles.submenuList}>{renderSubmenu(key)}</ul>
                )}
              </li>
            )
          })}
          {/* --------------------------------------------------------------------------- */}
          {/* FORM AND LANGUAGES */}
          {/* --------------------------------------------------------------------------- */}
          <FormAndLang />
        </ul>
      </nav>
    </div>
  )
}
