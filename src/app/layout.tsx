import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Birla Tour & Travels — Luxury Toyota Innova Crysta Taxi across Uttarakhand",
  description: "Premier chauffeur taxi network in Uttarakhand. Offices in Haridwar & Dehradun. Char Dham Yatra, 24x7 Jolly Grant Airport cabs. Call 9917490721 / 6397295500.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
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
      </head>
      <body className="bg-[#F5F2EF] text-stone-900 antialiased selection:bg-stone-200 selection:text-stone-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
      </body>
    </html>
  );
}
