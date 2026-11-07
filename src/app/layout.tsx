import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopAnnouncementBanner from "@/components/TopAnnouncementBanner";
import ColorBends from "@/components/ui/ColorBends";

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
      <body className="bg-[#F5F2EF] text-stone-900 antialiased selection:bg-stone-200 selection:text-stone-900 min-h-screen flex flex-col relative">
        {/* Global Ambient ColorBends Background */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <ColorBends
            colors={["#f26b45", "#fde68a", "#fdba74"]}
            rotation={45}
            speed={0.12}
            scale={1.4}
            frequency={1.2}
            warpStrength={0.8}
            mouseInfluence={0.5}
            parallax={0.3}
            noise={0.06}
            iterations={2}
            intensity={1.0}
            bandWidth={8}
            transparent={true}
          />
        </div>
        <Navbar />
        <main className="flex-grow pt-20">
          <TopAnnouncementBanner />
          {children}
        </main>
      </body>
    </html>
  );
}
