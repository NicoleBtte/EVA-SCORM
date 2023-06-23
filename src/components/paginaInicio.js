import React, { useEffect, useState } from 'react';
import { getStudentName } from '../scormWrapper';
import { useNavigate } from 'react-router-dom';

function PaginaInicio() {
  const [studentName, setStudentName] = useState('');

  const navigate = useNavigate();

  const handleEmpezarClick = () => {
    navigate('/pagina1');
  };

  useEffect(() => {
    const name = getStudentName();
    setStudentName(name);
  }, []);

  return (
    <div>
      <h1>Página inicio</h1>
      <h3>Bienvenido!</h3>
      <p>Nombre del estudiante: {studentName}</p>
      <button onClick={handleEmpezarClick}>Empezar</button>
    </div>
  );
}

export default PaginaInicio;
