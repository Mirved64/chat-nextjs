import { MouseEventHandler } from 'react'

export interface MessageProps {
  text?: string
  imageURL?: string | ArrayBuffer | null
  date: string
  editMessage?: MouseEventHandler<HTMLButtonElement>
  deleteMessage?: MouseEventHandler<HTMLButtonElement>
}
