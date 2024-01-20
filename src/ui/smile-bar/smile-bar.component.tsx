import { SmileOutlined } from '@ant-design/icons'
import styles from './smile-bar.module.css'

export const SmileBar = () => (
  <div className={styles.smileWrapper}>
    <SmileOutlined style={{ width: '16px', height: '16px' }} />
  </div>
)
