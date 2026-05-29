"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  {
    full: "We're growing fast — looking for future franchise locations & growth opportunities. Reach out!",
    short: "Franchise & growth opportunities — reach out!",
  },
  {
    full: "We deliver to businesses! Call us for details.",
    short: "Business delivery available — call us!",
  },
] as const;

const ROTATE_MS = 6000;
const FADE_MS = 400;

export default function AnnouncementBanner() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      setVisible(false);
      fadeTimeout = setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, FADE_MS);
    }, ROTATE_MS);

    return () => {
      clearInterval(interval);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, []);

  const message = MESSAGES[index];

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative z-30 w-full border-b border-gray-900/10 bg-gradient-to-r from-sodaBlue to-sodaPink px-4 py-2.5 text-center sm:py-3"
    >
      <p
        aria-live="polite"
        className={`mx-auto max-w-6xl font-body text-xs font-semibold leading-snug text-cream transition-opacity duration-[400ms] ease-in-out sm:text-[13px] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="hidden sm:inline">{message.full}</span>
        <span className="sm:hidden">{message.short}</span>
      </p>
    </div>
  );
}
