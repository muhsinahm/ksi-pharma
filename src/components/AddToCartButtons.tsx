"use client";

import { ShoppingCart, Zap } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { formatPKR } from "@/data/products";
import { cart } from "@/lib/cart-store";

export function AddToCartButtons({
  name,
  price,
  inStock,
}: {
  name: string;
  price: number;
  inStock: boolean;
}) {
  const addToCart = () => {
    cart.add();
    toast.success("Added to cart", { description: name });
  };
  const buyNow = () => {
    cart.add();
    toast.success("Proceeding to checkout", {
      description: `${name} — ${formatPKR(price)}`,
    });
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button
        size="lg"
        onClick={addToCart}
        disabled={!inStock}
        className="w-full sm:flex-1 px-4 sm:px-8"
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={buyNow}
        disabled={!inStock}
        className="w-full sm:flex-1 px-4 sm:px-8"
      >
        <Zap className="mr-2 h-4 w-4" />
        Buy Now
      </Button>
    </div>
  );
}
