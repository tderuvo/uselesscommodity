import Image from 'next/image'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden paper-texture">
      <div className="halftone-orange pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30" />
      <div className="halftone pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full opacity-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="order-2 lg:order-1">
          <span className="rotate-stamp mb-5 inline-block border-2 border-rust px-3 py-1 font-stamp text-xs font-bold uppercase tracking-[0.3em] text-rust">
            Est. By Accident
          </span>

          <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Wear the Joke.
          </h1>

          <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-ink-soft">
            Useless Commodity is a small-batch t-shirt label built around one very specific
            inside joke. You&rsquo;ll either get it immediately, or never.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="btn-stamp bg-orange px-7 py-3.5 text-center text-cream">
              Shop the Shirts
            </a>
            <a href="#story" className="btn-stamp bg-cream px-7 py-3.5 text-center text-ink">
              Read the Story
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-md rotate-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden border-[3px] border-ink shadow-[10px_12px_0_var(--color-ink)]">
              <Image
                src="/images/useless-commodity-vince.JPG"
                alt="A friend wearing the original Useless Commodity t-shirt"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 90vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 -rotate-2 border-2 border-ink bg-mustard px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink shadow-[3px_3px_0_var(--color-ink)]">
              The original. Worn unsupervised.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
