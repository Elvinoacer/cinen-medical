"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, Clock } from "lucide-react";
import { NAV_LINKS, CLINIC } from "@/lib/clinic";
import { LogoLockup } from "./logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-2" : "bg-transparent py-3.5 sm:py-4"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
        >
          <a href="#top" aria-label="Cinen Medical Clinic — home" className="ring-glass-focus">
            <LogoLockup compact={scrolled} />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-brand-100/80 transition-colors hover:bg-white/10 hover:text-white ring-glass-focus"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={CLINIC.hotlineHref}
              className="group flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/15 ring-glass-focus"
            >
              <Phone className="h-4 w-4 text-brand-300 transition-transform group-hover:scale-110" />
              {CLINIC.hotline}
            </a>
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] active:scale-95 ring-glass-focus"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl glass text-white transition-transform active:scale-90 lg:hidden ring-glass-focus"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col gap-2 overflow-y-auto border-l border-white/10 bg-ink-900/85 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          } pb-safe`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between">
            <LogoLockup compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl glass text-white transition-transform active:scale-90 ring-glass-focus"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-6 flex flex-col gap-1.5">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${100 + i * 55}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[3.5rem] items-center justify-between rounded-2xl glass px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-500/20 ring-glass-focus"
                >
                  {link.label}
                  <span aria-hidden className="text-brand-300">→</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[3.5rem] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-4 text-base font-semibold text-white shadow-glow ring-glass-focus"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <a
              href={CLINIC.hotlineHref}
              className="flex min-h-[3.5rem] items-center justify-center gap-2 rounded-2xl glass px-5 py-4 text-base font-semibold text-white ring-glass-focus"
            >
              <Phone className="h-5 w-5 text-brand-300" />
              Call {CLINIC.hotline}
            </a>
            <p className="flex items-center justify-center gap-2 pt-2 text-xs text-brand-200/70">
              <Clock className="h-3.5 w-3.5" /> Open 24 hours · 7 days a week
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
