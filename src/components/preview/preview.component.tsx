import { Link, useParams } from "react-router-dom";
import {
  casesData,
  detailedCases,
} from "../solutions/base-station-energy-storage/solution-data.component";
import { Banner } from "../../ui-component/banner/banner.component";
import { images } from "../../assets/images";
import styles from "./preview.module.css";
import { PreviewCase } from "../../ui-component/preview-case/preview-case.component";
import { Container } from "../../ui-component/container/container.component";
import { CaseInfo } from "../../ui-component/case-info/case-info.component";
import { Icon } from "../../ui-component/icon/icon.component";
import { Scroll } from "../../ui-component/scroll/scroll.component";
import { Case } from "../../ui-component/case/case.component";
import { CardSkeleton } from "../../ui-component/skeletons/card-skeleton.component";
import { useSkeleton } from "../../context/skeleton.context";

export function Preview() {
  const { id } = useParams();
  const { isLoading } = useSkeleton();
  const caseDetail = detailedCases.find((c) => c.id === id);

  if (!caseDetail) return <p>Case not found</p>;

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
  ];
  return (
    <>
      <Banner sliderImages={[images.banner2]} />
      <Container className={styles.container}>
        <PreviewCase
          title={caseDetail.title}
          image={caseDetail.image}
          address="address"
          application="application"
          parameter="parameter"
        />
        <div className={styles.play}>
          <Icon name="fa-regular fa-circle-play" style={{ fontSize: "3rem" }} />
        </div>
        {data.map((item, index) => (
          <div key={index}>
            <CaseInfo title={item.title} desc={item.desc} />
          </div>
        ))}
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
              {casesData.map((item) => (
                <Link key={item.id} to={`/preview/${item.id}`}>
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
    </>
  );
}
