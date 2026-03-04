"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-cta-anim]", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-[90vh] flex items-center justify-center px-6"
    >
      <div className="text-center max-w-2xl">
        <h2
          data-cta-anim
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        >
          Let&apos;s build this{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-light">
            for real.
          </span>
        </h2>
        <p data-cta-anim className="mt-6 text-lg text-gray-400">
          This was a proof of concept — imagine what we could do with your
          actual 3D product models, your engineering data, and a real timeline.
        </p>
        <div
          data-cta-anim
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <a
            href="mailto:tom@straydesign.co"
            className="px-10 py-4 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Let&apos;s Talk
          </a>
          <a
            href="https://straydesign.co"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-white/20 hover:border-orange/50 text-white font-semibold rounded-lg transition-colors hover:bg-white/5 text-lg"
          >
            See More Work
          </a>
        </div>
        <div data-cta-anim className="mt-12 text-sm text-gray-600">
          Tom Sesler &middot; Stray Design Co.
        </div>
        <div data-cta-anim className="mt-4 text-xs text-gray-700">
          Interactive experience concept for Eriez Manufacturing &middot; Not affiliated
        </div>
      </div>
    </div>
  );
}
