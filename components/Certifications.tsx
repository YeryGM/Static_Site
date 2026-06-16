import Icon, { type IconName } from "./Icons";
import { certifications } from "./data";

export default function Certifications() {
  return (
    <section id="certificaciones" className="certificaciones">
      <div className="container reveal reveal-up">
        <div className="section-header text-center">
          <span className="section-badge section-badge-light">Estandares Internacionales</span>
          <h2>
            Nuestras <span className="text-solid-green">Certificaciones</span>
          </h2>
          <p className="cert-desc">Acreditamos nuestro compromiso global con la excelencia, seguridad y medio ambiente avalados por normas internacionales vigentes.</p>
        </div>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <article className={`cert-card reveal reveal-scale delay-${index + 1}`} key={cert.iso}>
              <span className={`cert-icon-wrapper badge-${cert.tone}`}>
                <Icon name={cert.icon as IconName} className="icon-svg" />
              </span>
              <span className="iso-title">{cert.iso}</span>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p>{cert.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
