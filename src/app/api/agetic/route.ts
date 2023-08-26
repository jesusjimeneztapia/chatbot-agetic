import { NextResponse } from 'next/server'

const URL = 'https%3A%2F%2Fwww.gob.bo%2Ftramite%2F231'

export async function GET() {
  const response = await fetch(
    `https://gob-bo-scraper.vercel.app/details/${URL}`
  )
  const data = await response.json()
  const array = Object.entries(data.details)
  const result = array.flatMap(([answer, response]) => [
    { role: 'user', content: answer },
    {
      role: 'assistant',
      content: (response as string)
        .trim()
        .replace(/ {2,}/g, '')
        .replace(/\\n{2,}/g, '\\n')
        .replace(/(^\\n|\\n$)/g, '')
    }
  ])
  return NextResponse.json(result)
}
