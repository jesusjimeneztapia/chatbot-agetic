import { useChat } from 'ai/react'
import { useEffect } from 'react'

export default function useMessages() {
  const {
    messages,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setMessages
  } = useChat()

  useEffect(() => {
    if (!isLoading) {
      if (messages?.length > 0) {
        return localStorage.setItem('messages', JSON.stringify(messages))
      }
      const data = localStorage.getItem('messages')
      if (data != null) {
        setMessages(JSON.parse(data))
      }
    }
  }, [setMessages, messages, isLoading])

  return { messages, input, isLoading, handleInputChange, handleSubmit }
}
