"use client";

import { useEffect, useMemo, useState } from "react";
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
  const chipLabel = section.label.split(" / ")[0];
  return (
    <article
      className={`group flex min-h-[100px] h-full items-stretch gap-[14px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-[14px] shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:ring-2 ${accent.hoverRing}`}
    >
      <div
        aria-hidden
        className="relative h-[72px] w-[72px] shrink-0 self-center overflow-hidden rounded-xl border border-gray-900/10"
        style={{
          background: `linear-gradient(135deg, ${drink.gradient.from}, ${drink.gradient.to})`,
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background:
              "radial-gradient(circle at 18% 18%, rgba(255,255,255,0.3) 0%, transparent 58%)",
          }}
        />
        <span
          className={`absolute left-1 top-1 z-[1] max-w-[calc(100%-8px)] truncate rounded-full border border-gray-900 ${accent.chip} px-1 py-px font-body text-[9px] font-extrabold uppercase leading-tight tracking-wider`}
        >
          {chipLabel}
        </span>
      </div>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-1">
        <div className="min-w-0 flex-1 space-y-0.5">
          <h3 className="font-heading text-[15px] font-semibold leading-snug text-gray-900 sm:text-base">
            {drink.name}
          </h3>
          {drink.base && (
            <p className="font-body text-[10px] font-bold uppercase tracking-wide text-gray-500 [font-variant:small-caps]">
              {drink.base}
            </p>
          )}
          <p className="font-body text-xs leading-[1.4] text-gray-600">
            {drink.flavors}
          </p>
          {drink.note && (
            <p className="font-body text-[11px] italic leading-snug text-gray-500">
              {drink.note}
            </p>
          )}
        </div>
        {drink.price && (
          <p className="shrink-0 pt-1 font-heading text-base font-bold text-sodaGreen">
            {drink.price}
          </p>
        )}
      </div>
    </article>
  );
}

function SectionBlock({
  section,
  isOpen,
  onToggle,
}: {
  section: MenuSection;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const accent = accentStyles[section.accent];
  const drinkCount = section.drinks.length;
  const countLabel = `${drinkCount} drink${drinkCount === 1 ? "" : "s"}`;
  const toggleId = `menu-section-${section.id}-toggle`;
  const panelId = `menu-section-${section.id}-panel`;

  return (
    <section
      aria-label={section.label}
      id={`menu-${section.id}`}
      className="scroll-mt-40"
    >
      <button
        type="button"
        id={toggleId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-2 py-4 text-left transition-colors hover:bg-gray-50 ${
          isOpen ? "border-b border-transparent" : "border-b border-gray-200"
        }`}
      >
        <span className={`h-3 w-3 shrink-0 rounded-full ${accent.dot}`} aria-hidden />
        <span className="min-w-0 flex-1 font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
          {section.label}
        </span>
        <span className="shrink-0 font-body text-sm font-semibold text-gray-600">
          {countLabel}
        </span>
        <svg
          aria-hidden
          className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            id={panelId}
            role="region"
            aria-labelledby={toggleId}
            aria-hidden={!isOpen}
            className="pt-2"
          >
            <p className="mb-4 font-body text-sm text-gray-600">{section.tagline}</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Menu() {
  const [active, setActive] = useState<string>("all");
  const [openBySection, setOpenBySection] = useState<Record<string, boolean>>({});

  const visible = useMemo(
    () => (active === "all" ? MENU : MENU.filter((s) => s.id === active)),
    [active]
  );

  const totalCount = useMemo(
    () => MENU.reduce((sum, s) => sum + s.drinks.length, 0),
    []
  );

  useEffect(() => {
    if (active === "all") {
      setOpenBySection({});
    } else {
      setOpenBySection({ [active]: true });
    }
  }, [active]);

  const toggleSection = (id: string) => {
    setOpenBySection((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
        <div className="sticky top-[72px] z-10 -mx-6 mb-10 bg-cream/95 px-6 py-3">
          <div
            role="tablist"
            aria-label="Filter drinks by base"
            className="flex snap-x gap-2 overflow-x-auto pb-1 [&>*]:snap-start"
          >
            <button
              role="tab"
              aria-selected={active === "all"}
              onClick={() => {
                setActive("all");
                setOpenBySection({});
              }}
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

        <div className="flex flex-col gap-8">
          {visible.map((section) => (
            <SectionBlock
              key={section.id}
              section={section}
              isOpen={!!openBySection[section.id]}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
