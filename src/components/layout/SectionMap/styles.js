import styled from "styled-components";


export const Section = styled.div `
    display:flex;
    width:100vw;
    justify-content: center;
    gap: 5%;
    margin-top:10%;
    margin-bottom: 5%;
    position: relative;
    box-sizing: border-box;
  
`
export const ContainerSection = styled.div `
    width: 100%;
    display: flex;
    max-width: 1000px;
    gap:5%;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {

        flex-direction: column;
  }
`

export const ContainerMap = styled.div `
    width: 500px;
    height: 350px;

    @media (max-width: 768px) {
        width: 100vw;
  }
`

export const Contact = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 70%;

    @media (max-width: 768px) { 
        padding: 50px 0px 50px 25px;
  }
`
export const Title = styled.h1 `
    display: flex;
    font-size: 2.5rem;
    margin-top:0;
`

export const Button = styled.a `
    display: flex;
    background-color:rgb(41, 160, 30);
    width: 180px;
    height: 50px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 50%);
    border: 0;
    font-size: 1.8rem;
    font-weight: 400;
    color: white;
    justify-content: center;
    align-items: center;
`
