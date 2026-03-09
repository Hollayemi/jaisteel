import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── SEO Metadata ─────────────────────

export const metadata: Metadata = {
  // ── Core ──────────────────────────
  title: {
    default: "JAI Steel Works & Management Ltd. | Steel Construction Abuja Nigeria",
    template: "%s | JAI Steel Works & Management Ltd.",
  },
  description:
    "JAI Steel Works & Management Ltd. is a leading steel construction, metal fabrication, welding, and project management company based in Abuja, Nigeria. Over 7 years delivering excellence across structural steel, custom fabrication, and turnkey projects.",
  keywords: [
    "steel construction Nigeria",
    "steel fabrication Abuja",
    "structural steel Nigeria",
    "metal fabrication Abuja",
    "welding services Nigeria",
    "steel company Abuja",
    "project management Nigeria",
    "turnkey steel projects",
    "steel beams columns Nigeria",
    "industrial construction Abuja",
    "warehouse construction Nigeria",
    "steel roofing Nigeria",
    "mezzanine floors Abuja",
    "JAI Steel Works",
    "JAI Steel Works Management Ltd",
    "steel contractor FCT",
  ],
  authors: [{ name: "JAI Steel Works & Management Ltd.", url: "https://jaisteelworks.com" }],
  creator: "JAI Steel Works & Management Ltd.",
  publisher: "JAI Steel Works & Management Ltd.",
  category: "Construction & Engineering",

  // ── Canonical & Robots ────────────
  metadataBase: new URL("https://jaisteelworks.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Open Graph (Facebook / LinkedIn / WhatsApp previews) ──────────────────
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://jaisteelworks.com",
    siteName: "JAI Steel Works & Management Ltd.",
    title: "JAI Steel Works & Management Ltd. | Steel Construction Abuja Nigeria",
    description:
      "Leading steel construction, metal fabrication, welding, and project management company in Abuja, Nigeria. 7+ years of excellence delivering structural steel, custom metal fabrication, and turnkey projects.",
    images: [
      {
        url: "/images/logoBlue.PNG",
        width: 1200,
        height: 630,
        alt: "JAI Steel Works & Management Ltd. — Steel Construction Abuja Nigeria",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X card ─────────────
  twitter: {
    card: "summary_large_image",
    title: "JAI Steel Works & Management Ltd. | Steel Construction Abuja",
    description:
      "Leading steel construction, metal fabrication, and project management company in Abuja, Nigeria. 7+ years of excellence.",
    images: ["/images/logoBlue.PNG"],
    creator: "@jaisteelworks",
    site: "@jaisteelworks",
  },

  // ── App / PWA ─────────────────────
  applicationName: "JAI Steel Works",
  appleWebApp: {
    capable: true,
    title: "JAI Steel Works",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // ── Icons ─────────────────────────
  icons: {
    icon: [
      { url: "/images/logoBlue.PNG", type: "image/png" },
    ],
    apple: [
      { url: "/images/logoBlue.PNG", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/logoBlue.PNG",
  },

  // ── Verification placeholders ──────
  // Uncomment and fill in once you connect Google Search Console / Bing
  // verification: {
  //   google: "your-google-verification-token",
  //   yandex: "your-yandex-token",
  //   bing: "your-bing-token",
  // },
};

// ─── JSON-LD Structured Data 

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://jaisteelworks.com/#business",
      name: "JAI Steel Works & Management Ltd.",
      alternateName: "JAI Steel Works",
      description:
        "JAI Steel Works & Management Ltd. is a forward-thinking engineering, steel-construction, and project-management company based in Abuja, Nigeria. We specialize in structural steel works, metal fabrication, welding services, consultancy, and turnkey project execution.",
      url: "https://jaisteelworks.com",
      telephone: "+2348128558718",
      email: "jaisteelconstructionandmgtltd@gmail.com",
      foundingDate: "2017",
      logo: {
        "@type": "ImageObject",
        url: "https://jaisteelworks.com/images/logoBlue.PNG",
      },
      image: "https://jaisteelworks.com/images/logoBlue.PNG",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abuja",
        addressRegion: "FCT",
        addressCountry: "NG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.0579,
        longitude: 7.4951,
      },
      areaServed: [
        { "@type": "City", name: "Abuja" },
        { "@type": "Country", name: "Nigeria" },
      ],
      sameAs: [
        "https://linkedin.com/company/jaisteelworks",
        "https://instagram.com/jaisteelworks",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Steel Construction & Fabrication Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Structural Steel & Construction Services",
              description:
                "Design, fabrication, supply and installation of structural steel components including beams, columns, trusses, and complete building frameworks.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Metal Fabrication & Welding Services",
              description:
                "Custom fabrication of gates, fences, railings, sheet metal, and professional welding services for mild steel, stainless steel, and aluminium.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Project Management & Consultancy Services",
              description:
                "Construction planning, engineering consultancy, procurement support, quality control, and turnkey project delivery oversight.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://jaisteelworks.com/#website",
      url: "https://jaisteelworks.com",
      name: "JAI Steel Works & Management Ltd.",
      description:
        "Steel construction, metal fabrication, welding, and project management company in Abuja, Nigeria.",
      publisher: { "@id": "https://jaisteelworks.com/#business" },
    },
  ],
};

// ─── Root Layout ──────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Geographic targeting — helps Google rank for local searches */}
        <meta name="geo.region" content="NG-FC" />
        <meta name="geo.placename" content="Abuja" />
        <meta name="geo.position" content="9.0579;7.4951" />
        <meta name="ICBM" content="9.0579, 7.4951" />

        {/* Browser theme colour (matches primary blue) */}
        <meta name="theme-color" content="#2D3E8F" />
        <meta name="msapplication-TileColor" content="#2D3E8F" />

        {/* JSON-LD structured data — helps Google show rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}