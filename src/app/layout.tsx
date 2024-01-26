import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { IoMoonSharp } from 'react-icons/io5'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Country Search',
  description: 'find your country',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <nav className='bg-components grid grid-cols-2  p-5 pl-20 pr-20 bg-slate-400'>

          <Link href="/" className='text-2xl font-bold'>Where in the word?</Link>

          <button className='flex gap-2 flex-row-reverse items-center font-light'>Dark Mode <span><IoMoonSharp /></span></button>

        </nav>

        {children}
      </body>
    </html>
  )
}
