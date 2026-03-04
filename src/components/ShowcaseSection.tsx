"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const showcaseItems = [
  {
    title: "3D Product Explorers",
    description:
      "Let customers rotate, zoom, and inspect your equipment in 3D — right in the browser. No downloads, no plugins. Replace static product photos with interactive models.",
    tag: "Engagement",
  },
  {
    title: "Scroll-Driven Storytelling",
    description:
      "Guide visitors through your capabilities with scroll-locked animations that feel cinematic. Every section is a scene, not just a block of text.",
    tag: "Narrative",
  },
  {
    title: "Data-Driven Visualization",
    description:
      "Your 28 products across 8 categories and 14 industries — surfaced with filters, search, and interactive grids that make the catalog feel alive.",
    tag: "Discovery",
  },
  {
    title: "Performance at Scale",
    description:
      "WebGL rendering with mobile optimization, lazy loading, and progressive enhancement. Premium experience that works on every device and connection.",
    tag: "Technical",
  },
];

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-showcase-card]", {
        x: (i: number) => (i % 2 === 0 ? -80 : 80),
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-[125vh] flex items-center justify-end px-6 py-20"
    >
      <div className="max-w-xl mr-4 sm:mr-12 lg:mr-20 space-y-6">
        <div className="mb-2">
          <p className="text-xs tracking-widest uppercase text-orange/60 mb-2">
            What we&apos;d build for you
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Beyond a Brochure Site
          </h2>
        </div>
        {showcaseItems.map((item) => (
          <div
            key={item.title}
            data-showcase-card
            className="section-panel orange-glow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-orange">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
              </div>
              <span className="shrink-0 text-xs font-medium text-orange/70 bg-orange/10 px-3 py-1 rounded-full whitespace-nowrap">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
