import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ShieldCheck, Truck, BadgeCheck, Clock } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [q, setQ] = useState("");
  const navigate = Route.useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/products", search: { q, category: "" } as never });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <BadgeCheck className="h-3.5 w-3.5" />
              DRAP Licensed Online Pharmacy
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Healthcare essentials,{" "}
              <span className="bg-primary-gradient bg-clip-text text-transparent">
                delivered with care
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Authentic medicines, vitamins, and wellness products at your doorstep — verified by
              licensed pharmacists.
            </p>

            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full border border-border bg-background p-1.5 shadow-lg shadow-primary/5"
            >
              <div className="flex flex-1 items-center gap-2 pl-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search medicines, vitamins..."
                  className="border-0 shadow-none focus-visible:ring-0"
                />
              </div>
              <Button type="submit" className="rounded-full">
                Search
              </Button>
            </form>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                100% Authentic
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-primary" />
                Licensed Pharmacy
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" />
                Nationwide Delivery
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories strip */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c}
                to="/products"
                search={{ category: c, q: "" } as never}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured carousel */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Featured</p>
            <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Products we have</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/products">View all</Link>
          </Button>
        </div>

        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {products.map((p) => (
              <CarouselItem
                key={p.id}
                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ProductCard product={p} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Trust band */}
      <section className="border-y border-border/60 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            {
              icon: ShieldCheck,
              title: "Licensed & Verified",
              body: "Registered with DRAP Pakistan.",
            },
            {
              icon: BadgeCheck,
              title: "Genuine Products",
              body: "Direct from authorized distributors.",
            },
            { icon: Truck, title: "Fast Delivery", body: "Same-day dispatch in major cities." },
            {
              icon: Clock,
              title: "Pharmacist Support",
              body: "Talk to a licensed pharmacist anytime.",
            },
          ].map((f) => (
            <div key={f.title} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
