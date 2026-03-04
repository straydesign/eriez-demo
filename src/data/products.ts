export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  industries: string[];
  features: string[];
}

export const categories = [
  "Magnetic Separation",
  "Metal Detection",
  "Material Handling & Vibratory",
  "Flotation",
  "Fluid Recycling",
  "Metalworking",
  "Screening & Classification",
  "Recycling Equipment",
] as const;

export const products: Product[] = [
  // Magnetic Separation
  {
    id: "suspended-electromagnet",
    name: "Suspended Electromagnet",
    description:
      "High-intensity overhead magnets for removing ferrous metals from conveyed materials. Ideal for heavy-duty applications in mining and aggregate processing.",
    category: "Magnetic Separation",
    industries: ["Mining & Minerals", "Aggregate & Cement", "Recycling & Waste"],
    features: ["Self-cleaning", "High intensity", "Overhead mounting"],
  },
  {
    id: "magnetic-drum-separator",
    name: "Magnetic Drum Separator",
    description:
      "Permanent magnetic drums for continuous separation of ferrous contaminants. Designed for high-volume operations requiring consistent throughput.",
    category: "Magnetic Separation",
    industries: ["Mining & Minerals", "Recycling & Waste", "Aggregate & Cement"],
    features: ["Continuous operation", "Low maintenance", "High throughput"],
  },
  {
    id: "magnetic-pulley",
    name: "Magnetic Head Pulley",
    description:
      "Drop-in replacement pulleys that convert conveyor head positions into powerful magnetic separators for automatic ferrous removal.",
    category: "Magnetic Separation",
    industries: ["Mining & Minerals", "Aggregate & Cement", "Recycling & Waste"],
    features: ["Easy installation", "Automatic separation", "No power required"],
  },
  {
    id: "rare-earth-separator",
    name: "Rare Earth Magnetic Separator",
    description:
      "Ultra-high intensity rare earth permanent magnets for removing fine ferrous and weakly magnetic contaminants from dry materials.",
    category: "Magnetic Separation",
    industries: ["Food & Beverage", "Pharmaceutical", "Chemical Processing"],
    features: ["Ultra-high intensity", "Sanitary design", "Easy cleaning"],
  },
  // Metal Detection
  {
    id: "xtreme-metal-detector",
    name: "Xtreme Metal Detector",
    description:
      "Advanced multi-frequency metal detector for detecting all types of metals in conveyed products. Industry-leading sensitivity for food safety applications.",
    category: "Metal Detection",
    industries: ["Food & Beverage", "Pharmaceutical", "Packaging"],
    features: ["Multi-frequency", "Auto-learn", "HACCP compliant"],
  },
  {
    id: "metalarm-detector",
    name: "Metalarm Metal Detector",
    description:
      "Rugged industrial metal detector designed for harsh environments. Protects processing equipment from tramp metal damage in mining and aggregate operations.",
    category: "Metal Detection",
    industries: ["Mining & Minerals", "Aggregate & Cement", "Recycling & Waste"],
    features: ["Harsh environment", "Equipment protection", "Rugged design"],
  },
  {
    id: "pipeline-detector",
    name: "Pipeline Metal Detector",
    description:
      "In-line detector for gravity-fed or pneumatically conveyed products. Detects metallic contaminants in free-falling or pipeline applications.",
    category: "Metal Detection",
    industries: ["Food & Beverage", "Pharmaceutical", "Chemical Processing"],
    features: ["In-line detection", "Gravity-fed", "High sensitivity"],
  },
  {
    id: "liquid-line-detector",
    name: "Liquid Line Metal Detector",
    description:
      "Specialized detector for liquid and slurry applications. Ensures product purity in pumped liquid processing lines.",
    category: "Metal Detection",
    industries: ["Food & Beverage", "Pharmaceutical", "Chemical Processing"],
    features: ["Liquid processing", "Slurry capable", "Sanitary design"],
  },
  // Material Handling & Vibratory
  {
    id: "hi-vi-feeder",
    name: "Hi-Vi Electromagnetic Feeder",
    description:
      "Precision electromagnetic vibratory feeder for controlled material feeding. Variable feed rate for accurate metering of bulk materials.",
    category: "Material Handling & Vibratory",
    industries: ["Mining & Minerals", "Food & Beverage", "Chemical Processing"],
    features: ["Variable feed rate", "Precise control", "Low maintenance"],
  },
  {
    id: "mechanical-feeder",
    name: "Mechanical Vibratory Feeder",
    description:
      "Heavy-duty mechanical feeder for high-capacity material handling. Ideal for scalping, feeding, and conveying in demanding applications.",
    category: "Material Handling & Vibratory",
    industries: ["Mining & Minerals", "Aggregate & Cement", "Recycling & Waste"],
    features: ["High capacity", "Heavy-duty", "Reliable operation"],
  },
  {
    id: "vibratory-screener",
    name: "Vibratory Screener",
    description:
      "Multi-deck vibratory screen for precise particle size classification. Efficiently separates materials into multiple size fractions.",
    category: "Material Handling & Vibratory",
    industries: ["Mining & Minerals", "Chemical Processing", "Food & Beverage"],
    features: ["Multi-deck", "High efficiency", "Precise classification"],
  },
  {
    id: "bin-vibrator",
    name: "Bin Activator & Vibrator",
    description:
      "External bin vibrators and activators that promote reliable material flow from hoppers, bins, and chutes. Eliminate bridging and ratholing.",
    category: "Material Handling & Vibratory",
    industries: ["Mining & Minerals", "Chemical Processing", "Aggregate & Cement"],
    features: ["Flow promotion", "Anti-bridging", "Easy retrofit"],
  },
  // Flotation
  {
    id: "column-flotation",
    name: "Column Flotation Cell",
    description:
      "Advanced column flotation technology for fine particle recovery. Superior metallurgical performance with lower operating costs than conventional cells.",
    category: "Flotation",
    industries: ["Mining & Minerals"],
    features: ["Fine particle recovery", "Low operating cost", "High selectivity"],
  },
  {
    id: "cavitation-tube",
    name: "CavTube Flotation System",
    description:
      "Patented cavitation tube technology that generates ultra-fine bubbles for improved flotation performance and recovery rates.",
    category: "Flotation",
    industries: ["Mining & Minerals"],
    features: ["Ultra-fine bubbles", "Improved recovery", "Patented technology"],
  },
  {
    id: "stackcell",
    name: "StackCell Flotation System",
    description:
      "Compact flotation system combining multiple stages in a single vertical unit. Reduces footprint while maintaining high recovery and grade.",
    category: "Flotation",
    industries: ["Mining & Minerals"],
    features: ["Compact footprint", "Multi-stage", "High recovery"],
  },
  // Fluid Recycling
  {
    id: "hydroflow-filter",
    name: "HydroFlow Filter",
    description:
      "Permanent media filter for industrial fluid recycling. Extends coolant and wash water life while reducing waste disposal costs.",
    category: "Fluid Recycling",
    industries: ["Automotive", "Metalworking & Fabrication"],
    features: ["Permanent media", "Fluid recycling", "Cost reduction"],
  },
  {
    id: "magnetic-coolant-cleaner",
    name: "Magnetic Coolant Cleaner",
    description:
      "Powerful magnetic separator for removing ferrous fines from machine tool coolants. Maintains coolant quality and extends tool life.",
    category: "Fluid Recycling",
    industries: ["Automotive", "Metalworking & Fabrication"],
    features: ["Coolant cleaning", "Extended tool life", "Continuous operation"],
  },
  // Metalworking
  {
    id: "permanent-lifting-magnet",
    name: "Permanent Lifting Magnet",
    description:
      "Safe, powerful lifting magnets for handling steel plates, bars, and other ferromagnetic materials in fabrication and warehouse operations.",
    category: "Metalworking",
    industries: ["Metalworking & Fabrication", "Automotive"],
    features: ["No power required", "Safe handling", "Heavy-duty"],
  },
  {
    id: "magnetic-workholding",
    name: "Magnetic Workholding Chuck",
    description:
      "Precision magnetic chucks for secure workpiece holding during grinding, milling, and EDM operations. Quick setup and reliable clamping.",
    category: "Metalworking",
    industries: ["Metalworking & Fabrication", "Automotive"],
    features: ["Precision holding", "Quick setup", "Reliable clamping"],
  },
  {
    id: "demagnetizer",
    name: "Industrial Demagnetizer",
    description:
      "High-performance demagnetizing equipment for removing residual magnetism from tools, dies, and machined parts after processing.",
    category: "Metalworking",
    industries: ["Metalworking & Fabrication", "Automotive"],
    features: ["Residual removal", "Fast cycle", "Adjustable intensity"],
  },
  // Screening & Classification
  {
    id: "circular-screen",
    name: "Bivi-Tec Circular Screen",
    description:
      "High-efficiency circular vibratory screen for precise dry and wet screening applications. Available in single and multi-deck configurations.",
    category: "Screening & Classification",
    industries: ["Mining & Minerals", "Chemical Processing", "Food & Beverage"],
    features: ["High efficiency", "Multi-deck", "Wet/dry capable"],
  },
  {
    id: "linear-screen",
    name: "Linear Vibratory Screen",
    description:
      "Heavy-duty linear motion screen for high-capacity screening and dewatering. Robust construction for continuous operation in harsh environments.",
    category: "Screening & Classification",
    industries: ["Mining & Minerals", "Aggregate & Cement"],
    features: ["Linear motion", "High capacity", "Dewatering capable"],
  },
  {
    id: "centrifugal-sifter",
    name: "Centrifugal Sifter",
    description:
      "High-speed centrifugal screening for powders and granular materials. Removes oversize particles and foreign contaminants from bulk products.",
    category: "Screening & Classification",
    industries: ["Food & Beverage", "Pharmaceutical", "Chemical Processing"],
    features: ["High speed", "Sanitary design", "Scalp screening"],
  },
  // Recycling Equipment
  {
    id: "eddy-current-separator",
    name: "Eddy Current Separator",
    description:
      "High-speed rotor separator for recovering non-ferrous metals like aluminum and copper from waste streams. Essential for modern recycling facilities.",
    category: "Recycling Equipment",
    industries: ["Recycling & Waste"],
    features: ["Non-ferrous recovery", "High-speed rotor", "Adjustable splitter"],
  },
  {
    id: "shred-1",
    name: "Shred1 Ferrous Separator",
    description:
      "Purpose-built magnetic separator for auto shredder operations. Maximizes ferrous recovery from shredded vehicle scrap and mixed metals.",
    category: "Recycling Equipment",
    industries: ["Recycling & Waste", "Automotive"],
    features: ["Auto shredder", "High recovery", "Purpose-built"],
  },
  {
    id: "density-separator",
    name: "Density Separator",
    description:
      "Air-based density separation system for sorting mixed waste materials. Separates light and heavy fractions without water usage.",
    category: "Recycling Equipment",
    industries: ["Recycling & Waste"],
    features: ["Waterless", "Mixed waste", "Density-based"],
  },
  {
    id: "e-scrap-system",
    name: "E-Scrap Processing System",
    description:
      "Complete system for recovering precious and base metals from electronic waste. Combines multiple separation technologies for maximum recovery.",
    category: "Recycling Equipment",
    industries: ["Recycling & Waste"],
    features: ["E-waste processing", "Multi-stage", "Precious metal recovery"],
  },
  {
    id: "p-rex-separator",
    name: "P-Rex Magnetic Separator",
    description:
      "Powerful permanent rare earth magnetic separator designed specifically for recycling applications requiring high-purity ferrous recovery.",
    category: "Recycling Equipment",
    industries: ["Recycling & Waste"],
    features: ["Rare earth", "High purity", "Recycling-specific"],
  },
];
