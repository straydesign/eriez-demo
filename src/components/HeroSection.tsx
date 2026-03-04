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
          Interactive Experience Concept
        </p>
        <h1
          data-hero-anim
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          What if your website{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-light">
            could do this?
          </span>
        </h1>
        <p
          data-hero-anim
          className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          This is a concept built for Eriez. Scroll to watch the model come
          apart, explore your data brought to life, and see what an immersive
          web presence looks like for industrial brands.
        </p>
        <div data-hero-anim className="mt-10">
          <span className="inline-block px-6 py-2 border border-white/10 rounded-full text-sm text-gray-500">
            Built in 24 hours as a proof of concept
          </span>
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
          <span className="text-xs text-gray-600 mt-2 block">Scroll to explore</span>
        </div>
      </div>
    </div>
  );
}
