import { useState } from "react";
import styles from "./header.module.css";
import { images } from "../../assets/images";
import { useTranslation } from "react-i18next";
import { About } from "./about/about.component";
import { Search } from "./search/search.component";
import { NavLink, useNavigate } from "react-router-dom";
import { Solution } from "./solution/solution.component";
import { Products } from "./products/products.component";
import { useResize } from "../../context/dimension.context";
import { Languages } from "./languages/languages.component";
import { useLanguage } from "../../context/language.context";
import { Icon } from "../../ui-component/icon/icon.component";
import { MobileMenu } from "./mobile-menu/mobile-menu.component";
import { Button } from "../../ui-component/button/button.component";
import { Container } from "../../ui-component/container/container.component";

export function Header() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate();
  const { isSmall } = useResize();
  const { activeLang } = useLanguage();
  const { t: translate } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActiveDropdown, setIsActiveDropdown] = useState<string | false>(
    false
  );

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function handleDropdownToggle(menu: string) {
    setIsActiveDropdown((prev) => (prev === menu ? false : menu));
  }
  // ---------------------------------------------------------------------------
  return (
    <>
      <header className={styles.content}>
        <Container className={styles.container}>
          {isSmall ? (
            <img
              onClick={() => navigate("/")}
              className={styles.logo}
              src={images.logo}
              alt="Logo"
            />
          ) : (
            <div onClick={() => setMenuOpen(true)}>
              <Icon name="fa-light fa-bars-sort" />
            </div>
          )}
          {isSmall ? (
            <nav className={styles.nav}>
              <ul className={styles.menu}>
                <div
                  onClick={() => handleDropdownToggle("solution")}
                  className={styles.link}
                  role="button"
                  tabIndex={0}
                >
                  {translate("header.solution")}
                  <Icon
                    name="fa-light fa-chevron-down"
                    className={`${styles.icon} ${
                      isActiveDropdown === "solution" ? styles.rotate : ""
                    }`}
                    size="tiny"
                  />
                </div>

                <div
                  onClick={() => handleDropdownToggle("products")}
                  className={styles.link}
                  role="button"
                  tabIndex={0}
                >
                  {translate("header.products")}
                  <Icon
                    name="fa-light fa-chevron-down"
                    className={`${styles.icon} ${
                      isActiveDropdown === "products" ? styles.rotate : ""
                    }`}
                    size="tiny"
                  />
                </div>

                <NavLink
                  to="/header-case"
                  className={styles.link}
                  onClick={() => setIsActiveDropdown(false)}
                >
                  {translate("header.case")}
                </NavLink>

                <div
                  onClick={() => handleDropdownToggle("about")}
                  className={styles.link}
                  role="button"
                  tabIndex={0}
                >
                  {translate("header.about")}
                  <Icon
                    name="fa-light fa-chevron-down"
                    className={`${styles.icon} ${
                      isActiveDropdown === "about" ? styles.rotate : ""
                    }`}
                    size="tiny"
                  />
                </div>

                <NavLink
                  to="/customization"
                  className={styles.link}
                  onClick={() => setIsActiveDropdown(false)}
                >
                  {translate("header.customization")}
                </NavLink>

                <NavLink
                  to="/services"
                  className={styles.link}
                  onClick={() => setIsActiveDropdown(false)}
                >
                  {translate("header.services")}
                </NavLink>

                <NavLink
                  to="/contact"
                  className={styles.link}
                  onClick={() => setIsActiveDropdown(false)}
                >
                  {translate("header.contact")}
                </NavLink>
              </ul>
            </nav>
          ) : (
            <img
              className={styles.logo}
              src={images.logo}
              alt="Logo"
              onClick={() => navigate("/")}
            />
          )}

          {/* --------------------------------------------------------------------------- */}
          {/* MOBILE MENU */}
          {/* --------------------------------------------------------------------------- */}
          <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

          {/* --------------------------------------------------------------------------- */}
          {/* LANGUAGES AND SEARCH */}
          {/* --------------------------------------------------------------------------- */}
          <div className={styles.langAndButton}>
            {isSmall && (
              <div className={styles.search}>
                <Icon
                  className={styles.searchIcon}
                  name="fa-light fa-search"
                  onClick={() => handleDropdownToggle("search")}
                  style={{ fontSize: 18 }}
                />
                <div
                  className={styles.language}
                  onClick={() => handleDropdownToggle("languages")}
                >
                  <img src={images[activeLang]} alt="Active Lang" />
                  <Icon
                    name="fa-light fa-chevron-down"
                    className={`${styles.icon} ${
                      isActiveDropdown === "languages" ? styles.rotate : ""
                    }`}
                    size="tiny"
                  />
                </div>
              </div>
            )}
            <Button
              title="WhatsApp"
              mode="primary"
              subTitle="+8699735352632"
              style={{ fontSize: 12 }}
              frontIcon="fa-brands fa-whatsapp"
            />
          </div>
        </Container>
      </header>

      {/* --------------------------------------------------------------------------- */}
      {/* ACTIVE SOLUTIONS */}
      {/* --------------------------------------------------------------------------- */}
      {isActiveDropdown === "solution" && (
        <div className={styles.dropdownItems}>
          <Container>
            <Solution onCloseDropdown={() => setIsActiveDropdown(false)} />
          </Container>
        </div>
      )}

      {/* --------------------------------------------------------------------------- */}
      {/* ACTIVE PRODUCTS */}
      {/* --------------------------------------------------------------------------- */}
      {isActiveDropdown === "products" && (
        <div className={styles.dropdownItems}>
          <Container maxWidth={1400} className={styles.productItems}>
            <Products onCloseDropdown={() => setIsActiveDropdown(false)} />
          </Container>
        </div>
      )}

      {/* --------------------------------------------------------------------------- */}
      {/* ACTIVE ABOUT */}
      {/* --------------------------------------------------------------------------- */}
      {isActiveDropdown === "about" && (
        <div className={styles.dropdownAbout}>
          <About onCloseDropdown={() => setIsActiveDropdown(false)} />
        </div>
      )}

      {/* --------------------------------------------------------------------------- */}
      {/* ACTIVE LANGUAGES */}
      {/* --------------------------------------------------------------------------- */}
      {isActiveDropdown === "languages" && (
        <div className={styles.dropdownLang}>
          <Languages onCloseDropdown={() => setIsActiveDropdown(false)} />
        </div>
      )}

      {/* --------------------------------------------------------------------------- */}
      {/* ACTIVE LANGUAGES */}
      {/* --------------------------------------------------------------------------- */}
      {isActiveDropdown === "search" && (
        <div className={styles.dropdownItems}>
          <Search />
        </div>
      )}
    </>
  );
}
