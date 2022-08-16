import React from "react";
import {HeaderModified, Title, Container} from "../Header/styled";
import Nav from "../Nav"

const Header = () => {
    return (
        <>
        <HeaderModified className="Header">
            <Nav/>
                   <Container>
                        <Title className="TitleHeader">
                            Semi-novos com procedência e serviços automotivos.
                        </Title>
                    </Container>
        </HeaderModified>
        </>
    )
}


export default Header;