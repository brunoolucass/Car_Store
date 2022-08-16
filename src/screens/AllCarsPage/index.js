import React from "react";
import SectionAllCars from "../../components/layout/SectionAllCars";
import Nav from "../../components/layout/Nav";
import { Title } from "./styled";
import Footer from "../../components/layout/Footer";
import SectionMap from "../../components/layout/SectionMap";

const SectionAllCarsPage = () => {
    return (
        <> 
        
        <Nav/>
        <Title> Confira todos os <span style={{color:"red"}}> veículos </span></Title>
        <SectionAllCars/>
        <SectionMap/>
        <Footer/>
      
        </>
    )
}


export default SectionAllCarsPage;