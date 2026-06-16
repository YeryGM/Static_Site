"use client";

import Icon, { type IconName } from "./Icons";
import { services } from "./data";

const serviceDescriptions: Record<string, string> = {
  "Carga especial": "Manejo seguro de mercancia delicada.",
  Maquinaria: "Transporte de equipos industriales.",
  "Cargas pesadas": "Soluciones para gran volumen.",
  "Productos basicos": "Distribucion eficiente de bienes.",
  "Almacenes generales": "Resguardo seguro de inventario."
};

const scrollToGallery = () => {
  const el = document.getElementById("galeria-servicios");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Services() {
  return (
    <section id="servicios" className="servicios">
      <div className="container reveal reveal-up">
        <div className="section-header text-center">
          <h2 className="servicios-title">
            Nuestros <span className="text-gradient-green">Servicios</span>
          </h2>
          <p className="servicios-desc">
            Nos especializamos en soluciones logisticas integrales.
            <br /> Operamos con todo tipo de carga nacional e internacional.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className={`service-item reveal reveal-scale delay-${(index % 3) + 1}`}
              key={service.title}
              onClick={scrollToGallery}
            >
              <div className="service-circle">
                <Icon name={service.icon as IconName} className="service-svg" />
              </div>
              <h3>{service.title}</h3>
              <p className="service-hover-text">
                {serviceDescriptions[service.title]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
