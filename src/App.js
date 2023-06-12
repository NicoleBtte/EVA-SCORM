import logo from './logo.svg';
import './App.css';
import TextoConInputs from './components/textoConInputs';
import AudioPlayer from './components/audioPlayer';

function App() {
  return (
   <>
    <AudioPlayer src={'./assets/audioprueba.mp3'}></AudioPlayer>
    <TextoConInputs></TextoConInputs>
   </>
  );
}

export default App;
