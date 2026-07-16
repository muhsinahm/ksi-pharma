import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPKR, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
      <Link
        to="/products/$id"
        params={{ id: product.id }}
        className="relative block aspect-square overflow-hidden bg-white"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {!product.inStock && (
          <Badge
            variant="secondary"
            className="absolute right-3 top-3 bg-background/90 backdrop-blur"
          >
            Out of stock
          </Badge>
        )}
      </Link>
      <CardContent className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex-1">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            {product.category}
          </p>
          <h3 className="mt-1 line-clamp-2 font-display text-lg font-semibold leading-snug text-foreground">
            {product.name}
          </h3>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-display text-xl font-bold text-foreground">
            {formatPKR(product.price)}
          </span>
          <Button asChild size="sm" variant="outline">
            <Link to="/products/$id" params={{ id: product.id }}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
