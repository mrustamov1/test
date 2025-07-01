import { images } from "../../../assets/images"
import styles from "./hybrid-storage-solution.module.css"
import { Case } from "../../../ui-component/case/case.component"
import { Schema } from "../../../ui-component/schema/schema.component"
import { Square } from "../../../ui-component/products/square/square.component"
import { SchemaCard } from "../../../ui-component/schema-card/schema-card.component"
import { RequestQuote } from "../../../ui-component/request-quote/request-quote.component"

export function HybridStorageSolution() {
  return (
    <section>
      <Schema
        title="Advanced Residential Energy Storage Provider"
        description="Huijue Group's Home Energy Storage Solution integrates advanced lithium battery technology with solar systems. Ranging from 5kWh to 20kWh, it caters to households of varying sizes. It reduces electricity bills and serves as emergency backup power, providing a seamless, intelligent, and one-stop energy solution."
        schema={images.residentialEnergyStorage}
      />
      <div style={{ display: "flex" }}>
        <SchemaCard
          photo={images.solution1}
          icon="fa-light fa-chart-line-down"
          title="Green energy access"
          overlayTitle="Green energy access"
          description="Adopting green energy technology, with photovoltaic, wind power and energy storage as the main energy solutions, supplemented by grid and diesel-fuelled energy solutions."
        />
        <SchemaCard
          photo={images.solution2}
          icon="fa-light fa-chart-line-down"
          title="Green energy access"
          overlayTitle="Green energy access"
          description="Adopting green energy technology, with photovoltaic, wind power and energy storage as the main energy solutions, supplemented by grid and diesel-fuelled energy solutions."
        />
        <SchemaCard
          photo={images.solution3}
          icon="fa-light fa-chart-line-down"
          title="Green energy access"
          overlayTitle="Green energy access"
          description="Adopting green energy technology, with photovoltaic, wind power and energy storage as the main energy solutions, supplemented by grid and diesel-fuelled energy solutions."
        />
        <SchemaCard
          photo={images.solution4}
          icon="fa-light fa-chart-line-down"
          title="Green enesrgy access"
          overlayTitle="Green energy access"
          description="Adopting green energy technology, with photovoltaic, wind power and energy storage as the main energy solutions, supplemented by grid and diesel-fuelled energy solutions."
        />
      </div>
      <h1 className={styles.title}>Related products</h1>
      <div className={styles.main}>
        <div className={styles.products}>
          <Square
            image={images.relatedProducts1}
            title="Laos 2.5kPw Photovoltaic Energy Storage Station Solution"
            icon="fa-light fa-location-dot"
            overlayTitle="500Ah 2.5kPw"
          />
          <Square
            image={images.relatedProducts1}
            title="Laos 2.5kPw Photovoltaic Energy Storage Station Solution"
            icon="fa-light fa-location-dot"
            overlayTitle="500Ah 2.5kPw"
          />
          <Square
            image={images.relatedProducts1}
            title="Laos 2.5kPw Photovoltaic Energy Storage Station Solution"
            icon="fa-light fa-location-dot"
            overlayTitle="500Ah 2.5kPw"
          />
          <Square
            image={images.relatedProducts1}
            title="Laos 2.5kPw Photovoltaic Energy Storage Station Solution"
            icon="fa-light fa-location-dot"
            overlayTitle="500Ah 2.5kPw"
          />
        </div>
      </div>
      <RequestQuote />
      <h1 className={styles.title}>Related cases</h1>
      <div className={styles.cases}>
        <Case
          image={images.offGridOngrid}
          title="Laos 2.5kPw Photovoltaic Energy Storage Station Solution"
          icon="fa-light fa-location-dot"
          location="Laos"
          overlayTitle="500Ah 2.5kPw"
        />
        <Case
          image={images.offGridOngrid}
          title="Laos 2.5kPw Photovoltaic Energy Storage Station Solution"
          icon="fa-light fa-location-dot"
          location="Laos"
          overlayTitle="500Ah 2.5kPw"
        />
        <Case
          image={images.offGridOngrid}
          title="Laos 2.5kPw Photovoltaic Energy Storage Station Solution"
          icon="fa-light fa-location-dot"
          location="Laos"
          overlayTitle="500Ah 2.5kPw"
        />
      </div>
    </section>
  )
}
