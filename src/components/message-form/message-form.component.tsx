'use client'

import Image from 'next/image'
import { ButtonSend } from '@/ui/button'
import { Condition } from '@/ui/condition'
import { InputText, InputFile } from '@/ui/input'
import { useFocus } from '@/utills/hooks'
import { useMessageForm } from './hooks'
import styles from './message-form.module.css'

export const MessageForm = () => {
  const {
    formId,
    handleOnChangeText,
    handleOnSubmit,
    currentMessageText,
    handleOnChangeImage,
    currentMessageImageURL,
  } = useMessageForm()
  const [focus, focusProps] = useFocus()
  return (
    <form id={formId} className={styles.messageForm} onSubmit={handleOnSubmit}>
      <InputText
        id={formId}
        value={currentMessageText}
        onChange={handleOnChangeText}
        {...focusProps}
      />
      <InputFile onChange={handleOnChangeImage} {...focusProps} />
      <ButtonSend
        isFocus={focus}
        isDisabled={!Boolean(currentMessageText) && !Boolean(currentMessageImageURL)}
      />
      <Condition match={currentMessageImageURL !== null}>
        <div className={styles.imageWrapper}>
          <Image
            src={typeof currentMessageImageURL === 'string' ? currentMessageImageURL : './next.svg'}
            alt={'upload_img'}
            width={100}
            height={100}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Condition>
    </form>
  )
}
