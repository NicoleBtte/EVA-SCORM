import styled, { css } from "styled-components";

export const ContenedorPrincipal = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #5c5957;
`;

export const Titulo = styled.div`
    color: white;
    padding-top: 10px;
    padding-left: 20px;
`

export const TituloLeccion = styled.div`
    color: #14ab6a;
    padding-top: 10px;
    padding-left: 20px;
    font-weight: 1000;
    font-size: 20px;
`

export const TituloLeccion1 = styled.div`
    color: #14ab6a;
    padding-top: 10px;
    padding-left: 20px;
    font-weight: 1000;
    font-size: 25px;
    ${(props) =>
    props.nota < 51 &&
    css`
      color: #770101;
    `}
    ${(props) =>
    props.nota >= 51 &&
    css`
      color: #017713;
    `}
`
export const Texto = styled.div`
    color: #ffffff;
    padding-top: 10px;
    font-weight: 1000;
    margin-left: 5px;
    font-size: 20px;
    margin-right: 5px;
`
export const TextoRespuesta = styled.div`
    color: #ffffff;
    padding-top: 10px;
    font-weight: 1000;
    margin-left: 5px;
    font-size: 20px;
    margin-right: 5px;
    ${(props) =>
    props.respuesta === "true" &&
    css`
      color: #017713;
    `}
    ${(props) =>
    props.respuesta === "false" &&
    css`
      color: #770101;
    `}
`
export const InputTexto = styled.input`
    width: 100px;
    background:transparent;
    color: white;
    font-weight: 1000;
    margin-top: 8px;
    font-size: 20px;
    text-align: center;
`;
export const Contenedor = styled.div`
  margin: 20px;
  width: 97%;
  height: 89vh;
  background: #144235;
`;

export const ContenedorTexto = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;


export const BotonEnviar = styled.button`
  margin-left: 85%;
  margin-top:5px;
  font-size: 17px;
  background: black;
  color: white;
  height: 45px;
  width: 120px;
  font-weight: 1000;
  border-radius: 20px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: black;
  }
`;

export const ContenedorAudio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImagenSonido = styled.img`
    margin-bottom: 0%;
`
export const BotonTerminar = styled.button`
  margin-left: 85%;
  margin-top:5px;
  font-size: 17px;
  background: grey;
  color: black;
  height: 45px;
  width: 200px;
  font-weight: 1000;
  border-radius: 20px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: black;
  }
`;