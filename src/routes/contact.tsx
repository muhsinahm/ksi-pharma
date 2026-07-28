import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — " },
      {
        name: "description",
        content:
          "Reach  pharmacists in Pakistan. Call, email, or send us a message — we typically respond within a few hours.",
      },
      { property: "og:title", content: "Contact " },
      {
        property: "og:description",
        content: "Get in touch with our licensed pharmacy team.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

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

function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const update =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Message sent!", {
        description: "Our team will get back to you within a few hours.",
      });
    }, 700);
  };

  return (
    <>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Get in touch</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">We're here to help</h1>
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

          {/* Form */}
          <form
            onSubmit={submit}
            noValidate
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <h2 className="font-display text-2xl font-bold">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill out the form and we'll be in touch shortly.
            </p>

            <div className="mt-6 grid gap-4">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Ali Raza"
                  aria-invalid={!!errors.name}
                  className="mt-1.5"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    className="mt-1.5"
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+92 300 1234567"
                    aria-invalid={!!errors.phone}
                    className="mt-1.5"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="How can we help you today?"
                  aria-invalid={!!errors.message}
                  className="mt-1.5"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" disabled={submitting}>
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
