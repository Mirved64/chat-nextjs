import { RefObject, useEffect, useRef } from 'react'
import { useChatStore } from '@/store'
import { Message } from '@/store'

export const useChat = (): {
  bottomRef: RefObject<HTMLDivElement>
  chatHistory: Message[]
  editMessageHandler: (message: Message) => void
  deleteMessage: (message: Message) => void
} => {
  const { chatHistory, deleteMessage, setMessageContent, toggleSubmit, setCurrentMessage } =
    useChatStore()
  const bottomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [chatHistory])
  const editMessageHandler = (message: Message) => {
    let findMessage = chatHistory.find((el) => el.id === message.id)
    setCurrentMessage(findMessage!)
    toggleSubmit()
    setMessageContent(message.content)
  }
  return {
    bottomRef,
    chatHistory,
    editMessageHandler,
    deleteMessage,
  }
}
