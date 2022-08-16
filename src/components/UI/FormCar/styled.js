import styled from "styled-components"

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color:rgb(10, 10, 10);
    box-sizing: border-box;
    padding: 25px 20px 25px 20px;

    @media (max-width: 860px) { 
        width: 70%;
    }
`

export const Form = styled.form `
    display: flex;
    width: auto;
    flex-direction: column;
    padding: 10px;
    height: 100%;
    
    
`
export const InputModified = styled.input `
    height: 40px;
    box-sizing: border-box;
    padding: 8px 16px;
    font-size: 1.5rem;
    border: solid 1px;
    color: #818a91;
`

export const ButtonModified = styled.button `
    display: flex;
    padding:1em 30%;
    box-sizing: border-box;
    background-color: rgb(98, 179, 82);
    color: white;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
`


