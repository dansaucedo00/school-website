import { ImageSlider } from '../components/imageSlider';
import { FaBullseye, FaEye, FaScroll, FaUserGraduate, FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { Contador } from '../components/contador';
import { Footer } from '../components/footer';
export function Inicio() {
  return (
    <>
      <ImageSlider />
      <main>
      <section className="info-cards">
        <div className="card">
          <div className="icon"><FaBullseye /></div>
          <h3>Misión</h3>
          <p>Brindar una educación integral basada en valores...</p>
        </div>
        <div className="card">
          <div className="icon"><FaEye /></div>
          <h3>Visión</h3>
          <p>Ser una institución educativa reconocida por su excelencia...</p>
        </div>
        <div className="card">
          <div className="icon"><FaScroll /></div>
          <h3>Historia</h3>
          <p>Fundada en 1995, la escuela ha crecido hasta convertirse...</p>
        </div>
      </section>
      <section className="contadores">
        <Contador final={800} texto="Alumnos" icono={<FaUserGraduate />} />
        <Contador final={50} texto="Profesores" icono={<FaChalkboardTeacher />} />
        <Contador final={20} texto="Clases" icono={<FaSchool />} />
      </section>
      </main>
      <Footer/>
    </>
      
  );
}
