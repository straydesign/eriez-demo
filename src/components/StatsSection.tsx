"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ value, suffix, label, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: value,
            duration: 2,
            delay,
            ease: "power2.out",
            onUpdate: () => setCount(Math.round(obj.val)),
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay, triggered]);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number text-4xl sm:text-5xl font-bold text-orange">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm sm:text-base text-gray-400">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-stat-panel]", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "[data-stat-panel]",
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 84, suffix: "+", label: "Years of Innovation" },
    { value: 1000, suffix: "+", label: "Employees Worldwide" },
    { value: 6, suffix: "", label: "Continents Served" },
    { value: 80, suffix: "+", label: "Industries Served" },
  ];

  return (
    <div
      ref={sectionRef}
      className="h-[100vh] flex items-center justify-start px-6"
    >
      <div data-stat-panel className="section-panel max-w-lg ml-4 sm:ml-12 lg:ml-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Trusted Worldwide
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
