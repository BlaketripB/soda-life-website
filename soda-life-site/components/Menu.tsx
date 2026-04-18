"use client";

import { useMemo, useState } from "react";
import { MENU, type Drink, type MenuSection } from "@/app/menu-data";

const accentStyles = {
  pink: {
    chip: "bg-sodaPink text-gray-900",
    chipActive: "bg-sodaPink text-gray-900 border-gray-900",
    hoverRing: "hover:ring-sodaPink/50",
    dot: "bg-sodaPink",
  },
  blue: {
    chip: "bg-sodaBlue text-white",
    chipActive: "bg-sodaBlue text-white border-gray-900",
    hoverRing: "hover:ring-sodaBlue/50",
    dot: "bg-sodaBlue",
  },
  green: {
    chip: "bg-sodaGreen text-gray-900",
    chipActive: "bg-sodaGreen text-gray-900 border-gray-900",
    hoverRing: "hover:ring-sodaGreen/50",
    dot: "bg-sodaGreen",
  },
  amber: {
    chip: "bg-amber-300 text-gray-900",
    chipActive: "bg-amber-300 text-gray-900 border-gray-900",
    hoverRing: "hover:ring-amber-400/60",
    dot: "bg-amber-300",
  },
} as const;

function DrinkCard({
  drink,
  section,
}: {
  drink: Drink;
  section: MenuSection;
}) {
  const accent = accentStyles[section.accent];
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:ring-2 ${accent.hoverRing}`}
    >
      <div
        aria-hidden
        className={`relative aspect-[5/3] overflow-hidden bg-gradient-to-br ${section.gradient}`}
      >
        <span className="absolute left-5 top-4 h-6 w-6 rounded-full bg-white/70 blur-[2px]" />
        <span className="absolute right-8 top-12 h-3 w-3 rounded-full bg-white/85" />
        <span className="absolute bottom-5 left-10 h-4 w-4 rounded-full bg-white/75" />
        <span className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/10 to-transparent" />
        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-gray-900 ${accent.chip} px-2 py-0.5 font-body text-[10px] font-extrabold uppercase tracking-widest`}
        >
          {section.label.split(" / ")[0]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="font-heading text-lg font-semibold leading-tight text-gray-900">
          {drink.name}
        </h3>
        {drink.base && (
          <p className="font-body text-xs font-bold uppercase tracking-wide text-gray-500">
            {drink.base}
          </p>
        )}
        <p className="font-body text-sm text-gray-600">{drink.flavors}</p>
        {drink.note && (
          <p className="font-body text-xs italic text-gray-500">{drink.note}</p>
        )}
        {drink.price && (
          <p className="mt-auto pt-3 font-heading text-lg font-bold text-sodaGreen">
            {drink.price}
          </p>
        )}
      </div>
    </article>
  );
}

function SectionBlock({ section }: { section: MenuSection }) {
  const accent = accentStyles[section.accent];
  return (
    <section
      aria-label={section.label}
      id={`menu-${section.id}`}
      className="scroll-mt-40"
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`h-3 w-3 rounded-full ${accent.dot}`} aria-hidden />
          <h3 className="font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
            {section.label}
          </h3>
        </div>
        <p className="font-body text-sm font-semibold text-gray-600">
          {section.tagline} &middot; {section.drinks.length} drinks
        </p>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {section.drinks.map((d) => (
          <li key={`${section.id}-${d.name}`}>
            <DrinkCard drink={d} section={section} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Menu() {
  const [active, setActive] = useState<string>("all");

  const visible = useMemo(
    () => (active === "all" ? MENU : MENU.filter((s) => s.id === active)),
    [active]
  );

  const totalCount = useMemo(
    () => MENU.reduce((sum, s) => sum + s.drinks.length, 0),
    []
  );

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="scroll-mt-24 bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-sodaGreen px-3 py-1 font-body text-xs font-extrabold uppercase tracking-widest text-gray-900 shadow-[3px_3px_0_#111827]">
            The Menu
          </span>
          <h2
            id="menu-heading"
            className="mt-4 font-heading text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Tap. Sip. Smile.
          </h2>
          <p className="mt-2 font-body text-base text-gray-700 sm:text-lg">
            {totalCount} drinks &middot; pick a base to filter, same as Google Maps.
          </p>
        </div>

        {/* Sticky base filter */}
        <div className="sticky top-[72px] z-10 -mx-6 mb-10 bg-cream/90 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
          <div
            role="tablist"
            aria-label="Filter drinks by base"
            className="flex snap-x gap-2 overflow-x-auto pb-1 [&>*]:snap-start"
          >
            <button
              role="tab"
              aria-selected={active === "all"}
              onClick={() => setActive("all")}
              className={`shrink-0 rounded-full border-2 px-4 py-1.5 font-body text-sm font-extrabold transition ${
                active === "all"
                  ? "border-gray-900 bg-gradient-to-r from-sodaBlue via-sodaGreen to-sodaPink text-gray-900 shadow-[3px_3px_0_#111827]"
                  : "border-gray-300 bg-white text-gray-800 hover:border-gray-900"
              }`}
            >
              All
            </button>
            {MENU.map((s) => {
              const isActive = active === s.id;
              const a = accentStyles[s.accent];
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(s.id)}
                  className={`shrink-0 rounded-full border-2 px-4 py-1.5 font-body text-sm font-extrabold transition ${
                    isActive
                      ? `${a.chipActive} shadow-[3px_3px_0_#111827]`
                      : "border-gray-300 bg-white text-gray-800 hover:border-gray-900"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-14">
          {visible.map((section) => (
            <SectionBlock key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
