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
    id: "vegi-wash",
    name: "Vegi Wash (200ml)",
    description:
      "Comprehensive 85-piece first aid kit with bandages, antiseptics, gauze, scissors, and thermometer. Compact carry case ideal for home, office, and travel emergencies.",
    price: 997,
    category: "Feminine Intimate Cleanser",
    image: "/products/vegi_wash.png",
    inStock: true,
  },
  {
    id: "vegi-wash",
    name: "Vegi Wash (100ml)",
    description:
      "Comprehensive 85-piece first aid kit with bandages, antiseptics, gauze, scissors, and thermometer. Compact carry case ideal for home, office, and travel emergencies.",
    price: 683,
    category: "Feminine Intimate Cleanser",
    image: "/products/vegi_wash.png",
    inStock: true,
  },
  {
    id: "k-nol",
    name: "K-nol",
    description:
      "Comprehensive 85-piece first aid kit with bandages, antiseptics, gauze, scissors, and thermometer. Compact carry case ideal for home, office, and travel emergencies.",
    price: 1447,
    category: "Infertility",
    image: "/products/K-nol.png",
    inStock: false,
  },
  {
    id: "k-vitum",
    name: "K-Vitum",
    description:
      "Dermatologist recommended non-irritating cleanser for sensitive skin. Removes dirt and makeup without stripping natural moisture. Suitable for face and body. 250ml pump bottle.",
    price: 1000,
    category: "Powerful Multivitamin",
    image: "/products/K-Vitum.png",
    inStock: true,
  },
  {
    id: "k-zyme",
    name: "k-zyme",
    description:
      "Soothing dry cough relief for adults and children over 6. Non-drowsy formula with dextromethorphan. Cherry flavour, 120ml bottle. Provides up to 6 hours of relief.",
    price: 1800,
    category: "Coenzyme Q10 50mg + 100mg",
    image: "/products/k-zyme.png",
    inStock: true,
  },
  {
    id: "m-care",
    name: "M-Care",
    description:
      "Ibuprofen anti-inflammatory tablets for relief of pain, fever, and inflammation. Effective for arthritis, menstrual cramps, and back pain. Pack of 20 tablets.",
    price: 451,
    category: "Skin and Nipple Ointment",
    image: "/products/M-Care.png",
    inStock: true,
  },
  {
    id: "k-nomia",
    name: "K-Nomia",
    description:
      "Precision blood glucose test strips compatible with Accu-Chek Active meters. Fast 5-second results with only 1-2µL blood sample. Box of 50 strips.",
    price: 753,
    category: "Melatonin",
    image: "/products/K-Nomia.png",
    inStock: true,
  },
  {
    id: "k-kuf",
    name: "K-Kuf",
    description:
      "Soothing dry cough relief for adults and children over 6. Non-drowsy formula with dextromethorphan. Cherry flavour, 120ml bottle. Provides up to 6 hours of relief.",
    price: 250,
    category: "Cold & Flu",
    image: "/products/K-Kuf.png",
    inStock: true,
  },

  {
    id: "k-fer-tab",
    name: "K-Fer Tablet",
    description:
      "High-potency Vitamin D3 softgels for bone health, immune support, and calcium absorption. Suitable for adults with limited sun exposure. 90 softgels per bottle.",
    price: 593,
    category: "ferrous bisglycinate + Folic Acid + Vitamic C",
    image: "/products/K-Fer.png",
    inStock: true,
  },
  {
    id: "k-fer-syrup",
    name: "K-Fer Syrup",
    description:
      "High-potency Vitamin D3 softgels for bone health, immune support, and calcium absorption. Suitable for adults with limited sun exposure. 90 softgels per bottle.",
    price: 250,
    category: "ferrous bisglycinate + Folic Acid + Vitamic C",
    image: "/products/K-Fer.png",
    inStock: true,
  },
  {
    id: "k-folic",
    name: "k-folic",
    description:
      "High-potency Vitamin D3 softgels for bone health, immune support, and calcium absorption. Suitable for adults with limited sun exposure. 90 softgels per bottle.",
    price: 570,
    category: "L-methylfolate",
    image: "/products/k-folic.png",
    inStock: true,
  },
  {
    id: "k-ca-tabs",
    name: "k-Ca+ Tablet",
    description:
      "Complete daily multivitamin with 24 essential nutrients including Vitamin D, B12, Iron, and Zinc. Supports immunity, energy, and overall wellness. 60 tablets, one-a-day formula.",
    price: 750,
    category: "Vitamins & Supplements",
    image: "/products/k-Ca+.png",
    inStock: true,
  },
  {
    id: "k-ca-syrup",
    name: "k-Ca+ Syrup",
    description:
      "Complete daily multivitamin with 24 essential nutrients including Vitamin D, B12, Iron, and Zinc. Supports immunity, energy, and overall wellness. 60 tablets, one-a-day formula.",
    price: 250,
    category: "Vitamins & Supplements",
    image: "/products/k-Ca+.png",
    inStock: true,
  },
  {
    id: "normarol",
    name: "Normarol",
    description:
      "Precision blood glucose test strips compatible with Accu-Chek Active meters. Fast 5-second results with only 1-2µL blood sample. Box of 50 strips.",
    price: 1550,
    category: "Coenzyme Q10 50mg Soft Gell",
    image: "/products/normarol.png",
    inStock: true,
  },
  {
    id: "optidex",
    name: "OPTIDEX",
    description:
      "Fast-acting pain relief tablets combining paracetamol and caffeine. Effective for headaches, migraines, muscle aches, and toothache. Pack of 30 tablets. Manufactured under strict GMP standards.",
    price: 230,
    category: "Relieves Headache, Cold & Flu Chest Congestion",
    image: "/products/OPTIDEX.png",
    inStock: true,
  },
  {
    id: "actofin",
    name: "Actofin Gel (50g)",
    description:
      "Fast-acting pain relief tablets combining paracetamol and caffeine. Effective for headaches, migraines, muscle aches, and toothache. Pack of 30 tablets. Manufactured under strict GMP standards.",
    price: 469,
    category: "Pain Relief Gel",
    image: "/products/Actofin.png",
    inStock: true,
  },
  {
    id: "salt-less",
    name: "Salt Less",
    description:
      "Dermatologist recommended non-irritating cleanser for sensitive skin. Removes dirt and makeup without stripping natural moisture. Suitable for face and body. 250ml pump bottle.",
    price: 153,
    category: "Low Sodium Salt Substitute",
    image: "/products/salt_less.png",
    inStock: true,
  },
  {
    id: "k-cid",
    name: "K-Cid",
    description:
      "Complete daily multivitamin with 24 essential nutrients including Vitamin D, B12, Iron, and Zinc. Supports immunity, energy, and overall wellness. 60 tablets, one-a-day formula.",
    price: 250,
    category: "Antacid Syrup",
    image: "/products/K-Cid.png",
    inStock: true,
  },
];

export const formatPKR = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;
