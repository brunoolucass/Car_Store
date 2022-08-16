import React, {useState, useEffect} from "react"
import LogoImg from "../../../assets/images/Logo.svg"
import Menu from "../../../assets/icons/menu.png"
import { Link } from "react-router-dom"
import "./style.css"
const Nav =() => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {setToggleMenu(!toggleMenu)}
    
    const [screenWidth, setScreenWidth] = useState (window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
        
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

      }, [])

    return (

<nav>   
        <div className="logo-btn">
        <Link to="/" > <img  className="logo" src={LogoImg} width={"320px"} /> </Link>
        <button onClick={toggleNav} className="btn"> <img src={Menu} alt="Menu-Img" width="30px" /></button>
        </div>

        {(toggleMenu || screenWidth > 1024) && (
         <ul className="list">
            <li className="items"> <Link to="/AllCars"> Semi Novos </Link> </li>

            <li className="items"> <a href="#serviços"> Peças e Acessórios</a> </li>
            
            <li className="items"> <a href="#agendamento"> Agende a sua Revisão </a> </li>
        </ul>
        )}


        
</nav>
    )
}

export default Nav;