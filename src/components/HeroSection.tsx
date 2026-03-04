"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-anim]", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[100vh] flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl">
        <p
          data-hero-anim
          className="text-orange font-semibold tracking-[0.3em] uppercase text-sm mb-4"
        >
          Since 1942
        </p>
        <h1
          data-hero-anim
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Global Leader in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-light">
            Separation Technologies
          </span>
        </h1>
        <p
          data-hero-anim
          className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Engineering innovation for mining, food safety, recycling, and
          industrial processing across six continents.
        </p>
        <div data-hero-anim className="mt-10 flex gap-4 justify-center flex-wrap">
          <a
            href="https://www.eriez.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
          >
            Explore Solutions
          </a>
          <a
            href="https://www.eriez.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/20 hover:border-orange/50 text-white font-semibold rounded-lg transition-colors hover:bg-white/5"
          >
            Get a Quote
          </a>
        </div>
        <div data-hero-anim className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
