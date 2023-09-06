import { Inter } from 'next/font/google'
import './general.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beastiarium',
  description: 'Find your monster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
