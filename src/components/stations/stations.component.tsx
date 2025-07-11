import { useState } from "react"
import styles from "./stations.module.css"
import { images } from "../../assets/images"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { Icon } from "../../ui-component/icon/icon.component"
import { Container } from "../../ui-component/container/container.component"

export function Stations() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate()
  const { t: translate } = useTranslation()
  const [hoveredIndex, setHoveredIndex] = useState(0)

  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------
  const data = [
    {
      icon: "fa-light fa-tower-broadcast",
      label: translate("station.base"),
      title: "Residental Storage Energy",
      description:
        "Huijue Group's Home Energy Storage Solution integrates advanced lithium battery technology with solar systems. Residental Storage Energy It reduces electricity bills and serves as emergency backup power, providing a seamless, intelligent, and one-stop energy solution.",
      image: images.stations1,
    },
    {
      icon: "fa-light fa-house-day",
      label: translate("station.residential"),
      title: "Residental Storage Energy",
      description:
        "Huijue Group's Home Energy Storage Solution integrates advanced lithium battery technology with solar systems. Residental Storage Energy It reduces electricity bills and serves as emergency backup power, providing a seamless, intelligent, and one-stop energy solution.",
      image: images.banner1,
    },
    {
      icon: "fa-light fa-charging-station",
      label: translate("station.pv"),
      title: "Residental Storage Energy",
      description:
        "Huijue Group's Home Energy Storage Solution integrates advanced lithium battery technology with solar systems. Residental Storage Energy It reduces electricity bills and serves as emergency backup power, providing a seamless, intelligent, and one-stop energy solution.",
      image: images.banner2,
    },
    {
      icon: "fa-light fa-industry-windows",
      label: translate("station.ic"),
      title: "Residental Storage Energy",
      description:
        "Huijue Group's Home Energy Storage Solution integrates advanced lithium battery technology with solar systems. Residental Storage Energy It reduces electricity bills and serves as emergency backup power, providing a seamless, intelligent, and one-stop energy solution.",
      image: images.banner3,
    },
    {
      icon: "fa-light fa-wind-turbine",
      label: translate("station.off-grid"),
      title: "Residental Storage Energy",
      description:
        "Huijue Group's Home Energy Storage Solution integrates advanced lithium battery technology with solar systems. Residental Storage Energy It reduces electricity bills and serves as emergency backup power, providing a seamless, intelligent, and one-stop energy solution.",
      image: images.banner4,
    },
  ]

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.content}>
      <Container className={styles.container}>
        <div className={styles.stations}>
          {data.map((item, index) => (
            <div
              className={styles.station}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <Icon name={item.icon} style={{ fontSize: 25 }} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <article className={styles.stationInfo}>
          <div key={hoveredIndex} className={styles.slideWrapper}>
            <img
              className={styles.photo}
              src={data[hoveredIndex].image}
              alt={data[hoveredIndex].title}
            />
            <div className={styles.titleAndDesc}>
              <div>
                <h1 className={styles.title}>{data[hoveredIndex].title}</h1>
                <p>{data[hoveredIndex].description}</p>
              </div>
              <span
                onClick={() => navigate("/solutions/base-station-energy")}
                className={styles.viewMore}
              >
                {translate("button.view-more")}
                <Icon
                  name="fa-light fa-arrow-right-long"
                  style={{ fontSize: 14 }}
                />
              </span>
            </div>
          </div>
        </article>
      </Container>
    </section>
  )
}
