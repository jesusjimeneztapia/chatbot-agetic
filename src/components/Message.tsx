/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'

interface Props {
  role: string;
  content: string;
}

const Message: FC<Props> = ({ role, content }) => <article className='flex items-start gap-2'>
    {role !== 'user' && <img className='w-11 rounded-full' src='/icon-chat-bot.png' alt='Chatbot' />}
  <p className={`w-fit max-w-[calc(100%-256px)] py-3 px-4 rounded-xl shadow ${
    role === 'user'
      ? 'bg-gradient-to-r from-zinc-800  to-purple-950 ml-auto text-white'
      : 'text-white bg-zinc-800'
  }`}>{content}</p>
</article>

export default Message
