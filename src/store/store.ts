import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { ChatState } from './store.interfaces'

export const useChatStore = create<ChatState>()(
  devtools(
    persist(
      (set, get) => ({
        chatHistory: [],
        currentMessage: null,
        currentMessageText: '',
        currentMessageImageURL: null,
        isSubmit: true,
        setCurrentMessage: (message) => set({ currentMessage: message }),
        toggleIsSubmit: () => set((state) => ({ isSubmit: !state.isSubmit })),
        addMessage: (message) =>
          set((state) => ({
            chatHistory: [...state.chatHistory, message],
          })),
        setCurrentMessageText: (text) => set({ currentMessageText: text }),
        setCurrentMessageImageURL: (imageURL) => set({ currentMessageImageURL: imageURL }),
        editMessage: (message, newMessage, newImageURL) => {
          const editChatHistory = get().chatHistory.map((el) =>
            el.id === message.id ? { ...el, text: newMessage, imageURL: newImageURL } : el,
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
