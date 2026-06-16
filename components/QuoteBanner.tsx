import Icon from "./Icons";
import { WHATSAPP_NUMBER } from "./data";

export default function QuoteBanner() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quisiera%20hacer%20una%20cotizaci%C3%B3n`;

  return (
    <section id="cotizacion-express" className="unete-section">
      <div className="container reveal reveal-up">
        <div className="unete-card">
          <div className="unete-content">
            <h2>
              Consultas y <span className="highlight-inverse">Cotizaciones</span>
            </h2>
            <p>¿Deseas hacer una cotizacion especializada o tienes otras consultas logisticas? Haz clic en el boton de abajo y habla directamente con nuestro equipo de expertos.</p>
            <a href={href} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" className="btn-icon" />
              Hacer cotizacion
            </a>
          </div>
          <div className="unete-image">
            <div className="quote-image-wrapper">
              <img src="/images/sections/equipo/transfribol-driver.png" alt="Asesor Transclabol" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
