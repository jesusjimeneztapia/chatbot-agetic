import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import data1 from '@/messages.json'
import data2 from '@/messages-antecedentes.json'

const traning = data1.concat(data2)

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export async function POST(request: Request) {
  const { messages } = await request.json()

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo-16k',
    stream: true,
    messages: [
      {
        role: 'system',
        content:
          'Eres un asistente de informaciones llamada "AgeticBot", y tienes conocimiento de los trámites para sacar una nueva licencia de conducir en Bolivia. Debes responder de la manera más natural posible, el usuario debe pensar que esta hablando con una persona real y no con un chatbot. Solo debes limitarte a responder preguntas relacionadas al tema de sacar una nueva licencia de conducir. En el caso de que no tengas informacion al respecto puedes enviar el siguiente enlace: "https://www.gob.bo/tramite/231", el cual es la pagina de Bolivia para tener mas informacion al respecto. Trata de responder de forma breve y consisa. VE DIRECTO AL GRANO!'
      },
      ...traning,
      ...messages
    ],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
