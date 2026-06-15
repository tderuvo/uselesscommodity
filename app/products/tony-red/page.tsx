import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tony & Red — Useless Commodity™',
  description: 'The cult detective series that never existed but somehow everybody remembers.',
}

const QUOTES = ['We solve problems. Usually ours.', 'Crime doesn’t take days off. Neither do we.']

const SHOW_DETAILS = [
  { label: 'Network', value: 'Channel 47 (probably)' },
  { label: 'Original Run', value: '1978–1983' },
  { label: 'Cases Solved', value: 'Debatable' },
  { label: 'Awards', value: 'None officially recognized' },
]

export default function TonyAndRedPage() {
  return (
    <main className="paper-texture min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link href="/" className="font-display text-lg font-black uppercase tracking-tight text-ink">
          Useless<span className="text-orange">Commodity</span>
          <sup className="ml-0.5 text-[10px] font-normal">™</sup>
        </Link>

        <div className="relative mx-auto mt-10 w-full max-w-md -rotate-1">
          <div className="relative aspect-[1088/1445] w-full overflow-hidden border-[3px] border-ink shadow-[10px_12px_0_var(--color-ink)]">
            <Image
              src="/images/tony_red01.png"
              alt="Tony & Red retro poster t-shirt design"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 640px, 90vw"
            />
          </div>
        </div>

        <div className="mt-10">
          <span className="rotate-stamp inline-block border-2 border-rust px-3 py-1 font-stamp text-xs font-bold uppercase tracking-[0.3em] text-rust">
            Now Available
          </span>

          <h1 className="mt-4 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
            Tony &amp; Red
          </h1>

          <p className="mt-2 font-sans text-lg text-ink-soft">
            The cult detective series that never existed but somehow everybody remembers.
          </p>

          <p className="mt-4 font-stamp text-sm uppercase tracking-[0.2em] text-ink-faint">
            &ldquo;One Man. One Dog. Several Poor Decisions.&rdquo;
          </p>

          <div className="mt-6 space-y-4 font-sans leading-relaxed text-ink-soft">
            <p>
              Part crime drama.
              <br />
              Part buddy comedy.
              <br />
              Part questionable life choices.
            </p>
            <p>
              Tony &amp; Red follows veteran detective Tony and his four-legged partner Red as
              they patrol the streets, investigate strange cases, and somehow create more
              problems than they solve.
            </p>
            <p>
              Armed with a Trans Am, a police scanner that mostly picks up static, and instincts
              that are wrong just often enough to be entertaining, they tackle mysteries no
              legitimate agency would touch.
            </p>
            <p>
              The cases are strange.
              <br />
              The suspects are stranger.
              <br />
              And Red is usually the smartest one in the room.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {QUOTES.map((quote) => (
              <blockquote
                key={quote}
                className="border-l-4 border-orange pl-4 font-display text-lg italic text-ink"
              >
                &ldquo;{quote}&rdquo;
              </blockquote>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="font-stamp text-xs font-bold uppercase tracking-[0.3em] text-ink-faint">
              Show Details
            </h2>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-sm text-ink-soft sm:grid-cols-4">
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
