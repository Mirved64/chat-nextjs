import { RefObject, useEffect, useRef } from 'react'
import { useChatStore } from '@/store'
import { Message } from '@/store'

export const useChat = (): {
  bottomRef: RefObject<HTMLDivElement>
  chatHistory: Message[]
  editMessage: (message: Message, newMessage: Message) => void
  deleteMessage: (message: Message) => void
} => {
  const { chatHistory, editMessage, deleteMessage } = useChatStore()
  const bottomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [chatHistory])
  return {
    bottomRef,
    chatHistory,
    editMessage,
    deleteMessage,
  }
}
