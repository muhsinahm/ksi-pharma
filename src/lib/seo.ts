import type { Metadata } from "next";
import type { Product } from "@/data/products";

export const SITE_NAME = "KS International";
export const SITE_URL = "https://ksipharma.com";
/** 1200×630 branded share image used for link previews when a page has no image of its own. */
export const DEFAULT_OG_IMAGE = "/og-image.png";

export const CONTACT = {
  phone: "+92-322-4328106",
  email: "ksintpharma@gmail.com",
  city: "Lahore",
  country: "PK",
};

/** Turn a site-relative path into an absolute URL (required for canonical / og:image). */
export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${encodeURI(path)}`;
}

/** "Page — KS International", or just the site name for the home page. */
export function pageTitle(title?: string) {
  return title ? `${title} — ${SITE_NAME}` : SITE_NAME;
}

interface SeoInput {
  title?: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}

/**
 * Standard title / description / canonical / Open Graph / Twitter metadata for a page.
 * (Next merges openGraph/twitter shallowly, so every page gets the full objects.)
 */
export function seo({ title, description, path, image, noindex }: SeoInput): Metadata {
  const fullTitle = pageTitle(title);
  const url = absoluteUrl(path);
  const img = image
    ? { url: absoluteUrl(image), alt: title ?? SITE_NAME }
    : { url: absoluteUrl(DEFAULT_OG_IMAGE), width: 1200, height: 630, alt: SITE_NAME };
  return {
    title: { absolute: fullTitle },
    description,
    // A noindex page shouldn't declare a canonical URL.
    alternates: noindex ? undefined : { canonical: url },
    robots: noindex ? { index: false } : undefined,
    openGraph: {
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url,
      type: "website",
      locale: "en_PK",
      images: [img],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [img],
    },
  };
}

/** Serialise JSON-LD for a <script> tag; escapes "<" so it can never close the tag early. */
export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/logo_web.png"),
    image: absoluteUrl("/logo_web.png"),
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.city,
      addressCountry: CONTACT.country,
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      email: CONTACT.email,
      contactType: "customer service",
      areaServed: "PK",
    },
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: absoluteUrl(product.image),
    sku: product.id.toUpperCase(),
    category: product.category,
    additionalProperty: { "@type": "PropertyValue", name: "Form", value: product.form },
    brand: { "@type": "Brand", name: SITE_NAME },
    url: absoluteUrl(`/products/${product.id}`),
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/products/${product.id}`),
      priceCurrency: "PKR",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
