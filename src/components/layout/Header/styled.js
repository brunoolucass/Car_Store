import styled from "styled-components"
import Camaro from "../../../assets/images/bg-img.png"


export const HeaderModified = styled.header `
   margin: 0 auto;
   max-width: 1120px;
   height: 97vh;
   color:white;
   background: url("${Camaro}");
   background-repeat:no-repeat;
   background-size:67%;
   background-position: center right;


   @media  (max-width: 860px) { 
      background-position: bottom;
    }
`

export const Container = styled.div `
   display:flex;
   flex-direction: row;
`

export const NavBar= styled.nav `
   width:100%;
   display:flex;
`
export const List= styled.ul `
   margin-top: 2%;
   font-size:1.7rem;
   font-weight: 700;
   display:flex;
   justify-content: space-between;
   width: 700px;
   text-decoration:none;
   z-index: 10;
   `

export const Title = styled.h1 `
   max-width: 40rem;
   font-size: 4.5rem;
   padding:10px;


   @media  (max-width: 860px) {
      max-width: 100vw;
      font-size: 3.9rem;
    }
`


