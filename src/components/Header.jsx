import React, { useEffect, useState } from "react";
import Logo from '../assets/logoBlanc.png'
import Nav from "./Nav";
import { Link } from 'react-scroll';
import Particules from "./Particle";

const Header = () => {

  window.addEventListener('scroll', () => {
    const menu = document.getElementById('menu');
    if (menu) {

      if (window.scrollY > 270) {
        menu.classList.add('scrolled');
      } else {
        menu.classList.remove('scrolled');
      }
    }

  })

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [scrollDisabled, setScrollDisabled] = useState(false);
  const [scroll, setScroll] = useState('auto');


  const handleItemClick = (e) => {
    e.preventDefault();
    setMenuVisible(!isMenuVisible);

    if (window.innerWidth < 1200) {
      setScrollDisabled(!scrollDisabled);
      if (scrollDisabled) {
        setScroll('auto');
        console.log('auto');
      } else {
        setScroll('hidden');
        console.log('hidden')
      }
    };
    console.log(scrollDisabled)
  }

  useEffect(() => {
    document.body.style.overflow = scroll;
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [scroll]);

  // Au click sur un des liens, tous les paramètres sont remis par défaut
  const handleChangeMenu = (param) => {
    setMenuVisible(param);
    setScrollDisabled(false)
    setScroll('auto');
    document.body.style.overflow = 'auto';
  }



  return <header className="header" id="accueil">
    <Particules className="particule" />
    <div className="header__navbar">
      <img
        src={Logo}
        alt=""
        class="header__logo"
        width="80"
      />
      <Nav visible={isMenuVisible} bref={handleChangeMenu} />
      <button className={`header__menuBurger menuTrigger ${isMenuVisible ? 'open' : ''}`} type="button" onClick={handleItemClick} >

        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
      </button>

    </div>
    <p class="header__nomAgence"><strong>Artfull Code</strong></p>
    <h1 class="header__slogan"> Collaborez de façon créative et innovante avec ArtFull Code</h1>

    <Link to='about'
      activeClass='active'
      smooth={true}
      spy={true}
    >
      <div class="header__arrow">


        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 12L0 19.5L20 39.5L40 19.5L32.5 12L20 24.5L7.5 12Z" fill="#F8F8F8" />
        </svg>
      </div>
    </Link>

  </header>

}

export default Header;