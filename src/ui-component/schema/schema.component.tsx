import styles from "./schema.module.css"
import { Container } from "../container/container.component"

export function Schema({
  title,
  description,
  schema,
  ...otherProps
}: {
  wrapper?: string
  title?: string
  description?: string
  schema?: string
}) {
  // ---------------------------------------------------------------------------
  return (
    <Container className={styles.wrapper}>
      <div {...otherProps} className={styles.content}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {description && <p className={styles.description}>{description}</p>}
        {schema && <img className={styles.schema} src={schema} alt="Schema" />}
      </div>
    </Container>
  )
}
