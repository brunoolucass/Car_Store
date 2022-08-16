import styled from "styled-components";

export const Teste = styled.div `

    color: white;
    font-size:45px;
`

export const Container= styled.section `
    margin-right:3%;
    width: 600px;
    height: 50%;
    cursor: pointer;
    user-select: none;

    @media (max-width: 860px) {
        margin-right: 0;
    } 

    @media (max-width: 768px )  { 
      width: 70%;
    }
`