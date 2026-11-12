"use client";

import { useMemo, useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export function ProductBrowser({
  initialQ,
  initialCategory,
}: {
  initialQ: string;
  initialCategory: string;
}) {
  const [q, setQState] = useState(initialQ);
  const [category, setCategoryState] = useState(initialCategory);

  // Keep the URL shareable without a server round-trip on every keystroke.
  const syncUrl = (nextQ: string, nextCategory: string) => {
    const params = new URLSearchParams();
    if (nextQ) params.set("q", nextQ);
    if (nextCategory) params.set("category", nextCategory);
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `/products?${qs}` : "/products");
  };

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = !category || p.category === category;
      const matchQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.form.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });
  }, [q, category]);

  const setQ = (val: string) => {
    setQState(val);
    syncUrl(val, category);
  };
  const setCategory = (val: string) => {
    setCategoryState(val);
    syncUrl(q, val);
  };

  const renderFilters = () => (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Search
        </label>
        <div className="relative mt-2">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search..."
            className="pl-9"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Category
        </label>
        <div className="mt-2 flex flex-col gap-1">
          <button
            onClick={() => setCategory("")}
            className={`rounded-md px-3 py-2 text-left text-sm transition ${
              !category
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            All categories
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-md px-3 py-2 text-left text-sm transition ${
                category === c
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {(q || category) && (
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => {
            setQState("");
            setCategoryState("");
            syncUrl("", "");
          }}
        >
          Clear filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Catalogue</p>
          <h1 className="mt-1 font-display text-4xl font-bold">All Products</h1>
          <p className="mt-2 text-muted-foreground">
            {filtered.length} of {products.length} products
          </p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left">Filters</SheetTitle>
            </SheetHeader>
            {renderFilters()}
          </SheetContent>
        </Sheet>
      </header>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
          {renderFilters()}
        </aside>

        {/* Grid */}
        <section>
          {filtered.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border p-12 text-center">
              <p className="font-display text-lg font-semibold">No products found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
