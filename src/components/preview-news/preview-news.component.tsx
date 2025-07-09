import styles from "./preview-news.module.css"
import { images } from "../../assets/images"
import { Link, useParams } from "react-router-dom"
import { useSkeleton } from "../../context/skeleton.context"
import { Case } from "../../ui-component/case/case.component"
import { Banner } from "../../ui-component/banner/banner.component"
import { Scroll } from "../../ui-component/scroll/scroll.component"
import { detailedInfoNews, newsData } from "./preview-news-data.component"
import { CaseInfo } from "../../ui-component/case-info/case-info.component"
import { Container } from "../../ui-component/container/container.component"
import { CardSkeleton } from "../../ui-component/skeletons/card-skeleton.component"

export function PreviewNews() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const { id } = useParams()
  const { isLoading } = useSkeleton()
  const caseDetail = detailedInfoNews.find((c) => c.id === id)

  if (!caseDetail) return <p>Case not found</p>

  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------
  const data = [
    {
      title: "Project Introduction",
      desc: `The Shanghai Fengxian Tower-Qinhuo Station renovation project transforms traditional communication base stations into intelligent, renewable energy-powered facilities using on-site photovoltaic (PV) energy storage. <br/>wfewf`,
    },
    {
      title: "Project Introduction",
      desc: "The Shanghai Fengxian Tower-Qinhuo Station renovation project transforms traditional communication base stations into intelligent, renewable energy-powered facilities using on-site photovoltaic (PV) energy storage.",
    },
    {
      title: "Project Introduction",
      desc: "The Shanghai Fengxian Tower-Qinhuo Station renovation project transforms traditional communication base stations into intelligent, renewable energy-powered facilities using on-site photovoltaic (PV) energy storage.",
    },
    {
      title: "Project Introduction",
      desc: "The Shanghai Fengxian Tower-Qinhuo Station renovation project transforms traditional communication base stations into intelligent, renewable energy-powered facilities using on-site photovoltaic (PV) energy storage.",
    },
    {
      title: "Project Introduction",
      desc: "The Shanghai Fengxian Tower-Qinhuo Station renovation project transforms traditional communication base stations into intelligent, renewable energy-powered facilities using on-site photovoltaic (PV) energy storage.",
    },
  ]

  // ---------------------------------------------------------------------------
  return (
    <>
      <Banner sliderImages={[images.banner2]} />
      <div className={styles.content}>
        <Container className={styles.container}>
          <div>
            <h3 className={styles.topTitle}>
              Huijue Group attracted attention on the first day of the Canton
              Fair – folding photovoltaic containers became the focus
            </h3>
            <div className={styles.borderTime}>
              <span className={styles.period}>2025-04-16</span>
            </div>
            <p className={styles.description}>
              On April 15, 2025, the first day of the Canton Fair, Shanghai
              HuiJue Technologies Group Co., Ltd(Booth No.: 8.0G25-26) attracted
              the attention of global merchants with its self-developed
              innovative photovoltaic folding container packaging. Only two
              hours after the opening, visitors from Europe, Southeast Asia, the
              Middle East and other regions came in an endless stream in front
              of the booth.
            </p>
            <img className={styles.topImg} src={images.news} alt="" />
          </div>
          {/* --------------------------------------------------------------------------- */}
          {/* CASE INFORMATION */}
          {/* --------------------------------------------------------------------------- */}
          {data.map((item, index) => (
            <div key={index}>
              <CaseInfo title={item.title} desc={item.desc} />
            </div>
          ))}

          {/* --------------------------------------------------------------------------- */}
          {/* RELATED CASES */}
          {/* --------------------------------------------------------------------------- */}
          <h4 className={styles.title}>Related Cases</h4>
          <Scroll>
            {isLoading ? (
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            ) : (
              <>
                {newsData.map((item) => (
                  <Link key={item.id} to={`/preview/news/${item.id}`}>
                    <>
                      <Case
                        image={item.image}
                        title={item.title}
                        icon={item.icon}
                        location={item.location}
                        overlayTitle={item.overlayTitle}
                      />
                    </>
                  </Link>
                ))}
              </>
            )}
          </Scroll>
        </Container>
      </div>
    </>
  )
}
