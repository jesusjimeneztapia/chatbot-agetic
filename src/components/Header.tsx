/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header className='py-8 px-4 border-b border-gray-500/50 bg-zinc-700   '>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-medium text-gray-50 text-center'>
          AGETICBOT
        </h1>
        <img
          src='./icon-chat-bot.png'
          alt='Logo'
          className='mx-auto mt-4 w-16 sm:w-32 rounded-full border border-gray-600'
        />
      </div>
    </header>
  )
}
