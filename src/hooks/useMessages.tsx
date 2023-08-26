import { useChat } from 'ai/react'
import { useEffect } from 'react'

export default function useMessages() {
  const { messages, input, handleInputChange, handleSubmit, setMessages } =
    useChat()

  useEffect(() => {
    if (messages?.length > 0) {
      const lastMessages = messages.reverse().slice(0, 20)
      return localStorage.setItem('messages', JSON.stringify(lastMessages))
    }
    const data = localStorage.getItem('messages')
    if (data != null) {
      setMessages(JSON.parse(data))
    }
  }, [setMessages, messages])

  return { messages, input, handleInputChange, handleSubmit }
}
