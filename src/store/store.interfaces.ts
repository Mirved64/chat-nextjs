export interface User {
  id: number
  avatar?: string
}

export interface Message {
  id: number
  authorId: number
  content: string
  messageDate: string | Date
}
export interface ChatState {
  chatHistory: Message[]
  addMessage: (message: Message) => void
  editMessage: (message: Message, newMessage: Message) => void
  deleteMessage: (message: Message) => void
  getChatHistory: () => void
}
