// src/pages/Cursos.jsx
import React from 'react';
import '../pages/Cursos.css';

export function Cursos() {
  return (
    <section className="cursos-page">
      <h2>Cursos Ofrecidos</h2>
      <div className="curso-card">
        <h3>Educación Inicial</h3>
        <p>Enseñanza basada en el juego y el descubrimiento para niños de 3 a 5 años.</p>
      </div>
      <div className="curso-card">
        <h3>Educación Escolar Básica</h3>
        <p>De 1º a 9º grado con enfoque integral en matemáticas, comunicación, ciencias y valores.</p>
      </div>
      <div className="curso-card">
        <h3>Educación Complementaria</h3>
        <p>Clases de informática, educación artística, inglés y deportes.</p>
      </div>
    </section>
  );
}
