// src/components/Sidebar.jsx
import React from 'react';
import '../styles/sidebar.css';
import { Link } from 'react-router-dom';

export function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Botón fijo para abrir/cerrar */}
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        ☰
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/" onClick={toggleSidebar}>Inicio</Link></li>
            <li><Link to="/nosotros" onClick={toggleSidebar}>Nosotros</Link></li>
            <li><Link to="/cursos" onClick={toggleSidebar}>Cursos</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

