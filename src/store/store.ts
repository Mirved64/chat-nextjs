import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { ChatState } from './store.interfaces'

export const useChatStore = create<ChatState>()(
  devtools(
    persist(
      (set, get) => ({
        chatHistory: [],
        currentMessage: null,
        messageContent: '',
        setCurrentMessage: (message) => set({ currentMessage: message }),
        isSubmit: true,
        toggleSubmit: () => set((state) => ({ isSubmit: !state.isSubmit })),
        addMessage: (message) =>
          set((state) => ({
            chatHistory: [...state.chatHistory, message],
          })),
        setMessageContent: (content) => set({ messageContent: content }),
        editMessage: (message, newMessage) => {
          const editChatHistory = get().chatHistory.map((el) =>
            el.id === message.id ? { ...el, content: newMessage } : el,
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
