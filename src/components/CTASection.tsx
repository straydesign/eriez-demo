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
          Ready to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-light">
            Transform
          </span>{" "}
          Your Process?
        </h2>
        <p data-cta-anim className="mt-6 text-lg text-gray-400">
          Our engineers have solved separation challenges across 80+ industries
          on six continents. Let&apos;s solve yours.
        </p>
        <div
          data-cta-anim
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <a
            href="https://www.eriez.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Get a Quote
          </a>
          <a
            href="tel:+18148352600"
            className="px-10 py-4 border border-white/20 hover:border-orange/50 text-white font-semibold rounded-lg transition-colors hover:bg-white/5 text-lg"
          >
            Call (814) 835-2600
          </a>
        </div>
        <div data-cta-anim className="mt-12 text-sm text-gray-600">
          2200 Asbury Road, Erie, PA 16506 &middot; info@eriez.com
        </div>
        <div data-cta-anim className="mt-4 text-xs text-gray-700">
          This is an interactive demo concept &middot; Not affiliated with Eriez
          Manufacturing
        </div>
      </div>
    </div>
  );
}
