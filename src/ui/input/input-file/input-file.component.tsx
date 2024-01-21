import { FC } from 'react'
import { AtIcon } from '@/ui/icons'
import { InputFileProps } from '@/ui/input/input-file/input-file.interfaces'
import styles from './input-file.module.css'
export const InputFile: FC<InputFileProps> = ({ onChange, onBlur, onFocus }) => (
  <label className={styles.labelInputFile}>
    <AtIcon />
    <input
      className={styles.inputFile}
      type={'file'}
      accept={'.webp, .png, .jpg'}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </label>
)
