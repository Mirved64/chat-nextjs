export interface User {
  id: number
  avatar?: string
  isOnline?: boolean
}

export interface Message {
  id: number
  authorId: number
  text?: string
  imageURL?: string | ArrayBuffer | null
  messageDate: string
}
export interface ChatState {
  chatHistory: Message[]
  currentMessage: Message | null
  setCurrentMessage: (message: Message) => void
  currentMessageText: string
  setCurrentMessageText: (text: string) => void
  currentMessageImageURL: string | ArrayBuffer | null
  setCurrentMessageImageURL: (imageURL: string | ArrayBuffer | null) => void
  isSubmit: boolean
  toggleIsSubmit: () => void
  addMessage: (message: Message) => void
  editMessage: (
    message: Message,
    newMessage: string,
    newImageURL: string | ArrayBuffer | null,
  ) => void
  deleteMessage: (message: Message) => void
}
