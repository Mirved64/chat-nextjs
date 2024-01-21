import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { ChatState } from '@/store/store.interfaces'

const useChatStore = create<ChatState>()(
  devtools(
    persist(
      (set, get) => ({
        chatHistory: [],
        addMessage: (message) => {
          const messages = [...get().chatHistory, message]
          set({ chatHistory: messages })
        },
        editMessage: (message, newMessage) => {
          const editChatHistory = get().chatHistory.map((el) =>
            el.id === message.id ? newMessage : el,
          )
          set({ chatHistory: editChatHistory })
        },
        deleteMessage: (message) => {
          set({ chatHistory: get().chatHistory.filter((el) => el.id === message.id) })
        },
        getChatHistory: () => {
          const localHistory = localStorage.getItem('chat-storage')
          if (localHistory !== null) {
            set({ chatHistory: JSON.parse(localHistory) })
          }
        },
      }),
      {
        name: 'chat-storage',
      },
    ),
  ),
)

export default useChatStore
