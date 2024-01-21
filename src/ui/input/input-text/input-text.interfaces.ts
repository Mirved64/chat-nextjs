import { ChangeEventHandler } from 'react'

export interface InputTextProps {
  id: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onFocus: () => void
  onBlur: () => void
}
