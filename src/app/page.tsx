'use client'

import { Footer } from '@/components/Footer'
import { useChat } from 'ai/react'

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <>
      <main className='w-full max-w-5xl mx-auto mt-8 pb-28'>
        <section className='flex flex-col gap-7'>
          {messages.map(({ id, role, content }) => (
            <article
              key={id}
              className={`w-fit max-w-[calc(100%-256px)] p-2 rounded-xl shadow ${
                role === 'user'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 ml-auto'
                  : 'border border-gray-600'
              }`}
            >
              {content}
            </article>
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
