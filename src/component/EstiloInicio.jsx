import styled, { css } from "styled-components";

export const ContenedorPrincipal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e4ccbd;
`;

export const ContenedorTexto = styled.div`
  width: 40%;
  height: 40vh;
`;

export const TextoTitulo = styled.h1`
  color: #134f4f;
  margin-top: 0%;
  margin-bottom: 0%;
`;

export const TextoTitulo2 = styled.h1`
  color: #14ab6a;
`;

export const BotonComenzar = styled.button`
  margin-left: 30%;
  font-size: 17px;
  background: black;
  color: white;
  height: 45px;
  width: 40%;
  font-weight: 1000;
  border-radius: 20px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: black;
  }
`;

