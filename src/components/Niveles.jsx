import React from 'react';
import '../styles/cursos.css'; // Si querés separar los estilos

export function Cursos() {
  const cursos = [
    {
      titulo: 'Niños pequeños',
      descripcion: 'Actividades lúdicas, introducción al aprendizaje y mucho juego.',
      imagen: '/images/ninos-pequenos.jpg',
    },
    {
      titulo: 'Niños',
      descripcion: 'Cursos enfocados en lectura, escritura y matemáticas básicas.',
      imagen: '/images/ninos.jpg',
    },
    {
      titulo: 'Adolescentes',
      descripcion: 'Materias avanzadas, talleres y preparación para secundaria.',
      imagen: '/images/adolescentes.jpg',
    },
  ];

  return (
    <section id='niveles' className="cursos-section">
      <h2 className="cursos-titulo">📘 Nuestros Cursos</h2>
      <div className="tarjetas-container">
        {cursos.map((curso, index) => (
          <div
            className="tarjeta-curso"
            key={index}
            style={{ backgroundImage: `url(${curso.imagen})` }}
          >
            <div className="contenido-curso">
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
