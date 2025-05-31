// src/components/NavMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function NavMenu({ onClickLink }) {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <Link to="/" onClick={onClickLink}>Inicio</Link>
        </li>
        <li>
          <Link to="/nosotros" onClick={onClickLink}>Nosotros</Link>
        </li>
        <li>
          <Link to="/cursos" onClick={onClickLink}>Cursos</Link>
        </li>
      </ul>
    </nav>
  );
}


