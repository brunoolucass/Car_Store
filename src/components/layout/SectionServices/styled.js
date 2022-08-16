import styled from "styled-components";


export const Section = styled.section `
        max-width: 1120px;
        margin: 0 auto;
`

export const ContainerSection = styled.div `
        display:flex;
        flex-direction:row;
        justify-content: center;

    @media  (max-width: 860px){ 
      flex-direction: column;
      align-items: center;
      text-align: center;
      }
`

export const Title = styled.h1 `
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 64px;
    padding: 10px;
    box-sizing: border-box;
`
export const ServicesContainer = styled.div `
    margin-left:1%;
    margin-bottom:5%;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    justify-content: center;
`

export const Services = styled.div `
    box-sizing: border-box;
    height:140px;
    box-shadow: 0px 0px 10px 0px rgb(25 25 25 / 50%);
    border-radius: 8px;
    margin-top:3%;
    display:flex;
    font-size:2.2rem;
    font-weight: 700;
    align-items: center;
    justify-content: flex-start;
    padding-left: 5%;
    gap:5%;
    background-color:rgb(10, 10, 10);
`

export const Span = styled.p `
    font-size:1.6rem;
    
`

export const WhatssAppBtn = styled.div `
text-align: center;
`

export const Button = styled.a `
    font-size: 22px;
    font-weight: 700;
    line-height: 1.5em;
    background-color: #f10101;
    border-radius: 10px 10px 10px 10px;
    padding: 8px 80px 8px 80px;
`
