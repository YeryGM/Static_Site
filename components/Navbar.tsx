"use client";

import { useEffect, useState } from "react";
import { navItems, WHATSAPP_LINK } from "./data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <nav className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "scrolled bg-white shadow-lg" : "bg-transparent"}`} id="navbar">
      <div className="container nav-container">
        <a href="#hero" className="nav-logo" onClick={() => setOpen(false)}>
          <img src="/images/brand/transfribol-logo.jpeg" alt="TRANSFRIBOL S.R.L. Logo" className="nav-logo-img" />
          <span className="nav-logo-text items-center">
            <span className="brand-name">TRANSFRIBOL</span>
            <span className="brand-suffix">S.R.L.</span>
          </span>
        </a>

        <ul className="nav-links desktop-only">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href={WHATSAPP_LINK} className="nav-cta-secondary" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </li>
        </ul>

        <div className="mobile-nav-actions">
          <button className={`menu-toggle ${open ? "active" : ""}`} aria-label={open ? "Cerrar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="mobile-link" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={WHATSAPP_LINK} className="mobile-link secondary" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                WhatsApp
              </a>
            </li>
          </ul>
          <p className="mobile-menu-footer">© 2026 TRANSFRIBOL S.R.L.</p>
        </div>
      </div>
    </nav>
  );
}
