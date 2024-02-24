import './globals.css';
import toast, { Toaster } from 'react-hot-toast';
import { Open_Sans } from 'next/font/google';


export const inter = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'], variable: "open-sans" });

export const metadata = {
  title: {
    template: '%s | NUESA FUNAAB',
    default: 'NUESA FUNAAB',
  },
  description: "Nigerian Universities Engineering Students' Association (NUESA) ",
  openGraph: {
    images: './image.png',
  },
  additionalMetaTags: [
    { charset: 'utf-8' },
    { name: 'author', content: 'Olaosebikan Emmanuel | Aina Jesulayomi Michael | Victory Icha' },
    {
      name: 'keywords',
      content:
        'NUESA, FUNAAB, Nigerian Universities Engineering Students Association, Federal University of Agriculture, Abeokuta, Engineering, Students, Association, NUESA FUNAAB, COLENG, College of Engineering',
    },
    { name: 'language', content: 'english' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
};
