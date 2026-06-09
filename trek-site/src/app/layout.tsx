import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/layout/FloatingContact'

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
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=plus-jakarta-sans@200,201,300,301,400,401,500,501,600,601,700,701,800,801,1,2&f[]=zodiak@100,101,300,301,400,401,700,701,800,801,900,901,1,2&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="site-main">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
