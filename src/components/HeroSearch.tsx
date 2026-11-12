"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSearch() {
  const [q, setQ] = useState("");
  const router = useRouter();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/products?q=${encodeURIComponent(query)}` : "/products");
  };

  return (
    <form
      onSubmit={submit}
      role="search"
      className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full border border-border bg-background p-1.5 shadow-lg shadow-primary/5"
    >
      <div className="flex flex-1 items-center gap-2 pl-4">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search medicines, vitamins..."
          aria-label="Search products"
          className="border-0 shadow-none focus-visible:ring-0"
        />
      </div>
      <Button type="submit" className="rounded-full">
        Search
      </Button>
    </form>
  );
}
