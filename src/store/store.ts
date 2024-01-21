import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { ChatState } from './store.interfaces'

export const useChatStore = create<ChatState>()(
  devtools(
    persist(
      (set, get) => ({
        chatHistory: [],
        addMessage: (message) =>
          set((state) => ({
            chatHistory: [...state.chatHistory, message],
          })),
        editMessage: (message, newMessage) => {
          const editChatHistory = get().chatHistory.map((el) =>
            el.id === message.id ? newMessage : el,
          )
          set({ chatHistory: editChatHistory })
        },
        deleteMessage: (message) => {
          set({ chatHistory: get().chatHistory.filter((el) => el.id !== message.id) })
        },
      }),
      {
        name: 'chat-storage',
      },
    ),
  ),
)
