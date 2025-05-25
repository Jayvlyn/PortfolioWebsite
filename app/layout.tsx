import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio Website',
  description: 'My professional portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-background text-text ${comfortaa.className}`}>
        <Navbar />
        <main className="pt-16 transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  )
} 