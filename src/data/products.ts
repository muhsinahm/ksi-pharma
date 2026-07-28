export type Composition = Record<string, string> | string[] | string;

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // PKR
  category: string;
  image: string;
  inStock: boolean;
  composition?: Composition;
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
      "A gentle feminine intimate cleanser formulated to maintain hygiene, freshness, and the natural pH balance of the intimate area.",
    price: 997,
    category: "Feminine Intimate Cleanser",
    image: "/products/vegi_wash.png",
    inStock: true,
    composition: ["Lactic Acid", "Triclosan", "Tea Tree Oil", "Vitamin E", "Aloe Vera"],
  },
  {
    id: "vegi-wash",
    name: "Vegi Wash (100ml)",
    description:
      "A gentle feminine intimate cleanser formulated to maintain hygiene, freshness, and the natural pH balance of the intimate area.",
    price: 683,
    category: "Feminine Intimate Cleanser",
    image: "/products/vegi_wash.png",
    inStock: true,
    composition: ["Lactic Acid", "Triclosan", "Tea Tree Oil", "Vitamin E", "Aloe Vera"],
  },
  {
    id: "k-nol",
    name: "K-nol",
    description:
      "A nutritional supplement formulated to support women's reproductive health, hormonal balance, and overall wellness.",
    price: 1443,
    category: "Sachets",
    image: "/products/K-nol.png",
    inStock: true,
    composition: {
      "Myo-Inositol (DSC)": "2000mg",
      "L-Methyl Folate (DSC)": "400mcg",
      "Coenzyme Q10 (DSC)": "10mg",
      "Melatonin (DSC)": "3mg",
      "Vitamin B12 (DSC)": "2mcg",
      "D-Chiroinositol (DSC)": "25mg",
    },
  },
  {
    id: "k-vitum",
    name: "K-Vitum",
    description:
      "A complete multivitamin and mineral supplement designed to support immunity, energy, and overall health.",
    price: 1000,
    category: "Balanced Therapeutic Multivitamin-Mineral Tablet",
    image: "/products/K-Vitum.png",
    inStock: true,
    composition: "Complete multivitamin and mineral formulation.",
  },
  {
    id: "k-zyme",
    name: "k-zyme",
    description:
      "A Coenzyme Q10 supplement that helps maintain heart health and supports natural cellular energy production.",
    price: 1800,
    category: "Tablets",
    image: "/products/k-zyme.png",
    inStock: true,
    composition: {
      "Ubidecarenone (USP)": "100mg",
    },
  },
  {
    id: "m-care",
    name: "M-Care",
    description:
      "A premium lanolin ointment that moisturizes, soothes, and protects dry, cracked, and sensitive skin.",
    price: 451,
    category: "Skin & Nipple Ointment",
    image: "/products/M-Care.png",
    inStock: true,
    composition: {
      "Pre-Premium Lanolin": "100% w/w",
    },
  },
  {
    id: "k-nomia",
    name: "K-Nomia",
    description:
      "A melatonin supplement formulated to promote restful sleep and support a healthy sleep cycle.",
    price: 753,
    category: "Tablets",
    image: "/products/K-Nomia.png",
    inStock: true,
    composition: {
      Melatonin: "3mg",
    },
  },
  {
    id: "k-kuf",
    name: "K-Kuf",
    description:
      "A herbal cough syrup formulated with ivy leaf extract and thyme to help relieve cough and support respiratory health.",
    price: 250,
    category: "Cough Syrup",
    image: "/products/K-Kuf.png",
    inStock: true,
    composition: {
      "Thyme (EP)": "20mg",
      "IVY Leaf Extract (EP)": "35mg",
      "Glycyrrhiza Glabra (DSC)": "15mg",
    },
  },
  {
    id: "k-fer-tab",
    name: "K-Fer Tablet",
    description:
      "An iron supplement enriched with folic acid and vitamin C to help prevent and manage iron deficiency anemia.",
    price: 593,
    category: "Tablets",
    image: "/products/K-Fer.png",
    inStock: true,
    composition: {
      "Ferrous Bisglycinate": "300mg",
      "Folic Acid": "350mcg",
      "Vitamin C": "60mg",
    },
  },
  {
    id: "k-fer-syrup",
    name: "K-Fer Syrup",
    description:
      "An iron supplement enriched with folic acid and vitamin C to help prevent and manage iron deficiency anemia.",
    price: 250,
    category: "Syrup",
    image: "/products/K-Fer.png",
    inStock: true,
    composition: {
      "Ferrous Bisglycinate": "300mg",
      "Folic Acid": "350mcg",
    },
  },
  {
    id: "k-folic",
    name: "k-folic",
    description:
      "A folate and DHA supplement that supports healthy pregnancy, fetal development, and nutritional wellbeing.",
    price: 570,
    category: "Tablets",
    image: "/products/k-folic.png",
    inStock: true,
    composition: {
      "L-Methylfolate USP": "400mcg",
      "DHA USP": "10mg",
    },
  },
  {
    id: "k-ca-tabs",
    name: "k-Ca+ Tablet",
    description:
      "A calcium and vitamin D3 supplement formulated to support healthy bones, teeth, and muscle function.",
    price: 750,
    category: "Tablets",
    image: "/products/k-Ca+.png",
    inStock: true,
    composition: {
      "Calcium Carbonate (USP)": "600mg",
      "Vitamin D3 (USP)": "400IU",
      "Vitamin C (USP)": "50mg",
    },
  },
  {
    id: "k-ca-syrup",
    name: "k-Ca+ Syrup",
    description:
      "A calcium and vitamin D3 supplement formulated to support healthy bones, teeth, and muscle function.",
    price: 250,
    category: "Syrup",
    image: "/products/k-Ca+.png",
    inStock: true,
    composition: {
      "Calcium Carbonate (Per 10ml)": "600mg",
      "Vitamin D3 (Per 10ml)": "400IU",
    },
  },
  {
    id: "normarol",
    name: "Normarol",
    description:
      "A Coenzyme Q10 supplement that supports cardiovascular health, energy production, and antioxidant protection.",
    price: 1550,
    category: "Softgel Capsule",
    image: "/products/normarol.png",
    inStock: true,
    composition: {
      "Coenzyme Q10 (USP)": "50mg",
    },
  },
  {
    id: "optidex",
    name: "OPTIDEX",
    description:
      "A soothing balm that provides effective relief from headaches, nasal congestion, colds, and flu symptoms.",
    price: 230,
    category: "Balm",
    image: "/products/OPTIDEX.png",
    inStock: true,
    composition: {
      "Menthol (USP)": "200mg",
      "Clove Oil (USP)": "50mg",
      "Eucalyptus Oil (USP)": "25mg",
    },
  },
  {
    id: "actofin",
    name: "Actofin Gel (50g)",
    description:
      "A fast-acting topical gel that helps relieve muscle pain, joint pain, sprains, and minor body aches.",
    price: 469,
    category: "Pain Relieving Gel",
    image: "/products/Actofin.png",
    inStock: true,
    composition: {
      "Cinnamon Oil (USP)": "500mg",
      "Winter Green Oil (USP)": "50mg",
      "Menthol (BP)": "1500mg",
      "Thymol (USP)": "50mg",
      "Eucalyptus Oil (USP)": "250mg",
    },
  },
  {
    id: "salt-less",
    name: "Salt Less",
    description:
      "A healthier low-sodium salt alternative designed to help reduce sodium intake without compromising taste.",
    price: 153,
    category: "Low Sodium Salt",
    image: "/products/salt_less.png",
    inStock: true,
    composition: ["Potassium Chloride", "Sodium Chloride", "Anti Caking Agents"],
  },
  {
    id: "k-cid",
    name: "K-Cid",
    description:
      "A herbal antacid syrup that helps relieve acidity, indigestion, bloating, and acid reflux naturally.",
    price: 250,
    category: "Antacid Syrup",
    image: "/products/K-Cid.png",
    inStock: true,
    composition: {
      "Zingiber Officinale": "100mg",
      "Mentha Piperita": "50mg",
      "Trachyspermum Ammi": "50mg",
      "Foeniculum Vulgare": "50mg",
    },
  },
];

export const formatPKR = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;
