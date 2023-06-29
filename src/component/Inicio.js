import React, { useState } from 'react'
import { BotonComenzar, ContenedorPrincipal, ContenedorTexto, TextoTitulo, TextoTitulo2 } from "./EstiloInicio";
import { useHistory } from "react-router";
import Actividad from './Actividad';

export default function Inicio() { 

    const [nombreEstudiante,setNombreEstudiante] = useState("Sergio");
    const [showActivity, setShowActivity] = useState(false);
    const historial = useHistory();

    const comenzarActividad = ()=> {
        //historial.push("/actividad")
        setShowActivity(true);
    }
    return (
        <div>
            {!showActivity && (
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
            )}

            {showActivity && (
                <div>
                    <Actividad></Actividad>
                </div>
            )}
        </div>
    ); 
}
