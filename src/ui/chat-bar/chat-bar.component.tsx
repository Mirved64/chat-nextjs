import styles from './chat-bar.module.css'

export const ChatBar = () => (
  <div className={styles.chatBarWrapper}>
    <span className={styles.chatName}>🦄 Team Unicorns</span>
    <span className={styles.chatDate}>last seen 45 minutes ago</span>
  </div>
)
