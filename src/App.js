import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicio from './components/paginaInicio';
import Seccion from './components/seccion';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/pagina1" element={<Seccion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

