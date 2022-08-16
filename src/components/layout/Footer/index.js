import React from "react";
import { Span } from "../SectionServices/styled";
import { Title } from "../SectionMap/styles";
import { Section} from "../Footer/style"
import InstagramIcon from "../../../assets/icons/instagram.png"
import FacebookIcon from "../../../assets/icons/facebook.png";

const Footer = (props) => {
    
    return (
        <>
        <Section>
           <Title className="footer-title" style={{fontWeight: "700", fontSize:"2.5rem"} }>Siga as nossas Redes Sociais</Title>
            <Span className="span-footer">E fique por dentro de todas nossas ofertas especiais</Span>
            <div>
                <a href="https://www.instagram.com/">
                 <img src={InstagramIcon} alt="InstagramIcon" width="30px" />
                 </a>
                 <a href="https://www.facebook.com/">
                 <img src={FacebookIcon} alt="FacebookIcon" width="30px" style={{ marginLeft:"5px"}}/>
                 </a>
            </div>
        </Section>
        </>
    )
}

export default Footer;