"use client";

import { useState } from "react";
import { categories } from "@/data/products";
import { industries } from "@/data/industries";

const regions = [
  "North America",
  "South America",
  "Europe",
  "Asia Pacific",
  "Middle East & Africa",
  "Australia & New Zealand",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  function toggleProduct(cat: string) {
    setSelectedProducts((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-navy-dark">Contact Us</h1>
        <p className="mt-2 text-gray-dark">
          Get in touch with our team to discuss your separation technology
          needs.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
              <svg
                className="mx-auto mb-4 h-12 w-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xl font-bold text-green-900">
                Thank you for your inquiry!
              </h2>
              <p className="mt-2 text-green-800">
                A member of our team will be in touch within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-md bg-navy px-6 py-2 text-sm font-medium text-white transition hover:bg-navy-light"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-xl font-semibold text-navy-dark">
                Get a Quote
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy-dark">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-md border border-gray-medium px-3 py-2.5 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy-dark">
                    Company *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-md border border-gray-medium px-3 py-2.5 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    placeholder="Acme Industries"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy-dark">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-md border border-gray-medium px-3 py-2.5 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    placeholder="john@acme.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy-dark">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-md border border-gray-medium px-3 py-2.5 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-navy-dark">
                  Industry *
                </label>
                <select
                  required
                  className="w-full rounded-md border border-gray-medium px-3 py-2.5 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                >
                  <option value="">Select your industry</option>
                  {industries.map((ind) => (
                    <option key={ind.id} value={ind.name}>
                      {ind.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-navy-dark">
                  Product Interest (select all that apply)
                </label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-medium px-3 py-2 text-sm transition hover:bg-gray-light"
                    >
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(cat)}
                        onChange={() => toggleProduct(cat)}
                        className="h-4 w-4 rounded accent-orange"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-navy-dark">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-gray-medium px-3 py-2.5 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                  placeholder="Tell us about your application and requirements..."
                />
              </div>

              <button
                type="submit"
                className="rounded-md bg-orange px-8 py-3 text-sm font-semibold text-white transition hover:bg-orange-dark"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>

        {/* Sidebar info */}
        <div className="space-y-8">
          {/* Contact info */}
          <div className="rounded-lg bg-gray-light p-6">
            <h3 className="text-lg font-semibold text-navy-dark">
              Contact Information
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 text-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-navy-dark">Headquarters</p>
                  <p className="text-gray-dark">
                    2200 Asbury Road
                    <br />
                    Erie, PA 16506
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 text-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-navy-dark">Phone</p>
                  <a
                    href="tel:+18148352600"
                    className="text-gray-dark hover:text-orange transition"
                  >
                    (814) 835-2600
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 text-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-navy-dark">Email</p>
                  <a
                    href="mailto:info@eriez.com"
                    className="text-gray-dark hover:text-orange transition"
                  >
                    info@eriez.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Find a Salesperson */}
          <div className="rounded-lg border border-gray-medium bg-white p-6">
            <h3 className="text-lg font-semibold text-navy-dark">
              Find a Salesperson
            </h3>
            <p className="mt-1 text-sm text-gray-dark">
              Connect with an Eriez representative in your region.
            </p>
            <select className="mt-4 w-full rounded-md border border-gray-medium px-3 py-2.5 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20">
              <option value="">Select your region</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <button className="mt-3 w-full rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-white transition hover:bg-navy-light">
              Find Representative
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
