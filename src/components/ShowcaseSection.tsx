"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { categories } from "@/data/products";

const showcaseItems = [
  {
    title: "Magnetic Separation",
    description:
      "High-intensity electromagnets and rare earth permanent magnets remove ferrous contaminants from bulk material streams.",
    stat: "4 product lines",
  },
  {
    title: "Metal Detection",
    description:
      "Multi-frequency detectors with auto-learn technology for HACCP-compliant food safety and equipment protection.",
    stat: "Industry-leading sensitivity",
  },
  {
    title: "Flotation Systems",
    description:
      "Column, CavTube, and StackCell technologies for fine particle recovery with superior metallurgical performance.",
    stat: "Patented technology",
  },
  {
    title: "Recycling Solutions",
    description:
      "Eddy current separators, density sorting, and e-scrap processing for maximum material recovery from waste streams.",
    stat: `${categories.length} categories`,
  },
];

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-showcase-card]", {
        x: (i) => (i % 2 === 0 ? -80 : 80),
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
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Core Capabilities
        </h2>
        {showcaseItems.map((item, i) => (
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
                {item.stat}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
