import React from "react";
import facebookIcon from '../assets/icons/Facebook.png'
import twitterIcon from '../assets/icons/Twitter.png'
import linkedinIcon from '../assets/icons/LinkedIn.png'
import emailIcon from '../assets/icons/Email.png'
import PhoneIcon from '../assets/icons/Phone.png'
import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import {Link } from "react-router-dom";
const Footer = () => {

    const emailAddress = 'marilynedelia@gmail.com';
 
    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
      };


    return <footer className="footer">
            <div className="footer__coordonnees">
                 <div className="footer__adress">
                    <p><IoLocation size={30} color="white"/>Adresse</p>
                    <p><a href="https://maps.app.goo.gl/uEN1Kg6vP38o6mYp7" >44 avenue Albert Einstein, 17000 La Rochelle</a></p>
                
                 </div><br/>
                 <div className="footer__email">
                    <p><img className="footer__icon" src={emailIcon} alt="" />Email:</p>
                    <p><a href="/" onClick={handleEmailClick}>artfullcode@gmail.com</a></p>
             
                 </div><br/>
                <div className="footer__tel">
                    <p><img src={PhoneIcon} alt="" className="footer__icon" /> Tel:</p>                    
                    <p><a href="tel:+33612345678">06.12.34.56.78</a></p>
                </div>
                
            </div>

            <div className="footer__heure">
              <p><FaClock size={30} color="white"/> Horaires: Du lundi au vendredi, de 8h à 17h </p>
            </div>

            <div className="footer__nav">
                <nav >
                    <ul className="footer__logos">
                        <li className="footer__logo">
                            <img src={facebookIcon} alt="" />
                        </li>
                        <li className="footer__logo"><img src={linkedinIcon} alt="" /></li>
                        <li className="footer__logo"><img src={twitterIcon} alt="" /></li>
                    </ul>
                </nav><br/>
                <p><Link to='/contact'>Nous contacter</Link></p><br/>
                <p>Mentions Legales</p><br/>
                <p>CGU</p><br/>

            </div>

            <div className="footer__mobile">

                <h2>Artfull Code</h2>
                <p>44 avenue albert einstein, 17000 La rochelle</p>
                <p><a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>artfullcode@gmail.com</a></p>
                <p><a href="tel:+33612345678">Tel: 06.12.34.56.78</a></p>

            </div>
        </footer>
}
export default Footer;