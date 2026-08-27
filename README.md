# Cinen Medical Clinic — Kasarani Branch

The official website for Cinen Medical Clinic (Kasarani Branch), a Level 3 private
medical centre on Kasarani–Mwiki Road, Nairobi, Kenya — open 24/7.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS 4** and
**lucide-react** icons. All clinic facts (services, contacts, payments, FAQs)
live in a single file — `lib/clinic.ts` — so content updates never require
touching component code.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project structure

```
app/
  layout.tsx        # Fonts (Sora + Plus Jakarta Sans), SEO metadata
  page.tsx          # Page composition + MedicalClinic JSON-LD schema
  globals.css       # Design system: brand tokens, glassmorphism, animations
components/site/
  navbar.tsx        # Glass sticky nav + mobile drawer
  hero.tsx          # Full-viewport hero with floating glass stat cards
  trust-strip.tsx   # Licensing marquee (KMPDC, TSC/Minet, SHA, M-Pesa)
  services.tsx      # Service cards + child-vaccine referral note
  visit.tsx         # Visit steps, preparation checklist, best times
  why-us.tsx        # Care philosophy + staff cadres + credentials
  payments.tsx      # M-Pesa / cash / TSC / SHA payment options
  emergency.tsx     # Red-flag symptoms, hotline, referral partners
  faq.tsx           # Accordion answering real local search queries
  location.tsx      # Map embed, landmarks, matatu routes, parking
  footer.tsx        # Contacts, licensing, data-privacy notice
  mobile-action-bar.tsx  # Sticky Call / WhatsApp / Directions bar (mobile)
  reveal.tsx        # Lightweight scroll-reveal (IntersectionObserver)
lib/
  clinic.ts         # ← All clinic facts and content (edit here)
public/images/      # Clinic imagery
```

## Editing content

Everything a non-developer might want to change — phone numbers, WhatsApp
links, services, FAQs, prep tips, licensing text — is defined in
`lib/clinic.ts`. Update the values there and the whole site reflects them.

## Key features

- **Glassmorphism design system** — layered frosted-glass cards over custom
  clinic imagery, with dark and light section rhythm
- **Mobile-first UX** — sticky bottom action bar (Call / WhatsApp / Directions),
  glass drawer navigation, 44px+ touch targets, safe-area insets respected
- **Real local search intent** — FAQ and quick-need chips mirror how Kasarani
  residents actually search ("malaria and typhoid test", "family planning
  near Equity Bank")
- **SEO** — full metadata, Open Graph, and `MedicalClinic` structured data
- **Accessible** — semantic landmarks, ARIA labels, keyboard-focus styles,
  `prefers-reduced-motion` support
