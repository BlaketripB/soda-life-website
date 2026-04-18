/**
 * Weekly specials content.
 *
 * To update the specials each week, edit the SPECIALS object below.
 *  - `feature` is the single big card at the top of the section.
 *  - `more` is the array of three smaller cards shown beneath it.
 *    Keep the array at exactly three items so the grid stays balanced.
 *
 * Each card supports:
 *   label        short kicker shown above the title ("Drink of the Week")
 *   title        the special's name
 *   description  one or two sentences describing the special
 *   price        formatted price string (e.g. "$5.25")
 *   meta         small detail shown next to the price ("32 oz", "2p-5p")
 *   accent       which brand color drives the card: "pink" | "blue" | "green"
 *
 * No image/CMS needed — just save the file and redeploy.
 */
const SPECIALS = {
  feature: {
    label: "Drink of the Week",
    title: "Cotton Candy Cloud",
    description:
      "Sprite, cotton candy syrup, vanilla cream, and a blue raspberry drizzle. Fluffy, dreamy, pure magic in a cup.",
    price: "$5.25",
    meta: "32 oz",
    accent: "pink" as const,
  },
  more: [
    {
      label: "Cookie Drop",
      title: "Mint Chip Monster",
      description:
        "Fresh-baked mint cookie stuffed with chocolate chunks. Served warm. Try it as a float.",
      price: "$3.50",
      meta: "each",
      accent: "green" as const,
    },
    {
      label: "Combo Deal",
      title: "After-School Fizz",
      description:
        "Any 24 oz dirty soda plus one cookie, weekdays 2p–5p. The snack attack fixer.",
      price: "$7.00",
      meta: "2p–5p",
      accent: "blue" as const,
    },
    {
      label: "Squad Move",
      title: "Pitcher Party",
      description:
        "96 oz shareable pitcher, pick any three flavors. Perfect after practice or dance.",
      price: "$14.00",
      meta: "serves 4",
      accent: "pink" as const,
    },
  ],
};

type Accent = "pink" | "blue" | "green";

const accentStyles: Record<
  Accent,
  { chip: string; price: string; ring: string; glow: string }
> = {
  pink: {
    chip: "bg-sodaPink",
    price: "text-sodaPink",
    ring: "hover:ring-sodaPink/50",
    glow: "bg-sodaPink/30",
  },
  blue: {
    chip: "bg-sodaBlue text-white",
    price: "text-sodaBlue",
    ring: "hover:ring-sodaBlue/50",
    glow: "bg-sodaBlue/30",
  },
  green: {
    chip: "bg-sodaGreen",
    price: "text-sodaGreen",
    ring: "hover:ring-sodaGreen/50",
    glow: "bg-sodaGreen/30",
  },
};

export default function Specials() {
  const { feature, more } = SPECIALS;
  const f = accentStyles[feature.accent];

  return (
    <section
      id="specials"
      aria-labelledby="specials-heading"
      className="scroll-mt-24 bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-sodaBlue px-3 py-1 font-body text-xs font-extrabold uppercase tracking-widest text-white shadow-[3px_3px_0_#111827]">
            This Week Only
          </span>
          <h2
            id="specials-heading"
            className="mt-4 font-heading text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            This Week's Specials
          </h2>
          <p className="mt-2 font-body text-base text-gray-700 sm:text-lg">
            Rotating weekly. If it's here, it's hot — grab it before it's gone.
          </p>
        </div>

        {/* Wide feature card */}
        <article className="relative overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-[6px_6px_0_#111827]">
          <div className="grid gap-0 sm:grid-cols-[1.1fr_1fr]">
            <div
              aria-hidden
              className="relative min-h-[220px] bg-gradient-to-br from-sodaPink via-sodaBlue to-sodaGreen sm:min-h-[320px]"
            >
              <span className="absolute left-6 top-6 h-10 w-10 rounded-full bg-white/60 blur-[2px]" />
              <span className="absolute right-10 top-16 h-4 w-4 rounded-full bg-white/80" />
              <span className="absolute bottom-8 left-16 h-6 w-6 rounded-full bg-white/70" />
              <span className="absolute bottom-16 right-6 h-3 w-3 rounded-full bg-white/90" />
            </div>

            <div className="flex flex-col justify-center gap-3 p-6 sm:p-10">
              <span
                className={`inline-flex w-fit items-center gap-1 rounded-full border-2 border-gray-900 px-3 py-1 font-body text-xs font-extrabold uppercase tracking-widest text-gray-900 shadow-[3px_3px_0_#111827] ${f.chip}`}
              >
                ★ {feature.label}
              </span>
              <h3 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
                {feature.title}
              </h3>
              <p className="font-body text-base text-gray-700 sm:text-lg">
                {feature.description}
              </p>
              <div className="mt-2 flex items-baseline gap-3">
                <span
                  className={`font-heading text-3xl font-bold ${f.price}`}
                >
                  {feature.price}
                </span>
                <span className="font-body text-sm font-semibold text-gray-500">
                  {feature.meta}
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Three smaller cards */}
        <ul
          role="list"
          className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {more.map((special) => {
            const a = accentStyles[special.accent];
            return (
              <li key={special.title}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:ring-2 ${a.ring}`}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl ${a.glow}`}
                  />
                  <span
                    className={`inline-flex w-fit items-center rounded-full border-2 border-gray-900 px-2.5 py-1 font-body text-[11px] font-extrabold uppercase tracking-widest text-gray-900 ${a.chip}`}
                  >
                    {special.label}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold text-gray-900">
                    {special.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-gray-600">
                    {special.description}
                  </p>
                  <div className="mt-auto flex items-baseline justify-between pt-4">
                    <span className={`font-heading text-xl font-bold ${a.price}`}>
                      {special.price}
                    </span>
                    <span className="font-body text-xs font-semibold text-gray-500">
                      {special.meta}
                    </span>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
