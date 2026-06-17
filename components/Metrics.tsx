import AnimatedCounter from "./AnimatedCounter";

type Metric = {
  target: number;
  label: string;
  prefix?: string;
};

const metrics: Metric[] = [
  { target: 10, label: "Camiones" },
  { target: 150, label: "Apoyos", prefix: "+" },
  { target: 5, label: "Paises conectados" }
];

export default function Metrics() {
  return (
    <section id="metricas" className="metricas">
      <div className="container">
        <div className="metricas-stats">
          {metrics.map((metric, index) => (
            <div className="metric-group" key={metric.label}>
              <div className={`stat-item reveal reveal-scale delay-${index + 1}`}>
                <div className="stat-wrapper">
                  {metric.prefix && <span className="stat-prefix">{metric.prefix}</span>}
                  <AnimatedCounter target={metric.target} className="stat-number" />
                </div>
                <span className="stat-label">{metric.label}</span>
              </div>
              {index < metrics.length - 1 ? <span className="stat-divider desktop-only" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
      </div>
      <div className="shape-divider-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className="shape-fill" />
        </svg>
      </div>
    </section>
  );
}
