"use client";

import { useState, useEffect } from "react";

export default function ImmersiveNav() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.querySelector(
        "div[style*='overflow']"
      ) as HTMLDivElement | null;
      if (container) {
        const progress =
          container.scrollTop / (container.scrollHeight - container.clientHeight);
        setScrollProgress(Math.min(1, Math.max(0, progress || 0)));
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <div className="w-5 h-5 bg-orange rounded flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">E</span>
            </div>
            <span className="text-white/80 text-xs font-medium hidden sm:block">
              Eriez &middot; Experience Concept
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://straydesign.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-orange transition-colors border border-gray-800 hover:border-orange/30 px-4 py-2 rounded-full"
          >
            by Stray Design
          </a>
        </div>
      </nav>
    </>
  );
}
