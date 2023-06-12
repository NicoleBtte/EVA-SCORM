import React, { useState } from 'react';

const TextoConInputs = () => {
    const [respuestas, setRespuestas] = useState({});
    const [resultado, setResultado] = useState("");
    const textoCompleto = "La __1__ es la ciencia que estudia los seres vivos. Se enfoca en el __2__ de los organismos, su __3__, su __4__ y las interacciones entre ellos. Los __5__ son las unidades fundamentales de la vida, y pueden ser tan pequeños como una célula o tan grandes como un organismo completo. A lo largo de la historia, la __1__ ha hecho grandes avances en nuestro entendimiento de la diversidad y complejidad de la vida en la __6__. Sin embargo, aún hay mucho por descubrir y entender.";
    const palabras = textoCompleto.split(/\b/); // Utilizar \b para separar por límites de palabra

      const respuestasCorrectas = {
        1: "biología",
        2: "estudio",
        3: "estructura",
        4: "función",
        5: "organismos",
        6: "biología",
        7: "Tierra"
      };

      const compararRespuestas = () => {
        
        const respuestasUsuario = Object.values(respuestas).sort((a, b) => a - b);
        
        
        const respuestasCorrectasOrdenadas = Object.entries(respuestasCorrectas)
          .sort((a, b) => a[0] - b[0])
          .map((entry) => entry[1]);
        

        const esCorrecto = respuestasUsuario.every((respuesta, indice) => respuesta === respuestasCorrectasOrdenadas[indice]);
      
        if (esCorrecto) {
            setResultado("¡Respuestas correctas!");
          } else {
            setResultado("Respuestas incorrectas");
          }
        if (esCorrecto) {
           console.log("¡Respuestas correctas!");
         } else {
          console.log("Respuestas incorrectas");
        }
      };
      
    
    const guardar = () => {
        compararRespuestas();
        console.log(respuestas);
    }
  
    return (
      <div>
        {palabras.map((palabra, indice) => {
          if (/^__\w+__$/.test(palabra)) { 
            const palabraFaltante = palabra.replace(/_/g, '');
            return (
              <input
                key={indice}
                type="text"
                value={respuestas[indice] || ''}
                onChange={(e) => setRespuestas({...respuestas, [indice]: e.target.value})}
              />
            );
          }
          return <span key={indice}>{palabra}</span>;
        })}
        <button onClick={guardar}>Enviar</button>
        <div>{resultado}</div>
      </div>
    );
  };
  
  export default TextoConInputs;
  
