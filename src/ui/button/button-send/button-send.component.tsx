import { SendOutlined } from '@ant-design/icons'
import styles from './button-send.module.css'
export const ButtonSend = () => (
  <button type={'submit'} className={styles.sendButton}>
    <SendOutlined style={{ fontSize: '16px' }} />
  </button>
)
