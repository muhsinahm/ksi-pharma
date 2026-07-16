export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // PKR
  category: string;
  image: string;
  inStock: boolean;
}

export const categories = [
  "Pain Relief",
  "Vitamins & Supplements",
  "Cold & Flu",
  "Diabetes Care",
  "Skin Care",
  "First Aid",
] as const;

export const products: Product[] = [
  {
    id: "actofin",
    name: "Actofin",
    description:
      "Fast-acting pain relief tablets combining paracetamol and caffeine. Effective for headaches, migraines, muscle aches, and toothache. Pack of 30 tablets. Manufactured under strict GMP standards.",
    price: 320,
    category: "Pain Relief",
    image: "/products/Actofin.png",
    inStock: true,
  },
  {
    id: "k-cid",
    name: "K-Cid",
    description:
      "Complete daily multivitamin with 24 essential nutrients including Vitamin D, B12, Iron, and Zinc. Supports immunity, energy, and overall wellness. 60 tablets, one-a-day formula.",
    price: 2450,
    category: "Vitamins & Supplements",
    image: "/products/K-Cid.png",
    inStock: true,
  },
  {
    id: "k-fer",
    name: "K-Fer",
    description:
      "High-potency Vitamin D3 softgels for bone health, immune support, and calcium absorption. Suitable for adults with limited sun exposure. 90 softgels per bottle.",
    price: 1150,
    category: "Vitamins & Supplements",
    image: "/products/K-Fer.png",
    inStock: true,
  },
  {
    id: "k-kuf",
    name: "K-Kuf",
    description:
      "Soothing dry cough relief for adults and children over 6. Non-drowsy formula with dextromethorphan. Cherry flavour, 120ml bottle. Provides up to 6 hours of relief.",
    price: 480,
    category: "Cold & Flu",
    image: "/products/K-Kuf.png",
    inStock: true,
  },
  {
    id: "k-nomia",
    name: "K-Nomia",
    description:
      "Precision blood glucose test strips compatible with Accu-Chek Active meters. Fast 5-second results with only 1-2µL blood sample. Box of 50 strips.",
    price: 2850,
    category: "Diabetes Care",
    image: "/products/K-Nomia.png",
    inStock: true,
  },
  {
    id: "k-vitum",
    name: "K-Vitum",
    description:
      "Dermatologist recommended non-irritating cleanser for sensitive skin. Removes dirt and makeup without stripping natural moisture. Suitable for face and body. 250ml pump bottle.",
    price: 1690,
    category: "Skin Care",
    image: "/products/K-Vitum.png",
    inStock: true,
  },
  {
    id: "k-nol",
    name: "K-nol",
    description:
      "Comprehensive 85-piece first aid kit with bandages, antiseptics, gauze, scissors, and thermometer. Compact carry case ideal for home, office, and travel emergencies.",
    price: 3200,
    category: "First Aid",
    image: "/products/K-nol.png",
    inStock: false,
  },
  {
    id: "m-care",
    name: "M-Care",
    description:
      "Ibuprofen anti-inflammatory tablets for relief of pain, fever, and inflammation. Effective for arthritis, menstrual cramps, and back pain. Pack of 20 tablets.",
    price: 180,
    category: "Pain Relief",
    image: "/products/M-Care.png",
    inStock: true,
  },
  {
    id: "optidex",
    name: "OPTIDEX",
    description:
      "Fast-acting pain relief tablets combining paracetamol and caffeine. Effective for headaches, migraines, muscle aches, and toothache. Pack of 30 tablets. Manufactured under strict GMP standards.",
    price: 320,
    category: "Pain Relief",
    image: "/products/OPTIDEX.png",
    inStock: true,
  },
  {
    id: "k-ca",
    name: "k-Ca+",
    description:
      "Complete daily multivitamin with 24 essential nutrients including Vitamin D, B12, Iron, and Zinc. Supports immunity, energy, and overall wellness. 60 tablets, one-a-day formula.",
    price: 2450,
    category: "Vitamins & Supplements",
    image: "/products/k-Ca+.png",
    inStock: true,
  },
  {
    id: "k-folic",
    name: "k-folic",
    description:
      "High-potency Vitamin D3 softgels for bone health, immune support, and calcium absorption. Suitable for adults with limited sun exposure. 90 softgels per bottle.",
    price: 1150,
    category: "Vitamins & Supplements",
    image: "/products/k-folic.png",
    inStock: true,
  },
  {
    id: "k-zyme",
    name: "k-zyme",
    description:
      "Soothing dry cough relief for adults and children over 6. Non-drowsy formula with dextromethorphan. Cherry flavour, 120ml bottle. Provides up to 6 hours of relief.",
    price: 480,
    category: "Cold & Flu",
    image: "/products/k-zyme.png",
    inStock: true,
  },
  {
    id: "normarol",
    name: "normarol",
    description:
      "Precision blood glucose test strips compatible with Accu-Chek Active meters. Fast 5-second results with only 1-2µL blood sample. Box of 50 strips.",
    price: 2850,
    category: "Diabetes Care",
    image: "/products/normarol.png",
    inStock: true,
  },
  {
    id: "salt-less",
    name: "salt_less",
    description:
      "Dermatologist recommended non-irritating cleanser for sensitive skin. Removes dirt and makeup without stripping natural moisture. Suitable for face and body. 250ml pump bottle.",
    price: 1690,
    category: "Skin Care",
    image: "/products/salt_less.png",
    inStock: true,
  },
  {
    id: "vegi-wash",
    name: "vegi_wash",
    description:
      "Comprehensive 85-piece first aid kit with bandages, antiseptics, gauze, scissors, and thermometer. Compact carry case ideal for home, office, and travel emergencies.",
    price: 3200,
    category: "First Aid",
    image: "/products/vegi_wash.png",
    inStock: true,
  },
];

export const formatPKR = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;
