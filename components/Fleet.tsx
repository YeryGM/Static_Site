import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import { fleetCards } from "./data";

export default function Fleet() {
  return (
    <section id="flota" className="flota">
      <div className="flota-dark">
        <div className="container">
          <div className="flota-hero reveal reveal-up">
            <div className="flota-img-side">
              <Image src="/images/sections/flota/transfribol-fleet-volvo.jpg" alt="Camiones TRANSFRIBOL Volvo" width={600} height={400} className="fleet-hero-img" />
            </div>
            <div className="flota-stats-side">
              <h2>
                Nuestra <span className="text-gradient-green">Flota</span>
              </h2>
              <div className="fleet-numbers">
                <div className="fleet-stat reveal reveal-scale delay-1">
                  <AnimatedCounter target={35} className="fleet-stat-number" />
                  <span className="fleet-stat-label">Caballos propios</span>
                </div>
                <div className="fleet-stat reveal reveal-scale delay-2">
                  <AnimatedCounter target={200} suffix="+" className="fleet-stat-number" />
                  <span className="fleet-stat-label">Apoyos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="truck-gallery">
        {fleetCards.map((card, index) => (
          <article className={`truck-gallery-item reveal reveal-scale delay-${index + 1}`} key={card.name}>
            <div className="img-carousel">
              <Image src={card.images[0]} alt={card.alt} fill className="img-1" sizes="(max-width: 768px) 100vw, 33vw" />
              <Image src={card.images[1]} alt={`${card.name} render TRANSFRIBOL`} fill className="img-2" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="truck-label">
              <span className="truck-qty">{card.quantity}</span>
              <span className="truck-name">{card.name}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
