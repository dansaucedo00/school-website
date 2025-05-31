import React from 'react';
import '../styles//footer.css';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="footer-card">
      <h2>Contacto</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className="social-icons">
        <a href="https://wa.me/595XXXXXXXXX" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
}
