"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/** Visible tinted glass bubbles (no red). */
const GRADIENTS = [
  "radial-gradient(circle at 30% 30%, #FF6FB8, #FF1F8F)",
  "radial-gradient(circle at 30% 30%, #6DD4F0, #2DB8E0)",
  "radial-gradient(circle at 30% 30%, #FFE266, #FFD600)",
  "radial-gradient(circle at 30% 30%, #B8E885, #6FCB1F)",
] as const;

const BUBBLE_GLOWS = [
  "0 0 14px rgba(255, 31, 143, 0.18)",
  "0 0 14px rgba(45, 184, 224, 0.18)",
  "0 0 14px rgba(255, 214, 0, 0.18)",
  "0 0 14px rgba(111, 203, 31, 0.18)",
] as const;

const PORTAL_ROOT_ID = "soda-bubble-layer-root";

type BubbleConfig = {
  id: number;
  leftPct: number;
  size: number;
  duration: number;
  delay: number;
  paletteIndex: number;
};

type FizzDot = { id: number; leftPct: number; size: number; topPx: number };

/**
 * Fixed bubble layer above page backgrounds, below the navbar (z-20).
 * z-[11]: above main (z-10) so bubbles stay visible; pointer-events-none passes clicks through.
 */
export default function BubbleBackground() {
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [bubbles, setBubbles] = useState<BubbleConfig[]>([]);
  const [fizzDots, setFizzDots] = useState<FizzDot[]>([]);
  const [mountNode, setMountNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    if (mq.matches) {
      setReady(true);
      return;
    }

    const el = document.createElement("div");
    el.id = PORTAL_ROOT_ID;
    document.body.prepend(el);
    setMountNode(el);

    const next: BubbleConfig[] = [];
    for (let i = 0; i < 26; i++) {
      next.push({
        id: i,
        leftPct: Math.random() * 100,
        size: 12 + Math.random() * 34,
        duration: 9 + Math.random() * 7,
        delay: Math.random() * 8,
        paletteIndex: Math.floor(Math.random() * GRADIENTS.length),
      });
    }
    setBubbles(next);

    const dots: FizzDot[] = [];
    for (let i = 0; i < 20; i++) {
      dots.push({
        id: i,
        leftPct: Math.random() * 100,
        size: 2 + Math.random() * 4,
        topPx: 4 + Math.random() * 28,
      });
    }
    setFizzDots(dots);
    setReady(true);

    return () => {
      el.remove();
      setMountNode(null);
    };
  }, []);

  if (!ready || reduceMotion || !mountNode) {
    return null;
  }

  const layer = (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[11] max-w-[100vw] overflow-visible"
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "100dvh",
      }}
    >
      {/* Light “fizz” dots only — no full-width frosted gradient (that looked like blur) */}
      <div className="fizz-rim">
        {fizzDots.map((d) => (
          <span
            key={d.id}
            className="fizz-dot"
            style={{
              left: `${d.leftPct}%`,
              top: d.topPx,
              width: d.size,
              height: d.size,
              animationDelay: `${(d.id % 12) * 0.1}s`,
            }}
          />
        ))}
      </div>

      <div className="bubble-field">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{
              left: `${b.leftPct}%`,
              width: b.size,
              height: b.size,
              background: GRADIENTS[b.paletteIndex],
              boxShadow: BUBBLE_GLOWS[b.paletteIndex],
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .fizz-rim {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40px;
          z-index: 2;
          pointer-events: none;
        }
        .fizz-dot {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 0 3px rgba(255, 255, 255, 0.9);
          animation: fizz-pop 2s ease-in-out infinite;
        }
        @keyframes fizz-pop {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.55;
          }
          50% {
            transform: scale(1.12);
            opacity: 1;
          }
        }
        .bubble-field {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .bubble {
          position: absolute;
          bottom: -60px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          will-change: transform;
          animation-name: bubble-rise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes bubble-rise {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          8% {
            opacity: 0.38;
          }
          50% {
            transform: translate3d(15px, -55vh, 0);
            opacity: 0.4;
          }
          88% {
            opacity: 0.35;
          }
          100% {
            transform: translate3d(-10px, -120vh, 0);
            opacity: 0;
          }
        }
        .bubble::after {
          content: "";
          position: absolute;
          top: 18%;
          left: 18%;
          width: 34%;
          height: 34%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.55);
          pointer-events: none;
        }
      `}</style>
    </div>
  );

  return createPortal(layer, mountNode);
}
