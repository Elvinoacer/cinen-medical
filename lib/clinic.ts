/**
 * Cinen Medical Clinic — Kasarani Branch
 * Single source of truth for clinic facts (from research.md).
 */

export const CLINIC = {
  name: "Cinen Medical Clinic",
  branch: "Kasarani Branch",
  tagline: "Care that never closes",
  hotline: "+254 717 800 000",
  hotlineHref: "tel:+254717800000",
  whatsappNumber: "+254 20 764 1367",
  whatsappHref: "https://wa.me/254207641367",
  addressLine: "Kasarani–Mwiki Road, next to Equity Bank & TotalEnergies",
  addressArea: "Clay City Ward, Kasarani Sub-County, Nairobi",
  poBox: "P.O. Box 649",
  ward: "Clay City Ward, Kasarani",
  matatu: "Matatu 45 (from Nairobi CBD) & 145 — alight at Equity Bank / Total stage",
  parking: "Shared paved parking at the Equity Bank / TotalEnergies complex",
  wheelchair: "Ground-floor street access with entrance ramp",
  mapsQuery: "Cinen Medical Clinic Kasarani Mwiki Road Nairobi",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Cinen+Medical+Clinic+Kasarani+Mwiki+Road+Nairobi",
  mapsEmbed:
    "https://maps.google.com/maps?q=Cinen%20Medical%20Clinic%20Kasarani%20Mwiki%20Road%20Nairobi&z=15&output=embed",
  license: "KMPDC Reg 15747 · Level 3 Private Medical Centre",
  providerId: "FID-47-112283-4",
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#visit", label: "Your Visit" },
  { href: "#why-us", label: "Why Cinen" },
  { href: "#payments", label: "Payments" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Find Us" },
] as const;

export const QUICK_NEEDS = [
  { label: "Malaria & typhoid test", icon: "flask" },
  { label: "Family planning", icon: "heart" },
  { label: "Blood sugar & pressure", icon: "drop" },
  { label: "Wound care & stitches", icon: "cross" },
  { label: "Stomach pain", icon: "steth" },
] as const;

export const SERVICES = [
  {
    title: "General Consultation",
    plain: "Fever, flu, stomach problems, infections",
    detail:
      "Same-day diagnosis and treatment for everyday illness — from acute fevers and respiratory infections to chronic disease reviews and refills.",
    image: "/images/consultation.jpg",
    alt: "A clinical officer consulting a young patient in a bright examination room",
    icon: "stethoscope",
    points: ["Walk in any time — 24/7", "Chronic disease monitoring & refills", "English & Kiswahili"],
  },
  {
    title: "Lab & Diagnostics",
    plain: "Blood tests for malaria, typhoid, sugar & pressure",
    detail:
      "Rapid on-site testing with results while you wait: malaria RDTs, typhoid serology, blood glucose, urinalysis and basic blood counts.",
    image: "/images/lab.jpg",
    alt: "Laboratory technologist examining samples with a microscope",
    icon: "flask",
    points: ["Results the same visit", "Fasting sugar & lipid panels", "No appointment needed"],
  },
  {
    title: "Pharmacy",
    plain: "Medicines dispensed on the spot",
    detail:
      "An on-site pharmacy stocked with essential medicines, antibiotics, painkillers and reproductive health commodities — no second stop after your consultation.",
    image: "/images/pharmacy.jpg",
    alt: "Pharmacist organising medicines on modern pharmacy shelves",
    icon: "pill",
    points: ["Prescription filled immediately", "Clear dosage counselling", "Affordable essentials"],
  },
  {
    title: "Minor Surgery & Wound Care",
    plain: "Stitches, dressings, abscess drainage",
    detail:
      "Clean, gentle treatment for cuts, wounds and minor procedures — suturing, debridement, dressing changes and superficial abscess incision & drainage.",
    image: "/images/minor-surgery.jpg",
    alt: "Nurse applying a sterile wound dressing in a treatment room",
    icon: "cross",
    points: ["Quick minor procedures", "Wound dressing & review", "Sterile, safe technique"],
  },
  {
    title: "Family Planning & Reproductive Health",
    plain: "Implants, coils, injections, pills — private & judgement-free",
    detail:
      "Long-term family planning (implants and IUDs), injections, pills and confidential sexual-health advice. Chat with us on WhatsApp first if that feels easier.",
    image: "/images/family-planning.jpg",
    alt: "Nurse having a warm, private consultation with a young woman",
    icon: "heart",
    points: ["Implants & coils (IUDs)", "Strictly confidential", "Pre-visit WhatsApp advice"],
  },
  {
    title: "Emergency Stabilization",
    plain: "Sudden fever, acute pain, injuries — any hour",
    detail:
      "Walk in or call anytime. Emergencies jump the queue — our clinicians stabilize first, then arrange transfer to a partner hospital if advanced care is needed.",
    image: "/images/night.jpg",
    alt: "The warmly lit entrance of the clinic at night",
    icon: "siren",
    points: ["24/7, including holidays", "Emergencies seen first", "Rapid referral network"],
  },
] as const;

export const VACCINE_NOTE = {
  title: "Looking for baby vaccines?",
  body: "We do not offer routine childhood immunization (EPI). For baby vaccines, please visit Kasarani Health Centre (at the DCC offices on Kasarani–Mwiki Road) or Gertrude's Children's Hospital — we're happy to point you the right way on WhatsApp or the phone.",
} as const;

export const VISIT_STEPS = [
  {
    title: "Arrive — or reach out first",
    detail:
      "Walk in any time, day or night. Prefer to talk first? Message us on WhatsApp, or call the hotline in an emergency — your call goes straight to the clinician on duty.",
    icon: "door",
  },
  {
    title: "Quick registration",
    detail:
      "We take your name, ID / passport or SHA details, how you'll pay, and what's troubling you. It takes a minute — and emergencies skip the queue entirely.",
    icon: "clipboard",
  },
  {
    title: "Consult & test",
    detail:
      "A clinical officer examines you. If a lab test helps — malaria, typhoid, sugar, urine — the sample is taken and processed on the spot.",
    icon: "stethoscope",
  },
  {
    title: "Treat & go",
    detail:
      "Prescriptions are filled at our pharmacy before you leave. Pay by cash, M-Pesa, or through TSC/Minet and SHA schemes — then head home to recover.",
    icon: "bag",
  },
] as const;

export const PREP_TIPS = [
  {
    title: "Fasting blood tests",
    detail:
      "For blood sugar or lipid tests, don't eat or drink anything (except plain water) for 8–12 hours before your morning test.",
    icon: "utensils",
  },
  {
    title: "Pelvic ultrasound or IUD visit",
    detail:
      "Drink about one litre of water one hour before your appointment — a full bladder gives clearer images.",
    icon: "drop",
  },
  {
    title: "First visit",
    detail:
      "Bring your National ID, passport, or SHA registration details so we can open your health record smoothly.",
    icon: "id",
  },
  {
    title: "Chronic care refills",
    detail:
      "Carry all your current medicine containers (or your last prescription summary) so re-prescribing is safe — no risky interactions.",
    icon: "pill",
  },
] as const;

export const STAFF = [
  {
    role: "Clinical Officers",
    council: "Clinical Officers Council (COC)",
    scope: "Diagnosis, prescribing, minor surgery, emergency triage",
  },
  {
    role: "Registered Nurses",
    council: "Nursing Council of Kenya (NCK)",
    scope: "Triage, reproductive health, wound care, medication",
  },
  {
    role: "Lab Technologists",
    council: "KMLTTB",
    scope: "Sample collection, rapid testing, lab reporting",
  },
  {
    role: "Pharmacy Assistants",
    council: "Pharmacy & Poisons Board (PPB)",
    scope: "Dispensing, stock control, patient counselling",
  },
] as const;

export const PAYMENTS = [
  {
    title: "M-Pesa",
    detail: "Pay by Till or Paybill at registration — fast, cashless, receipted.",
    icon: "phone",
  },
  {
    title: "Cash",
    detail: "Plain cash is always welcome at the front desk.",
    icon: "wallet",
  },
  {
    title: "TSC / Minet",
    detail: "Empanelled provider for the Teachers Service Commission scheme (Minet Kenya).",
    icon: "badge",
  },
  {
    title: "SHA",
    detail: "Registered Social Health Authority beneficiaries can access covered primary care.",
    icon: "shield",
  },
] as const;

export const EMERGENCY_SIGNS = [
  "Severe difficulty breathing",
  "Chest pain or pressure",
  "Uncontrolled bleeding",
  "Convulsions or fits",
  "High fever with confusion",
  "Severe pregnancy complications",
] as const;

export const REFERRAL_PARTNERS = [
  "St. Francis Community Hospital",
  "Radiant Hospital Kasarani",
  "Kenyatta National Hospital",
] as const;

export const PEAK_TIMES = {
  routine: "08:00 – 13:00 and 16:00 – 19:00 are the busiest hours for routine visits.",
  tip: "Mid-afternoon (13:00 – 16:00) usually has the shortest waits. Night-time and weekends are driven by emergencies — routine care continues, but expect triage first.",
  emergency: "Emergency care never queues: nights, weekends and public holidays included.",
} as const;

export const FAQS = [
  {
    q: "Is the clinic open right now?",
    a: "Yes — Cinen Medical Clinic Kasarani never closes. Consultations, laboratory and pharmacy all run 24 hours a day, 7 days a week, including weekends and public holidays.",
  },
  {
    q: "Can I get tested for malaria and typhoid?",
    a: "Yes. We run malaria rapid tests and typhoid serology on-site, together with blood sugar, urine and basic blood counts. You'll usually have results before you leave the clinic.",
  },
  {
    q: "Do you offer family planning — implants, coils, injections?",
    a: "Yes. We provide long-term family planning (implants and IUD coils), injections and pills in a private, judgement-free setting. If you'd like to ask questions first, message us confidentially on WhatsApp — a nurse will guide you before your visit.",
  },
  {
    q: "Do you give baby vaccines?",
    a: "We don't provide routine childhood immunization (EPI vaccines). For baby vaccines, visit Kasarani Health Centre at the DCC offices on Kasarani–Mwiki Road, or Gertrude's Children's Hospital. Ask us on WhatsApp or by phone and we'll happily direct you.",
  },
  {
    q: "Where can I test my sugar and pressure?",
    a: "Right here — walk in any time. For the most accurate fasting blood sugar results, avoid food and drinks (except plain water) for 8–12 hours before an early-morning test.",
  },
  {
    q: "What should I bring for my first visit?",
    a: "Bring your National ID, passport, or SHA registration details, plus any medicines you're currently taking. For pelvic ultrasounds or IUD fittings, drink about a litre of water one hour before arriving.",
  },
  {
    q: "How can I pay?",
    a: "Cash, M-Pesa (Till or Paybill), and — for teachers and civil servants — the TSC/Minet medical scheme. Registered SHA beneficiaries can also access covered primary care services.",
  },
  {
    q: "Exactly where are you located?",
    a: "On Kasarani–Mwiki Road, directly next to Equity Bank (Kasarani Branch) and the TotalEnergies petrol station. Take matatu route 45 from the CBD or route 145 and alight at the Equity Bank / Total stage.",
  },
] as const;
