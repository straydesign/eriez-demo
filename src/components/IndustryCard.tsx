import Link from "next/link";
import type { Industry } from "@/data/industries";

export default function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/products?industry=${encodeURIComponent(industry.name)}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-medium bg-white p-6 shadow-sm transition hover:shadow-md hover:border-orange/40"
    >
      <span className="text-3xl">{industry.icon}</span>
      <h3 className="mt-3 text-lg font-semibold text-navy-dark group-hover:text-orange transition">
        {industry.name}
      </h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-gray-dark line-clamp-3">
        {industry.description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-dark">
          {industry.productCount} solutions
        </span>
        <span className="text-sm font-medium text-orange group-hover:translate-x-0.5 transition-transform">
          View Solutions &rarr;
        </span>
      </div>
    </Link>
  );
}
