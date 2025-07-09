import { images } from "../../assets/images"
import styles from "./live-chat.module.css"

export function LiveChat() {
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.circleWrapper}>
      <div className={`${styles.ripple} ${styles.delay}`}></div>
      <div className={styles.ripple}></div>

      <div className={styles.socialWrapper}>
        <a
          href="https://t.me/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.icon1}`}
        >
          <img src={images.telegram} alt="Telegram" />
          <span className={styles.tooltip}>Telegram</span>
        </a>
        <a
          href="https://wa.me/your_number"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.icon2}`}
        >
          <img src={images.whatsAppChat} alt="WhatsApp" />
          <span className={styles.tooltip}>WhatsApp</span>
        </a>
        <a
          href="https://instagram.com/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.icon3}`}
        >
          <img src={images.telegram} alt="Instagram" />
          <span className={styles.tooltip}>Telegram</span>
        </a>
      </div>

      <a href="#" className={styles.telegramChatButton}>
        <img className={styles.photo} src={images.liveChat} alt="Live Chat" />
      </a>
    </div>
  )
}
