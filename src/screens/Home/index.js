import React from "react";
import Header from '../../components/layout/Header/'
import Carousel from '../../components/UI/Carousel'
import SectionServices from "../../components/layout/SectionServices";
import Footer from "../../components/layout/Footer";
import SectionMap from "../../components/layout/SectionMap";

const Home = () => {
    return (
        <>
    <Header/>
    <Carousel/>
    <SectionServices/>
    <SectionMap/>
    <Footer/>
        </>
    )
}


export default Home;