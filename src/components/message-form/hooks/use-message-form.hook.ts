import dayjs from 'dayjs'
import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useId } from 'react'
import { useChatStore } from '@/store'

export const useMessageForm = (): {
  formId: string
  handleChange: ChangeEventHandler<HTMLInputElement>
  handleSubmit: FormEventHandler<HTMLFormElement>
  messageContent: string
  isSubmit: boolean
} => {
  const formId = useId()
  const {
    addMessage,
    messageContent,
    setMessageContent,
    isSubmit,
    editMessage,
    toggleSubmit,
    currentMessage,
  } = useChatStore()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageContent(event.target.value)
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmit) {
      addMessage({
        id: Number(dayjs()),
        authorId: 1,
        content: messageContent,
        messageDate: dayjs().format('HH:mm A'),
      })
      const botMessage = setTimeout(
        () =>
          addMessage({
            id: Number(dayjs()),
            authorId: 0,
            content: 'Hello World!',
            messageDate: dayjs().format('HH:mm A'),
          }),
        2000,
      )
      setMessageContent('')
      return () => {
        clearTimeout(botMessage)
      }
    } else {
      toggleSubmit()
      currentMessage !== null && editMessage(currentMessage, messageContent)
      setMessageContent('')
    }
  }
  return { formId, handleChange, handleSubmit, messageContent, isSubmit }
}
