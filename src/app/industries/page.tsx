import IndustryCard from "@/components/IndustryCard";
import { industries, sectors } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-navy-dark">Industries</h1>
        <p className="mt-2 max-w-2xl text-gray-dark">
          Eriez serves over 80 industries worldwide with innovative separation
          technologies. Select an industry to explore relevant solutions.
        </p>
      </div>

      {sectors.map((sector) => {
        const sectorIndustries = industries.filter(
          (i) => i.sector === sector
        );
        return (
          <section key={sector} className="mb-14">
            <h2 className="mb-6 text-xl font-bold text-navy-dark border-b border-gray-medium pb-3">
              {sector}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sectorIndustries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
