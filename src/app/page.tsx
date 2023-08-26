'use client'

import { Footer } from '@/components/Footer'
import Message from '@/components/Message'
import useMessages from '@/hooks/useMessages'

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useMessages()

  return (
    <>
      <main className='w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-4 md:mt-5 pb-24 md:pb-28 lg:pb-32'>
        <section className='flex flex-col gap-4'>
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
