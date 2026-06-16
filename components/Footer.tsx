import Icon from "./Icons";
import { navItems } from "./data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <img src="/images/brand/transfribol-logo.jpg" alt="TRANSFRIBOL S.R.L. Logo" className="footer-logo-img" />
              <span className="footer-logo-text">
                <span className="brand-name">TRANSFRIBOL</span>
                <span className="brand-suffix">S.R.L.</span>
              </span>
            </a>
            <p>Logistica y Transporte Internacional. Conectando Bolivia con el mundo con seguridad y eficiencia tecnica.</p>
          </div>
          <div className="footer-links">
            <h3>Links Rapidos</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contacto Directo</h3>
            <a className="footer-item" href="https://maps.app.goo.gl/6H5ysFErybg4pP6GA" target="_blank" rel="noreferrer">
              <Icon name="mapPin" className="footer-icon" />
              <p>Av. Doble via la guardia, 8vo anillo, petroplaza A, Santa Cruz de la Sierra. Bolivia</p>
            </a>
            <div className="footer-item">
              <Icon name="phone" className="footer-icon" />
              <p>+591 68946666 | +591 76666414</p>
            </div>
            <div className="footer-item">
              <Icon name="mail" className="footer-icon" />
              <p>transfribolsrl@gmail.com | elice@claurecargo.com</p>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/transclaure" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Icon name="facebook" />
              </a>
              <a href="https://www.instagram.com/transfribol_srl/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Icon name="instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 TRANSFRIBOL S.R.L. | Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
