import Image from "next/image";
import { Phone, MessageCircle, Clock, FlaskConical, HeartPulse, Droplets, Cross, Stethoscope, BadgeCheck } from "lucide-react";
import { CLINIC, QUICK_NEEDS } from "@/lib/clinic";
import { Reveal } from "./reveal";

const QUICK_ICONS = {
  flask: FlaskConical,
  heart: HeartPulse,
  drop: Droplets,
  cross: Cross,
  steth: Stethoscope,
} as const;

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-stretch overflow-hidden">
      {/* Backdrop image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.jpg"
          alt="The warm, modern reception of Cinen Medical Clinic in Kasarani"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Gradient scrims */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/88 via-ink-950/55 to-ink-950" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/85 via-ink-950/25 to-transparent" />
      <div className="aurora -z-10" />

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-2 text-[11px] font-semibold text-brand-100 sm:px-4 sm:text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-brand-400" />
                </span>
                Open now — 24/7, every day
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-2 text-[11px] font-semibold text-brand-100 sm:px-4 sm:text-sm">
                <BadgeCheck className="h-4 w-4 text-brand-300" />
                KMPDC Level 3 Licensed
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 h1-fluid font-display font-extrabold text-white text-balance">
              Good healthcare,
              <br />
              <span className="text-gradient">day and night.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-brand-100/85 sm:text-lg">
              A private Level 3 clinic on <strong className="font-semibold text-white">Kasarani–Mwiki Road</strong> — next
              to Equity Bank. Consultations, laboratory, pharmacy and minor procedures under one
              roof, explained in plain language. Walk in any time.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href={CLINIC.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-4 text-base font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95 ring-glass-focus"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a
                href={CLINIC.hotlineHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl glass-strong px-7 py-4 text-base font-semibold text-white transition-all hover:bg-white/20 active:scale-95 ring-glass-focus"
              >
                <Phone className="h-5 w-5 text-brand-300" />
                {CLINIC.hotline}
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-4 text-xs text-brand-200/70 sm:text-sm">
              Emergencies never queue — calls go straight to the clinician on duty.
            </p>
          </Reveal>
        </div>

        {/* Quick needs chips */}
        <Reveal delay={420} className="mt-10 lg:mt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300/80">
            Common reasons people walk in
          </p>
          <ul className="no-scrollbar mt-3.5 flex snap-x gap-2.5 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {QUICK_NEEDS.map((need) => {
              const Icon = QUICK_ICONS[need.icon as keyof typeof QUICK_ICONS];
              return (
                <li key={need.label} className="snap-start">
                  <a
                    href="#services"
                    className="flex min-h-[2.75rem] items-center gap-2 whitespace-nowrap rounded-full glass px-4 text-xs font-medium text-brand-50 transition-colors hover:bg-brand-500/20 hover:text-white sm:text-sm ring-glass-focus"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-brand-300" />
                    {need.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Stat band — in flow for reliable mobile layout */}
        <Reveal delay={500} className="mt-10 sm:mt-12">
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="glass-card flex items-center gap-4 rounded-2xl px-5 py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-300/80">Hours</dt>
                <dd className="font-display text-sm font-bold text-white sm:text-base">Always open — 24/7</dd>
              </div>
            </div>
            <div className="glass-card flex items-center gap-4 rounded-2xl px-5 py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                <FlaskConical className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-300/80">Under one roof</dt>
                <dd className="font-display text-sm font-bold text-white sm:text-base">Consult · Lab · Pharmacy</dd>
              </div>
            </div>
            <div className="glass-card flex items-center gap-4 rounded-2xl px-5 py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                <HeartPulse className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-300/80">Family planning</dt>
                <dd className="font-display text-sm font-bold text-white sm:text-base">Private & judgement-free</dd>
              </div>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
