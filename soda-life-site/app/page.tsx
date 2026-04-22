import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import Specials from "@/components/Specials";
import Menu from "@/components/Menu";
import Food from "@/components/Food";
import Challenge from "@/components/Challenge";
import Visit from "@/components/Visit";

export default function Home() {
  return (
    <>
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-cream"
    >
      {/* Decorative bubbles (pure CSS, no red) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-sodaBlue/20 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-sodaPink/18 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-sodaGreen/14 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 lg:min-h-[min(560px,78svh)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-36">
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
            Handcrafted dirty sodas, warm cookies, and enough fizz to wake up
            the whole block. Come thirsty. Leave hyped.
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
              150+ drinks · fresh daily
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center lg:justify-end lg:pl-4">
          <HeroVisual />
        </div>
      </div>
    </section>

    <Specials />
    <Menu />
    <Food />
    <Challenge />
    <Visit />
    </>
  );
}
