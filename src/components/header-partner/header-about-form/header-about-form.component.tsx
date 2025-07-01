import { useState } from "react"
import styles from "./header-about-form.module.css"
import { Icon } from "../../../ui-component/icon/icon.component"
import { Input } from "../../../ui-component/input/input.component"
import { Button } from "../../../ui-component/button/button.component"
import { CompanyTrust } from "../company-trust/company-trust.component"
import { Container } from "../../../ui-component/container/container.component"

export function HeaderAboutForm() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedType, setSelectedType] = useState("Please choose product type")

  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------
  const productTypes = [
    "Industry and Commerce Energy Storage Systems",
    "Base Station Energy Storage",
    "Residential Energy Storage Systems",
    "Photovoltaic Module",
    "HJ-HBL Battery",
    "Energy Storage Inverter",
    "Energy Management System",
    "Other",
  ]

  // ---------------------------------------------------------------------------
  return (
    <>
      <section className={styles.content}>
        <Container className={styles.container}>
          <div className={styles.requestInfo}>
            <h3 className={styles.requestInfoTitle}>Cooperation benefits</h3>
            {/* --------------------------------------------------------------------------- */}
            {/* MENU */}
            {/* --------------------------------------------------------------------------- */}
            <ul className={styles.menu}>
              <li className={styles.link}>
                <Icon name="fa-light fa-user" style={{ fontSize: 18 }} />
                1.Zero risk inventory
              </li>
              <li className={styles.link}>
                <Icon name="fa-light fa-phone" style={{ fontSize: 18 }} />
                2.High profit margin.
              </li>
              <li className={styles.link}>
                <Icon name="fa-light fa-phone" style={{ fontSize: 18 }} />
                3.Diversified income
              </li>
              <li className={styles.link}>
                <Icon name="fa-light fa-phone" style={{ fontSize: 18 }} />
                4.Precise resources
              </li>
            </ul>
            <p className={styles.desc}>
              If you are passionate about the new energy industry and want to
              achieve greater value with the existing resources, welcome to
              contact us for mutual development!
            </p>
          </div>
          {/* --------------------------------------------------------------------------- */}
          {/* FORM */}
          {/* --------------------------------------------------------------------------- */}
          <form className={styles.form}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className={styles.title}>Request A Quote</h2>

              <div className={styles.input}>
                <Input
                  className={styles.inputItself}
                  type="text"
                  placeholder="Name"
                  required
                />
                <Icon
                  className={styles.inputIcon}
                  style={{ fontSize: 15 }}
                  name="fa-light fa-user"
                />
              </div>

              <div className={styles.input}>
                <Input
                  className={styles.inputItself}
                  type="text"
                  placeholder="Email"
                  required
                />
                <Icon
                  className={styles.inputIcon}
                  style={{ fontSize: 15 }}
                  name="fa-light fa-envelope"
                />
              </div>

              <div className={styles.input}>
                <Input
                  className={styles.inputItself}
                  type="text"
                  placeholder="Phone"
                />
                <Icon
                  className={styles.inputIcon}
                  style={{ fontSize: 15 }}
                  name="fa-light fa-phone"
                />
              </div>

              {/* --------------------------------------------------------------------------- */}
              {/* DROPDOWN */}
              {/* --------------------------------------------------------------------------- */}
              <div
                className={styles.dropdown}
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <Icon
                  name={
                    dropdownOpen
                      ? "fa-light fa-chevron-up"
                      : "fa-light fa-chevron-down"
                  }
                  style={{ fontSize: 15 }}
                />
                {selectedType}
              </div>

              {dropdownOpen && (
                <div className={styles.dropdownItems}>
                  {productTypes.map((type) => (
                    <span
                      key={type}
                      onClick={() => {
                        setSelectedType(type)
                        setDropdownOpen(false)
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              )}

              <textarea
                className={styles.textarea}
                rows={4}
                placeholder="Your product requirements *"
              />
              <Button title="INQUIRE NOW" />
            </div>
          </form>
        </Container>
      </section>
      {/* --------------------------------------------------------------------------- */}
      {/* COMPANY TRUST */}
      {/* --------------------------------------------------------------------------- */}
      <CompanyTrust />
    </>
  )
}
