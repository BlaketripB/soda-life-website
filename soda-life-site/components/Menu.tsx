type Drink = {
  name: string;
  description: string;
  price: string;
  gradient: string;
};

const drinks: Drink[] = [
  {
    name: "Mermaid Lagoon",
    description: "Sprite, blue raspberry, pineapple, coconut cream.",
    price: "$4.75",
    gradient: "from-sodaBlue to-cyan-300",
  },
  {
    name: "Pink Paradise",
    description: "Fresca, strawberry, peach, vanilla cream.",
    price: "$4.75",
    gradient: "from-sodaPink to-pink-300",
  },
  {
    name: "Green Machine",
    description: "Mountain Dew, lime, coconut cream.",
    price: "$4.75",
    gradient: "from-sodaGreen to-lime-300",
  },
  {
    name: "Sunset Surfer",
    description: "Sprite, peach, mango, pineapple.",
    price: "$4.75",
    gradient: "from-amber-300 to-sodaPink",
  },
  {
    name: "Pixie Fizz",
    description: "Sprite, cotton candy, lime zest.",
    price: "$4.75",
    gradient: "from-sodaPink to-sodaBlue",
  },
  {
    name: "Cookies & Cream Dream",
    description: "Dr Pepper, vanilla cream, cookie crumble.",
    price: "$5.25",
    gradient: "from-amber-300 to-sodaPink",
  },
  {
    name: "Caffeine Queen",
    description: "Dr Pepper, coconut, vanilla cream.",
    price: "$5.25",
    gradient: "from-sodaGreen to-sodaBlue",
  },
  {
    name: "Mint Condition",
    description: "Diet Mtn Dew, fresh mint, lime.",
    price: "$4.75",
    gradient: "from-sodaGreen to-emerald-300",
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="scroll-mt-24 bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
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
            Browse like you&rsquo;re on Google Maps &mdash; but the drinks are real.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {drinks.map((drink) => (
            <li key={drink.name}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-sodaGreen/50">
                <div
                  aria-hidden
                  className={`relative aspect-[4/3] bg-gradient-to-br ${drink.gradient}`}
                >
                  <span className="absolute left-4 top-4 h-6 w-6 rounded-full bg-white/70 blur-[2px]" />
                  <span className="absolute right-6 top-10 h-3 w-3 rounded-full bg-white/80" />
                  <span className="absolute bottom-6 left-10 h-4 w-4 rounded-full bg-white/70" />
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h3 className="font-heading text-lg font-semibold leading-tight text-gray-900">
                    {drink.name}
                  </h3>
                  <p className="font-body text-sm text-gray-600">
                    {drink.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="font-heading text-lg font-bold text-sodaGreen">
                      {drink.price}
                    </span>
                    <span className="font-body text-xs font-semibold text-gray-500">
                      32 oz
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
