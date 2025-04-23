import React from 'react';

export function NavMenu({ onClickLink }) {
  return (
    <nav className="nav-menu">
      <ul>
        <li><a href="#" onClick={onClickLink}>Inicio</a></li>
        <li><a href="#" onClick={onClickLink}>Nosotros</a></li>
        <li><a href="#" onClick={onClickLink}>Cursos</a></li>
        <li><a href="#" onClick={onClickLink}>Contacto</a></li>
      </ul>
    </nav>
  );
}
