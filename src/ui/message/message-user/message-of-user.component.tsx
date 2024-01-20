'use client'

import { FC } from 'react'
import { ButtonDelete, ButtonEdit } from '@/ui/button'
import { MessageProps } from '../message.interfaces'
import styles from './message-of-user.module.css'

export const MessageOfUser: FC<MessageProps> = ({ text, date }) => (
  <div className={styles.messageWrapper}>
    <div className={styles.messageContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.messageTextWrapper}>
          <p className={styles.messageText}>{text}</p>
        </div>
        <div className={styles.messageButtonsWrapper}>
          <ButtonEdit onClick={() => {}} />
          <ButtonDelete onClick={() => {}} />
        </div>
      </div>
      <div className={styles.messageTimeWrapper}>
        <time className={styles.messageTime}>{date}</time>
      </div>
    </div>
    <div className={styles.triangle} />
  </div>
)
