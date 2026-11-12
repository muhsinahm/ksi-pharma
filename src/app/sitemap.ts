import type { MetadataRoute } from "next";
import { products, categories, categorySlug } from "@/data/products";
import { absoluteUrl } from "@/lib/seo";

// Generated from src/data/products.ts so new products/categories are picked up automatically.
// (lastmod is omitted until products carry real update dates.)
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/products",
    "/about",
    "/contact",
    ...categories.map((c) => `/products/category/${categorySlug(c)}`),
    ...products.map((p) => `/products/${p.id}`),
  ];
  return paths.map((p) => ({ url: absoluteUrl(p) }));
}
