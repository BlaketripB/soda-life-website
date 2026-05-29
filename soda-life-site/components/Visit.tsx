const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 8:30 PM" },
  { day: "Saturday", time: "9:00 AM – 8:30 PM" },
  { day: "Sunday", time: "10:00a – 7:00p" },
];

const PHONE = "(555) 555-5555";
const PHONE_TEL = "+15555555555";

const ADDRESS = "742 UT-198, unit 5 Payson, UT 84651";
const MAP_QUERY = encodeURIComponent("742 UT-198, unit 5 Payson, UT 84651");

export default function Visit() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="scroll-mt-24 bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-sodaBlue px-3 py-1 font-body text-xs font-extrabold uppercase tracking-widest text-white shadow-[3px_3px_0_#111827]">
            Come see us
          </span>
          <h2
            id="visit-heading"
            className="mt-4 font-heading text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Hours & Location
          </h2>
          <p className="mt-2 font-body text-base text-gray-700 sm:text-lg">
            We&rsquo;re on the corner pouring something colder than your ex&rsquo;s heart.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-[6px_6px_0_#111827] sm:p-8">
            <h3 className="font-heading text-2xl font-bold text-gray-900">
              Hours
            </h3>
            <ul role="list" className="mt-4 divide-y divide-gray-200">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between py-3 font-body text-base font-semibold text-gray-800"
                >
                  <span>{h.day}</span>
                  <span className="text-gray-600">{h.time}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-heading text-2xl font-bold text-gray-900">
              Address
            </h3>
            <p className="mt-2 font-body text-base font-semibold text-gray-800">
              742 UT-198, unit 5
              <br />
              Payson, UT 84651
            </p>
            <p className="mt-2 font-body text-base font-semibold text-gray-800">
              <a href={`tel:${PHONE_TEL}`} className="hover:text-sodaBlue">
                {PHONE}
              </a>
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-gradient-to-r from-sodaPink to-sodaBlue px-5 py-2.5 font-body text-sm font-extrabold text-gray-900 shadow-[3px_3px_0_#111827] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#111827]"
              >
                Get Directions
                <span aria-hidden>→</span>
              </a>
              <a
                href="https://www.instagram.com/soda_life_payson/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-white px-5 py-2.5 font-body text-sm font-extrabold text-gray-900 shadow-[3px_3px_0_#111827] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#111827]"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-gray-900 shadow-[6px_6px_0_#111827]">
            <iframe
              title={`Map of Soda Life at ${ADDRESS}`}
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full min-h-[360px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
