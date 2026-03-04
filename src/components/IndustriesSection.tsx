"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { industries, sectors } from "@/data/industries";

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-industry-item]", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
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
      className="min-h-[85vh] flex items-center justify-center px-6 py-20"
    >
      <div className="section-panel max-w-4xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            80+ Industries Served
          </h2>
          <p className="mt-2 text-gray-400">
            Proven solutions across every major sector worldwide.
          </p>
        </div>

        <div className="space-y-6">
          {sectors.map((sector) => (
            <div key={sector}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-orange/70 mb-3">
                {sector}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {industries
                  .filter((ind) => ind.sector === sector)
                  .map((ind) => (
                    <div
                      key={ind.id}
                      data-industry-item
                      className="flex items-center gap-2 bg-white/5 hover:bg-orange/10 rounded-lg px-3 py-2 transition-colors cursor-default"
                    >
                      <span className="text-lg">{ind.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-white">
                          {ind.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {ind.productCount} products
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
