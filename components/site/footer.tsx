import { Phone, MessageCircle, MapPin, ShieldCheck, Clock } from "lucide-react";
import { CLINIC, NAV_LINKS, SERVICES } from "@/lib/clinic";
import { LogoLockup } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-white/8 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-14 sm:px-6 lg:px-8 lg:pb-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <LogoLockup />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/70">
              A Level 3 private medical centre serving the Kasarani–Mwiki community — open every
              hour, every day, with care that&rsquo;s fast, fair and judgement-free.
            </p>
            <p className="mt-4 flex items-start gap-2 text-[12px] leading-relaxed text-brand-200/60">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
              {CLINIC.license} · Provider {CLINIC.providerId}
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-400">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-brand-100/75 transition-colors hover:text-white ring-glass-focus">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Site links */}
          <nav aria-label="Site">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-400">Explore</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-brand-100/75 transition-colors hover:text-white ring-glass-focus">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-400">Reach us</h3>
            <ul className="mt-4 flex flex-col gap-3.5 text-sm">
              <li>
                <a
                  href={CLINIC.hotlineHref}
                  className="flex items-center gap-2.5 text-brand-100/85 transition-colors hover:text-white ring-glass-focus"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                  {CLINIC.hotline}
                </a>
              </li>
              <li>
                <a
                  href={CLINIC.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-brand-100/85 transition-colors hover:text-white ring-glass-focus"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                  WhatsApp {CLINIC.whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-brand-100/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                <span>
                  {CLINIC.addressLine}
                  <br />
                  {CLINIC.addressArea}
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-brand-100/85">
                <Clock className="h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                Open 24 hours · 7 days a week
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-[12px] text-brand-200/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {CLINIC.name} — {CLINIC.branch}. All rights reserved.
          </p>
          <p>
            Your health information is protected under the Kenya Data Protection Act (2019). We ask
            for consent before any record is opened.
          </p>
        </div>
      </div>
    </footer>
  );
}
