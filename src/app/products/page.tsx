import type { Metadata } from "next";
import { ProductBrowser } from "@/components/ProductBrowser";
import { seo } from "@/lib/seo";

// Filtered views (?q=, ?category=) all canonicalise to /products to avoid duplicate pages.
export const metadata: Metadata = seo({
  title: "All Products",
  description:
    "Browse the full KS International catalogue of medicines, supplements, syrups, and healthcare products with delivery across Pakistan.",
  path: "/products",
});

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[]; category?: string | string[] }>;
}) {
  const { q, category } = await searchParams;
  const first = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v) ?? "";
  return <ProductBrowser initialQ={first(q)} initialCategory={first(category)} />;
}
