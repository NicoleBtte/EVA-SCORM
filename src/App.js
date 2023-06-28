import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PaginaInicio from './components/paginaInicio';
import Seccion from './components/seccion';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const renderContent = () => {
    if (currentPage === 'inicio') {
      return <PaginaInicio />;
    } else if (currentPage === 'pagina1') {
      return <Seccion />;
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={() => handleNavigation('inicio')}>Inicio</button>
            </li>
            <li>
              <button onClick={() => handleNavigation('pagina1')}>Página 1</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{renderContent()}</main>
    </>
  );
}

export default App;

