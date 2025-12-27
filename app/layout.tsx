import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateLocalBusinessSchema } from "@/lib/schema";

// ═══════════════════════════════════════════════════════════════
// DESIGN SYSTEM "SIGNAL EXPERT" - Typography
// Inter (Black 900) pour titres + JetBrains Mono pour labels
// ═══════════════════════════════════════════════════════════════

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Entreprise Marquage au Sol | Marquage Parking, Entrepot, Industriel en Ile-de-France",
    template: "%s | Entreprise Marquage au Sol"
  },
  description: "Entreprise specialisee dans le marquage au sol et la signalisation en Ile-de-France. Parking, entrepot, industriel, PMR. Devis gratuit.",
  keywords: ["entreprise marquage au sol", "marquage parking", "marquage entrepot", "signalisation", "Ile-de-France", "Paris"],
  authors: [{ name: "Entreprise Marquage au Sol" }],
  creator: "Entreprise Marquage au Sol",
  publisher: "Entreprise Marquage au Sol",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://entreprise-marquage-au-sol.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://entreprise-marquage-au-sol.fr",
    siteName: "Entreprise Marquage au Sol",
    title: "Entreprise Marquage au Sol | Expert Ile-de-France",
    description: "Specialiste du marquage au sol et signalisation. Parking, entrepot, industriel. Intervention rapide, devis gratuit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entreprise Marquage au Sol",
    description: "Specialiste du marquage au sol en Ile-de-France",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-asphalt-50 text-asphalt-800 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
