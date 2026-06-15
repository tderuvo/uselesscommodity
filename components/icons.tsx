type IconProps = {
  className?: string
}

/** Trophy with downward arrow — Top Performer */
export function TrophyDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path d="M34 16h32v18c0 10-7 18-16 18s-16-8-16-18Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M34 20H22a4 4 0 0 0-4 4c0 10 8 16 16 18M66 20h12a4 4 0 0 1 4 4c0 10-8 16-16 18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <line x1="50" y1="52" x2="50" y2="68" stroke="currentColor" strokeWidth="5" />
      <path d="M38 86h24l-4-12H42Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M50 60 L66 76 M66 76 L66 64 M66 76 L54 76" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Sunburst rays radiating outward — used on the original brand tee */
export function Sunburst({ className, rays = 16 }: IconProps & { rays?: number }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      {Array.from({ length: rays }).map((_, i) => {
        const angle = (360 / rays) * i
        return (
          <rect
            key={i}
            x="97"
            y="0"
            width="6"
            height="92"
            fill="currentColor"
            transform={`rotate(${angle} 100 100)`}
            opacity={i % 2 === 0 ? 0.9 : 0.45}
          />
        )
      })}
    </svg>
  )
}

/** Old television silhouette — Legacy Model */
export function TvIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <rect x="14" y="26" width="72" height="50" rx="6" stroke="currentColor" strokeWidth="5" />
      <circle cx="50" cy="51" r="16" stroke="currentColor" strokeWidth="5" />
      <line x1="74" y1="38" x2="74" y2="38" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="74" cy="38" r="2.5" fill="currentColor" />
      <circle cx="74" cy="50" r="2.5" fill="currentColor" />
      <path d="M40 12 L50 26 L60 12" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 86 L24 96M70 86 L76 96" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}
