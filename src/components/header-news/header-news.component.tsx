import { images } from "../../assets/images"
import styles from "./header-news.module.css"
import { News } from "../../ui-component/news/news.component"
import { Banner } from "../../ui-component/banner/banner.component"
import { Container } from "../../ui-component/container/container.component"
import { data } from "./data.component"
import { Link } from "react-router-dom"

export function HeaderNews() {
  // ---------------------------------------------------------------------------
  return (
    <>
      <Banner sliderImages={[images.banner1]} title="News" />
      <section className={styles.content}>
        <Container className={styles.container}>
          <div className={styles.topNews}>
            <div className={styles.topInfo}>
              <h2 className={styles.topTitle}>
                Huijue Group helps Qingcun Town Community Elderly Canteen to be
                opened, and loving donations warm people’s hearts
              </h2>
              <p className={styles.topDesc}>
                On May 21, 2025, during the Grain Full season, the Qingcun Town
                Community Elderly Canteen (Yixin Store) was officially opened.
                As a caring enterprise, Huijue Group donated a meal delivery
                vehicle to contribute to the happy lives of the elderly in the
                community. The atmosphere at the opening ceremony…{" "}
              </p>
              <span className={styles.topButton}>More+</span>
            </div>
            <img className={styles.topPhoto} src={images.news} alt="news" />
          </div>
          {/* --------------------------------------------------------------------------- */}
          {/* NEWS */}
          {/* --------------------------------------------------------------------------- */}
          <div className={styles.newsCard}>
            {data.map((news) => (
              <Link className={styles.link} key={news.id} to={`/preview/news/${news.id}`}>
                <News
                  id={news.id}
                  photo={news.photo}
                  title={news.title}
                  year={news.year}
                  button={news.button}
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
