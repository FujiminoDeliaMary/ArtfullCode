import React from "react";
import '../components/Nav';
import projet1 from "../assets/projet1.png"
import projet1Logo from "../assets/projet1Logo.png"
import imagerealisation2 from "../assets/services/image-realisation2.jpg"
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
                    <img className="realisations__img" src={imagerealisation2} alt="projet1" />
                    <figcaption class="realisations__libelle">
                        <h3 className="realisations__name">Soutien à l'apprentissage de la lecture pour les détenus en situation d'illettrisme</h3>
                        <p className="realisations__content">Nous avons eu la chance d'initier notre entreprise avec un <strong className="strong2">projet phare</strong> : une <strong className="strong2">application web </strong> qui vise à offrir une <strong className="strong2">meilleure approche d'apprentissage</strong> du français aux illettrés, aux allophones et aux analphabètes, dans le but de favoriser leur réinsertion future.</p><br></br>
                        <p className="realisations__content">Étant profondément touchées par leur situation, nous avons décidé de nous porter volontaires, offrant nos services gratuitement pour les aider à améliorer leur situation et à bénéficier d'un meilleur système d'éducation. <strong className="strong2">Notre objectif</strong> est de contribuer à leur réinsertion en proposant des outils éducatifs adaptés à leurs <strong className="strong2">besoins spécifiques.</strong></p>
                    </figcaption>
                </figure>


    </section>
}
export default Realisation;