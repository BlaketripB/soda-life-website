type Challenge = {
  name: string;
  slogan: string;
  size: string;
  gradient: string;
};

const challenges: Challenge[] = [
  {
    name: "The Sugar Rush",
    slogan: "Brain freeze optional.",
    size: "44 oz",
    gradient: "from-sodaPink via-sodaPink to-sodaBlue",
  },
  {
    name: "Arctic Blast",
    slogan: "Colder than your ex's heart.",
    size: "32 oz",
    gradient: "from-sodaBlue via-cyan-400 to-sodaPink",
  },
  {
    name: "Tropical Typhoon",
    slogan: "Bring a lifejacket.",
    size: "44 oz",
    gradient: "from-sodaPink via-pink-300 to-sodaBlue",
  },
  {
    name: "Rainbow Riot",
    slogan: "Seven flavors. One cup.",
    size: "64 oz",
    gradient: "from-sodaBlue via-sodaPink to-sodaBlue",
  },
];

export default function Challenge() {
  return (
    <section
      id="challenge"
      aria-labelledby="challenge-heading"
      className="scroll-mt-24 bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-sodaPink px-3 py-1 font-body text-xs font-extrabold uppercase tracking-widest text-gray-900 shadow-[3px_3px_0_#111827]">
            Dare ya
          </span>
          <h2
            id="challenge-heading"
            className="mt-4 font-heading text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Challenge Drinks
          </h2>
          <p className="mt-2 font-body text-base text-gray-700 sm:text-lg">
            Big pours. Bold names. Bragging rights.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {challenges.map((c) => (
            <li key={c.name}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-900 bg-gradient-to-br ${c.gradient} p-6 shadow-[6px_6px_0_#111827] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#111827]`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/25 blur-xl"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-4 left-6 h-8 w-8 rounded-full bg-white/30"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-8 top-20 h-3 w-3 rounded-full bg-white/60"
                />

                <span className="inline-flex w-fit items-center gap-1 rounded-full border-2 border-gray-900 bg-white px-2.5 py-1 font-body text-[11px] font-extrabold uppercase tracking-widest text-gray-900">
                  {c.size}
                </span>

                <h3 className="mt-10 font-heading text-3xl font-bold leading-tight text-white drop-shadow-sm sm:text-4xl">
                  {c.name}
                </h3>
                <p className="mt-2 font-body text-base font-semibold text-white/95">
                  {c.slogan}
                </p>

                <span className="relative z-10 mt-auto inline-flex w-fit items-center gap-1.5 self-start rounded-full border-2 border-gray-900 bg-cream px-3 py-1.5 font-body text-xs font-extrabold uppercase tracking-wider text-gray-900 shadow-[3px_3px_0_#111827]">
                  <span aria-hidden>★</span>
                  Take the Challenge
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
