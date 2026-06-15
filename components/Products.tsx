import Link from 'next/link'
import TshirtMockup from './TshirtMockup'
import { Sunburst, TrophyDownIcon, TvIcon } from './icons'

const PRODUCTS = [
  {
    name: 'Tony & Red',
    blurb: 'Seattle’s most unconventional detective team.',
    price: '$34',
    shirtFill: 'var(--color-cream-dark)',
    image: { src: '/images/tony_red01.png', alt: 'Tony & Red retro poster t-shirt design' },
    rotate: '-rotate-1',
    href: '/products/tony-red',
  },
  {
    name: 'Blondie',
    blurb: 'A hard-nosed philosophical detective who knows one thing for sure: life is a hole.',
    price: '$34',
    shirtFill: 'var(--color-ink)',
    image: { src: '/images/blondie01.png', alt: 'Blondie retro detective show t-shirt design' },
    rotate: 'rotate-1',
    href: '/products/blondie',
  },
  {
    name: 'Useless Commodity',
    blurb: 'The one that started it all.',
    price: '$32',
    shirtFill: 'var(--color-ink)',
    inkColor: 'var(--color-cream)',
    icon: <Sunburst rays={16} className="h-12 w-12" />,
    sublabel: 'EST. NEVER',
    rotate: 'rotate-1',
  },
  {
    name: 'Top Performer',
    blurb: 'Exceeded expectations. Compensation unchanged.',
    price: '$34',
    shirtFill: 'var(--color-cream-dark)',
    inkColor: 'var(--color-rust)',
    icon: <TrophyDownIcon className="h-12 w-12" />,
    sublabel: 'Q3 RESULTS',
    rotate: '-rotate-1',
  },
  {
    name: 'Legacy Model',
    blurb: 'Discontinued. Still kicking.',
    price: '$34',
    shirtFill: 'var(--color-ink)',
    inkColor: 'var(--color-cream)',
    icon: <TvIcon className="h-12 w-12" />,
    sublabel: 'DISCONTINUED 1994',
    rotate: 'rotate-1',
  },
]

export default function Products() {
  return (
    <section id="products" className="paper-texture py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="rotate-stamp inline-block border-2 border-ink px-3 py-1 font-stamp text-xs font-bold uppercase tracking-[0.3em] text-ink">
            Now Available
          </span>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
            Featured Shirts
          </h2>
          <p className="mt-3 font-sans text-ink-soft">
            Small runs. Screen-printed. Restocked whenever we remember to.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => {
            const card = (
              <>
                <div className="mb-4">
                  <TshirtMockup
                    shirtFill={product.shirtFill}
                    inkColor={product.inkColor ?? 'var(--color-ink)'}
                    icon={product.icon}
                    image={product.image}
                    label={product.name.toUpperCase()}
                    sublabel={product.sublabel}
                    rotateClass={product.rotate}
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
                <p className="mt-1 flex-1 font-sans text-sm text-ink-soft">{product.blurb}</p>
              </>
            )

            return (
              <div key={product.name} className="flex flex-col">
                {product.href ? (
                  <Link href={product.href} className="flex flex-1 flex-col transition-opacity hover:opacity-80">
                    {card}
                  </Link>
                ) : (
                  card
                )}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-display text-xl font-black text-ink">{product.price}</span>
                  <button type="button" className="btn-stamp bg-orange px-4 py-2 text-xs text-cream">
                    Add to Cart
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
