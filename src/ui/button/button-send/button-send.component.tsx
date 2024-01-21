import { SendOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { ButtonSendProps } from '@/ui/button/button-send/button-send.interfaces'
import styles from './button-send.module.css'
export const ButtonSend: FC<ButtonSendProps> = ({ isFocus, isDisabled }) => (
  <button type={'submit'} className={styles.sendButton} disabled={isDisabled}>
    <SendOutlined
      style={{
        fontSize: '16px',
        color: isFocus ? 'rgba(0, 122, 255, 1)' : 'rgba(142, 142, 147, 1)',
      }}
    />
  </button>
)
