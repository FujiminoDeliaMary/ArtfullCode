import React from "react";
import facebookIcon from '../assets/icons/Facebook.png'
import twitterIcon from '../assets/icons/Twitter.png'
import linkedinIcon from '../assets/icons/LinkedIn.png'
import emailIcon from '../assets/icons/Email.png'
import PhoneIcon from '../assets/icons/Phone.png'
import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
const Footer = () => {

    const emailAddress = 'marilynedelia@gmail.com';
    const latitude = '46.166667';
    const longitude = '-1.150000';

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
      };

    const handleLocalisationClick= () =>{
        window.location.href = `geo:${latitude}, ${longitude}`;
    }

    return <footer className="footer">
            <div className="footer__coordonnees">
                 <div className="footer__adress">
                    <p><IoLocation size={30} color="white"/>Adresse</p>
                    <p><a href={`geo:${latitude},${longitude}`} onClick={handleLocalisationClick}>44 avenue Albert Einstein, 17000 La Rochelle</a></p>
                    <br />
                 </div>
                 <div className="footer__email">
                    <p><img className="footer__icon" src={emailIcon} alt="" />Email:</p>
                    <p><a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>artfullcode@gmail.com</a></p>
                    <br />
                 </div>
                <div className="footer__tel">
                    <p><img src={PhoneIcon} alt="" className="footer__icon" /> Tel:</p>                    
                    <p>0757130897</p>
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
                </nav>
                <p>Nous contacter</p>
                <p>Mentions Legales</p>
                <p>CGU</p>
                <p>Test</p>

            </div>

            <div className="footer__mobile">

                <h2>Artfull Code</h2>
                <p>44 avenue albert einstein, 17000 La rochelle</p>
                <p>artfullcode@gmail.com</p>
                <p>Tél:06 34 76 12 34</p>

            </div>
        </footer>
}
export default Footer;