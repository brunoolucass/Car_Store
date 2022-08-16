import styled from "styled-components";

export const Section = styled.section `
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: center;

    @media (max-width: 860px) { 
        flex-direction: column;
        align-items: center;
  }
`
