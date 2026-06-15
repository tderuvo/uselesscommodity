const LINKS = [
  { label: 'Shop', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Custom Shirts', href: '#custom' },
  { label: 'Contact', href: '#footer' },
]

export default function Footer() {
  return (
    <footer id="footer" className="border-t-4 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <span className="font-display text-2xl font-black uppercase tracking-tight">
              Useless<span className="text-orange">Commodity</span>
              <sup className="ml-0.5 text-[10px] font-normal">™</sup>
            </span>
            <p className="mt-2 font-sans text-sm text-cream/70">
              Turning people into products since never.
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-sm font-semibold uppercase tracking-wide text-cream/75">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 border-t-2 border-cream/10 pt-6 text-center font-sans text-xs text-cream/40">
          © {new Date().getFullYear()} Useless Commodity™. All rights reserved, probably.
        </p>
      </div>
    </footer>
  )
}
