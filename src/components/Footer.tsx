import { Link } from "@tanstack/react-router";
import { ShieldCheck, Truck, HeartPulse, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary/10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link to="/" className="flex items-center">
              <img src="/logo_web.png" alt="Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Your trusted online pharmacy delivering authentic medicines across Pakistan.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold">Contact & Address</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="https://wa.me/923224328106"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  +92 322 4328106
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:ksintpharma@gmail.com" className="hover:text-primary">
                  ksintpharma@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Mon – Sat: 10:00 AM – 05:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold">Our Promise</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Licensed pharmacy
              </li>
              <li className="flex items-center gap-2">
                <HeartPulse className="h-4 w-4 text-primary" /> Verified medicines
              </li>
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" /> Nationwide delivery
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold">We Accept</h4>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["VISA", "MasterCard", "JazzCash", "EasyPaisa", "COD"].map((p) => (
                <span
                  key={p}
                  className="rounded-md border border-border bg-background px-2.5 py-1 font-medium text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            <strong>Medical Disclaimer:</strong> Information on this site is for general reference
            only and does not replace professional medical advice. Always consult a licensed
            physician or pharmacist before starting any medication. Prescription medicines are
            dispensed only against a valid prescription in accordance with the DRAP regulations of
            Pakistan.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} KSI Pharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
