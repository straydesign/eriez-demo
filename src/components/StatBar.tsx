"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  { label: "Years of Innovation", value: 84, suffix: "" },
  { label: "Employees Worldwide", value: 1000, suffix: "+" },
  { label: "Continents Served", value: 6, suffix: "" },
  { label: "Industries Served", value: 80, suffix: "+" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-3xl font-extrabold text-orange sm:text-4xl">
      {display.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatBar() {
  return (
    <section className="bg-gray-light py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            <p className="mt-1 text-sm font-medium text-gray-dark">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
