import Link from "next/link";

export default function Home() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-cream"
    >
      {/* Decorative bubbles (pure CSS, no red) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-10 top-16 h-40 w-40 rounded-full bg-sodaBlue/25 blur-2xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-10 top-40 h-24 w-24 rounded-full bg-sodaPink/30 blur-xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-20 h-56 w-56 rounded-full bg-sodaGreen/20 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/3 bottom-10 h-16 w-16 rounded-full bg-sodaPink/40 blur-md"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:py-36">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-white px-3 py-1 font-body text-xs font-extrabold uppercase tracking-widest text-gray-900 shadow-[3px_3px_0_#111827]">
            <span aria-hidden className="h-2 w-2 rounded-full bg-sodaPink" />
            Payson, Utah · Pop in anytime
          </span>

          <h1
            id="hero-heading"
            className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl text-balance"
          >
            Live the{" "}
            <span className="bg-gradient-to-r from-sodaBlue to-sodaBlue bg-clip-text text-transparent">
              bubbly
            </span>
            ,<br />
            <span className="bg-gradient-to-r from-sodaPink to-sodaPink bg-clip-text text-transparent">
              fizzy
            </span>{" "}
            Soda Life.
          </h1>

          <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-gray-700 sm:text-xl">
            Handcrafted dirty sodas, warm cookies, and four pinball machines
            humming all day. Come thirsty. Leave hyped.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-gradient-to-r from-sodaBlue to-sodaPink px-6 py-3 font-body text-base font-extrabold text-gray-900 shadow-[4px_4px_0_#111827] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
            >
              See the Menu
              <span aria-hidden>→</span>
            </Link>
            <p className="font-body text-sm font-semibold text-gray-700">
              32+ signature pours · fresh daily
            </p>
          </div>
        </div>

        {/* Floating soda cup — purely decorative */}
        <div aria-hidden className="relative mx-auto hidden h-80 w-72 lg:block">
          <div className="absolute inset-x-10 top-2 h-4 rounded-md bg-gray-900" />
          <div className="absolute left-1/2 top-0 h-10 w-1.5 -translate-x-1/2 rounded bg-gray-900" />
          <div className="absolute inset-x-6 top-6 bottom-0 overflow-hidden rounded-3xl border-[3px] border-gray-900 bg-white shadow-[8px_8px_0_#111827]">
            <div className="absolute inset-x-0 bottom-0 top-[35%] bg-gradient-to-b from-sodaBlue via-sodaPink to-sodaPink" />
            <span className="absolute left-6 top-10 h-5 w-5 rounded-full bg-white/80" />
            <span className="absolute left-14 top-20 h-3 w-3 rounded-full bg-white/70" />
            <span className="absolute right-8 top-16 h-4 w-4 rounded-full bg-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
