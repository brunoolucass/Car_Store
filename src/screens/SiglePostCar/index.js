import React from "react";
import Carousel from '../../components/UI/Carousel'
import SectionMap from "../../components/layout/SectionMap";
import Footer from "../../components/layout/Footer";
import {Section} from "./styled";
import Nav from "../../components/layout/Nav";
import Slider from "../../components/UI/Slider";
import FormCar from "../../components/UI/FormCar";

function scroll() {
    window.scrollTo(0, {CarsPage});
}

const CarsPage = (props) => {
    return (
        <> 
        
        <Nav/>
        <Section>
            <Slider car={props.car}/>
            <FormCar car={props.car}/>
        </Section> 
        <Carousel/>
        <SectionMap/>
        <Footer/>
   
      
        </>
    )
}


export default CarsPage;