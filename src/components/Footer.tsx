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
    <footer className='fixed bottom-0 py-4 md:py-5 lg:py-7 bg-zinc-700 w-full'>
      <form
        className='relative w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-5 lg:px-8'
        onSubmit={handleSubmit}
      >
        <input
          className='py-2 pl-4 pr-10 md:py-3 md:pl-5 md:pr-12 lg:pl-6 border border-purple-200 w-full rounded-xl focus:outline-purple-500'
          placeholder='Envía un mensaje'
          value={input}
          onChange={handleInputChange}
        />
        <button
          className='absolute right-6 md:right-9 lg:right-12 top-1/2 -translate-y-1/2 w-auto'
          type='submit'
        >
          <SendIcon className='w-5 md:w-6 text-purple-950' />
        </button>
      </form>
    </footer>
  )
}

export { Footer }
