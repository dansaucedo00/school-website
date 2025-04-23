import React from 'react';
import '../styles/sidebar.css';
import { NavMenu } from './NavMenu';

export function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Este botón aparece solo en el Sidebar y lo controla */}
      <button className="toggle-sidebar" onClick={toggleSidebar}>✕</button>

      {/* Menú de navegación */}
      <NavMenu onClickLink={toggleSidebar} />
    </aside>
  );
}

