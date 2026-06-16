import Icon from "./Icons";

export default function Coverage() {
  return (
    <section id="cobertura" className="cobertura">
      <div className="map-bg" aria-hidden="true">
        <div className="vector-map-container">
          <svg viewBox="0 0 720 720" className="coverage-svg">
            <defs>
              <linearGradient id="mapGradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#2f5f87" stopOpacity="0.85" />
                <stop offset="1" stopColor="#153552" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path className="continent" d="M341 62c44 19 70 58 88 101 25 62 74 97 96 159 16 45-2 83-30 113-35 37-52 74-46 125 5 43-23 83-66 92-41 9-82-15-91-56-9-39 6-78-12-116-17-35-56-52-80-84-29-38-22-89 6-125 30-39 43-82 49-129 5-39 43-96 86-80Z" />
            <path className="bolivia" d="M324 318 379 292 432 329 423 395 365 419 309 382Z" />
            <path className="route-line" d="M366 362 C305 318 265 261 213 190" />
            <path className="route-line" d="M366 362 C307 397 269 458 214 531" />
            <path className="route-line" d="M366 362 C432 350 491 321 565 262" />
            <path className="route-line" d="M366 362 C448 402 512 456 585 536" />
            <path className="route-line" d="M366 362 C330 440 311 515 320 626" />
            <g className="city-nodes">
              <circle cx="366" cy="362" r="8" />
              <circle cx="213" cy="190" r="6" />
              <circle cx="214" cy="531" r="6" />
              <circle cx="565" cy="262" r="6" />
              <circle cx="585" cy="536" r="6" />
              <circle cx="320" cy="626" r="6" />
            </g>
          </svg>
          <span className="country country-peru">PERU</span>
          <span className="country country-chile">CHILE</span>
          <span className="country country-argentina">ARGENTINA</span>
          <span className="country country-paraguay">PARAGUAY</span>
          <span className="country country-brasil">BRASIL</span>
          <div className="map-pulse p-scz">
            <Icon name="mapPin" className="pin-icon" />
          </div>
        </div>
      </div>
      <div className="container relative z-10">
        <div className="cobertura-info reveal reveal-left">
          <span className="section-badge-green">Base Operativa</span>
          <h2>
            <span className="text-solid-green">Santa Cruz</span>
          </h2>
          <p>Operamos desde el centro logistico de Bolivia, conectando rutas nacionales e internacionales con planificacion estrategica y seguimiento de vanguardia.</p>
        </div>
      </div>
    </section>
  );
}
