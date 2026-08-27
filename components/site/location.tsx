import { Bus, Car, Accessibility, Navigation, Clock, Phone, Building2 } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { Reveal } from "./reveal";
import { SectionHeading } from "./services";

const LOGISTICS = [
  { icon: Building2, title: "Right on the road", detail: CLINIC.addressLine },
  { icon: Bus, title: "By matatu", detail: CLINIC.matatu },
  { icon: Car, title: "Parking", detail: CLINIC.parking },
  { icon: Accessibility, title: "Wheelchair access", detail: CLINIC.wheelchair },
] as const;

export function Location() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-16 sm:py-24 lg:py-28">
      <div className="aurora opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find us"
          title="Next to Equity Bank, on Mwiki Road"
          description="You can't miss us — look for the TotalEnergies station on Kasarani–Mwiki Road; we're right beside it in the same complex."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-5 lg:gap-6">
          {/* Logistics cards */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {LOGISTICS.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="glass flex gap-4 rounded-2xl p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-brand-100/75">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <div className="flex flex-col gap-3 rounded-2xl glass-strong p-5 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <p className="flex items-center gap-2 text-sm font-bold text-white">
                    <Clock className="h-4 w-4 text-brand-300" aria-hidden /> Open 24 / 7
                  </p>
                  <p className="mt-1 text-[13px] text-brand-100/75">
                    {CLINIC.poBox} · {CLINIC.addressArea}
                  </p>
                </div>
                <a
                  href={CLINIC.hotlineHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 active:scale-95 ring-glass-focus"
                >
                  <Phone className="h-4 w-4" /> Call now
                </a>
              </div>
            </Reveal>
          </div>

          {/* Map frame */}
          <Reveal delay={140} className="lg:col-span-3">
            <div className="relative h-full min-h-[19rem] overflow-hidden rounded-3xl glass p-2.5 sm:min-h-[22rem]">
              <div className="relative h-full min-h-[17.5rem] overflow-hidden rounded-[1.35rem] sm:min-h-[20.5rem]">
                <iframe
                  title="Map showing Cinen Medical Clinic on Kasarani-Mwiki Road, Nairobi"
                  src={CLINIC.mapsEmbed}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={CLINIC.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 inline-flex min-h-[2.75rem] items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500/30 ring-glass-focus"
              >
                <Navigation className="h-4 w-4 text-brand-300" />
                Get directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
