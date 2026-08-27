import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cinen-medical-kasarani.co.ke"),
  title: {
    default:
      "Cinen Medical Clinic Kasarani — Open 24/7 | Doctor, Lab & Pharmacy on Mwiki Road",
    template: "%s | Cinen Medical Clinic Kasarani",
  },
  description:
    "Level 3 private clinic on Kasarani–Mwiki Road (next to Equity Bank), open 24/7. Consultations, malaria & typhoid lab tests, pharmacy, wound care, stitches and confidential family planning. Pay via M-Pesa, cash, TSC/Minet or SHA.",
  keywords: [
    "clinic in Kasarani",
    "lab test for malaria and typhoid in Kasarani",
    "family planning near Equity Bank Kasarani",
    "blood sugar test Mwiki road",
    "clinic open now Kasarani",
    "24 hour clinic Nairobi",
    "wound dressing stitches Kasarani",
    "Cinen Medical Clinic",
  ],
  applicationName: "Cinen Medical Clinic",
  authors: [{ name: "Cinen Medical Clinic" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Cinen Medical Clinic Kasarani — Care that never closes",
    description:
      "24/7 consultations, on-site laboratory, pharmacy and confidential family planning on Kasarani–Mwiki Road, Nairobi.",
    url: "https://cinen-medical-kasarani.co.ke",
    siteName: "Cinen Medical Clinic — Kasarani Branch",
    locale: "en_KE",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1344, height: 768, alt: "Cinen Medical Clinic reception" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinen Medical Clinic Kasarani — Open 24/7",
    description: "Doctor, lab & pharmacy on Kasarani–Mwiki Road. Walk in any time.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#041512",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-ink-950 text-brand-50">
        {children}
      </body>
    </html>
  );
}
