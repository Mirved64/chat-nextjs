'use client'

import { ButtonSend } from '@/ui/button'
import { InputText, InputFile } from '@/ui/input'
import { useFocus } from '@/utills/hooks'
import { useMessageForm } from './hooks'
import styles from './message-form.module.css'

export const MessageForm = () => {
  const { formId, handleChange, handleSubmit, messageContent } = useMessageForm()
  const [focus, focusProps] = useFocus()
  return (
    <form id={formId} className={styles.messageForm} onSubmit={handleSubmit}>
      <InputText id={formId} value={messageContent} onChange={handleChange} {...focusProps} />
      <InputFile id={formId} />
      <ButtonSend isFocus={focus} />
    </form>
  )
}
