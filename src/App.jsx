import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/styles.css';

import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { useWindowWidth } from './components/useWindowWidth';
import { Inicio } from './pages/Inicio';
import { Nosotros } from './pages/Nosotros';
import { Footer } from './components/footer';
import { Cursos } from './pages/Cursos';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      {/* Mostrar Header solo en escritorio */}
      {!isMobile && <Header />}

      {/* Botón ☰ y Sidebar solo en móviles */}
      {isMobile && (
        <>
          <button className="menu-button" onClick={toggleSidebar}>☰</button>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </>
      )}

      {/* Contenido principal siempre visible */}
      <main className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;

