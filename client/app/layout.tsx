import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
