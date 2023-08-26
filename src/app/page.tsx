'use client'

import { Footer } from '@/components/Footer'
import Message from '@/components/Message'
import { useChat } from 'ai/react'

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <>
      <main className='w-full max-w-5xl mx-auto mt-8 pb-28'>
        <section className='flex flex-col gap-7'>
          {messages.map(({ id, role, content }) => (
            <Message key={id} role={role} content={content} />
          ))}
        </section>
      </main>
      <Footer
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}
