import { FC } from 'react'
import { BotLogo } from '@/ui/bot-logo'
import { MessageProps } from '../message.interfaces'
import styles from './message-of-bot.module.css'

export const MessageOfBot: FC<MessageProps> = ({ text, date }) => (
  <div className={styles.wrapper}>
    <BotLogo />
    <div className={styles.messageWrapper}>
      <div className={styles.messageContainer}>
        <div className={styles.messageTextWrapper}>
          <p className={styles.messageText}>{text}</p>
        </div>
        <div className={styles.messageTimeWrapper}>
          <time className={styles.messageTime}>{date}</time>
        </div>
      </div>
      <div className={styles.triangle} />
    </div>
  </div>
)
