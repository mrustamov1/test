import { Link } from "react-router-dom"
import styles from "./related-cases.module.css"
import { useSkeleton } from "../../../context/skeleton.context"
import { Case } from "../../../ui-component/case/case.component"
import { Scroll } from "../../../ui-component/scroll/scroll.component"
import { casesData } from "../../preview-case/preview-case-data.component"
import { CardSkeleton } from "../../../ui-component/skeletons/card-skeleton.component"

export function RelatedCases() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const { isLoading } = useSkeleton()

  // ---------------------------------------------------------------------------
  return (
    <section className={styles.content}>
      <h1 className={styles.title}>Related cases</h1>
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
      </Scroll>
    </section>
  )
}
