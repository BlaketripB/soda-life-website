import Link from "next/link";

const links = [
  { href: "#specials", label: "Specials" },
  { href: "#menu", label: "Menu" },
  { href: "#challenge", label: "Challenge" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-cream/80 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Soda Life home">
          <span
            aria-hidden
            className="inline-block h-9 w-9 rounded-full bg-gradient-to-br from-sodaBlue via-sodaGreen to-sodaPink ring-2 ring-gray-900"
          />
          <span className="font-heading text-2xl font-bold tracking-tight text-gray-900">
            Soda
            <span className="bg-gradient-to-r from-sodaBlue via-sodaGreen to-sodaPink bg-clip-text text-transparent">
              Life
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-sm font-semibold text-gray-800 transition-colors hover:text-sodaBlue"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#visit"
            className="rounded-full border-2 border-gray-900 bg-gradient-to-r from-sodaBlue via-sodaGreen to-sodaPink px-4 py-2 font-body text-sm font-bold text-gray-900 shadow-[3px_3px_0_#111827] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#111827]"
          >
            Order Now
          </Link>
        </nav>

        {/* Compact mobile CTA */}
        <Link
          href="#menu"
          className="inline-flex items-center gap-1 rounded-full border-2 border-gray-900 bg-gradient-to-r from-sodaBlue to-sodaPink px-3 py-1.5 font-body text-xs font-extrabold text-gray-900 shadow-[3px_3px_0_#111827] sm:hidden"
        >
          Menu
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
