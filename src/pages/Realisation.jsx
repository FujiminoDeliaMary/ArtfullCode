import React from "react";
import '../components/Nav';
import projet1 from "../assets/projet1.png"
import projet2 from "../assets/projet2.png"
import projet1Logo from "../assets/projet1Logo.png"
import projet2Logo from "../assets/projet2Logo.png"
import Nav from "../components/Nav";
const Realisation = () => {

    return <section className="realisations">
           
            <h2 className="realisations__title">Ils nous ont fait confiance</h2>
      
                {/* <figure class="realisations__projet">
                    <img class="realisations__img" src={projet1} alt="projet1" />
                    <figcaption class="realisations__libelle">
                        <p class="realisations__content">Ce club de canoë-kayak a fait appel à nous afin de retravailler leur site </p>
                    </figcaption>
                </figure> */}

                <figure className="realisations__projet">
                    <img className="realisations__img" src={projet2} alt="projet1" />
                    <figcaption class="realisations__libelle">
                        <h3 className="realisations__name">Aide à l'alphabétisation de la prison d'aytré</h3>
                        <p className="realisations__content">Studio Light Tattoo nous à fait confiance pour la création et la réalisation de son site web </p>
                    </figcaption>
                </figure>


    </section>
}
export default Realisation;