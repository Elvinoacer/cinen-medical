"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FAQS, CLINIC } from "@/lib/clinic";
import { Reveal } from "./reveal";
import { SectionHeading } from "./services";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-mist-50 py-16 text-ink-900 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Straight answers"
          title="Questions people actually ask"
          description="The things Kasarani neighbours search for at 2 a.m. — answered plainly."
        />

        <ul className="mt-10 flex flex-col gap-3.5 sm:mt-12">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal as="li" key={faq.q} delay={Math.min(i * 50, 200)}>
                <div
                  className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                    open
                      ? "bg-ink-950 shadow-xl"
                      : "glass-light hover:shadow-lg"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="flex min-h-[3.5rem] w-full items-center justify-between gap-4 px-5 py-4 text-left ring-glass-focus sm:px-6"
                  >
                    <span
                      className={`min-w-0 text-[15px] font-bold sm:text-base ${
                        open ? "text-white" : "text-ink-900"
                      }`}
                    >
                      {faq.q}
                    </span>

                    <span
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        open
                          ? "border-brand-300/40 bg-brand-300/15"
                          : "border-brand-700/15 bg-brand-50/70"
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          open ? "rotate-180 text-brand-300" : "text-brand-700"
                        }`}
                      />
                    </span>
                  </button>

                  <div id={`faq-panel-${i}`} className="faq-answer" data-open={open}>
                    <div>
                      <p
                        className={`px-5 pb-5 text-sm leading-relaxed sm:px-6 ${
                          open ? "text-brand-100/85" : "text-ink-800/75"
                        }`}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={120}>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-ink-800/70">
            Still unsure?
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-2.5 font-semibold text-white transition-transform hover:scale-105 active:scale-95 ring-glass-focus"
            >
              <MessageCircle className="h-4 w-4 text-brand-300" /> Ask on WhatsApp
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
