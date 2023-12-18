import React from "react";

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

    return <footer class="footer">
            <div class="footer__coordonnees">
                <span>
                    {/* <i class="fas fa-solid fa-location-dot fa-xl">
                        </i> */}
                    Adresse
                </span>
                <p><a href={`geo:${latitude},${longitude}`} onClick={handleLocalisationClick}>44 avenue Albert Einstein, 17000 La Rochelle</a></p>
                <br />
                <span>
                    {/* <i class="fas fa-light fa-envelope fa-xl"></i>&nbsp Mail */}
                </span>
                <p><a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>artfullcode@gmail.com</a></p>
                <br />
                <span>
                    {/* <i class="fas fa-duotone fa-phone fa-xl"></i> */}
                    Tel</span>
                <p>0757130897</p>
            </div>

            <div class="footer__heure">
                Horaires : Du lundi au vendredi de 9h à 17h
            </div>

            <nav class="footer__nav">
                <div class="footer__logo">
                    <i class="fa-brands fa-instagram fa-xl"></i>
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                    <i class="fa-brands fa-twitter fa-xl"></i>
                </div>
                <p>Nous contacter</p>
                <p>Mentions Legales</p>
                <p>CGU</p>
                <p>test</p>

            </nav>
        </footer>
}
export default Footer;