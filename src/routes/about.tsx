import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, HeartPulse, Microscope, Users, Award, Truck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — " },
      {
        name: "description",
        content:
          " is a DRAP-licensed online pharmacy in Pakistan committed to authentic medicines and safe healthcare delivery.",
      },
      { property: "og:title", content: "About " },
      {
        property: "og:description",
        content: "Our mission, licensing, and commitment to safe healthcare.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Licensed Pharmacy",
    body: "Fully registered with the Drug Regulatory Authority of Pakistan (DRAP). Every medicine we dispense meets national safety standards.",
  },
  {
    icon: Microscope,
    title: "Medical Verification",
    body: "Prescription medicines are reviewed by licensed pharmacists before dispensing. Batch numbers and expiry dates verified on receipt.",
  },
  {
    icon: HeartPulse,
    title: "Patient-First Care",
    body: "Free consultations with registered pharmacists for dosage, interactions, and side effects — because health decisions matter.",
  },
  {
    icon: Award,
    title: "Authentic Sourcing",
    body: "We source directly from authorized distributors and licensed manufacturers. No grey market, no compromises.",
  },
  {
    icon: Truck,
    title: "Cold-Chain Delivery",
    body: "Temperature-sensitive medicines shipped in insulated packaging with real-time tracking across Pakistan.",
  },
  {
    icon: Users,
    title: "50,000+ Patients",
    body: "Trusted by families across Karachi, Lahore, Islamabad, and beyond since our founding.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Making healthcare safer, one prescription at a time
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            We're building Pakistan's most trusted online pharmacy — where authenticity, licensed
            expertise, and patient care come first.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Access to authentic medicine should never be a privilege.  was founded to
              bring transparent, licensed pharmacy services to every home in Pakistan — with the
              assurance that every product on our shelves has been verified, tracked, and delivered
              safely.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From a family paracetamol to specialty chronic-care medication, our licensed
              pharmacists stand behind every order.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-display text-3xl font-bold text-primary">50k+</p>
                <p className="mt-1 text-xs text-muted-foreground">Patients served</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">15+</p>
                <p className="mt-1 text-xs text-muted-foreground">Cities covered</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">100%</p>
                <p className="mt-1 text-xs text-muted-foreground">Authentic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold">What sets us apart</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
