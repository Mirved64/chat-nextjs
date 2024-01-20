'use client'

import { useEffect, useRef } from 'react'
import { DateBar } from '@/ui/date-bar'
import { MessageOfBot, MessageOfUser } from '@/ui/message'
import styles from './chat.module.css'
import { MOCK_CHAT_HISTORY } from './mock-data'

export const Chat = () => {
  const bottomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [MOCK_CHAT_HISTORY])
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <DateBar />
        {MOCK_CHAT_HISTORY.map((message) =>
          message.authorID === 0 ? (
            <MessageOfBot text={message.content} date={message.date} key={message.id} />
          ) : (
            <MessageOfUser text={message.content} date={message.date} key={message.id} />
          ),
        )}
        <div ref={bottomRef} />
      </div>
    </main>
  )
}
