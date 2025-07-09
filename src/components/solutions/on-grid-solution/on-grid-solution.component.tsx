import { Link } from "react-router-dom"
import { images } from "../../../assets/images"
import styles from "./on-grid-solution.module.css"
import { useSkeleton } from "../../../context/skeleton.context"
import { Case } from "../../../ui-component/case/case.component"
import { Scroll } from "../../../ui-component/scroll/scroll.component"
import { Banner } from "../../../ui-component/banner/banner.component"
import { Schema } from "../../../ui-component/schema/schema.component"
import { casesData } from "../../preview-case/preview-case-data.component"
import { Square } from "../../../ui-component/products/square/square.component"
import { SchemaCard } from "../../../ui-component/schema-card/schema-card.component"
import { CardSkeleton } from "../../../ui-component/skeletons/card-skeleton.component"
import { RequestQuote } from "../../../ui-component/request-quote/request-quote.component"
import {
  schema,
  schemaCard,
} from "../base-station-energy-storage/solution-data.component"

export function OnGridSolutions() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const { isLoading } = useSkeleton()

  // ---------------------------------------------------------------------------
  return (
    <>
      {/* --------------------------------------------------------------------------- */}
      {/* BANNER */}
      {/* --------------------------------------------------------------------------- */}
      <Banner
        sliderImages={[images.banner1]}
        title="Base Station Energy Storage"
      />
      {/* --------------------------------------------------------------------------- */}
      {/* SCHEMA */}
      {/* --------------------------------------------------------------------------- */}
      <section>
        <Scroll>
          {schema.map((item, index) => (
            <Schema
              key={index}
              title={item.title}
              description={item.description}
              schema={item.image}
            />
          ))}
        </Scroll>
        {/* --------------------------------------------------------------------------- */}
        {/* SCHEMA CARD */}
        {/* --------------------------------------------------------------------------- */}
        <div className={styles.container}>
          {isLoading ? (
            <>
              <CardSkeleton type="product" />
              <CardSkeleton type="product" />
              <CardSkeleton type="product" />
              <CardSkeleton type="product" />
            </>
          ) : (
            <>
              {schemaCard.map((item, index) => (
                <SchemaCard
                  key={index}
                  photo={item.photo}
                  icon={item.icon}
                  overlayIcon={item.overlayIcon}
                  title={item.title}
                  overlayTitle={item.overlayTitle}
                  description={item.description}
                />
              ))}
            </>
          )}
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* RELATED SQUARE PRODUCTS */}
        {/* --------------------------------------------------------------------------- */}
        <div className={styles.squareProducts}>
          <h1 className={styles.title}>Related products</h1>

          <Scroll>
            {isLoading ? (
              <>
                <CardSkeleton type="product" />
                <CardSkeleton type="product" />
                <CardSkeleton type="product" />
              </>
            ) : (
              <>
                {[1, 2, 3, 4].map((_, idx) => (
                  <Square
                    key={idx}
                    image={images.relatedProducts1}
                    title="Laos 2.5kPw Photovoltaic Energy Storage Station Solution"
                    icon="fa-light fa-location-dot"
                    overlayTitle="500Ah 2.5kPw"
                  />
                ))}
              </>
            )}
          </Scroll>
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* REQUEST QUOTE */}
        {/* --------------------------------------------------------------------------- */}
        <RequestQuote />
        {/* --------------------------------------------------------------------------- */}
        {/* RELATED CASES */}
        {/* --------------------------------------------------------------------------- */}
        <div className={styles.squareProducts}>
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
          </Scroll>
        </div>
      </section>
    </>
  )
}
