import Image from "next/image";
import { Phone, Siren, Ambulance, AlertTriangle } from "lucide-react";
import { EMERGENCY_SIGNS, REFERRAL_PARTNERS, CLINIC } from "@/lib/clinic";
import { Reveal } from "./reveal";

export function Emergency() {
  return (
    <section id="emergency" className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/night.jpg"
          alt="The clinic entrance glowing warmly at night on Kasarani-Mwiki Road"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/92 via-ink-950/80 to-ink-950/92" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-red-300 backdrop-blur-md sm:text-xs">
                <Siren className="h-4 w-4" aria-hidden /> Emergency? Don&rsquo;t wait.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Call first. We answer around the clock.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-100/80">
                Emergency calls go straight to the nurse or clinical officer on duty — they&rsquo;ll tell
                you what to do before you even arrive. Walk-ins with urgent needs are triaged ahead
                of the queue, every hour of every day.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <a
                href={CLINIC.hotlineHref}
                className="mt-8 inline-flex min-h-[3.5rem] items-center gap-3 rounded-2xl bg-red-500 px-7 py-4 font-display text-lg font-bold text-white shadow-[0_0_40px_-8px_rgba(239,68,68,0.6)] transition-all hover:scale-[1.02] hover:bg-red-400 active:scale-95 ring-glass-focus"
              >
                <Phone className="h-6 w-6" aria-hidden />
                {CLINIC.hotline}
              </a>
            </Reveal>

            <Reveal delay={320}>
              <div className="glass-card mt-8 rounded-3xl p-6">
                <p className="flex items-center gap-2 text-sm font-bold text-white">
                  <Ambulance className="h-5 w-5 text-brand-300" aria-hidden />
                  If you need advanced hospital care
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-100/75">
                  We stabilize first, then arrange transfer to our partner hospitals:
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {REFERRAL_PARTNERS.map((partner) => (
                    <li
                      key={partner}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-brand-100"
                    >
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Red flags card */}
          <Reveal delay={140}>
            <div className="glass-strong h-full rounded-3xl p-6 sm:p-9">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-white">
                <AlertTriangle className="h-6 w-6 text-red-400" aria-hidden />
                Come immediately if you have
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {EMERGENCY_SIGNS.map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-3 rounded-xl border border-red-400/15 bg-red-500/[0.07] px-4 py-3.5 text-sm font-semibold text-red-100"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" aria-hidden />
                    {sign}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[13px] leading-relaxed text-brand-100/70">
                Severe difficulty breathing, chest pain, heavy bleeding, fits, confusion with high
                fever, or serious pregnancy problems are time-critical — calling ahead lets the team
                prepare while you&rsquo;re on the way. In emergencies, seconds matter.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
