import { Icon } from "../../../ui-component/icon/icon.component"
import styles from "./parameters.module.css"

export function Parameters() {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>Parameters</h2>
      <div className={styles.productTable}>
        <h3 className={styles.tableTitle}>
          Product Parameters{" "}
          <Icon name="fa-light fa-chevron-down" size="tiny" />
        </h3>
        <div className={styles.tableWrapper}>
          <div className={styles.subTitle}>
            Product Model:HJ-G215-418L（215KW/418KWh）
          </div>
          <table>
            <thead>
              <tr>
                <th>DC parameters</th>
                <th></th>
                <th>AC parameters</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Battery Type</td>
                <td>lithium iron phosphate (LiFePO4)</td>
                <td>AC side rated power</td>
                <td>215KW</td>
              </tr>
              <tr>
                <td>Battery Type</td>
                <td>lithium iron phosphate (LiFePO4)</td>
                <td>AC side rated power</td>
                <td>215KW</td>
              </tr>
              <tr>
                <td>Battery Type</td>
                <td>lithium iron phosphate (LiFePO4)</td>
                <td>AC side rated power</td>
                <td>215KW</td>
              </tr>
              <tr>
                <td>Battery Type</td>
                <td>lithium iron phosphate (LiFePO4)</td>
                <td>AC side rated power</td>
                <td>215KW</td>
              </tr>
              <tr>
                <td>Battery Type</td>
                <td>lithium iron phosphate (LiFePO4)</td>
                <td>AC side rated power</td>
                <td>215KW</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <span className={styles.notes}>
        Note: Specifications are subject to change without prior notice for
        product improvement.{" "}
        <em style={{ color: "#28793f", cursor: "pointer" }}>
          Data Sheet <Icon name="fa-regular fa-cloud-download" size="tiny" />
        </em>
      </span>
    </section>
  )
}
