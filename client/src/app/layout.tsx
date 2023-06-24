import Header from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { ReactQueryProvider } from './reactQueryProvider'
import { Provider } from '@/context/LoggedState'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Películas y series',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  )
}
