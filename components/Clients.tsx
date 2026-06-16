import { clientLogos } from "./data";

export default function Clients() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section id="clientes" className="clientes">
      <div className="container reveal reveal-up">
        <div className="section-header text-center">
          <span className="section-badge">Aliados Estrategicos</span>
          <h2>
            Nuestros <span className="text-gradient-green">Clientes</span>
          </h2>
          <p className="clientes-desc">Empresas lideres confian en nuestras soluciones logisticas seguras y eficientes.</p>
        </div>
      </div>
      <div className="marquee-container reveal reveal-scale delay-1">
        <div className="marquee-track">
          {logos.map((logo, index) => (
            <div className="client-logo-wrapper" key={`${logo.src}-${index}`}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
