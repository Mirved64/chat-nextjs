import dayjs from 'dayjs'
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useId,
  useState,
} from 'react'
import { useChatStore } from '@/store'

export const useMessageForm = (): {
  formId: string
  handleChange: ChangeEventHandler<HTMLInputElement>
  handleSubmit: FormEventHandler<HTMLFormElement>
  messageText: string
} => {
  const [messageText, setMessageText] = useState<string>('')
  const formId = useId()
  const { addMessage } = useChatStore()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageText(event.target.value)
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addMessage({
      id: Number(dayjs()),
      authorId: 1,
      content: messageText,
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
    setMessageText('')
    return () => {
      clearTimeout(botMessage)
    }
  }
  return { formId, handleChange, handleSubmit, messageText }
}
