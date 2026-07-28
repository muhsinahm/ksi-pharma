import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ShoppingCart, Zap, ShieldCheck, Truck, ArrowLeft, FlaskConical } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, formatPKR } from "@/data/products";
import { cart } from "@/lib/cart-store";

export const Route = createFileRoute("/products_/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found — " }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — ` },
        { name: "description", content: product.description.slice(0, 155) },
        { property: "og:title", content: `${product.name} — ` },
        { property: "og:description", content: product.description.slice(0, 155) },
        { property: "og:image", content: product.image },
        { name: "twitter:image", content: product.image },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: ProductDetail,
});

function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold">Product not found</h1>
      <p className="mt-3 text-muted-foreground">
        The product you're looking for doesn't exist or has been removed.
      </p>
      <Button asChild className="mt-6">
        <Link to="/products">Browse all products</Link>
      </Button>
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();

  const addToCart = () => {
    cart.add();
    toast.success("Added to cart", { description: product.name });
  };
  const buyNow = () => {
    cart.add();
    toast.success("Proceeding to checkout", {
      description: `${product.name} — ${formatPKR(product.price)}`,
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/products"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            {product.category}
          </p>
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={addToCart}
              disabled={!product.inStock}
              className="w-full sm:flex-1 px-4 sm:px-8"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={buyNow}
              disabled={!product.inStock}
              className="w-full sm:flex-1 px-4 sm:px-8"
            >
              <Zap className="mr-2 h-4 w-4" />
              Buy Now
            </Button>
          </div>

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
  );
}
