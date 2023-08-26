import { Message } from 'ai'

const messages: Message[] = [
  { id: '1', role: 'user', content: 'Que necesito' },
  {
    id: '1',
    role: 'assistant',
    content: 'Necesitas hacer los siguientes pasos...'
  },
  {
    id: '1',
    role: 'user',
    content: 'Preguntando otra cosa que tenga demasiadas palabras'
  },
  {
    id: '1',
    role: 'assistant',
    content:
      'Lorem ipsum dolor sit amet. Est labore sunt sit facilis enim sit culpa aliquam. Aut commodi officiis est asperiores laboriosam et nostrum dolorem? Id dolores reiciendis est iste officia sit cumque obcaecati.'
  },
  { id: '1', role: 'user', content: 'Que necesito' },
  {
    id: '1',
    role: 'assistant',
    content: 'Necesitas hacer los siguientes pasos...'
  },
  {
    id: '1',
    role: 'user',
    content: 'Preguntando otra cosa que tenga demasiadas palabras'
  },
  {
    id: '1',
    role: 'assistant',
    content:
      'Lorem ipsum dolor sit amet. Est labore sunt sit facilis enim sit culpa aliquam. Aut commodi officiis est asperiores laboriosam et nostrum dolorem? Id dolores reiciendis est iste officia sit cumque obcaecati.'
  },
  { id: '1', role: 'user', content: 'Que necesito' },
  {
    id: '1',
    role: 'assistant',
    content: 'Necesitas hacer los siguientes pasos...'
  },
  {
    id: '1',
    role: 'user',
    content: 'Preguntando otra cosa que tenga demasiadas palabras'
  },
  {
    id: '1',
    role: 'assistant',
    content:
      'Lorem ipsum dolor sit amet. Est labore sunt sit facilis enim sit culpa aliquam. Aut commodi officiis est asperiores laboriosam et nostrum dolorem? Id dolores reiciendis est iste officia sit cumque obcaecati.'
  }
]

export default function Home() {
  return (
    <div className='w-full max-w-5xl mx-auto mt-8 pb-28'>
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
    </div>
  )
}
