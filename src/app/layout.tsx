import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chatbot AGETIC',
  description:
    'Un chatbot que ayuda a realizar trámites de para sacar licencia de conducir en Bolivia'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body className={`${inter.className} bg-zinc-600`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
