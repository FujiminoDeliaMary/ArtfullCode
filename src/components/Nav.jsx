import React from "react";
import { Link } from "react-scroll";
const Nav = (props) => {

    const { visible } = props;

    return <nav id="menu" className={(visible) ? "header__menu visible" : "header__menu"}>
        <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/">Nos services</a></li>
            <li><a href="/realisation">Nos réalisations</a></li>
            <li><Link to="equipe" activeClass="active" smooth={true} spy={true}>Notre equipe</Link></li>
            <li><a href="/contact">Contact</a></li>
        </ul>

    </nav>
}

export default Nav;



