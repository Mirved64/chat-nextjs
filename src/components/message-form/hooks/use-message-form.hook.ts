import dayjs from 'dayjs'
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useId,
  useState,
} from 'react'
import { useChatStore } from '@/store'

export const useMessageForm = (): {
  formId: string
  handleOnChangeText: ChangeEventHandler<HTMLInputElement>
  handleOnSubmit: FormEventHandler<HTMLFormElement>
  currentMessageText: string
  handleOnChangeImage: ChangeEventHandler<HTMLInputElement>
  currentMessageImageURL: string | ArrayBuffer | null
} => {
  const formId = useId()
  const {
    addMessage,
    currentMessageText,
    setCurrentMessageText,
    isSubmit,
    editMessage,
    toggleIsSubmit,
    currentMessage,
    currentMessageImageURL,
    setCurrentMessageImageURL,
  } = useChatStore()
  const [_, setImage] = useState<File | null>(null)
  const [imageURL, setImageURL] = useState<string | ArrayBuffer | null>(null)
  const fileReader = new FileReader()
  fileReader.onloadend = () => {
    setImageURL(fileReader.result)
    setCurrentMessageImageURL(fileReader.result)
  }
  const handleOnChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentMessageText(event.target.value)
  }
  const handleOnChangeImage: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    if (event.currentTarget.files && event.currentTarget.files.length) {
      const file = event.currentTarget.files[0]
      fileReader.readAsDataURL(file)
      setImage(file)
    }
  }
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmit) {
      addMessage({
        id: Number(dayjs()),
        authorId: 1,
        text: currentMessageText,
        imageURL: imageURL,
        messageDate: dayjs().format('HH:mm A'),
      })
      const botMessage = setTimeout(
        () =>
          addMessage({
            id: Number(dayjs()),
            authorId: 0,
            text: 'Hello World!',
            messageDate: dayjs().format('HH:mm A'),
          }),
        2000,
      )
      setImageURL(null)
      setCurrentMessageImageURL(null)
      setCurrentMessageText('')
      return () => {
        clearTimeout(botMessage)
      }
    } else {
      if (currentMessage !== null) {
        editMessage(currentMessage, currentMessageText, currentMessageImageURL)
        setImageURL(null)
        setCurrentMessageImageURL(null)
        setCurrentMessageText('')
        toggleIsSubmit()
      }
    }
  }
  return {
    formId,
    handleOnChangeText,
    handleOnSubmit,
    currentMessageText,
    handleOnChangeImage,
    currentMessageImageURL,
  }
}
