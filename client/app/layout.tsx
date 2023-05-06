// import { Footer, Navbar } from './components'
import './globals.css'
import { Poppins } from 'next/font/google'

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
      <body className={`${font.className}`}>
        {/* <Navbar /> */}
        {/* <main id="main"> */}
          {children}
        {/* </main> */}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
