import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaClock } from "react-icons/fa";

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
                <span>
                    Adresse
                </span>
                    <p><a href={`geo:${latitude},${longitude}`} onClick={handleLocalisationClick}>44 avenue Albert Einstein, 17000 La Rochelle</a></p>
                    <br />
                <span>
                   <IoMail size={30} />Email
                </span>
                <p><a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>artfullcode@gmail.com</a></p>
                <br />
                <span>
                    <BsTelephoneFill size={20} />
                    Tel
                </span>
                <p>0757130897</p>
            </div>

            <div className="footer__heure">
               <FaClock size={30} /> Horaires : Du lundi au vendredi de 9h à 17h
            </div>

            <div className="footer__nav">
                <nav >
                    <ul class="footer__logos">
                        <li><FaFacebookF size={30} className="footer__logo"/></li>
                        <li><FaLinkedinIn size={30} className="footer__logo"/></li>
                        <li><FaTwitter size={30} className="footer__logo"/></li>
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