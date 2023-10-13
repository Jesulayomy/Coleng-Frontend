import './globals.css'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'NUESA FUNAAB',
  description: "Nigerian Universities Engineering Students' Association (NUESA) ",
  openGraph: {
    images: './image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )  
}
