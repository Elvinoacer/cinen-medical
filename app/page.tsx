import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustStrip } from "@/components/site/trust-strip";
import { Services } from "@/components/site/services";
import { Visit } from "@/components/site/visit";
import { WhyUs } from "@/components/site/why-us";
import { Payments } from "@/components/site/payments";
import { Emergency } from "@/components/site/emergency";
import { Faq } from "@/components/site/faq";
import { Location } from "@/components/site/location";
import { Footer } from "@/components/site/footer";
import { MobileActionBar, FloatingWhatsApp } from "@/components/site/mobile-action-bar";
import { CLINIC } from "@/lib/clinic";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: `${CLINIC.name} — ${CLINIC.branch}`,
  description:
    "Level 3 private medical clinic on Kasarani-Mwiki Road, Nairobi. Open 24/7 with consultations, laboratory, pharmacy, minor surgery and confidential family planning.",
  telephone: CLINIC.hotline,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kasarani-Mwiki Road, next to Equity Bank & TotalEnergies",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    addressCountry: "KE",
  },
  geo: { "@type": "GeoCoordinates", latitude: -1.2226, longitude: 36.8965 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  medicalSpecialty: ["GeneralPractice", "Obstetric", "Emergency"],
  availableService: [
    "General outpatient consultation",
    "Diagnostic laboratory (malaria, typhoid, blood glucose, urinalysis)",
    "Pharmacy dispensing",
    "Minor surgery and wound care",
    "Family planning and reproductive health",
    "Emergency stabilization",
  ],
  paymentAccepted: "Cash, M-Pesa, TSC/Minet, SHA",
  isAcceptingNewPatients: true,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <TrustStrip />
        <Services />
        <Visit />
        <WhyUs />
        <Payments />
        <Emergency />
        <Faq />
        <Location />
      </main>
      <Footer />
      <MobileActionBar />
      <FloatingWhatsApp />
    </>
  );
}
