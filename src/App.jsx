import { useState } from 'react';
import './App.css';
import { Header } from './components/header';
import './styles/styles.css';
import { Sidebar } from './components/sidebar';
import { useWindowWidth } from './components/useWindowWidth';
import { ImageSlider } from './components/imageSlider';
import { FaBullseye, FaEye, FaScroll } from "react-icons/fa";
import { Contador } from './components/contador';
import { FaUserGraduate, FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { CalendarioMUI } from './components/calendario';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const width = useWindowWidth();

  // Función para abrir y cerrar el sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const isMobile = width < 768;

  return (
    <div className="app">
      {/* Renderiza solo el Header, sin duplicar el Sidebar aquí */}
      {!isMobile && <Header />}

      {/* Pasa el estado y la función toggleSidebar al Sidebar */}
      {isMobile && (
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}

      <main className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
        <ImageSlider/>
        <section className="info-cards">
          <div className="card">
            <div className="icon"><FaBullseye/></div>
            <h3>Misión</h3>
            <p>
              Brindar una educación integral basada en valores, fomentando el desarrollo
              intelectual, emocional y social de nuestros estudiantes.
            </p>
          </div>

          <div className="card">
            <div className="icon"><FaEye/></div>
            <h3>Visión</h3>
            <p>
              Ser una institución educativa reconocida por su compromiso con la excelencia académica
              y la formación de ciudadanos responsables y solidarios.
            </p>
          </div>

          <div className="card">
            <div className="icon"><FaScroll/></div>
            <h3>Historia</h3>
            <p>
              Fundada en 1995, la Escuela Básica N.º 1529 ha crecido hasta convertirse en una de
              las instituciones más destacadas de la región.
            </p>
          </div>
        </section>
        <section className="contadores">
          <Contador final={800} texto="Alumnos" icono={<FaUserGraduate />} />
          <Contador final={50} texto="Profesores" icono={<FaChalkboardTeacher />} />
          <Contador final={20} texto="Clases" icono={<FaSchool />} />
        </section>
        <CalendarioMUI/>
      </main>
    </div>
  );
}

export default App;
