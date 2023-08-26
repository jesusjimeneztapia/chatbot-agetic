import { SendIcon } from '@/icons/SendIcon'
import { ChangeEvent, FC, FormEvent } from 'react'

interface Props {
  input: string
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: any | undefined
  ) => void
}

const Footer: FC<Props> = ({ input, handleInputChange, handleSubmit }) => {
  return (
    <footer className='fixed bottom-0 pb-6 pt-4 bg-zinc-700 w-full shadow-[0_-6px_6px_rgba(50,50,50,.9)]'>
      <form className='relative w-full max-w-5xl mx-auto' onSubmit={handleSubmit}>
        <input
          className='p-4 border border-blue-200 w-full shadow-md rounded-xl focus:outline-blue-500'
          placeholder='Envía un mensaje'
          value={input}
          onChange={handleInputChange}
        />
        <button className='absolute right-4 top-1/2 -translate-y-1/2 w-8 h-auto' type='submit'>
          <SendIcon className='w-8 h-8 text-purple-950' />
        </button>
      </form>
    </footer>
  )
}

export { Footer }
