import React from "react";
import Map from "../../../utils/GoogleMap";
import { Span } from "../SectionServices/styled";
import {Button, Section, Title, Contact,ContainerSection, ContainerMap} from "../SectionMap/styles"



const SectionMap = () => {

    return (
        <>
        <Section id="agendamento">
            <ContainerSection> 
                <ContainerMap>
                <Map/>
                </ContainerMap>
                
                <Contact>
                    <Title> Formas de Contato </Title>
                    <p style={{fontSize: "1.8rem"}}>Entre em contato conosco </p>
                    <Button href="https://api.whatsapp.com/send?phone=55&text"> {'(47)'} 99949-3381 </Button>
                    <Span>brunoolucasscontato@hotmail.com</Span>
                    <Span style={{width:"270px"}}> Segunda - Sexta: 8:00 as 18:00 Horas
                    Sábado: Das 09:00 as 13:00</Span>
                    <Span>Recife Centro - PE, 23812310</Span>
                </Contact>
            </ContainerSection>

        </Section>
        </>
    )
}

export default SectionMap;