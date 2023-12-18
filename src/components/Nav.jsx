import React from "react";

const Nav = (props) =>{

    const {visible} = props;

    return <nav id="menu" className={(visible) ? "header__menu visible" : "header__menu"}>
            <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/">Nos services</a></li>
            <li><a href="/">Nos réalisations</a></li>
            <li><a href="/">Contact</a></li>
            </ul>
 
        </nav>
}

export default Nav;



