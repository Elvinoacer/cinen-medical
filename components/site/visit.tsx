import { DoorOpen, ClipboardList, Stethoscope, ShoppingBag, UtensilsCrossed, Droplets, IdCard, Pill, Clock, Sparkles } from "lucide-react";
import { VISIT_STEPS, PREP_TIPS, PEAK_TIMES } from "@/lib/clinic";
import { Reveal } from "./reveal";
import { SectionHeading } from "./services";

const STEP_ICONS = { door: DoorOpen, clipboard: ClipboardList, stethoscope: Stethoscope, bag: ShoppingBag } as const;
const PREP_ICONS = { utensils: UtensilsCrossed, drop: Droplets, id: IdCard, pill: Pill } as const;

export function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-mist-50 py-16 text-ink-900 sm:py-24 lg:py-28">
      {/* decorative gradient washes */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-brand-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Your visit, step by step"
          title="In and out, cared for"
          description="One visit covers consultation, tests and medicine. Here's exactly what happens from the moment you walk in."
        />

        {/* Steps */}
        <ol className="relative mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent lg:block" aria-hidden />
          {VISIT_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[step.icon as keyof typeof STEP_ICONS];
            return (
              <Reveal as="li" key={step.title} delay={i * 100}>
                <div className="glass-card-light relative h-full rounded-3xl p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="font-display text-4xl font-extrabold text-brand-600/15" aria-hidden>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-800/75">{step.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>

        {/* Prep + timing split */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="dot-grid h-full rounded-3xl border border-white/10 bg-ink-950 p-6 text-brand-50 shadow-xl sm:p-9">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-white">
                <Sparkles className="h-5 w-5 text-brand-300" aria-hidden />
                Come prepared — it makes everything faster
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {PREP_TIPS.map((tip) => {
                  const Icon = PREP_ICONS[tip.icon as keyof typeof PREP_ICONS];
                  return (
                    <li key={tip.title} className="glass flex gap-3.5 rounded-2xl p-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{tip.title}</h4>
                        <p className="mt-1 text-[13px] leading-relaxed text-brand-100/75">{tip.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="glass-card-light flex h-full flex-col gap-4 rounded-3xl p-6 sm:p-9">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-ink-900">
                <Clock className="h-5 w-5 text-brand-700" aria-hidden />
                When to come
              </h3>
              <p className="text-sm leading-relaxed text-ink-800/75">{PEAK_TIMES.routine}</p>
              <p className="rounded-2xl bg-brand-100/70 p-4 text-sm font-medium leading-relaxed text-brand-900">
                Tip: {PEAK_TIMES.tip}
              </p>
              <p className="mt-auto text-sm font-semibold leading-relaxed text-brand-700">
                In an emergency, just come — or call first. {PEAK_TIMES.emergency}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
