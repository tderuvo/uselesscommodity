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
  title: 'Useless Commodity™ — Congratulations. You Have Been Classified.',
  description:
    "A satirical retro lifestyle brand for everyone who suspects modern life has become slightly ridiculous. We're not here to fix society. We're here to put it on a t-shirt.",
  keywords: [
    'satirical t-shirts',
    'retro brand',
    'corporate satire',
    'anti-hustle culture',
    'vintage graphic tees',
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
