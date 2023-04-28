import { Footer, Navbar } from '../components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <div>
            <Navbar />

            <main id="main">
                {children}
            </main>
            
            <Footer />
        </div>
    )
}
