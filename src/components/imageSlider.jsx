import React, { useState, useEffect } from 'react';
import '../styles/imagesSlider.css';


const images = [
    '/images/itachi.jpg',
    '/images/pain.jpg',
    '/images/s.jpg',
    '/images/escuela.jpg'
];

export function ImageSlider() {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000); // Cambia cada 4 segundos
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="slider-container">
        <img
          src={images[index]}
          alt={`Escuela ${index + 1}`}
          className="slider-image"
          key={index} // importante para reiniciar animación
        />
      </div>
    );
  }
  