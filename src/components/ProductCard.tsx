import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-medium bg-white shadow-sm transition hover:shadow-md">
      {/* Image placeholder */}
      <div className="flex h-44 items-center justify-center bg-navy/5">
        <svg
          className="h-16 w-16 text-navy/20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="mb-2 inline-block w-fit rounded-full bg-navy/10 px-2.5 py-0.5 text-xs font-medium text-navy">
          {product.category}
        </span>
        <h3 className="text-base font-semibold text-navy-dark group-hover:text-orange transition">
          {product.name}
        </h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-gray-dark line-clamp-3">
          {product.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {product.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="rounded bg-gray-light px-2 py-0.5 text-xs text-gray-dark"
            >
              {f}
            </span>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-4 inline-block text-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-light"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
