import React from 'react';
import { HashLink } from 'react-router-hash-link';



export function NavMenu({ onClickLink }) {
  return (
    <nav className="nav-menu">
      <ul>
        <li><a href="#" onClick={onClickLink}>Inicio</a></li>
        <li><a href="#" onClick={onClickLink}>Nosotros</a></li>
        <li><HashLink smooth to="#niveles" className="nav-link">
            Cursos
        </HashLink></li>
        <li><a href="#" onClick={onClickLink}>Contacto</a></li>
      </ul>
    </nav>
  );
}
