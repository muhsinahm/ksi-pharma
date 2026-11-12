import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, Truck, ArrowLeft, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AddToCartButtons } from "@/components/AddToCartButtons";
import { JsonLd } from "@/components/JsonLd";
import { products, formatPKR, categorySlug } from "@/data/products";
import { seo, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ id: string }> };

// Pre-render every product page at build time; unknown ids are a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

const getProduct = (id: string) => products.find((p) => p.id === id);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).id);
  if (!product) return {};
  return seo({
    title: product.name,
    description: metaDescription(product.description),
    path: `/products/${product.id}`,
    image: product.image,
  });
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).id);
  if (!product) notFound();

  return (
    <>
      <JsonLd
        data={[
          productJsonLd(product),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            {
              name: product.category,
              path: `/products/category/${categorySlug(product.category)}`,
            },
            { name: product.name, path: `/products/${product.id}` },
          ]),
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to products
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col">
            <Link
              href={`/products/category/${categorySlug(product.category)}`}
              className="text-sm font-medium uppercase tracking-wider text-primary hover:underline"
            >
              {product.category}
            </Link>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              {product.inStock ? (
                <Badge className="bg-success text-success-foreground hover:bg-success">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="secondary">Out of Stock</Badge>
              )}
              <span className="text-sm text-muted-foreground">Type: {product.form}</span>
              <span className="text-sm text-muted-foreground">SKU: {product.id.toUpperCase()}</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3 border-y border-border py-6">
              <span className="font-display text-4xl font-bold text-foreground">
                {formatPKR(product.price)}
              </span>
              <span className="text-sm text-muted-foreground">Inclusive of taxes</span>
            </div>

            <div className="mt-6">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Description
              </h2>
              <p className="mt-3 leading-relaxed text-foreground/90">{product.description}</p>
            </div>

            {product.composition && (
              <div className="mt-6 border-t border-border/60 pt-6">
                <div className="flex items-center gap-2">
                  <FlaskConical className="h-4 w-4 text-primary" />
                  <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Composition
                  </h2>
                </div>
                <div className="mt-3 overflow-hidden rounded-xl border border-border bg-surface/50 text-sm">
                  {typeof product.composition === "string" ? (
                    <p className="p-4 text-foreground/90">{product.composition}</p>
                  ) : Array.isArray(product.composition) ? (
                    <div className="flex flex-wrap gap-2 p-4">
                      {product.composition.map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="divide-y divide-border">
                      {Object.entries(product.composition).map(([ingredient, strength]) => (
                        <div
                          key={ingredient}
                          className="flex items-center justify-between px-4 py-2.5"
                        >
                          <span className="font-medium text-foreground">{ingredient}</span>
                          <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-primary">
                            {strength}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <AddToCartButtons name={product.name} price={product.price} inStock={product.inStock} />

            <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-surface p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Verified</p>
                  <p className="text-xs text-muted-foreground">Authentic guarantee</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Free delivery</p>
                  <p className="text-xs text-muted-foreground">Orders over Rs. 2,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/** Trim to ~155 chars on a word boundary for the meta description. */
function metaDescription(text: string, max = 155) {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[,.;:\s]+$/, "") + "…";
}
