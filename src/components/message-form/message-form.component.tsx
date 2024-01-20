'use client'

import { useId, useState } from 'react'
import { ButtonSend } from '@/ui/button'
import { InputText } from '@/ui/input'
import { InputFile } from '@/ui/input/input-file'
import styles from './message-form.module.css'

export const MessageForm = () => {
  const [currentText, setCurrentText] = useState<string>('')
  const formId = useId()
  return (
    <form id={formId} className={styles.messageForm}>
      <InputText id={formId} value={currentText} onChange={(e) => setCurrentText(e.target.value)} />
      <InputFile id={formId} />
      <ButtonSend />
    </form>
  )
}
