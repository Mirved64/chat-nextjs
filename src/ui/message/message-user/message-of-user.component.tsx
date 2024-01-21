'use client'

import Image from 'next/image'
import { FC } from 'react'
import { ButtonDelete, ButtonEdit } from '@/ui/button'
import { Condition } from '@/ui/condition'
import { MessageProps } from '../message.interfaces'
import styles from './message-of-user.module.css'

export const MessageOfUser: FC<MessageProps> = ({
  text,
  imageURL,
  date,
  deleteMessage,
  editMessage,
}) => (
  <div className={styles.messageWrapper}>
    <div className={styles.messageContainer}>
      <div className={styles.contentContainer}>
        <Condition match={!!text}>
          <div className={styles.messageTextWrapper}>
            <p className={styles.messageText}>{text}</p>
          </div>
        </Condition>
        <Condition match={!!imageURL}>
          <div className={styles.messageImgWrapper}>
            <Image
              src={typeof imageURL === 'string' ? imageURL : '/next.svg'}
              alt={'upload_img'}
              width={100}
              height={100}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Condition>
        <div className={styles.messageButtonsWrapper}>
          <ButtonEdit onClick={editMessage} />
          <ButtonDelete onClick={deleteMessage} />
        </div>
      </div>
      <div className={styles.messageTimeWrapper}>
        <time className={styles.messageTime}>{date}</time>
      </div>
    </div>
    <div className={styles.triangle} />
  </div>
)
