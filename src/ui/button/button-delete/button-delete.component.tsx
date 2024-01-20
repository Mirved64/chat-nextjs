import { DeleteOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { ButtonDeleteProps } from './button-delete.interfaces'
import styles from './button-delete.module.css'

export const ButtonDelete: FC<ButtonDeleteProps> = ({ onClick }) => (
  <button className={styles.deleteButton} onClick={onClick}>
    <DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />
  </button>
)
