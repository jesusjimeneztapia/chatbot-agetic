/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header className='py-2 px-3 sm:p-4 md:py-5 md:px-6 lg:py-6 lg:px-8 border-b border-gray-500/50 bg-zinc-700   '>
      <div className='container mx-auto flex flex-col sm:gap-2 md:gap-4'>
        <h1 className='text-2xl font-medium text-gray-50 text-center'>
          AGETICBOT
        </h1>
        <img
          src='./icon-chat-bot.png'
          alt='Logo'
          className='mx-auto w-12 sm:w-16 md:w-20 lg:w-24 rounded-full border border-gray-600'
        />
      </div>
    </header>
  )
}
