import { FOOD } from "@/app/menu-data";

export default function Food() {
  return (
    <section
      id="eat-it-up"
      aria-labelledby="food-heading"
      className="scroll-mt-24 bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-amber-300 px-3 py-1 font-body text-xs font-extrabold uppercase tracking-widest text-gray-900 shadow-[3px_3px_0_#111827]">
            Eat It Up
          </span>
          <h2
            id="food-heading"
            className="mt-4 font-heading text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Snacks On Snacks
          </h2>
          <p className="mt-2 font-body text-base text-gray-700 sm:text-lg">
            Savory bites to pair with your pour. Warm, crispy, shareable.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {FOOD.map((item) => (
            <li key={item.name}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border-2 border-gray-900 bg-white p-5 shadow-[4px_4px_0_#111827] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111827]">
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-gray-900 bg-amber-300 px-2 py-0.5 font-body text-[10px] font-extrabold uppercase tracking-widest text-gray-900">
                    Hot &amp; Fresh
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-gray-900">
                    {item.name}
                  </h3>
                </div>
                {item.note && (
                  <p className="mt-2 font-body text-sm font-semibold text-gray-600">
                    {item.note}
                  </p>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
