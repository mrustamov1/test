import { useState } from "react";
import styles from "./mobile-menu.module.css";
import { useNavigate } from "react-router-dom";
import { About } from "../about/about.component";
import { menuData } from "./mobile-menu.data.component";
import { Solution } from "../solution/solution.component";
import { Products } from "../products/products.component";
import { FormAndLang } from "./form-lang/form-lang.component";
import type { mobileMenuType } from "../../../types/menu.type";
import { Icon } from "../../../ui-component/icon/icon.component";
import { HeaderCase } from "../../header-case/header-case.component";
import { Customization } from "../../customization/customization.component";

export function MobileMenu({ isOpen, onClose }: mobileMenuType) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate();
  const [openKey, setOpenKey] = useState<string | null>(null);

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function toggleSubmenu(key: string | undefined) {
    setOpenKey((prevKey) => (prevKey === key ? null : key ?? null));
  }

  function handleMenuClick(key: string | undefined, hasSubmenu: boolean) {
    if (!key) return;
    if (hasSubmenu) {
      toggleSubmenu(key);
      return;
    }

    const routes: Record<string, string> = {
      Case: "/header-case",
      Customization: "/customization",
      Services: "/services",
      Contact: "/contact",
    };

    if (routes[key]) {
      navigate(routes[key]);
      onClose();
    }
  }

  function renderSubmenu(key: string) {
    switch (key) {
      case "Solutions":
        return <Solution onCloseDropdown={onClose} />;
      case "Products":
        return <Products onCloseDropdown={onClose} />;
      case "About":
        return <About onCloseDropdown={onClose} />;
      case "Case":
        return <HeaderCase />;
      case "Customization":
        return <Customization />;
      default:
        return null;
    }
  }

  if (!isOpen) return null;

  // ---------------------------------------------------------------------------
  return (
    <div className={styles.overlay} onClick={onClose}>
      <nav className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <Icon name="fa-light fa-x" size="tiny" />
        </button>

        <ul className={styles.menuList}>
          {menuData.map(({ key, label, submenu }) => {
            const hasSubmenu = Array.isArray(submenu) && submenu.length > 0;

            return (
              <li key={key}>
                <button
                  className={styles.menuItem}
                  onClick={() => handleMenuClick(key, hasSubmenu)}
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
                  <div className={styles.submenuList}>{renderSubmenu(key)}</div>
                )}
              </li>
            );
          })}

          {/* --------------------------------------------------------------------------- */}
          {/* FORM AND LANGUAGES */}
          {/* --------------------------------------------------------------------------- */}
          <FormAndLang />
        </ul>
      </nav>
    </div>
  );
}
