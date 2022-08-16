import React from "react";
import { Services, ServicesContainer, Title, WhatssAppBtn,Button, Section} from "./styled";
import { ContainerSection,} from "./styled";
import Peças from "../../../assets/images/peças.png";
import Disco from '../../../assets/images/disco.png';
import Pneu from '../../../assets/images/pneu.png';
import Suspensão from '../../../assets/images/suspensao.png';
import Retrovisor from '../../../assets/images/retrovisor.png';
import WhatsApp  from "../../../assets/icons/whatsapp.png";



const SectionServices = (props) => {

    return (
        <>
        <Section id="serviços">
            <ContainerSection>
                <div>
                    <Title> Peças e <span style={{color:"#f10101"}}> Acessórios </span></Title>
                    <img src={Peças} alt="Peças"width="600px" className="peças-img"/>
                </div>

                <ServicesContainer>
                    <Services>
                        <img src={Disco} alt="Disco" width="64px"/> 
                        <span>PASTILHA DE FREIO </span>
                    </Services>

                    <Services> 
                        <img src={Pneu} alt="Freio" width="64px"/> 
                        <span>PNEUS </span>
                    </Services>

                    <Services>
                        <img src={Suspensão} alt="Supensão" width="64px"/> 
                        <span>SUSPENÇÃO </span>
                    </Services>

                    <Services>
                        <img src={Retrovisor}  alt="Pneu" width="64px"/> 
                        <span>RETROVISOR </span>
                    </Services>
                </ServicesContainer>
                
            </ContainerSection>

                <WhatssAppBtn>
                    <Button className="whatsapp-btn" href="https://api.whatsapp.com/send?phone=55&text=">
                        <span> <img src={WhatsApp} alt="whatsapp" width="19px"/></span>
                        <span> Agende o Seu Serviço </span>
                    </Button> 
                </WhatssAppBtn>

        </Section>
        </>
    )
}


export default SectionServices;