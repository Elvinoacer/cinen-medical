import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-10 w-10", className)}
      role="img"
      aria-label="Cinen Medical Clinic logo"
    >
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3ecd95" />
          <stop offset="1" stopColor="#0a8f62" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#logo-g)" />
      <path
        d="M12 34h9l4-8 6 16 5-10h4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M44 20h4v6h6v4h-6v6h-4v-6h-6v-4h6z" fill="#ffffff" opacity="0.95" />
    </svg>
  );
}

export function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className={compact ? "h-9 w-9" : "h-10 w-10"} />
      <span className="flex flex-col leading-none">
        <span className="font-display font-bold tracking-tight text-white text-[15px] sm:text-base">
          Cinen Medical
        </span>
        <span className="text-[11px] sm:text-xs font-medium text-brand-300 tracking-wide">
          Kasarani · Open 24/7
        </span>
      </span>
    </span>
  );
}
