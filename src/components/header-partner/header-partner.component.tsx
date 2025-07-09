import { images } from "../../assets/images"
import styles from "./header-partner.module.css"
import { partnerData } from "./header-patner-data.component"
import { Icon } from "../../ui-component/icon/icon.component"
import { Banner } from "../../ui-component/banner/banner.component"
import { Container } from "../../ui-component/container/container.component"
import { HeaderAboutForm } from "./header-about-form/header-about-form.component"

export function PartnerRecruitment() {
  // ---------------------------------------------------------------------------
  return (
    <>
      {/* --------------------------------------------------------------------------- */}
      {/* BANNER */}
      {/* --------------------------------------------------------------------------- */}
      <Banner
        sliderImages={[images.banner1]}
        title="Team up for mutual success. Align with us, your best move forward. "
      />
      <Container className={styles.container}>
        <h3 className={styles.title}>
          High Commission, High Income, High Yield-Huijue is looking forward to
          your joining us!
        </h3>
        <div className={styles.lineWrapper}>
          <span className={styles.line} />
        </div>
        <p className={styles.desc}>
          We are looking for like-minded partners to develop the PV market
          together. Whether you are a member of the community with quality
          resources, a professional photovoltaic installation team, or a
          distributor looking to expand your business, we look forward to
          working with you to share the broad prospects of the new energy
          industry.
        </p>
        <div className={styles.partnerCards}>
          {partnerData.map((item, index) => (
            <div className={styles.card} key={index}>
              <img
                className={styles.partnerPhoto}
                src={item.photo}
                alt="Photo"
              />
              <div className={styles.bottom}>
                <h4 className={styles.bottomTitle}>{item.title}</h4>
                <div className={styles.bottomDesc}>
                  <Icon
                    name={item.bottom.icon}
                    style={{
                      fontSize: "0.9rem",
                      color: "#28793f",
                      paddingTop: "0.3rem",
                    }}
                  />
                  <span>{item.bottom.title}</span>
                </div>
                <div className={styles.bottomDesc}>
                  <Icon
                    name={item.bottom.icon}
                    style={{
                      fontSize: "0.9rem",
                      color: "#28793f",
                      paddingTop: "0.3rem",
                    }}
                  />
                  <span>{item.bottom.title}</span>
                </div>
                <div className={styles.bottomDesc}>
                  <Icon
                    name={item.bottom.icon}
                    style={{
                      fontSize: "0.9rem",
                      color: "#28793f",
                      paddingTop: "0.3rem",
                    }}
                  />
                  <span>{item.bottom.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      {/* --------------------------------------------------------------------------- */}
      {/* HEADER ABOUT FORM */}
      {/* --------------------------------------------------------------------------- */}
      <HeaderAboutForm />
    </>
  )
}
