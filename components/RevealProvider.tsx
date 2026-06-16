"use client";

import { useEffect } from "react";

export default function RevealProvider() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    window.setTimeout(() => {
      document.querySelectorAll("#hero .reveal, .navbar.reveal").forEach((node) => node.classList.add("active"));
    }, 1100);

    return () => observer.disconnect();
  }, []);

  return null;
}
