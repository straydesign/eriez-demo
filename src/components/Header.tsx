"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-dark text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-orange font-bold text-white text-lg">
            E
          </div>
          <span className="text-xl font-bold tracking-tight">ERIEZ</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Products
          </Link>
          <Link
            href="/industries"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Industries
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-orange px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-dark"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-navy-dark px-4 pb-4 md:hidden">
          <Link
            href="/"
            className="block py-3 text-sm text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block py-3 text-sm text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/industries"
            className="block py-3 text-sm text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Industries
          </Link>
          <Link
            href="/contact"
            className="mt-2 block rounded-md bg-orange px-5 py-2 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
