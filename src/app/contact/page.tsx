import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Contact Us",
  description:
    "Reach KS International pharmacists in Lahore, Pakistan. Call, WhatsApp, email, or send us a message — we typically respond within a few hours.",
  path: "/contact",
});

const info = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["Lahore, Pakistan"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+92 322 4328106 (WhatsApp)"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["ksintpharma@gmail.com"],
  },
  {
    icon: Clock,
    label: "Hours",
    lines: ["Mon – Sat: 10:00 AM – 05:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Get in touch</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            We&apos;re here to help
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Questions about a medication, a prescription, or your order? Our licensed pharmacists
            respond within a few hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="font-display text-2xl font-bold">Contact information</h2>
            <p className="mt-2 text-muted-foreground">
              Reach us directly using any of the channels below.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {info.map((i) => (
                <div key={i.label} className="rounded-xl border border-border bg-card p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <i.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {i.label}
                  </p>
                  {i.lines.map((l) => (
                    <p key={l} className="mt-1 text-sm text-foreground">
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
