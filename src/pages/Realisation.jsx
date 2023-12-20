import React from "react";
import '../components/Nav';
import projet1 from "../assets/projet1.png"
import projet2 from "../assets/projet2.png"
import projet1Logo from "../assets/projet1Logo.png"
import projet2Logo from "../assets/projet2Logo.png"
import Nav from "../components/Nav";
const Realisation = () => {

    return <section className="realisations">
           
            <h2 class="realisations__title">Ils nous ont fait confiance</h2>
      
            <article class="realisations__projet">
             
                <figure >
                    <img class="realisations__img" src={projet1} alt="projet1" />
                    <figcaption class="realisations__libelle">
                        <p class="realisations__content">Ce club de canoë-kayak a fait appel à nous afin de retravailler leur site </p>
                    </figcaption>
                </figure>
            </article>

            <article class="realisations__projet">
            
                <figure >
                    <img class="realisations__img" src={projet2Logo} alt="projet1" />
                    <figcaption class="realisations__libelle">
                        <p class="realisations__content">Studio Light Tattoo nous à fait confiance pour la création et la réalisation de son site web </p>
                    </figcaption>
                </figure>
            </article>

    </section>
}
export default Realisation;