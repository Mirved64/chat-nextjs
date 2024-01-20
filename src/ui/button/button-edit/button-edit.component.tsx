import { EditOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { ButtonEditProps } from './button-edit.interfaces'
import styles from './button-edit.module.css'

export const ButtonEdit: FC<ButtonEditProps> = ({ onClick }) => (
  <button className={styles.editButton} onClick={onClick}>
    <EditOutlined style={{ fontSize: '16px', color: 'white' }} />
  </button>
)
