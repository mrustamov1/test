import styles from "./footer.module.css"
import { images } from "../../assets/images"
import { Icon } from "../../ui-component/icon/icon.component"
import { Input } from "../../ui-component/input/input.component"
import { Container } from "../../ui-component/container/container.component"
import { aboutUS, contacts, products, solutions } from "./footer-data.component"

export function Foooter() {
  // ---------------------------------------------------------------------------
  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <div className={styles.container}>
          {/* --------------------------------------------------------------------------- */}
          {/* PRODUCTS */}
          {/* --------------------------------------------------------------------------- */}
          <article>
            <h1 className={styles.title}>Products</h1>
            {products.map((product, index) => (
              <ul className={styles.menu} key={index}>
                <a className={styles.link}>{product}</a>
              </ul>
            ))}
          </article>
          {/* --------------------------------------------------------------------------- */}
          {/* SOLUTIONS */}
          {/* --------------------------------------------------------------------------- */}
          <article>
            <h1 className={styles.title}>Solutions</h1>
            {solutions.map((solution, index) => (
              <ul className={styles.menu} key={index}>
                <a className={styles.link}>{solution}</a>
              </ul>
            ))}
          </article>
          {/* --------------------------------------------------------------------------- */}
          {/* ABOUT */}
          {/* --------------------------------------------------------------------------- */}
          <article>
            <h1 className={styles.title}>About Us</h1>
            {aboutUS.map((about, index) => (
              <ul className={styles.menu} key={index}>
                <a className={styles.link}>{about}</a>
              </ul>
            ))}
          </article>
          {/* --------------------------------------------------------------------------- */}
          {/* CONTACT */}
          {/* --------------------------------------------------------------------------- */}
          <article>
            <h1 className={styles.title}>Contact Us</h1>
            {contacts.contactInfo.map((contactInfo) => (
              <div key={contactInfo.id} className={styles.contact}>
                <div className={styles.contactInfo}>
                  <div className={styles.contactIcon}>
                    <Icon name={contactInfo.icon} style={{ fontSize: 13 }} />
                  </div>
                  <p>{contactInfo.title}</p>
                </div>
              </div>
            ))}
            {/* --------------------------------------------------------------------------- */}
            {/* SEARCH */}
            {/* --------------------------------------------------------------------------- */}
            <div className={styles.searchItem}>
              <Input
                className={styles.serachInput}
                type="text"
                placeholder="Contact us"
              />
              <button className={styles.searchButton}>
                <Icon name="fa-light fa-search" style={{ fontSize: "15px" }} />
              </button>
            </div>
            <div className={styles.qr}>
              {contacts.qrCode.map((code) => (
                <div className={styles.qrCodeCover} key={code.id}>
                  <img
                    className={styles.qrCode}
                    src={code.photo}
                    alt="Wechat"
                  />
                  <span>{code.title}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* SOCIAL MEDIA DETAILS && PRIVACY */}
        {/* --------------------------------------------------------------------------- */}
        <div>
          <div className={styles.socialDetails}>
            <img
              style={{ maxWidth: "6rem" }}
              src={images.logo}
              alt="White logo"
            />
            <div className={styles.icons}>
              <span>Follow Us</span>
              {contacts.socialDetailIcons.map((icons) => (
                <div className={styles.socialIcons} key={icons.id}>
                  <Icon name={icons.icon} style={{ fontSize: 15 }} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.privacy}>
            <p className={styles.copyright}>{contacts.privacy.title}</p>
            <span>{contacts.privacy.subTitle}</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
