import { RefObject, useEffect, useRef } from 'react'
import { useChatStore } from '@/store'
import { Message } from '@/store'

export const useChat = (): {
  bottomRef: RefObject<HTMLDivElement>
  chatHistory: Message[]
  handleEditMessage: (message: Message) => void
  deleteMessage: (message: Message) => void
} => {
  const {
    chatHistory,
    deleteMessage,
    setCurrentMessageText,
    toggleIsSubmit,
    setCurrentMessage,
    setCurrentMessageImageURL,
  } = useChatStore()
  const bottomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [chatHistory])
  const handleEditMessage = (message: Message) => {
    toggleIsSubmit()
    let findMessage = chatHistory.find((el) => el.id === message.id)
    setCurrentMessage(findMessage!)
    setCurrentMessageText(message.text!)
    setCurrentMessageImageURL(message.imageURL!)
  }
  return {
    bottomRef,
    chatHistory,
    handleEditMessage,
    deleteMessage,
  }
}
