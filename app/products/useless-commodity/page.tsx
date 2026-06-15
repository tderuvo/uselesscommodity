import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Useless Commodity — Useless Commodity™',
  description:
    'The legendary sitcom that somehow ran for six seasons despite nobody being able to explain the plot.',
}

const QUOTES = [
  { quote: 'Trust me.', attribution: 'Vinnie, moments before disaster' },
  { quote: 'I had a better idea yesterday.', attribution: 'Vinnie' },
  { quote: 'How bad could it be?', attribution: 'Also Vinnie' },
]

const SHOW_DETAILS = [
  { label: 'Network', value: 'Channel 12' },
  { label: 'Original Run', value: '1977–1984' },
  { label: 'Occupation', value: 'Entrepreneur (self-described)' },
  { label: 'Successful Businesses', value: '0' },
  { label: 'Bad Ideas', value: 'Too many to count' },
  { label: 'Cult Following', value: 'Unexpectedly large' },
]

export default function UselessCommodityShowPage() {
  return (
    <main className="paper-texture min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link href="/" className="font-display text-lg font-black uppercase tracking-tight text-ink">
          Useless<span className="text-orange">Commodity</span>
          <sup className="ml-0.5 text-[10px] font-normal">™</sup>
        </Link>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <div className="relative aspect-square w-full overflow-hidden border-[3px] border-ink bg-cream-dark shadow-[10px_12px_0_var(--color-ink)]">
            <Image
              src="/images/mockups/vinny01-shirt.png"
              alt="Useless Commodity t-shirt mockup"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 320px, 90vw"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden border-[3px] border-ink bg-cream-dark shadow-[10px_12px_0_var(--color-ink)]">
            <Image
              src="/images/vinny01.png"
              alt="Useless Commodity sitcom poster t-shirt design"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 320px, 90vw"
            />
          </div>
        </div>

        <div className="mt-10">
          <span className="rotate-stamp inline-block border-2 border-rust px-3 py-1 font-stamp text-xs font-bold uppercase tracking-[0.3em] text-rust">
            Now Available
          </span>

          <h1 className="mt-4 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
            Useless Commodity
          </h1>

          <p className="mt-2 font-sans text-lg text-ink-soft">
            The legendary sitcom that somehow ran for six seasons despite nobody being able to
            explain the plot.
          </p>

          <p className="mt-4 font-stamp text-sm uppercase tracking-[0.2em] text-ink-faint">
            &ldquo;Everybody&rsquo;s got a plan. Vinnie&rsquo;s just happen to be terrible.&rdquo;
          </p>

          <div className="mt-6 space-y-4 font-sans leading-relaxed text-ink-soft">
            <p>
              Useless Commodity is a beloved late-70s sitcom about Vinnie DeLuca, an endlessly
              optimistic hustler navigating friendship, work, romance, and one bad idea after
              another. Armed with street smarts, dubious wisdom, and an opinion on everything,
              Vinnie somehow manages to be both the cause of and solution to most of life&rsquo;s
              problems. Set in working-class Montreal, the show became famous for its sharp
              humor, colorful characters, and Vinnie&rsquo;s unforgettable way of describing
              people who should have known better.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {QUOTES.map(({ quote, attribution }) => (
              <blockquote
                key={quote}
                className="border-l-4 border-orange pl-4 font-display text-lg italic text-ink"
              >
                &ldquo;{quote}&rdquo;
                <footer className="mt-1 font-sans text-sm not-italic text-ink-faint">
                  — {attribution}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="font-stamp text-xs font-bold uppercase tracking-[0.3em] text-ink-faint">
              Show Details
            </h2>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-sm text-ink-soft sm:grid-cols-3">
              {SHOW_DETAILS.map((detail) => (
                <div key={detail.label}>
                  <dt className="font-semibold text-ink">{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <Link href="/#products" className="btn-stamp inline-block bg-orange px-6 py-3 text-center text-cream">
              Back to Featured Shirts
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
