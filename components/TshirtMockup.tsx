import type { ReactNode } from 'react'

type TshirtMockupProps = {
  shirtFill: string
  inkColor: string
  icon?: ReactNode
  image?: { src: string; alt: string }
  label?: string
  sublabel?: string
  rotateClass?: string
}

/**
 * A screen-printed-tee mockup built from SVG primitives so the catalog
 * doesn't depend on external image assets — unless a real `image` is
 * supplied, in which case it's shown as the print on the shirt.
 */
export default function TshirtMockup({
  shirtFill,
  inkColor,
  icon,
  image,
  label,
  sublabel,
  rotateClass = '',
}: TshirtMockupProps) {
  return (
    <div className={`relative aspect-[4/5] w-full ${rotateClass}`}>
      <svg viewBox="0 0 200 220" className="h-full w-full drop-shadow-[6px_8px_0_rgba(34,28,23,0.12)]">
        {/* shirt body */}
        <path
          d="M20,32 L68,10 Q100,30 132,10 L180,32 L180,78 L143,60 L143,212 L57,212 L57,60 L20,78 Z"
          fill={shirtFill}
          stroke="var(--color-ink)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* collar tag */}
        <rect x="94" y="14" width="12" height="8" fill="var(--color-rust)" opacity="0.7" />

        {image ? (
          <foreignObject x="58" y="58" width="84" height="148">
            <div className="flex h-full w-full items-center justify-center" style={{ backgroundColor: shirtFill }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt} className="h-full w-full object-contain" />
            </div>
          </foreignObject>
        ) : (
          <>
            {/* graphic */}
            <g transform="translate(64 78)" color={inkColor}>
              <foreignObject width="72" height="72">
                <div className="flex h-full w-full items-center justify-center">{icon}</div>
              </foreignObject>
            </g>
            {/* printed label */}
            <text
              x="100"
              y="172"
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontWeight="800"
              fontSize="15"
              fill={inkColor}
              letterSpacing="0.5"
            >
              {label}
            </text>
            {sublabel && (
              <text
                x="100"
                y="188"
                textAnchor="middle"
                fontFamily="var(--font-stamp)"
                fontSize="9"
                fill={inkColor}
                letterSpacing="2"
                opacity="0.75"
              >
                {sublabel}
              </text>
            )}
          </>
        )}

        {/* worn texture flecks */}
        <circle cx="76" cy="150" r="1.4" fill="var(--color-ink)" opacity="0.08" />
        <circle cx="128" cy="195" r="2" fill="var(--color-ink)" opacity="0.06" />
        <circle cx="62" cy="190" r="1" fill="var(--color-ink)" opacity="0.08" />
      </svg>
    </div>
  )
}
