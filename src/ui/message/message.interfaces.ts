import { MouseEventHandler } from 'react'

export interface MessageProps {
  text: string
  date: string
  editMessage?: MouseEventHandler<HTMLButtonElement>
  deleteMessage?: MouseEventHandler<HTMLButtonElement>
}
