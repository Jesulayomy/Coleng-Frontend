import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'NUESA FUNAAB',
  description: "Nigerian Universities Engineering Students' Association (NUESA) ",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
