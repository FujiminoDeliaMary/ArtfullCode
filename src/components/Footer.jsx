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
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 3.8147e-05 256 3.8147e-05C114.615 3.8147e-05 3.05176e-05 114.615 3.05176e-05 256C3.05176e-05 397.385 114.615 512 256 512Z" fill="#3C5A9A"/>
                            </svg>
                        </li>
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