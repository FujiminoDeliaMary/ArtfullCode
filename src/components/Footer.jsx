import React from "react";
import facebookIcon from '../assets/icons/Facebook.png'
import instagramIcon from '../assets/icons/instagram.png'
import linkedinIcon from '../assets/icons/LinkedIn.png'
import phoneIcon from '../assets/icons/phone.svg'
import {Link } from "react-router-dom";
const Footer = () => {

    const emailAddress = 'marilynedelia@gmail.com';
 
    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
      };


    return <footer className="footer">

            <div className="footer__top">
                <p>ArtfullCode est une entreprise international de développement logiciel basée à la rochelle et axée sur la confiance, la performance et l'écoute utilisateur</p><br></br>
                <p><img src={phoneIcon} alt="phone icon" /> <a href="tel:0651358858"> +33 06 51 35 88 58</a></p>

            </div>
            <div className="footer__bottom">
                <div className="footer__policy">
                    <p className="footer"><a href="/">Privacy Policy</a></p>
                    <p><a href="/">Cookie Policy</a></p>
                </div>
                <div className="footer__logos">
                    <img src={facebookIcon} alt="" className="footer__logo"/>
                    <img src={instagramIcon} alt="" className="footer__logo"/>
                    <img src={linkedinIcon} alt="" className="footer__logo"/>
                </div>
                <p>
                <a href="/">© 2024 artfullcode. all rights reserved | by maneuver</a>
                </p>
            </div>


        </footer>
}
export default Footer;