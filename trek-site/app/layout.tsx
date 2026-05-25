import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Nepal Hiking Partner',
  description: 'Premium trekking and hiking experiences in Nepal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ 
        minHeight: '100vh', 
        background: '#081422', 
        display: 'flex', 
        flexDirection: 'column',
        margin: 0,
        padding: 0
      }}>
        <Navbar />
        <main style={{ flex: 1, marginTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
