import React from "react";
import { Link } from "react-scroll";

const Nav = (props) =>{

    const {visible} = props;

    return <nav id="menu" className={(visible) ? "header__menu visible" : "header__menu"}>
            <ul>
            <li><a href="/">Accueil</a></li>
            <li><Link to="services" activeClass="active" smooth={true} spy={true}>Nos services</Link></li>
            <li><a href="/">Nos réalisations</a></li>
            <li><Link to="equipe" activeClass="active" smooth={true} spy={true}>Notre equipe</Link></li>
            <li><a href="/">Contact</a></li>
            </ul>
 
        </nav>
}

export default Nav;



