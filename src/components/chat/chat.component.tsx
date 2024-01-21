'use client'

import { useEffect, useRef } from 'react'
import { useChatStore } from '@/store'
import { DateBar } from '@/ui/date-bar'
import { MessageOfBot, MessageOfUser } from '@/ui/message'
import styles from './chat.module.css'

export const Chat = () => {
  const { chatHistory, editMessage, deleteMessage, addMessage } = useChatStore()
  const bottomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [chatHistory])
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <DateBar />
        {chatHistory.map((message) =>
          message.authorId === 0 ? (
            <MessageOfBot text={message.content} date={message.messageDate} key={message.id} />
          ) : (
            <MessageOfUser
              text={message.content}
              date={message.messageDate}
              key={message.id}
              editMessage={() => editMessage}
              deleteMessage={() => deleteMessage(message)}
            />
          ),
        )}
        <div ref={bottomRef} />
      </div>
    </main>
  )
}
