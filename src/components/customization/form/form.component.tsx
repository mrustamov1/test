import styles from "./form.module.css"
import { Input } from "../../../ui-component/input/input.component"
import { Button } from "../../../ui-component/button/button.component"
import { Container } from "../../../ui-component/container/container.component"

export function Form() {
  return (
    <section className={styles.content}>
      <Container className={styles.container}>
        <h2 className={styles.title}>Customize the Project Query Form</h2>
        <form className={styles.form}>
          <Input
            className={styles.input}
            label="Name"
            type="text"
            placeholder="Enter your name"
          />
          <Input
            className={styles.input}
            label="Business/ Organization"
            type="text"
            placeholder="Enter organization"
          />
          <div className={styles.inputWrapper}>
            <Input
              className={styles.input}
              label="WhatsApp/phone"
              type="tel"
              placeholder="+992"
            />
            <Input
              className={styles.input}
              label="Email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <Input
            className={styles.input}
            label="Industry"
            placeholder="Architect, Engineering Firm"
            type="text"
          />
          <div className={styles.inputWrapper}>
            <Input
              className={styles.input}
              label="Preferred Method of Contact"
              type="email"
              placeholder="Email"
            />
            <Input
              className={styles.input}
              label="Best Time to Reach You"
              placeholder="Architect, Engineering Firm"
              type="text"
            />
          </div>
          <div className={styles.buttons}>
            <Button
              className={styles.button}
              title="Submit"
              titleSize="medium"
            />
          </div>
        </form>
      </Container>
    </section>
  )
}
