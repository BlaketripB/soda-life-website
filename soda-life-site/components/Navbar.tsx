import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#menu", label: "Menu" },
  { href: "/build", label: "Build" },
  { href: "/#eat-it-up", label: "Eat" },
  { href: "/#visit", label: "Visit" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-cream/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center" aria-label="Soda Life home">
          <Image
            src="/sodalife-logo.png"
            alt="Soda Life logo"
            width={80}
            height={80}
            priority
            className="-my-2 h-16 w-16 object-contain drop-shadow-sm sm:h-20 sm:w-20"
          />
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
            href="/#visit"
            className="rounded-full border-2 border-gray-900 bg-gradient-to-r from-sodaPink via-sodaBlue to-sodaGreen px-4 py-2 font-body text-sm font-bold text-gray-900 shadow-[3px_3px_0_#111827,0_0_14px_rgba(255,31,143,0.25)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#111827,0_0_20px_rgba(255,31,143,0.35)]"
          >
            Order Now
          </Link>
        </nav>

        {/* Compact mobile CTA */}
        <Link
          href="/#menu"
          className="inline-flex items-center gap-1 rounded-full border-2 border-gray-900 bg-gradient-to-r from-sodaPink to-sodaBlue px-3 py-1.5 font-body text-xs font-extrabold text-gray-900 shadow-[3px_3px_0_#111827] sm:hidden"
        >
          Menu
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
