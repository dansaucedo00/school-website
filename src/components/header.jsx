import React from 'react';
import { NavMenu } from './NavMenu';

export function Header() {
  return (
    <header className="header">
      <h1>Escuela Santo Domingo Savio</h1>
      <p>Bienvenidos a nuestra página web</p>
      <NavMenu />
    </header>
  );
}
  