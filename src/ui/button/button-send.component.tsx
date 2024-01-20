import { SendOutlined } from '@ant-design/icons'
import styles from './send-button.module.css'
export const ButtonSend = () => (
  <button type={'submit'} className={styles.sendButton}>
    <SendOutlined style={{ fontSize: '16px' }} />
  </button>
)
