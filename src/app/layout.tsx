import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopAnnouncementBanner from "@/components/TopAnnouncementBanner";
import ColorBends from "@/components/ui/ColorBends";

export const metadata: Metadata = {
  metadataBase: new URL("https://birlatours.com"),
  title: {
    default: "Birla Tour & Travels — Luxury Toyota Innova Crysta Taxi Haridwar, Roorkee & Dehradun",
    template: "%s | Birla Tour & Travels",
  },
  description:
    "Official website of Birla Tour & Travels (GSTIN: 05AUAPK2728D1Z5). Verified luxury Toyota Innova Crysta taxi hire across Haridwar, Roorkee, Dehradun & Char Dham Yatra. Call +91 99174 90721 / 63972 95500.",
  keywords: [
    "Birla Tour and Travels",
    "Taxi Service in Haridwar",
    "Taxi Service in Roorkee",
    "Taxi Service in Dehradun",
    "Char Dham Yatra Cab Booking",
    "Jolly Grant Airport Taxi",
    "Toyota Innova Crysta Taxi Uttarakhand",
    "Outstation Cab Roorkee Haridwar",
    "Kedarnath Badrinath Taxi Service"
  ],
  authors: [{ name: "Birla Tour & Travels", url: "https://birlatours.com" }],
  creator: "Birla Tour & Travels",
  publisher: "Birla Tour & Travels",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://birlatours.com",
    siteName: "Birla Tour & Travels",
    title: "Birla Tour & Travels — Luxury Chauffeur Taxi in Uttarakhand",
    description:
      "Reliable Toyota Innova Crysta cabs for Char Dham, Dehradun Airport, and hill tours. Registered office in Roorkee & Haridwar. Call 9917490721.",
    images: [
      {
        url: "/images/tours/tour_kedarnath.jpg",
        width: 1200,
        height: 630,
        alt: "Birla Tour & Travels - Luxury Himalayan Cabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birla Tour & Travels — Uttarakhand Luxury Taxi Network",
    description:
      "Char Dham Yatra, Dehradun Airport, and outstation cabs from Roorkee & Haridwar.",
    images: ["/images/tours/tour_kedarnath.jpg"],
  },
  alternates: {
    canonical: "https://birlatours.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "name": "Birla Tour & Travels",
  "image": "https://birlatours.com/logo.png",
  "url": "https://birlatours.com",
  "telephone": ["+919917490721", "+916397295500"],
  "email": "subhashbirla7051@gmail.com",
  "taxID": "05AUAPK2728D1Z5",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vill. Asaf Nagar, NH-334",
    "addressLocality": "Roorkee",
    "addressRegion": "Uttarakhand",
    "postalCode": "247656",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.8543,
    "longitude": 77.8880
  },
  "areaServed": [
    "Haridwar",
    "Roorkee",
    "Dehradun",
    "Rishikesh",
    "Kedarnath",
    "Badrinath",
    "Mussoorie",
    "Uttarakhand"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "₹₹",
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Char Dham Yatra Taxi Package"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Jolly Grant Dehradun Airport Taxi"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Toyota Innova Crysta Rental"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="text-stone-900 antialiased selection:bg-orange-200 selection:text-stone-900 min-h-screen flex flex-col relative bg-[#F7F4F0]">
        {/* Dynamic Warm Orange ColorBends WebGL Waves */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <ColorBends
            colors={["#ff5c28", "#f26b45", "#ff8c38", "#ffaa5e", "#ffd199"]}
            rotation={90}
            speed={0.25}
            scale={1.1}
            frequency={1.9}
            warpStrength={1.2}
            mouseInfluence={1}
            noise={0.18}
            parallax={0.6}
            iterations={2}
            intensity={2.2}
            bandWidth={6}
            transparent={true}
          />
        </div>
        
        <Navbar />
        
        <main className="flex-grow pt-20 relative z-10">
          <TopAnnouncementBanner />
          {children}
        </main>
      </body>
    </html>
  );
}
