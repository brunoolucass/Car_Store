import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section `
        width: 100vw;
        display:flex;
        justify-content: center;
         position:relative;
   
`
export const Container = styled.div `
           max-width: 1190px;
           display: flex;
           flex-wrap: wrap;
           height: 100%;
           margin: 0 -5px;
           gap: 1%;
           justify-content: center;
           position:relative;
`

export const Card = styled.div `
        font-size:1.5rem;
        font-weight:500;
        background-color:rgb(10, 10, 10);
        border-radius: 5%;
        padding: 20px 20px 20px 20px;
        margin: 0 auto;
`

export const Title = styled.h1`
font-size:3rem
`

export const YearKm = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin: 0 auto;
`

