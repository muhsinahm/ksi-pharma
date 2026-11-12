import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { products, categories, categoryFromSlug, categorySlug } from "@/data/products";
import { seo, breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Pre-render every category page at build time; unknown slugs are a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: categorySlug(c) }));
}

function getCategory(slug: string) {
  const category = categoryFromSlug(slug);
  if (!category) return null;
  return { category, items: products.filter((p) => p.category === category) };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getCategory(slug);
  if (!data) return {};
  const { category, items } = data;
  return seo({
    title: category,
    description: `Shop ${category} from KS International (${items.length} product${
      items.length === 1 ? "" : "s"
    }): ${items.map((p) => p.name).join(", ")}. Delivery across Pakistan.`.slice(0, 200),
    path: `/products/category/${slug}`,
    image: items[0]?.image,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const data = getCategory(slug);
  if (!data) notFound();
  const { category, items } = data;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: category, path: `/products/category/${slug}` },
        ])}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All products
        </Link>

        <header className="mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Category</p>
          <h1 className="mt-1 font-display text-4xl font-bold">{category}</h1>
          <p className="mt-2 text-muted-foreground">
            {items.length} product{items.length === 1 ? "" : "s"}
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <nav aria-label="Other categories" className="mt-16">
          <h2 className="font-display text-lg font-semibold">Other categories</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {categories
              .filter((c) => c !== category)
              .map((c) => (
                <li key={c}>
                  <Link
                    href={`/products/category/${categorySlug(c)}`}
                    className="inline-block rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    {c}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
