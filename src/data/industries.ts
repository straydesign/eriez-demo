export interface Industry {
  id: string;
  name: string;
  description: string;
  sector: string;
  icon: string;
  productCount: number;
}

export const sectors = [
  "Resources & Heavy Industry",
  "Food, Pharma & Consumer",
  "Manufacturing & Fabrication",
  "Environment & Sustainability",
] as const;

export const industries: Industry[] = [
  // Resources & Heavy Industry
  {
    id: "mining-minerals",
    name: "Mining & Minerals",
    description:
      "Complete separation and processing solutions for mining operations worldwide. From magnetic separation to flotation, we help maximize mineral recovery and processing efficiency.",
    sector: "Resources & Heavy Industry",
    icon: "⛏",
    productCount: 15,
  },
  {
    id: "aggregate-cement",
    name: "Aggregate & Cement",
    description:
      "Reliable equipment for aggregate processing, sand & gravel operations, and cement manufacturing. Remove tramp metal and improve product quality.",
    sector: "Resources & Heavy Industry",
    icon: "🏗",
    productCount: 8,
  },
  {
    id: "coal-power",
    name: "Coal & Power Generation",
    description:
      "Magnetic separation and metal detection solutions for coal preparation plants and power generation facilities. Protect equipment and improve fuel quality.",
    sector: "Resources & Heavy Industry",
    icon: "⚡",
    productCount: 6,
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    description:
      "Specialized separation technologies for the oil and gas industry. Fluid recycling and contamination control for drilling and refining operations.",
    sector: "Resources & Heavy Industry",
    icon: "🛢",
    productCount: 4,
  },
  // Food, Pharma & Consumer
  {
    id: "food-beverage",
    name: "Food & Beverage",
    description:
      "HACCP-compliant metal detection and magnetic separation for food safety. Protect consumers and your brand with industry-leading contaminant removal.",
    sector: "Food, Pharma & Consumer",
    icon: "🍽",
    productCount: 10,
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    description:
      "Ultra-clean magnetic separators and metal detectors designed for pharmaceutical manufacturing. Meet stringent GMP and FDA requirements.",
    sector: "Food, Pharma & Consumer",
    icon: "💊",
    productCount: 7,
  },
  {
    id: "packaging",
    name: "Packaging",
    description:
      "Metal detection and separation solutions for the packaging industry. Ensure product safety and protect processing equipment from metal contamination.",
    sector: "Food, Pharma & Consumer",
    icon: "📦",
    productCount: 5,
  },
  {
    id: "chemical-processing",
    name: "Chemical Processing",
    description:
      "Corrosion-resistant separation and screening equipment for chemical processing. Handle aggressive materials safely and efficiently.",
    sector: "Food, Pharma & Consumer",
    icon: "🧪",
    productCount: 8,
  },
  // Manufacturing & Fabrication
  {
    id: "automotive",
    name: "Automotive",
    description:
      "Fluid recycling, metalworking, and separation technologies for automotive manufacturing. Reduce waste, extend tool life, and improve part quality.",
    sector: "Manufacturing & Fabrication",
    icon: "🚗",
    productCount: 7,
  },
  {
    id: "metalworking-fabrication",
    name: "Metalworking & Fabrication",
    description:
      "Magnetic workholding, lifting magnets, demagnetizers, and coolant cleaning systems for metal fabrication shops and machine tool operations.",
    sector: "Manufacturing & Fabrication",
    icon: "🔧",
    productCount: 8,
  },
  {
    id: "plastics-rubber",
    name: "Plastics & Rubber",
    description:
      "Metal detection and magnetic separation for plastics processing. Protect molds and extruders from metal contamination damage.",
    sector: "Manufacturing & Fabrication",
    icon: "♻",
    productCount: 4,
  },
  {
    id: "electronics",
    name: "Electronics",
    description:
      "Precision separation technologies for electronics manufacturing. E-scrap processing solutions for recovering valuable metals from electronic waste.",
    sector: "Manufacturing & Fabrication",
    icon: "💻",
    productCount: 3,
  },
  // Environment & Sustainability
  {
    id: "recycling-waste",
    name: "Recycling & Waste",
    description:
      "Comprehensive recycling solutions including eddy current separators, magnetic separators, and density separators. Maximize material recovery from waste streams.",
    sector: "Environment & Sustainability",
    icon: "♻",
    productCount: 12,
  },
  {
    id: "water-wastewater",
    name: "Water & Wastewater",
    description:
      "Separation technologies for water treatment and wastewater processing. Remove metallic contaminants and improve water quality for reuse.",
    sector: "Environment & Sustainability",
    icon: "💧",
    productCount: 4,
  },
  {
    id: "scrap-processing",
    name: "Scrap Processing",
    description:
      "High-performance separation equipment for scrap yards and metal recyclers. Sort and recover ferrous and non-ferrous metals efficiently.",
    sector: "Environment & Sustainability",
    icon: "🏭",
    productCount: 9,
  },
];
