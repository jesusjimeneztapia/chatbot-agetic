import { SendIcon } from '@/icons/SendIcon'

export default function Footer() {
  return (
    <footer className='fixed bottom-0 pb-6 pt-4 bg-white w-full shadow-[0_-6px_6px_rgba(255,255,255,.9)]'>
      <form className='relative w-full max-w-5xl mx-auto'>
        <input
          className='p-4 border border-blue-200 w-full shadow-md rounded-xl focus:outline-blue-500'
          placeholder='Envía un mensaje'
        />
        <button className='absolute right-4 top-1/2 -translate-y-1/2 w-8 h-auto'>
          <SendIcon className='w-8 h-8 text-blue-500' />
        </button>
      </form>
    </footer>
  )
}
