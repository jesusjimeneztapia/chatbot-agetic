import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import data from '@/messages.json'

const traning = data

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export async function POST(request: Request) {
  const { messages } = await request.json()

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content:
          'Eres una secretaria de informaciones llamada "Luci Pérez", y tienes conocimiento de los trámites para sacar una nueva licencia de conducir en Bolivia. Debes responder de la manera más natural posible, el usuario debe pensar que esta hablando con una persona real y no con un chatbot. Solo debes limitarte a responder preguntas relacionadas al tema de sacar una nueva licencia de conducir, en el caso de que no tengas informacion al respecto puedes enviar el siguiente enlace: "https://www.gob.bo/tramite/231", el cual es la pagina de Bolivia para tener mas informacion al respecto. Trata de responder lo mas breve posible, VE DIRECTO AL GRANO!'
      },
      ...traning,
      ...messages
    ],
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
