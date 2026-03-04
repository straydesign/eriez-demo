import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark text-white">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
            Separation Technologies
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Global Leader in Separation Technologies{" "}
            <span className="text-orange">Since 1942</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            From magnetic separation to metal detection, flotation to vibratory
            equipment — Eriez provides innovative solutions that keep industries
            moving worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-dark"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
