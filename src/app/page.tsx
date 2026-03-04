import Link from "next/link";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import { categories } from "@/data/products";
import { industries } from "@/data/industries";

const categoryDescriptions: Record<string, string> = {
  "Magnetic Separation":
    "High-intensity magnets for removing ferrous contaminants from bulk material streams.",
  "Metal Detection":
    "Advanced detectors for finding all types of metals in conveyed products.",
  "Material Handling & Vibratory":
    "Feeders, screeners, and vibrators for precision material flow control.",
  Flotation:
    "Column and mechanical flotation technologies for mineral recovery.",
  "Fluid Recycling":
    "Filters and magnetic cleaners for extending industrial fluid life.",
  Metalworking:
    "Lifting magnets, chucks, and demagnetizers for metal fabrication.",
  "Screening & Classification":
    "Vibratory screens and sifters for particle size separation.",
  "Recycling Equipment":
    "Eddy current separators and density sorters for material recovery.",
};

const topIndustries = industries.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBar />

      {/* Product Categories */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-dark">
              Our Product Categories
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-dark">
              Comprehensive separation and detection solutions for every
              industrial application.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/products?category=${encodeURIComponent(cat)}`}
                className="group rounded-lg border border-gray-medium bg-white p-6 shadow-sm transition hover:shadow-md hover:border-orange/40"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10">
                  <svg
                    className="h-6 w-6 text-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-navy-dark group-hover:text-orange transition">
                  {cat}
                </h3>
                <p className="mt-1 text-sm text-gray-dark line-clamp-2">
                  {categoryDescriptions[cat]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-dark">
              Industries We Serve
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-dark">
              Proven solutions across dozens of industries worldwide.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {topIndustries.map((ind) => (
              <Link
                key={ind.id}
                href={`/products?industry=${encodeURIComponent(ind.name)}`}
                className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="text-3xl">{ind.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-navy-dark group-hover:text-orange transition">
                  {ind.name}
                </h3>
                <p className="mt-1 text-sm text-gray-dark line-clamp-2">
                  {ind.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-1 text-sm font-semibold text-orange hover:text-orange-dark transition"
            >
              See all {industries.length}+ industries
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-300">
              Our team of separation technology experts is ready to help you find
              the right solution for your application.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-orange px-8 py-3 text-sm font-semibold text-white transition hover:bg-orange-dark"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request Service
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Find a Salesperson
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
