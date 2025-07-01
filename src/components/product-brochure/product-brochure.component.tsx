import { images } from "../../assets/images"
import { data, files } from "./data.component"
import styles from "./product-brochure.module.css"
import { Icon } from "../../ui-component/icon/icon.component"
import { Banner } from "../../ui-component/banner/banner.component"
import { Container } from "../../ui-component/container/container.component"

export function ProductBrochure() {
  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function handleDownload(file: string, fileName: string) {
    const link = document.createElement("a")
    link.href = `/files/${file}`
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // ---------------------------------------------------------------------------
  return (
    <>
      {/* --------------------------------------------------------------------------- */}
      {/* BANNER */}
      {/* --------------------------------------------------------------------------- */}
      <Banner sliderImages={[images.banner3]} />

      <section className={styles.content}>
        <Container className={styles.container}>
          <div className={styles.sidebar}>
            {data.map((item, index) => (
              <div className={styles.sidebarItems} key={index}>
                <Icon name={item.icon} />
                <span className={styles.title}>{item.title}</span>
              </div>
            ))}
          </div>
          <div>
            <h4 className={styles.mainTitle}>Product Brochure</h4>
            <p className={styles.desc}>
              Download Huijue Group’s brochures, manuals, and technical PDFs on
              energy storage solutions, including BMS, EMS, lithium battery
              systems, and renewable energy.
            </p>

            {/* --------------------------------------------------------------------------- */}
            {/* PDF FILES */}
            {/* --------------------------------------------------------------------------- */}
            {files.map((pdf, index) => (
              <div
                key={index}
                className={styles.pdf}
                onClick={() => handleDownload(pdf.file, `${pdf.name}.pdf`)}
              >
                <Icon
                  name="fas fa-file-lines"
                  style={{ fontSize: "6rem" }}
                  className={styles.pdfIcon}
                />
                <div className={styles.fileName}>
                  <span className={styles.name}>{pdf.name}</span>
                  <span className={styles.downloadLink}>Download+</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
