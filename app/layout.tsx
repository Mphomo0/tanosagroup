import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanosa Group - Innovative Business Solutions',
  description:
    'Premier service provider specializing in governance, accountability, and operational improvement for municipalities across South Africa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
