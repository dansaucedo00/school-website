// src/components/NavMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function NavMenu() {
  return (
    <nav className="nav-menu">
      <ul>
<<<<<<< HEAD
        <li><a href="index.html">Inicio</a></li>
        <li><a href="nosotros.html">Nosotros</a></li>
        <li><a href="cursos.html">Cursos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
=======
        <li>
          <Link to="/" onClick={onClickLink}>Inicio</Link>
        </li>
        <li>
          <Link to="/nosotros" onClick={onClickLink}>Nosotros</Link>
        </li>
        <li>
          <Link to="/cursos" onClick={onClickLink}>Cursos</Link>
        </li>
>>>>>>> 719bd56dfd387b7a49b9e2cd3cb207e872846a25
      </ul>
    </nav>
  );
}

<<<<<<< HEAD
=======

>>>>>>> 719bd56dfd387b7a49b9e2cd3cb207e872846a25
