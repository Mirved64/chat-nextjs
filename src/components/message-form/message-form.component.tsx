'use client'

import { ButtonSend } from '@/ui/button'
import { InputText, InputFile } from '@/ui/input'
import { useMessageForm } from './hooks'
import styles from './message-form.module.css'

export const MessageForm = () => {
  const { formId, handleChange, handleSubmit, messageText } = useMessageForm()
  return (
    <form id={formId} className={styles.messageForm} onSubmit={handleSubmit}>
      <InputText id={formId} value={messageText} onChange={handleChange} />
      <InputFile id={formId} />
      <ButtonSend />
    </form>
  )
}
