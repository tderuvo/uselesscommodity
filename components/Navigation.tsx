const NAV_LINKS = [
  { label: 'Shop', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Custom', href: '#custom' },
  { label: 'Contact', href: '#footer' },
]

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-cream/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="font-display text-xl font-black uppercase tracking-tight text-ink sm:text-2xl">
            Useless<span className="text-orange">Commodity</span>
            <sup className="ml-0.5 text-[10px] font-normal">™</sup>
          </span>
        </a>

        <ul className="hidden items-center gap-7 font-sans text-sm font-semibold uppercase tracking-wide text-ink md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-orange">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#products" className="btn-stamp bg-orange px-4 py-2 text-xs text-cream sm:text-sm">
          Shop Now
        </a>
      </nav>
    </header>
  )
}
