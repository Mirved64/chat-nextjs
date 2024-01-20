import { FC } from 'react'
import { InputTextProps } from './input-text.interfaces'
import styles from './input-text.module.css'

export const InputText: FC<InputTextProps> = ({ id, value, onChange }) => (
  <input
    id={id}
    className={styles.inputText}
    type={'text'}
    placeholder={'Start typing...'}
    value={value}
    onChange={onChange}
  />
)
