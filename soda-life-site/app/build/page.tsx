import type { Metadata } from "next";
import Link from "next/link";
import {
  BUILD_CATEGORIES,
  BUILD_FOOTER_NOTE,
  CUP_SIZES,
  type BuildCategory,
} from "@/app/build-data";

export const metadata: Metadata = {
  title: "Build Your Own Drink — Soda Life",
  description:
    "Mix any combination of syrups, fresh fruit, and purees. See cup sizes and add-on pricing for your custom dirty soda.",
};

const accentStyles = {
  pink: {
    chip: "bg-sodaPink text-gray-900",
    dot: "bg-sodaPink",
    sectionBadge: "bg-sodaPink",
  },
  blue: {
    chip: "bg-sodaBlue text-white",
    dot: "bg-sodaBlue",
    sectionBadge: "bg-sodaBlue text-white",
  },
  green: {
    chip: "bg-sodaGreen text-gray-900",
    dot: "bg-sodaGreen",
    sectionBadge: "bg-sodaGreen",
  },
  amber: {
    chip: "bg-amber-300 text-gray-900",
    dot: "bg-amber-300",
    sectionBadge: "bg-amber-300",
  },
} as const;

function FlavorChip({
  name,
  price,
  accent,
}: {
  name: string;
  price: string;
  accent: BuildCategory["accent"];
}) {
  const a = accentStyles[accent];
  return (
    <li>
      <span className="flex h-full flex-col items-center justify-center gap-1 rounded-2xl border-2 border-gray-900 bg-white px-3 py-3 text-center shadow-[3px_3px_0_#111827] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#111827]">
        <span className="font-body text-sm font-semibold leading-snug text-gray-900">
          {name}
        </span>
        <span
          className={`rounded-full border border-gray-900 px-2 py-0.5 font-body text-[11px] font-extrabold ${a.chip}`}
        >
          {price}
        </span>
      </span>
    </li>
  );
}

function CategorySectionHeader({
  id,
  dotClass,
  badgeClass,
  label,
  priceLabel,
  count,
}: {
  id: string;
  dotClass: string;
  badgeClass: string;
  label: string;
  priceLabel: string;
  count: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 pb-4">
      <span className={`h-3 w-3 shrink-0 rounded-full ${dotClass}`} aria-hidden />
      <h2 id={id} className="font-heading text-2xl font-bold text-gray-900 sm:text-3xl">
        {label}
      </h2>
      <span
        className={`rounded-full border-2 border-gray-900 px-3 py-0.5 font-body text-xs font-extrabold uppercase tracking-wide text-gray-900 shadow-[2px_2px_0_#111827] ${badgeClass}`}
      >
        {priceLabel}
      </span>
      <span className="ml-auto font-body text-sm font-semibold text-gray-600">
        {count} options
      </span>
    </div>
  );
}

function CategorySection({ category }: { category: BuildCategory }) {
  const accent = accentStyles[category.accent];
  return (
    <section
      aria-labelledby={`build-${category.id}-heading`}
      id={`build-${category.id}`}
      className="scroll-mt-32"
    >
      <CategorySectionHeader
        id={`build-${category.id}-heading`}
        dotClass={accent.dot}
        badgeClass={accent.sectionBadge}
        label={category.label}
        priceLabel={category.priceLabel}
        count={category.items.length}
      />
      <ul
        role="list"
        className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {category.items.map((item) => (
          <FlavorChip
            key={item.name}
            name={item.name}
            price={category.price}
            accent={category.accent}
          />
        ))}
      </ul>
    </section>
  );
}

export default function BuildPage() {
  return (
    <div className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-sodaBlue px-3 py-1 font-body text-xs font-extrabold uppercase tracking-widest text-white shadow-[3px_3px_0_#111827]">
            Build Your Own
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-gray-900 sm:text-5xl">
            Make It Yours
          </h1>
          <p className="mt-2 font-body text-base text-gray-700 sm:text-lg">
            Pick a cup size and tier, then stack any syrups, fruit, and creams — mix
            whatever sounds good.
          </p>
        </div>

        <section aria-labelledby="cup-sizes-heading" className="mb-14">
          <h2
            id="cup-sizes-heading"
            className="mb-4 font-heading text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            Cup sizes &amp; pricing
          </h2>
          <p className="mb-6 font-body text-sm text-gray-600">
            Base = soda only · Mix = soda + add-ons · Energy = energy drink base
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {CUP_SIZES.map((cup) => (
              <li key={cup.oz}>
                <article className="flex h-full flex-col rounded-2xl border-2 border-gray-900 bg-white p-4 shadow-[4px_4px_0_#111827]">
                  <p className="font-heading text-3xl font-bold text-gray-900">
                    {cup.oz}
                    <span className="ml-1 font-body text-lg font-semibold text-gray-600">
                      oz
                    </span>
                  </p>
                  <dl className="mt-4 space-y-2 font-body text-sm">
                    <div className="flex justify-between gap-2">
                      <dt className="font-semibold text-gray-700">Base</dt>
                      <dd className="font-bold text-sodaGreen">{cup.base}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="font-semibold text-gray-700">Mix</dt>
                      <dd className="font-bold text-sodaGreen">{cup.mix}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="font-semibold text-gray-700">Energy</dt>
                      <dd className="font-bold text-sodaGreen">{cup.energy}</dd>
                    </div>
                  </dl>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-12">
          {BUILD_CATEGORIES.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>

        <p className="mt-14 rounded-2xl border-2 border-dashed border-gray-300 bg-white/80 px-5 py-4 text-center font-body text-sm leading-relaxed text-gray-700 sm:text-base">
          {BUILD_FOOTER_NOTE}
        </p>

        <p className="mt-8 text-center">
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-gradient-to-r from-sodaBlue via-sodaGreen to-sodaPink px-5 py-2.5 font-body text-sm font-extrabold text-gray-900 shadow-[3px_3px_0_#111827] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#111827]"
          >
            Browse named drinks
            <span aria-hidden>→</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
