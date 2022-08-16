import React from "react";
import { YearKm, Card, Section, Title, Container} from "../SectionAllCars/styled";
import { CarList } from "../../../utils/CarList";
import { Link } from "react-router-dom";

const SectionAllCars = () =>{
    return (
        <Section>
            <Container>
                {CarList.map(item => {
                  console.log(item.model)
                    return (
                        <Link key={item} to={`/${item.model} `} onClick="scroll(0, 100)"> 
                            <Card>
                            <img key={item} src={item.image1} alt={"ImageCar"} width={"320px"} height={"100%"}/>
                                <Title translate="no"> {item.model} </Title> 
                                <p> {item.transmission} </p>
                                <h1> R$ {item.price}</h1>
                                <YearKm>
                                    <p> {item.year} </p>
                                    <p> {item.Km} </p>
                                </YearKm>
                            </Card>
                        </Link>                 
                         )
                    })}
            </Container>
        </Section>       
    )
}

export default SectionAllCars;