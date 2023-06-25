import React, { useState } from 'react'
import { BotonComenzar, ContenedorPrincipal, ContenedorTexto, TextoTitulo, TextoTitulo2 } from "./EstiloInicio";
import { useHistory } from "react-router";

export default function Inicio() { 

    const [nombreEstudiante,setNombreEstudiante] = useState("Sergio")
    const historial = useHistory();

    const comenzarActividad = ()=> {
        historial.push("/actividad")
    }
    return (
        <ContenedorPrincipal>
            <ContenedorTexto>
                <TextoTitulo>
                    Hola, {nombreEstudiante}
                </TextoTitulo>
                <TextoTitulo>
                    Bienvenido de nuevo
                </TextoTitulo>
                <TextoTitulo2>
                    Ya puedes comenzar tu nueva actividad
                </TextoTitulo2> 
                <BotonComenzar onClick={comenzarActividad}>Comenzar Actividad</BotonComenzar>
            </ContenedorTexto>
           
        </ContenedorPrincipal>
    );
}
