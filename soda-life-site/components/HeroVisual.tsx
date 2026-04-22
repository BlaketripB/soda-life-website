/**
 * Hero scene — soft brand clouds + cup and cookie.
 * No outer “sticker card”; sits directly on the cream hero so it scales with the section.
 */
export default function HeroVisual() {
  return (
    <div
      aria-hidden
      className="relative w-full max-w-[min(100%,420px)] shrink-0 select-none motion-safe:animate-hero-float motion-reduce:animate-none lg:max-w-none"
    >
      <svg
        viewBox="0 0 440 300"
        preserveAspectRatio="xMidYMid meet"
        className="h-auto w-full max-h-[min(220px,42vh)] sm:max-h-[min(260px,48vh)] lg:max-h-[min(340px,58vh)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hv-cup" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3BB5F0" />
            <stop offset="48%" stopColor="#FF6FB5" />
            <stop offset="100%" stopColor="#4AD66D" />
          </linearGradient>
          <linearGradient id="hv-cup-shine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="hv-cookie" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#e8d4b8" />
            <stop offset="100%" stopColor="#b8956a" />
          </radialGradient>
        </defs>

        {/* Atmospheric blobs — sit behind everything */}
        <ellipse
          cx={118}
          cy={158}
          rx={118}
          ry={108}
          fill="#3BB5F0"
          opacity={0.2}
          transform="rotate(-14 118 158)"
        />
        <ellipse
          cx={228}
          cy={148}
          rx={102}
          ry={94}
          fill="#FF6FB5"
          opacity={0.18}
          transform="rotate(11 228 148)"
        />
        <ellipse
          cx={318}
          cy={178}
          rx={96}
          ry={86}
          fill="#4AD66D"
          opacity={0.16}
          transform="rotate(-7 318 178)"
        />

        {/* Ground shadow */}
        <ellipse cx={210} cy={258} rx={138} ry={14} fill="#111827" opacity={0.08} />

        {/* Cookie (behind cup base) */}
        <circle cx={298} cy={236} r={26} fill="url(#hv-cookie)" stroke="#111827" strokeWidth={2.5} />
        <circle cx={286} cy={232} r={3.2} fill="#111827" opacity={0.85} />
        <circle cx={308} cy={238} r={3.2} fill="#111827" opacity={0.85} />
        <circle cx={292} cy={248} r={3} fill="#111827" opacity={0.85} />
        <circle cx={304} cy={228} r={2.8} fill="#111827" opacity={0.85} />

        {/* Cup */}
        <rect
          x={158}
          y={118}
          width={108}
          height={138}
          rx={28}
          fill="url(#hv-cup)"
          stroke="#111827"
          strokeWidth={3}
        />
        <rect
          x={168}
          y={128}
          width={28}
          height={118}
          rx={10}
          fill="url(#hv-cup-shine)"
        />
        <path
          d="M 172 188 Q 198 178 212 188 T 252 188"
          fill="none"
          stroke="#ffffff"
          strokeWidth={3}
          strokeLinecap="round"
          opacity={0.45}
        />
        <ellipse
          cx={212}
          cy={118}
          rx={54}
          ry={14}
          fill="#f8fafc"
          stroke="#111827"
          strokeWidth={3}
        />
        <path
          d="M 158 118 Q 212 94 266 118"
          fill="none"
          stroke="#111827"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        <line
          x1={206}
          y1={108}
          x2={222}
          y2={28}
          stroke="#111827"
          strokeWidth={5}
          strokeLinecap="round"
        />
        <line
          x1={205}
          y1={106}
          x2={220}
          y2={34}
          stroke="#fde047"
          strokeWidth={2.5}
          strokeLinecap="round"
        />

        {/* Fizz above cup */}
        {[
          { cx: 178, cy: 72, r: 9 },
          { cx: 204, cy: 48, r: 11 },
          { cx: 232, cy: 64, r: 8 },
          { cx: 248, cy: 38, r: 7 },
          { cx: 196, cy: 28, r: 6 },
        ].map((b, i) => (
          <circle
            key={`fizz-${i}`}
            cx={b.cx}
            cy={b.cy}
            r={b.r}
            fill="rgba(255,255,255,0.9)"
            stroke="#111827"
            strokeWidth={2}
          />
        ))}

        {/* Accent sparkles */}
        <path
          d="M 72 98 L 76 108 L 86 112 L 76 116 L 72 126 L 68 116 L 58 112 L 68 108 Z"
          fill="#ffffff"
          stroke="#111827"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        <path
          d="M 388 198 L 391 205 L 398 208 L 391 211 L 388 218 L 385 211 L 378 208 L 385 205 Z"
          fill="#4AD66D"
          stroke="#111827"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
