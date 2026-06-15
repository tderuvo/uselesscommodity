export default function CustomCommodity() {
  return (
    <section id="custom" className="relative overflow-hidden border-y-4 border-ink bg-orange py-16 text-center sm:py-20">
      <div className="halftone pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-15" />
      <div className="halftone pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full opacity-15" />

      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <h2 className="font-display text-3xl font-black leading-tight text-ink sm:text-4xl md:text-5xl">
          Upload your photo.
          <br />
          Become a Useless Commodity.
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-lg text-ink/80">
          We&rsquo;ll turn it into a shirt. No forms, no fuss.
        </p>
        <a href="#footer" className="btn-stamp mt-8 inline-block bg-ink px-8 py-3.5 text-cream">
          Get Started
        </a>
      </div>
    </section>
  )
}
