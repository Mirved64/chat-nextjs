export interface User {
  id: number
  avatar?: string
  isOnline?: boolean
}

export interface Message {
  id: number
  authorId: number
  content: string
  messageDate: string
}
export interface ChatState {
  chatHistory: Message[]
  addMessage: (message: Message) => void
  editMessage: (message: Message, newMessage: Message) => void
  deleteMessage: (message: Message) => void
}
