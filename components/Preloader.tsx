"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    document.body.classList.add("preloader-active");
    const fadeTimer = window.setTimeout(() => setHiding(true), 950);
    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("preloader-active");
    }, 1650);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove("preloader-active");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader ${hiding ? "fade-out" : ""}`}>
      <div className="preloader-bg" />
      <div className="preloader-overlay" />
      <div className="preloader-content">
        <div className="spin-container">
          <div className="spinner" />
          <div className="preloader-logo-wrapper">
            <Image src="/images/brand/transfribol-logo-round.png" alt="Logo Transfribol" width={210} height={210} className="preloader-logo" />
          </div>
        </div>
        <div className="loading-text">Cargando...</div>
      </div>
    </div>
  );
}
