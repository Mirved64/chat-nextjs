'use client'

import dayjs from 'dayjs'
import { ChangeEvent, FormEvent, useId, useState } from 'react'
import { useChatStore } from '@/store'
import { ButtonSend } from '@/ui/button'
import { InputText, InputFile } from '@/ui/input'
import { useDebounce } from '@/utills/hooks'
import styles from './message-form.module.css'

export const MessageForm = () => {
  const [currentText, setCurrentText] = useState<string>('')
  const formId = useId()
  const debouncedText = useDebounce(currentText, 500)
  const { addMessage, chatHistory } = useChatStore()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value)
  }
  const messageId = () => {
    if (!chatHistory[chatHistory.length - 1]) return 0
    return chatHistory[chatHistory.length - 1].id + 1
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addMessage({
      id: messageId(),
      authorId: 1,
      content: debouncedText,
      messageDate: dayjs().format('HH:mm A'),
    })
    setTimeout(
      () =>
        addMessage({
          id: messageId(),
          authorId: 0,
          content: 'Hello World!',
          messageDate: dayjs().format('HH:mm A'),
        }),
      1000,
    )
    setCurrentText('')
  }
  return (
    <form id={formId} className={styles.messageForm} onSubmit={handleSubmit}>
      <InputText id={formId} value={currentText} onChange={handleChange} />
      <InputFile id={formId} />
      <ButtonSend />
    </form>
  )
}
