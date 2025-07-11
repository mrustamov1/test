import { images } from "../../assets/images"
import styles from "./preview-products.module.css"
import { Link, useParams } from "react-router-dom"
import { Feature } from "./feature/feature.component"
import { useSkeleton } from "../../context/skeleton.context"
import { Case } from "../../ui-component/case/case.component"
import { Parameters } from "./parameters/parameters.component"
import { productsData } from "./preview-products-data.component"
import { Application } from "./application/application.component"
import { Scroll } from "../../ui-component/scroll/scroll.component"
import { PreviewProductSolutions } from "./solutions/solutions.component"
import { Container } from "../../ui-component/container/container.component"
import { Square } from "../../ui-component/products/square/square.component"
import { CardSkeleton } from "../../ui-component/skeletons/card-skeleton.component"
import { RequestQuote } from "../../ui-component/request-quote/request-quote.component"
import { UiPreviewProducts } from "../../ui-component/preview-product/preview-product.component"

export function PreviewProducts() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const { id } = useParams()
  const { isLoading } = useSkeleton()
  const caseDetail = productsData.find((c) => c.id === id)

  if (!caseDetail) return <p>Case not found</p>

  // ---------------------------------------------------------------------------
  return (
    <>
      <div className={styles.content}>
        {/* --------------------------------------------------------------------------- */}
        {/* UI PREVIEW PRODUCTS */}
        {/* --------------------------------------------------------------------------- */}
        <UiPreviewProducts
          title="418KWh Outdoor Cabinet Energy Storage System"
          desc="The HJ-G215-418L industrial and commercial energy storage system from Huijue Group adopts an integrated design concept, with integrated batteries in the cabinet, battery management system, BMS energy management system, EMS, modular converter PCS and fire protection system. It reduces energy costs for enterprises, increases green energy use, and maintains safe and stable system operation."
          type="Type:"
          typeDesc="Lithium-ion energy storage solution"
          cooling="Cooling :"
          coolingDesc=" Liquid Cooling"
          power="Power:"
          powerDesc=" 215KW/418KWh"
          model="Model:"
          modelDesc="HJ-G215-418L"
          capacity="Energy Capacity:"
          capacityDesc="418KWh"
          batterySell="Battery Cell:"
          batterySellDesc="LFP 3.2V/314Ah"
          size="Size:"
          sizeDesc="1400mm*1400mm*2550mm"
          subImage={images.previewProduct2}
          subImageBottom={[
            images.previewProduct2,
            images.previewProduct2,
            images.previewProduct2,
            images.previewProduct2,
            images.previewProduct2,
          ]}
        />
        {/* --------------------------------------------------------------------------- */}
        {/* RELATED CASES */}
        {/* --------------------------------------------------------------------------- */}
        <Container>
          <Parameters />
        </Container>
        <Feature />
        <Application />
        <PreviewProductSolutions />

        <Container className={styles.container}>
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
                {productsData.map((item) => (
                  <Link key={item.id} to={`/preview/products/${item.id}`}>
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
        </Container>
        <div className={styles.form}>
          <RequestQuote />
        </div>
      </div>
    </>
  )
}
