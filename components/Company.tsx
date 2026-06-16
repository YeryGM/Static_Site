export default function Company() {
  return (
    <section id="empresa" className="empresa">
      <div className="container empresa-grid">
        <div className="empresa-images reveal reveal-left">
          <div className="img-large">
            <img src="/images/sections/empresa/transfribol-history.png" alt="Camion Transfribol en ruta de montaña" className="rounded shadow" />
          </div>
          <div className="img-small">
            <img src="/images/sections/empresa/transfribol-team.jpg" alt="Camiones Transfribol" className="rounded shadow" />
          </div>
        </div>
        <div className="empresa-info reveal reveal-up">
          <span className="section-badge">Trayectoria y Confianza</span>
          <h2>
            Nuestra <span className="text-gradient-green">Historia</span>
          </h2>
          <p className="reveal reveal-up delay-1">
            <strong>TRANSFRIBOL</strong> nace con el proposito de brindar un servicio de transporte de carga seguro, puntual y confiable, conectando empresas y destinos a nivel nacional e internacional.
          </p>
          <p className="reveal reveal-up delay-2">
            Con el tiempo, hemos fortalecido nuestras operaciones y equipo, convirtiendonos en un aliado estrategico para nuestros clientes. Cada envio refleja nuestro compromiso, eficiencia y profesionalismo.
          </p>
          <p className="reveal reveal-up delay-3">Seguimos creciendo con una vision clara: conectar mas rutas y aportar al desarrollo del pais a traves de un servicio de calidad.</p>
        </div>
      </div>
    </section>
  );
}
