import React from "react";
import Home from "./screens/Home"
import SiglePostCar from "./screens/SiglePostCar/index";
import {Route, Routes} from "react-router-dom"
import { CarList } from "./utils/CarList";
import AllCarsPage from "./screens/AllCarsPage";


const Paths = () => {

    return (
        <Routes>
            <Route exact path={"/"} element = {<Home/>}/>
            {CarList.map((car) => {
                return <Route exact key={car.id} path={`/${car.model}`} element={<SiglePostCar car={car}/>} />;
            })}
            
            <Route exact path="/Car" element={<SiglePostCar/>} />
            <Route exact path="/Slider" element={<SiglePostCar/>}/>
            <Route exact path="/AllCars" element={<AllCarsPage/>}/>
          
        </Routes>

    )
}

export default  Paths;