type Machine = {
  name: string;
  initials: string;
  tagline: string;
  gradient: string;
};

const machines: Machine[] = [
  {
    name: "John Wick",
    initials: "JW",
    tagline: "Focus. Commitment. Sheer will.",
    gradient: "from-sodaBlue to-sodaGreen",
  },
  {
    name: "Mandalorian",
    initials: "MD",
    tagline: "This is the way.",
    gradient: "from-sodaGreen to-sodaBlue",
  },
  {
    name: "Stranger Things",
    initials: "ST",
    tagline: "Tilt the upside down.",
    gradient: "from-sodaPink to-sodaBlue",
  },
  {
    name: "TMNT",
    initials: "TM",
    tagline: "Cowabunga, dude.",
    gradient: "from-sodaGreen to-sodaPink",
  },
];

export default function Pinball() {
  return (
    <section
      id="pinball"
      aria-labelledby="pinball-heading"
      className="scroll-mt-24 bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-sodaPink px-3 py-1 font-body text-xs font-extrabold uppercase tracking-widest text-gray-900 shadow-[3px_3px_0_#111827]">
            Play while you sip
          </span>
          <h2
            id="pinball-heading"
            className="mt-4 font-heading text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Pinball Lineup
          </h2>
          <p className="mt-2 font-body text-base text-gray-700 sm:text-lg">
            Four Stern Pro machines. Free high-five when you beat the high score.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {machines.map((m) => (
            <li key={m.name}>
              <article className="group flex h-full flex-col items-center gap-3 rounded-2xl border-2 border-gray-900 bg-white p-6 text-center shadow-[6px_6px_0_#111827] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#111827]">
                <div
                  aria-hidden
                  className={`relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-900 bg-gradient-to-br ${m.gradient} shadow-[3px_3px_0_#111827]`}
                >
                  <span className="font-heading text-2xl font-bold text-white drop-shadow">
                    {m.initials}
                  </span>
                </div>
                <span className="inline-flex items-center rounded-full border border-gray-900 bg-cream px-2 py-0.5 font-body text-[10px] font-extrabold uppercase tracking-widest text-gray-900">
                  Stern Pro
                </span>
                <h3 className="font-heading text-xl font-bold text-gray-900">
                  {m.name}
                </h3>
                <p className="font-body text-sm font-semibold text-gray-600">
                  {m.tagline}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
