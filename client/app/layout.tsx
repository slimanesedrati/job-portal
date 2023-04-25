import { Footer, Navbar } from './components'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Job portal',
  description: 'Job portal platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-light`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
