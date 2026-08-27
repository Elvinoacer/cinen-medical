import { ShieldCheck, Clock, BadgeCheck, Smartphone, HeartPulse, Users } from "lucide-react";

const TRUST_ITEMS = [
  { icon: ShieldCheck, text: "KMPDC Reg 15747 · Level 3 Private Medical Centre" },
  { icon: BadgeCheck, text: "TSC / Minet empanelled provider" },
  { icon: HeartPulse, text: "SHA-aligned primary care" },
  { icon: Clock, text: "Open 24 hours · 7 days · Holidays" },
  { icon: Smartphone, text: "M-Pesa Till & Paybill accepted" },
  { icon: Users, text: "Licensed clinical officers, nurses & lab technologists" },
];

export function TrustStrip() {
  const doubled = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <section aria-label="Licensing and trust credentials" className="relative border-y border-white/8 bg-ink-900/80 py-4">
      <div className="group relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
          {doubled.map((item, i) => (
            <span
              key={`${item.text}-${i}`}
              className="flex items-center gap-2.5 whitespace-nowrap text-xs font-medium text-brand-100/75 sm:text-sm"
              aria-hidden={i >= TRUST_ITEMS.length}
            >
              <item.icon className="h-4 w-4 shrink-0 text-brand-400" />
              {item.text}
              <span className="ml-6 h-1 w-1 rounded-full bg-brand-500/50" />
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-950 to-transparent" />
      </div>
    </section>
  );
}
