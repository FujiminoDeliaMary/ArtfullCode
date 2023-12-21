import React from "react";
import '../components/Nav';
import projet1 from "../assets/projet1.png"
import projet2 from "../assets/projet2.png"
import projet1Logo from "../assets/projet1Logo.png"
import projet2Logo from "../assets/projet2Logo.png"
import Nav from "../components/Nav";
const Realisation = () => {

    return <section className="realisations" id="realisations">
           
            <h2 className="realisations__title">Nos réalisations</h2>
      
                {/* <figure class="realisations__projet">
                    <img class="realisations__img" src={projet1} alt="projet1" />
                    <figcaption class="realisations__libelle">
                        <p class="realisations__content">Ce club de canoë-kayak a fait appel à nous afin de retravailler leur site </p>
                    </figcaption>
                </figure> */}

                <figure className="realisations__projet">
                    <img className="realisations__img" src={projet2} alt="projet1" />
                    <figcaption class="realisations__libelle">
                        <h3 className="realisations__name">Aide à l'alphabétisation d'illétrés en détention</h3>
                        <p className="realisations__content">Nous avons été chanceuses d'avoir comme premier projet de notre entreprise, une application web qui permet d'aider les illétrés, allophones et analphabètes de pouvoir bénéficier d'une meilleur approche concernant leur apprentissage du français pour une meilleure réinsertion future.</p><br></br>
                        <p className="realisations__content">De ce fait, leur situation nous ayant énormément touchée, nous avons décidée de nous porter volontaire gratuitement pour les aider à améliorer leur situation, donc bénéficier d'une meilleur système d'éducation</p>
                    </figcaption>
                </figure>


    </section>
}
export default Realisation;