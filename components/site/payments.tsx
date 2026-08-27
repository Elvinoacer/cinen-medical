import { Smartphone, Wallet, BadgeCheck, ShieldCheck, Phone } from "lucide-react";
import { PAYMENTS, CLINIC } from "@/lib/clinic";
import { Reveal } from "./reveal";
import { SectionHeading } from "./services";

const PAY_ICONS = { phone: Smartphone, wallet: Wallet, badge: BadgeCheck, shield: ShieldCheck } as const;

export function Payments() {
  return (
    <section id="payments" className="relative overflow-hidden bg-mist-50 py-16 text-ink-900 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Paying for care"
          title="Pay the way that suits you"
          description="Fair, transparent fee-for-service pricing. Know your options before you arrive — and if you're insured under TSC/Minet or registered with SHA, bring your details and we'll handle the rest."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAYMENTS.map((payment, i) => {
            const Icon = PAY_ICONS[payment.icon as keyof typeof PAY_ICONS];
            return (
              <Reveal as="li" key={payment.title} delay={i * 80}>
                <div className="glass-card-light group h-full rounded-3xl p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{payment.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-800/75">{payment.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={100}>
          <p className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-center text-sm text-ink-800/70 sm:mt-10">
            <Phone className="h-4 w-4 text-brand-700" aria-hidden />
            Not sure what your visit will cost? Call
            <a href={CLINIC.hotlineHref} className="font-semibold text-brand-700 underline decoration-brand-400/50 underline-offset-4 hover:text-brand-600 ring-glass-focus">
              {CLINIC.hotline}
            </a>
            and we&rsquo;ll talk it through — no surprises at the desk.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
