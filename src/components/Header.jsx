import React from "react";
import Logo from '../assets/logoBlanc.png'
import Nav from "./Nav";

const Header = () =>{
    return <header className="header">
                <div className="triangle"></div>

                <div class="header__navbar">
                    <img
                    src={Logo}
                    alt=""
                    class="header__logo"
                    width="80"
                    />

                    <button className="header__menuBurger menuTrigger">
                
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                    </button>

                    <Nav />
                </div>
                <p class="header__nomAgence"><strong>Artfull Code</strong></p>
                 <h1 class="header__slogan"> Collaborez de façon créative et innovante avec ArtFull Code</h1>
                <span class="header__deco">
                    <div class="cercle cercle1"><img src="../images/ovale.svg" alt="" /></div>
                    <div class="cercle cercle2"></div>
                </span>

                    <div class="header__arrow">
                        <a href="#propos">

                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 12L0 19.5L20 39.5L40 19.5L32.5 12L20 24.5L7.5 12Z" fill="#F8F8F8"/>
                            </svg>
                        </a>     

                    </div>

            </header>
}

export default Header;