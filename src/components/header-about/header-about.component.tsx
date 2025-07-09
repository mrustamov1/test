import { images } from "../../assets/images"
import styles from "./header-about.module.css"
import { Icon } from "../../ui-component/icon/icon.component"
import { Banner } from "../../ui-component/banner/banner.component"
import { ProfessionalServices } from "./services/services.component"
import { CompanyValue } from "./company-value/company-value.component"
import { ClientProject } from "./client-project/client-project.component"
import { Container } from "../../ui-component/container/container.component"
import { CompanyHistory } from "./company-history/company-history.component"
import { CompanyManufacturing } from "./company-manufacturing/company-manufacturing.component"

export function HeaderAbout() {
  // ---------------------------------------------------------------------------
  return (
    <>
      {/* --------------------------------------------------------------------------- */}
      {/* BANNER */}
      {/* --------------------------------------------------------------------------- */}
      <Banner sliderImages={[images.banner1]} title="About" />
      <Container className={styles.content}>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1 className={styles.title}>Company Profile</h1>
            <p className={styles.desc}>
              Huijue Group was founded in 2002, is in the field of energy
              storage system in the leading technology innovation company, to
              provide customers with the optimal energy storage system solutions
              and safe and efficient storage full range of products, covering
              household energy storage system, industrial and commercial energy
              storage system and site energy storage system. Huijue Group
              headquarters is located in Shanghai free trade zone lingang new
              area, has six wholly owned subsidiary, in Jiangsu Haian and
              Shanghai Fengpu production base and research and development
              center, the total area of 100000 square meters, more than one
              thousand employees, has four professional integrated production
              line, with senior technical team and efficient supply chain
              system, capacity and performance ability fully guarantee. Sales
              and service outlets are all over cities across the country, and
              the products are exported to many countries and regions around the
              world. Smart energy solutions have been widely used in government,
              transportation, education, operators and other industries. Over
              the years, won the "high-tech enterprise" and "innovative
              enterprise" and other honorary certification. Huijue Group has
              always taken the core values of "customer-centered,
              people-oriented, continuous innovation and achievement sharing",
              and has helped the green, healthy and sustainable development of
              the industry through continuous innovation accumulation and
              technological breakthroughs.
            </p>
            <div className={styles.bottomIcons}>
              <div className={styles.iconAndText}>
                <Icon className={styles.icon} name="fa-solid fa-users-crown" />
                <span className={styles.quantity}>1000+</span>
                <span className={styles.job}>Employee</span>
              </div>
              <div className={styles.iconAndText}>
                <Icon className={styles.icon} name="fa-solid fa-users-crown" />
                <span className={styles.quantity}>1000+</span>
                <span className={styles.job}>Employee</span>
              </div>
              <div className={styles.iconAndText}>
                <Icon className={styles.icon} name="fa-solid fa-users-crown" />
                <span className={styles.quantity}>1000+</span>
                <span className={styles.job}>Employee</span>
              </div>
              <div className={styles.iconAndText}>
                <Icon className={styles.icon} name="fa-solid fa-users-crown" />
                <span className={styles.quantity}>1000+</span>
                <span className={styles.job}>Employee</span>
              </div>
            </div>
          </div>
          <img className={styles.photo} src={images.about} alt="About" />
        </div>
      </Container>
      {/* --------------------------------------------------------------------------- */}
      {/* COMAPANY VALUE */}
      {/* --------------------------------------------------------------------------- */}
      <CompanyValue />
      {/* --------------------------------------------------------------------------- */}
      {/* COMPANY HISTORY */}
      {/* --------------------------------------------------------------------------- */}
      <CompanyHistory />
      {/* --------------------------------------------------------------------------- */}
      {/* CLIENT PROJECT */}
      {/* --------------------------------------------------------------------------- */}
      <ClientProject />
      {/* --------------------------------------------------------------------------- */}
      {/* COMPANY MANUFACTURING */}
      {/* --------------------------------------------------------------------------- */}
      <CompanyManufacturing />
      {/* --------------------------------------------------------------------------- */}
      {/* PROFESSIONAL SERVICES */}
      {/* --------------------------------------------------------------------------- */}
      <ProfessionalServices />
    </>
  )
}
