import type { Metadata } from 'next'
import { Bitter, Work_Sans, Special_Elite } from 'next/font/google'
import './globals.css'

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['500', '700', '800', '900'],
  variable: '--font-bitter',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans',
  display: 'swap',
})

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-special-elite',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Useless Commodity™ — Wear the Joke.',
  description:
    "Useless Commodity is a small-batch t-shirt label built around one very specific inside joke. You'll either get it immediately, or never.",
  keywords: [
    'indie t-shirt brand',
    'retro graphic tees',
    'inside joke shirts',
    'screen printed t-shirts',
    'custom t-shirts',
    'Useless Commodity',
  ],
  openGraph: {
    title: 'Useless Commodity™',
    description: 'Turning people into products since never.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bitter.variable} ${workSans.variable} ${specialElite.variable} antialiased`}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
