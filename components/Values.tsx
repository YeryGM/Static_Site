import Icon, { type IconName } from "./Icons";
import { values } from "./data";

export default function Values() {
  return (
    <section id="valores" className="valores">
      <div className="container reveal reveal-up">
        <div className="section-header text-center">
          <span className="section-badge-green">Nuestra Etica</span>
          <h2>
            Valores que guian cada <span className="text-gradient-green">operacion</span>
          </h2>
        </div>
        <div className="valores-grid">
          {values.map((value, index) => (
            <article className={`valor reveal reveal-scale delay-${(index % 3) + 1}`} key={value.title}>
              <span className="icon-green" aria-hidden="true">
                <Icon name={value.icon as IconName} />
              </span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
