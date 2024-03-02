import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
const Nav = (props) => {

    const { visible, bref } = props;
    const [isVisible, setIsVisible] = useState(visible);

    if (window.innerWidth < 1200) {
        const menu = document.getElementById('menu');

        if (menu) {
            menu.style.backgroundColor = 'rgb(39, 73, 109)';
        }

    }

    useEffect(() => {
        setIsVisible(visible);
    }, [visible]);

    const handleLinkClick = () => {
        if (window.innerWidth < 1200) {
            setIsVisible(false);
            bref(false);
        }

    };


    return <nav id="menu" className={(isVisible) ? "menu visible" : "menu"}>
        <ul className="menu__list">

            <li className="menu__item"><Link to="accueil" activeClass="active" smooth={true} spy={true} onClick={handleLinkClick} offset={-60}>Accueil</Link></li>
            <li className="menu__item"><Link to="equipe" activeClass="active" smooth={true} spy={true} onClick={handleLinkClick} offset={-60}>Notre équipe</Link></li>
            <li className="menu__item"><Link to="services" activeClass="active" smooth={true} spy={true} onClick={handleLinkClick} offset={-100}>Nos Services</Link></li>
            <li className="menu__item"><Link to="realisations" activeClass="active" smooth={true} spy={true} onClick={handleLinkClick} offset={-100}>Nos réalisations</Link></li>
            <li className="menu__item"><Link to="contact" activeClass="active" smooth={true} spy={true} onClick={handleLinkClick} offset={-100}>Contact</Link></li>
        </ul>

    </nav>
}

export default Nav;



