"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, Navigation } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

/**
 * Fixed bottom action bar (mobile only) — always-reachable Call / WhatsApp / Directions.
 * Frosted glass pill with gradient hairline; respects the iOS safe-area inset.
 */
export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 180);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
      style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <nav
        aria-label="Quick actions"
        className="grid grid-cols-3 gap-1.5 rounded-[1.4rem] border border-white/12 bg-ink-900/70 p-1.5 shadow-[0_20px_40px_-16px_rgb(0_0_0/0.6)] backdrop-blur-2xl backdrop-saturate-150"
      >
        <a
          href={CLINIC.hotlineHref}
          className="flex min-h-[3.5rem] flex-col items-center justify-center gap-0.5 rounded-xl bg-red-500/90 py-2 text-[11px] font-bold text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/0.25)] transition-transform active:scale-95"
        >
          <Phone className="h-5 w-5" aria-hidden />
          Call 24/7
        </a>
        <a
          href={CLINIC.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[3.5rem] flex-col items-center justify-center gap-0.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 py-2 text-[11px] font-bold text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/0.25)] transition-transform active:scale-95"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          WhatsApp
        </a>
        <a
          href={CLINIC.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[3.5rem] flex-col items-center justify-center gap-0.5 rounded-xl bg-white/10 py-2 text-[11px] font-bold text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/0.15)] transition-transform active:scale-95"
        >
          <Navigation className="h-5 w-5 text-brand-300" aria-hidden />
          Directions
        </a>
      </nav>
    </div>
  );
}

/** Floating WhatsApp bubble for desktop */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={CLINIC.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Cinen Medical Clinic on WhatsApp — ${CLINIC.whatsappNumber}`}
      className={`fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-glow transition-all duration-500 hover:scale-110 active:scale-95 lg:flex ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="absolute inset-0 animate-pulse-dot rounded-full" aria-hidden />
      <MessageCircle className="h-6 w-6" aria-hidden />
    </a>
  );
}
