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
  currentMessage: Message | null
  setCurrentMessage: (message: Message) => void
  messageContent: string
  setMessageContent: (content: string) => void
  isSubmit: boolean
  toggleSubmit: () => void
  addMessage: (message: Message) => void
  editMessage: (message: Message, newMessage: string) => void
  deleteMessage: (message: Message) => void
}
