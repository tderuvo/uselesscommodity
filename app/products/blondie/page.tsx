import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blondie — Useless Commodity™',
  description: 'A fictitious 70s/80s detective show that never existed but somehow feels like it did.',
}

const DETAILS = [
  'Vintage detective TV show style',
  'Retro distressed t-shirt graphic',
  'Inspired by 70s/80s crime drama energy',
  'Perfect for philosophers, cynics, cousins, and people who have seen too much',
]

export default function BlondiePage() {
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
              src="/images/mockups/blondie01-shirt.png"
              alt="Blondie t-shirt mockup"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 320px, 90vw"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden border-[3px] border-ink bg-cream-dark shadow-[10px_12px_0_var(--color-ink)]">
            <Image
              src="/images/blondie01.png"
              alt="Blondie retro detective show t-shirt design"
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
            Blondie
          </h1>

          <p className="mt-2 font-sans text-lg text-ink-soft">
            A fictitious 70s/80s detective show that never existed but somehow feels like it did.
          </p>

          <div className="mt-6 space-y-4 font-sans leading-relaxed text-ink-soft">
            <p>
              Blondie is the hard-nosed street philosopher of late-night television. He walks
              into every bad situation with a crooked stare, a wrinkled jacket, and one
              unforgettable worldview: &ldquo;Life is a hole.&rdquo;
            </p>
            <p>
              Part detective. Part philosopher. Part guy who definitely knows a place that&rsquo;s
              still open after midnight.
            </p>
            <p>
              This shirt celebrates the lost TV classic that was never cancelled because it was
              never approved.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="font-stamp text-xs font-bold uppercase tracking-[0.3em] text-ink-faint">
              Details
            </h2>
            <ul className="mt-3 space-y-2 font-sans text-sm text-ink-soft">
              {DETAILS.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="text-orange">—</span>
                  {detail}
                </li>
              ))}
            </ul>
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
