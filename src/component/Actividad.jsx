import React, { useState } from 'react'
import { useHistory } from "react-router";
import { ContenedorAudio, BotonEnviar, Contenedor, ContenedorPrincipal, ContenedorTexto, InputTexto, Texto, Titulo, TituloLeccion, TituloLeccion1, ImagenSonido, TextoRespuesta } from './EstiloActividad';

export default function Inicio() {
    const [enviar, setEnviar] = useState(false)
    const respuestas = ["palabras", "audio", "actividad"]
    const enviarDatos = () => {
        setEnviar(true)
    }
    const [respuesta1, setRespuesta1] = useState("")
    const [respuesta2, setRespuesta2] = useState("")
    const [respuesta3, setRespuesta3] = useState("")

    function nota (){
        let suma = 0
        if (respuestas[0] === respuesta1){
            suma ++
        }
        if (respuestas[1] === respuesta2){
            suma ++
        }
        if (respuestas[2] === respuesta3){
            suma ++
        }
        return parseInt( (100/3) * suma)
    }
    return (
        <ContenedorPrincipal>
            <Titulo>Actividad</Titulo>
            <Contenedor>
                <TituloLeccion>Lección 1</TituloLeccion>
                {!enviar &&
                    <>
                        <ContenedorTexto>
                            <TituloLeccion1>Actividad 1</TituloLeccion1>
                        </ContenedorTexto>
                        <ContenedorTexto>
                            <Texto>Escucha el audio y escribe las palabras faltantes en el texto de abajo</Texto>
                        </ContenedorTexto>
                        <ContenedorAudio>
                            <ImagenSonido src={require("../Imagenes/images.png")}></ImagenSonido>
                        </ContenedorAudio>
                        <ContenedorAudio>
                            <audio type="audio/mp3" controls></audio>
                        </ContenedorAudio>
                        <ContenedorTexto>
                            <Texto>Completa las </Texto>
                            <InputTexto onChange={(e) => {
                                setRespuesta1(e.target.value);
                            }}></InputTexto>
                            <Texto>faltantes del </Texto> 
                            <InputTexto onChange={(e) => {
                                setRespuesta2(e.target.value);
                            }}></InputTexto>
                            <Texto>para poder completar la </Texto> 
                            <InputTexto onChange={(e) => {
                                setRespuesta3(e.target.value);
                            }}></InputTexto>
                        </ContenedorTexto>
                        <BotonEnviar onClick={enviarDatos}>Enviar</BotonEnviar>
                    </>
                }
                {enviar &&
                    <>
                        <ContenedorTexto>
                            <TituloLeccion1>Tu puntaje</TituloLeccion1>
                        </ContenedorTexto>
                        <ContenedorTexto>
                            <Texto>Completa las </Texto> <TextoRespuesta respuesta={respuestas[0] === respuesta1? "true" : "false"}>{respuesta1}</TextoRespuesta>
                            <Texto>faltantes del </Texto> <TextoRespuesta respuesta={respuestas[1] === respuesta2? "true" : "false"}>{respuesta2}</TextoRespuesta>
                            <Texto>para poder completar la </Texto> <TextoRespuesta respuesta={respuestas[2] === respuesta3? "true" : "false"}>{respuesta3}</TextoRespuesta>
                        </ContenedorTexto>
                        <ContenedorTexto>
                            <TituloLeccion1 nota = {nota()}>{nota()}/100</TituloLeccion1>
                        </ContenedorTexto>

                    </>
                }
            </Contenedor>
        </ContenedorPrincipal>
    );
}
