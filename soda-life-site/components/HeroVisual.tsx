import Image from "next/image";

/**
 * Hero illustration — mason jar soda with toppings (transparent PNG).
 */
export default function HeroVisual() {
  return (
    <div
      aria-hidden
      className="relative w-full max-w-[min(100%,420px)] shrink-0 select-none motion-safe:animate-hero-float motion-reduce:animate-none lg:max-w-none"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[82%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(45,184,224,0.28), rgba(255,31,143,0.22) 42%, rgba(111,203,31,0.18) 66%, transparent 82%)",
        }}
      />
      <Image
        src="/hero-soda.png"
        alt=""
        width={409}
        height={610}
        priority
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 440px"
        className="relative z-10 h-auto w-full max-h-[min(280px,52vh)] object-contain sm:max-h-[min(320px,55vh)] lg:max-h-[min(480px,62vh)]"
      />
    </div>
  );
}
