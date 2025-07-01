import styles from "./contact.module.css"
import { images } from "../../assets/images"
import { contactData } from "./contact-data.component"
import { Icon } from "../../ui-component/icon/icon.component"
import { Banner } from "../../ui-component/banner/banner.component"
import { ContactForm } from "./contact-form/contact-form.component"
import { Container } from "../../ui-component/container/container.component"

export function Contact() {
  // ---------------------------------------------------------------------------
  return (
    <>
      <div className={styles.main}>
        {/* --------------------------------------------------------------------------- */}
        {/* CONTACT BANNER */}
        {/* --------------------------------------------------------------------------- */}

        <Banner sliderImages={[images.banner3]} />

        <Container className={styles.cardWrapper}>
          {contactData.map((item, index) => (
            <article className={styles.card} key={index}>
              <div className={styles.cardIcon}>
                <Icon name={item.icon} />
              </div>
              <h4 className={styles.title}>{item.title}</h4>
              <span className={styles.subTitle}>{item.subTitle}</span>
            </article>
          ))}
        </Container>
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* CONTACT FORM */}
      {/* --------------------------------------------------------------------------- */}
      <ContactForm />
    </>
  )
}
