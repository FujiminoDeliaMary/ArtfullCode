import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
const Nav = (props) => {

    const { visible, bref} = props;
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        setIsVisible(visible);
      }, [visible]); 

      const handleLinkClick = () => {
        if (window.innerWidth<1200){
               setIsVisible(false); 
                bref(false);
            }
     
      };

    console.log(visible);
    return <nav id="menu" className={(isVisible) ? "header__menu visible" : "header__menu"}>
        <ul className="header__menu-list">
            <li><a href="/">Accueil</a></li>
            <li><Link to="services" activeClass="active" smooth={true} spy={true} onClick={handleLinkClick}>Nos Services</Link></li>
            <li><a href="/realisation">Nos réalisations</a></li>
            <li><Link to="equipe" activeClass="active" smooth={true} spy={true} onClick={handleLinkClick}>Notre equipe</Link></li>
            <li><a href="/contact">Contact</a></li>
        </ul>

    </nav>
}

export default Nav;



