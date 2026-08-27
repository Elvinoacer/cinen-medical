import Image from "next/image";
import {
  Stethoscope,
  FlaskConical,
  Pill,
  Cross,
  HeartPulse,
  Siren,
  Check,
  Baby,
  MessageCircle,
} from "lucide-react";
import { SERVICES, VACCINE_NOTE, CLINIC } from "@/lib/clinic";
import { Reveal } from "./reveal";

const SERVICE_ICONS = {
  stethoscope: Stethoscope,
  flask: FlaskConical,
  pill: Pill,
  cross: Cross,
  heart: HeartPulse,
  siren: Siren,
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className={`text-[11px] font-bold uppercase tracking-[0.2em] sm:text-xs ${isDark ? "text-brand-400" : "text-brand-700"}`}>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`h2-fluid mt-3 font-display font-bold tracking-tight text-balance ${
            isDark ? "text-white" : "text-ink-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p className={`mt-4 text-[15px] leading-relaxed sm:text-base ${isDark ? "text-brand-100/75" : "text-ink-800/70"}`}>
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink-950 py-16 sm:py-24 lg:py-28">
      <div className="aurora opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we treat"
          title="Everyday care, ready when you are"
          description="No jargon, no run-around — walk in, get checked, get treated and collect your medicine in a single visit. That's the whole point of us."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS];
            return (
              <Reveal as="li" key={service.title} delay={(i % 3) * 90}>
                <article className="glass-card group h-full rounded-3xl">
                  <div className="relative h-36 overflow-hidden sm:h-40">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-transparent" />
                    <span className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-2xl glass-strong text-brand-300 shadow-lg">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-lg font-bold text-white">{service.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-300">{service.plain}</p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-100/75">{service.detail}</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-brand-100/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>

        {/* Honest vaccine note */}
        <Reveal delay={120}>
          <aside className="mt-8 flex flex-col gap-4 rounded-3xl border border-amber-300/25 bg-amber-400/[0.07] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300">
              <Baby className="h-6 w-6" aria-hidden />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-base font-bold text-white">{VACCINE_NOTE.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-100/80">{VACCINE_NOTE.body}</p>
            </div>
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3rem] shrink-0 items-center justify-center gap-2 rounded-xl border border-amber-300/30 bg-amber-400/10 px-5 py-3 text-sm font-semibold text-amber-200 transition-colors hover:bg-amber-400/20 ring-glass-focus"
            >
              Ask us <MessageCircle className="h-4 w-4" />
            </a>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
