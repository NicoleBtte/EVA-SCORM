import React, { useEffect, useState } from 'react';
import Seccion from './seccion';

function PaginaInicio() {
  const [studentName, setStudentName] = useState('');
  const [showPagina1, setShowPagina1] = useState(false);

  const handleEmpezarClick = () => {
    setShowPagina1(true);
  };

  useEffect(() => {
    //const name = getStudentName();
    const name = "Nicky";
    setStudentName(name);
  }, []);

  return (
    <div>
      {!showPagina1 && (
        <>
          <Seccion></Seccion>
        </>
      )}

      {showPagina1 && (
        <>
          {/* Aquí va el contenido de la página 1 */}
          <h1>Página 1</h1>
          <p>Contenido de la Página 1</p>
        </>
      )}
    </div>
  );
}

export default PaginaInicio;