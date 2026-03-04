"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, useCallback, Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { products, categories } from "@/data/products";
import { industries } from "@/data/industries";

const industryNames = industries.map((i) => i.name);

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const initialIndustry = searchParams.get("industry");

  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(
    initialIndustry ? [initialIndustry] : []
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleFilter = useCallback(
    (list: string[], setter: (v: string[]) => void) => (value: string) => {
      setter(
        list.includes(value)
          ? list.filter((v) => v !== value)
          : [...list, value]
      );
    },
    []
  );

  const resetFilters = useCallback(() => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedIndustries([]);
  }, []);

  const filtered = useMemo(() => {
    let result = products;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedIndustries.length > 0) {
      result = result.filter((p) =>
        p.industries.some((i) => selectedIndustries.includes(i))
      );
    }

    return result;
  }, [search, selectedCategories, selectedIndustries]);

  const filterGroups = [
    {
      label: "Category",
      options: [...categories],
      selected: selectedCategories,
      onChange: toggleFilter(selectedCategories, setSelectedCategories),
    },
    {
      label: "Industry",
      options: industryNames,
      selected: selectedIndustries,
      onChange: toggleFilter(selectedIndustries, setSelectedIndustries),
    },
  ];

  const activeFilterCount = selectedCategories.length + selectedIndustries.length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-dark">Products</h1>
        <p className="mt-2 text-gray-dark">
          Explore our full range of separation technologies and equipment.
        </p>
      </div>

      {/* Search bar */}
      <div className="mb-6">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search products by name, category, or feature..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-medium bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
          />
        </div>
      </div>

      {/* Mobile filter toggle */}
      <button
        className="mb-4 flex items-center gap-2 rounded-md bg-navy px-4 py-2 text-sm font-medium text-white lg:hidden"
        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filters{activeFilterCount > 0 && ` (${activeFilterCount})`}
      </button>

      <div className="flex gap-8">
        {/* Sidebar — desktop */}
        <div className="hidden w-64 shrink-0 lg:block">
          <FilterSidebar groups={filterGroups} onReset={resetFilters} />
        </div>

        {/* Sidebar — mobile drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-72 overflow-y-auto bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-navy-dark">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-gray-dark"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <FilterSidebar groups={filterGroups} onReset={resetFilters} />
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-dark">
              {filtered.length} product{filtered.length !== 1 && "s"} found
            </p>
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 rounded-full bg-navy/10 px-2.5 py-0.5 text-xs font-medium text-navy"
                  >
                    {c}
                    <button
                      onClick={() =>
                        setSelectedCategories((prev) =>
                          prev.filter((v) => v !== c)
                        )
                      }
                      className="ml-0.5 hover:text-red-500"
                    >
                      &times;
                    </button>
                  </span>
                ))}
                {selectedIndustries.map((i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-full bg-orange/10 px-2.5 py-0.5 text-xs font-medium text-orange-dark"
                  >
                    {i}
                    <button
                      onClick={() =>
                        setSelectedIndustries((prev) =>
                          prev.filter((v) => v !== i)
                        )
                      }
                      className="ml-0.5 hover:text-red-500"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-medium py-20 text-center">
              <svg
                className="mb-3 h-12 w-12 text-gray-dark/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-lg font-medium text-navy-dark">
                No products found
              </p>
              <p className="mt-1 text-sm text-gray-dark">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 rounded-md bg-orange px-4 py-2 text-sm font-medium text-white hover:bg-orange-dark transition"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-navy border-t-transparent" />
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
