import { ChangeEventHandler } from 'react'

export interface InputFileProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  onFocus: () => void
  onBlur: () => void
}
