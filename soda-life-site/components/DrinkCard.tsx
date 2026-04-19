import { type CSSProperties } from "react";

export type Drink = {
  name: string;
  flavors: string;
  base?: string;
  note?: string;
  price?: string;
  gradient: { from: string; to: string };
};

export type DrinkCardProps = {
  drink: Drink;
  category: string;
};

export default function DrinkCard({ drink, category }: DrinkCardProps) {
  const swatchStyle: CSSProperties = {
    backgroundImage: `linear-gradient(135deg, ${drink.gradient.from}, ${drink.gradient.to})`,
  };

  return (
    <article className="group flex items-start gap-[14px] rounded-xl border-[0.5px] border-gray-200 bg-white p-[14px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div
        aria-hidden
        className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl"
        style={swatchStyle}
      >
        <span
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(255,255,255,0.35),transparent_60%)]"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="font-body text-[10px] font-bold uppercase tracking-[0.5px] text-[#72243E]">
          {category}
        </span>
        <h3 className="font-heading text-[15px] font-medium leading-tight text-gray-900">
          {drink.name}
        </h3>
        <p className="font-body text-[12px] leading-[1.4] text-gray-500">
          {drink.base && (
            <span className="font-semibold text-gray-600">{drink.base} · </span>
          )}
          {drink.flavors}
        </p>
        {drink.note && (
          <p className="font-body text-[11px] italic leading-[1.4] text-gray-400">
            {drink.note}
          </p>
        )}
        {drink.price && (
          <p className="mt-1 font-heading text-[13px] font-semibold text-sodaGreen">
            {drink.price}
          </p>
        )}
      </div>
    </article>
  );
}
