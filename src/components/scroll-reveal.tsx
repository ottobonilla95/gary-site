"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TARGET_SELECTOR = "main section :is(.kicker, h1, h2, h3, p)";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(TARGET_SELECTOR),
    );
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    targets.forEach((target, index) => {
      const bounds = target.getBoundingClientRect();
      target.dataset.scrollReveal = "";
      target.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);

      if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
        target.classList.add("is-revealed");
      } else {
        observer.observe(target);
      }
    });

    root.classList.add("scroll-reveal-ready");

    return () => {
      observer.disconnect();
      root.classList.remove("scroll-reveal-ready");
      targets.forEach((target) => {
        delete target.dataset.scrollReveal;
        target.classList.remove("is-revealed");
        target.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
