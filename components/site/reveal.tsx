"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Lightweight scroll-reveal wrapper (IntersectionObserver, no deps).
 * Honours prefers-reduced-motion via CSS.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
