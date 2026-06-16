import { WHATSAPP_LINK } from "./data";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content flex flex-col items-start text-left px-4 md:px-16">
        <div className="reveal reveal-up">
          <h1 className="hero-title text-5xl md:text-7xl font-extrabold leading-tight">
            Servicio de transporte <br /> nacional e internacional
          </h1>
        </div>
        <p className="hero-subtitle text-xl md:text-2xl text-gradient-green reveal reveal-up delay-1">Movemos tu carga con responsabilidad y experiencia.</p>
        <div className="hero-btns justify-start reveal reveal-up delay-3">
          <a href="#cotizacion" className="btn btn-green">
            Cotizaciones
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-outline-white">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="shape-divider hero-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className="shape-fill" />
        </svg>
      </div>
    </section>
  );
}
