import Link from "next/link";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#eat-it-up", label: "Eat" },
  { href: "#visit", label: "Visit" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-gray-900 bg-gradient-to-br from-sodaPink via-sodaBlue to-sodaGreen">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-2xl font-bold text-gray-900">
            Soda<span className="text-white drop-shadow-sm">Life</span>
          </p>
          <p className="font-body text-sm font-semibold text-gray-900/80">
            Payson, Utah · Bubbles on bubbles on bubbles.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4 font-body font-bold text-gray-900">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:underline underline-offset-4">
              {label}
            </Link>
          ))}
        </nav>

        <p className="font-body text-xs font-semibold text-gray-900/80">
          © {new Date().getFullYear()} Soda Life Payson
        </p>
      </div>
    </footer>
  );
}
