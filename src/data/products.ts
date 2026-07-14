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
    id: "panadol-extra",
    name: "Panadol Extra 500mg",
    description:
      "Fast-acting pain relief tablets combining paracetamol and caffeine. Effective for headaches, migraines, muscle aches, and toothache. Pack of 30 tablets. Manufactured under strict GMP standards.",
    price: 320,
    category: "Pain Relief",
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=800&q=80",
    inStock: true,
  },
  {
    id: "centrum-multivitamin",
    name: "Centrum Adults Multivitamin",
    description:
      "Complete daily multivitamin with 24 essential nutrients including Vitamin D, B12, Iron, and Zinc. Supports immunity, energy, and overall wellness. 60 tablets, one-a-day formula.",
    price: 2450,
    category: "Vitamins & Supplements",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    inStock: true,
  },
  {
    id: "vitamin-d3",
    name: "Vitamin D3 5000 IU",
    description:
      "High-potency Vitamin D3 softgels for bone health, immune support, and calcium absorption. Suitable for adults with limited sun exposure. 90 softgels per bottle.",
    price: 1150,
    category: "Vitamins & Supplements",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=80",
    inStock: true,
  },
  {
    id: "cough-syrup",
    name: "Benylin Dry Cough Syrup",
    description:
      "Soothing dry cough relief for adults and children over 6. Non-drowsy formula with dextromethorphan. Cherry flavour, 120ml bottle. Provides up to 6 hours of relief.",
    price: 480,
    category: "Cold & Flu",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    inStock: true,
  },
  {
    id: "glucose-strips",
    name: "Accu-Chek Glucose Test Strips",
    description:
      "Precision blood glucose test strips compatible with Accu-Chek Active meters. Fast 5-second results with only 1-2µL blood sample. Box of 50 strips.",
    price: 2850,
    category: "Diabetes Care",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80",
    inStock: true,
  },
  {
    id: "cetaphil-cleanser",
    name: "Cetaphil Gentle Skin Cleanser",
    description:
      "Dermatologist recommended non-irritating cleanser for sensitive skin. Removes dirt and makeup without stripping natural moisture. Suitable for face and body. 250ml pump bottle.",
    price: 1690,
    category: "Skin Care",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
    inStock: true,
  },
  {
    id: "first-aid-kit",
    name: "Family First Aid Kit",
    description:
      "Comprehensive 85-piece first aid kit with bandages, antiseptics, gauze, scissors, and thermometer. Compact carry case ideal for home, office, and travel emergencies.",
    price: 3200,
    category: "First Aid",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
    inStock: false,
  },
  {
    id: "brufen-400",
    name: "Brufen 400mg Tablets",
    description:
      "Ibuprofen anti-inflammatory tablets for relief of pain, fever, and inflammation. Effective for arthritis, menstrual cramps, and back pain. Pack of 20 tablets.",
    price: 180,
    category: "Pain Relief",
    image:
      "https://images.unsplash.com/photo-1584308878768-57d3e1e15b7c?auto=format&fit=crop&w=800&q=80",
    inStock: true,
  },
];

export const formatPKR = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;
