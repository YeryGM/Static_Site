import { WHATSAPP_LINK } from "./data";

export default function Proposal() {
  return (
    <section id="propuesta" className="propuesta">
      <div className="bg-overlay" />
      <div className="container relative z-10">
        <div className="propuesta-content reveal reveal-up">
          <div className="propuesta-text-block card-glass">
            <h2>
              Somos tu mejor socio logistico <br /> <span className="text-gradient-green">nacional e internacional</span>
            </h2>
            <p className="propuesta-text reveal reveal-up delay-1">
              En <strong>transfribol</strong> no vendemos promesas entregamos resultados. Operamos rutas internacionales con seguimiento en tiempo real. Operadores certificados y un compromiso claro: su mercaderia llega o nosotros respondemos.
            </p>
            <p className="propuesta-text reveal reveal-up delay-2">
              Conectamos Bolivia con <strong>Brasil, Argentina, Chile, Peru y Paraguay</strong>, garantizando que su carga llegue en tiempo y forma.
            </p>
            <p className="propuesta-text reveal reveal-up delay-3">
              Contamos con una flota moderna y un equipo capacitado, comprometidos con la excelencia y la satisfaccion de nuestros clientes en cada kilometro recorrido.
            </p>
            <div className="propuesta-btns reveal reveal-up delay-4">
              <a href="#cotizacion" className="btn btn-green">
                Solicitar cotizacion
              </a>
              <a href={WHATSAPP_LINK} className="btn btn-outline-dark" target="_blank" rel="noreferrer">
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
