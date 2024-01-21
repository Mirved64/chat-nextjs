'use client'

import { DateBar } from '@/ui/date-bar'
import { MessageOfBot, MessageOfUser } from '@/ui/message'
import styles from './chat.module.css'
import { useChat } from './hooks'

export const Chat = () => {
  const { chatHistory, bottomRef, deleteMessage, editMessageHandler } = useChat()
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
              editMessage={() => editMessageHandler(message)}
              deleteMessage={() => deleteMessage(message)}
            />
          ),
        )}
        <div ref={bottomRef} />
      </div>
    </main>
  )
}
