import Image from "next/image";
import { ShieldCheck, HeartHandshake, Lock, Languages, BadgeCheck } from "lucide-react";
import { STAFF, CLINIC } from "@/lib/clinic";
import { Reveal } from "./reveal";
import { SectionHeading } from "./services";

const PHILOSOPHY = [
  {
    icon: HeartHandshake,
    title: "Judgement-free care",
    detail: "Whatever you're dealing with, you'll be met with respect — no lectures, no awkward questions.",
  },
  {
    icon: Lock,
    title: "Strictly confidential",
    detail: "Your records and reproductive health choices stay private, protected under Kenya's Data Protection Act.",
  },
  {
    icon: Languages,
    title: "Plain language",
    detail: "We explain everything in simple English or Kiswahili — you'll always leave knowing what's next.",
  },
  {
    icon: ShieldCheck,
    title: "Properly licensed",
    detail: `${CLINIC.license}. Every clinician is registered with their national council.`,
  },
] as const;

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink-950 py-16 sm:py-24 lg:py-28">
      <div className="aurora opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy + philosophy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Cinen"
              title="Care that treats you like a person"
              description="We built this clinic around the neighbourhood it serves — young families, students, workers and night-time emergencies. You'll feel the difference in how you're spoken to, not just how you're treated."
            />
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2">
              {PHILOSOPHY.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 80}>
                  <div className="glass-card h-full rounded-2xl p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-3.5 text-sm font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-brand-100/75">{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Image + floating credential card */}
          <Reveal delay={140}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] glass p-2.5">
                <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[1.6rem] sm:aspect-[4/4.2]">
                  <Image
                    src="/images/care.jpg"
                    alt="A Cinen nurse warmly checking on an elderly patient during a consultation"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                </div>
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl glass-strong p-4 sm:left-8 sm:right-auto sm:max-w-xs">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-300">
                  <BadgeCheck className="h-4 w-4" aria-hidden /> Verified credentials
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/90">
                  TSC / Minet empanelled · SHA registered · Provider ID {CLINIC.providerId}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Staff cadres */}
        <div className="mt-20 lg:mt-24">
          <Reveal>
            <h3 className="text-center font-display text-xl font-bold text-white sm:text-2xl">
              The team behind your care
            </h3>
          </Reveal>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STAFF.map((member, i) => (
              <Reveal as="li" key={member.role} delay={i * 70}>
                <div className="glass-card h-full rounded-2xl p-5">
                  <h4 className="font-display text-base font-bold text-white">{member.role}</h4>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-brand-400">
                    {member.council}
                  </p>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-brand-100/70">{member.scope}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
