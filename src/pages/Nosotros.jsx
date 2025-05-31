import React from 'react';
import './Nosotros.css';
import aula from "../assets/aula.jpg"
import ninos from "../assets/ninos.jpg"
import escuelapy from "../assets/escuelapy.jpg"



export function Nosotros() {
    return (
        <div className="nosotros-container">
          <h2>Sobre Nosotros</h2>
    
          <div className="nosotros-imagenes">
            <img src={aula} alt="Aula de la escuela" />
            <img src={ninos} alt="Niños estudiando" />
            <img src={escuelapy} alt="La escuela" />
          </div>
    
          <div className="nosotros-texto">
            <section>
              <h3>Misión</h3>
              <p>
                Brindar una educación integral basada en valores, fomentando el desarrollo
                intelectual, emocional y social de nuestros estudiantes.
              </p>
            </section>
    
            <section>
              <h3>Visión</h3>
              <p>
                Ser una institución educativa reconocida por su compromiso con la excelencia académica
                y la formación de ciudadanos responsables y solidarios.
              </p>
            </section>
    
            <section>
              <h3>Historia</h3>
              <p>
                Fundada en 1995, la Escuela Básica N.º 1529 Santo Domingo Savio nació con la misión de ofrecer
                una educación de calidad a niños y niñas de la comunidad. Con el paso de los años,
                se ha convertido en un pilar fundamental del barrio, destacándose por su vocación, entrega
                y mejora continua.
              </p>
            </section>
          </div>
        </div>
      );
  }
  