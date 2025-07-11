import styles from "./case.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSkeleton } from "../../context/skeleton.context";
import { Case } from "../../ui-component/case/case.component";
import { Button } from "../../ui-component/button/button.component";
import { casesData } from "../preview-case/preview-case-data.component";
import { Container } from "../../ui-component/container/container.component";
import { CardSkeleton } from "../../ui-component/skeletons/card-skeleton.component";

export function Cases() {
  // ---------------------------------------------------------------------------
  const navigate = useNavigate();
  const { isLoading } = useSkeleton();
  const { t: translate } = useTranslation();
  // ---------------------------------------------------------------------------
  return (
    <section className={styles.content}>
      <Container className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>{translate("case.case")}</h1>
          <p className={styles.desc}>{translate("case.description")}</p>
          <div>
            <Button
              title={translate("button.view-more")}
              iconName="fa-solid fa-chevron-right"
              titleSize="medium"
              onClick={() => navigate("/header-case")}
            />
          </div>
        </div>

        <div className={styles.cases}>
          {isLoading ? (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          ) : (
            <>
              {casesData.map((item) => (
                <Link key={item.id} to={`/preview/case/${item.id}`}>
                  <Case
                    image={item.image}
                    title={item.title}
                    icon={item.icon}
                    location={item.location}
                    overlayTitle={item.overlayTitle}
                  />
                </Link>
              ))}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
