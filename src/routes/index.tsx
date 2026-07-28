import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ShieldCheck, Truck, BadgeCheck, Clock } from "lucide-react";
import { useState } from "react";

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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923224328106"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-xl transition-all duration-300 hover:bg-[#20ba5a] hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="text-sm font-semibold">Chat with us</span>
      </a>
    </>
  );
}
