"use client";

import { FormEvent, useState } from "react";
import Icon from "./Icons";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "./data";

export default function ContactQuote() {
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = [
      "Hola, quisiera solicitar una cotizacion.",
      `Nombre: ${form.get("name") || ""}`,
      `Empresa: ${form.get("company") || ""}`,
      `Correo: ${form.get("email") || ""}`,
      `Ruta: ${form.get("route") || ""}`,
      `Detalle: ${form.get("details") || ""}`
    ].join("\n");

    setStatus("Abriendo WhatsApp con tu solicitud...");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cotizacion" className="cotizacion">
      <div className="container cotizacion-grid">
        <div className="cotizacion-form-container reveal reveal-left">
          <span className="section-badge">Cotizador Express</span>
          <h2>
            Tu carga en <br /> <span className="text-solid-green">manos seguras</span>
          </h2>
          <p>Cuentanos origen, destino, tipo de carga y fecha. Respondemos con una cotizacion clara.</p>
          <form className="quote-form" onSubmit={onSubmit}>
            <div className="form-row">
              <input name="name" type="text" placeholder="Nombre completo" required />
              <input name="company" type="text" placeholder="Empresa" />
            </div>
            <div className="form-row">
              <input name="email" type="email" placeholder="Correo electronico" />
              <input name="route" type="text" placeholder="Origen y destino" required />
            </div>
            <textarea name="details" rows={5} placeholder="Tipo de carga, peso, volumen y fecha estimada" required />
            <button className="btn btn-green w-full" type="submit">
              Solicitar cotizacion
            </button>
            {status ? <p className="form-status success">{status}</p> : null}
          </form>
          <p className="form-footer">
            O via rapida: <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Directo al WhatsApp</a>
          </p>
        </div>

        <aside className="contacto-info-card reveal reveal-up" id="contacto">
          <div className="card-overlay" />
          <div className="card-content">
            <div className="contact-logo-wrapper">
              <img src="/images/brand/transfribol-logo.jpeg" alt="Logo Transfribol" className="contact-logo" />
            </div>
            <div className="contact-text-center">
              <h3>¿Tienes dudas?</h3>
              <p className="contact-sub">Nuestro equipo de expertos esta disponible para asesorar su proxima importacion o exportacion.</p>
            </div>
            <div className="contact-links-list">
              <div className="contact-item">
                <span className="icon"><Icon name="mapPin" /></span>
                <div>
                  <strong>Nuestra Base</strong>
                  <p>Santa Cruz de la Sierra, Bolivia</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><Icon name="phone" /></span>
                <div>
                  <strong>Linea Directa</strong>
                  <p>+591 68946666<br />+591 76666414</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><Icon name="whatsapp" /></span>
                <div>
                  <strong>WhatsApp Directo</strong>
                  <p>+591 68946666</p>
                </div>
              </div>
            </div>
            <div className="horarios-box">
              <h4>Horarios de Operacion</h4>
              <p>Lun - Vie: 08:00 a 18:30</p>
              <p>Sab: 08:00 a 13:00</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
