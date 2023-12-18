import React from "react";

const Footer = () => {
    return <>
        <footer class="footer">
            <div class="footer__coordonnees">
                <span>
                    {/* <i class="fas fa-solid fa-location-dot fa-xl">
                        </i> */}
                    &nbspAdresse
                </span>
                <p>44 avenue Albert Einstein, 17000 La Rochelle</p>
                <br />
                <span>
                    {/* <i class="fas fa-light fa-envelope fa-xl"></i>&nbsp Mail */}
                </span>
                <p>artfullcode@gmail.com</p>
                <br />
                <span>
                    {/* <i class="fas fa-duotone fa-phone fa-xl"></i> */}
                    &nbspTel</span>
                <p>0757130897</p>
            </div>

            <div class="footer__heure">
                &nbsp&nbsp&nbspHoraires : Du lundi au vendredi de 9h à 17h
            </div>

            <nav class="footer__nav">
                <div class="footer__logo">
                    <i class="fa-brands fa-instagram fa-xl"></i>
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                    <i class="fa-brands fa-twitter fa-xl"></i>
                </div>&nbsp
                <p>Nous contacter</p>
                <p>Mentions Legales</p>
                <p>CGU</p>
                <p>test</p>

            </nav>
        </footer>
    </>
}
export default Footer;