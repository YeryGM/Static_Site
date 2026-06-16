import { processSteps } from "./data";

export default function Process() {
  return (
    <section id="proceso" className="proceso">
      <div className="container reveal reveal-up">
        <div className="section-header text-center">
          <span className="section-badge-green">Flujo Operativo</span>
          <h2>
            Como gestionamos tu <span className="text-gradient-green">envio</span>
          </h2>
        </div>
        <div className="proceso-steps">
          {processSteps.map((step, index) => (
            <article className={`step-item reveal reveal-up delay-${(index % 4) + 1}`} key={step.number}>
              <div className="step-card">
                <span className="step-number-bg">{step.number}</span>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
              {index < processSteps.length - 1 ? <span className="step-line" aria-hidden="true" /> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
