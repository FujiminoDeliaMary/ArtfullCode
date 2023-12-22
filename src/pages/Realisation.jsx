import React from "react";
import '../components/Nav';
import imagerealisation2 from "../assets/services/image-realisation2.jpg"
const Realisation = () => {

    return <section className="realisations" id="realisations">
           
            <h2 className="realisations__title">Nos réalisations</h2>
      

                <figure className="realisations__projet">
                    <img className="realisations__img" src={imagerealisation2} alt="projet1" />
                    <figcaption class="realisations__libelle">
                        <h3 className="realisations__name">Soutien à l'apprentissage de la lecture pour les détenus en situation d'illettrisme</h3>
                        <p className="realisations__content">Nous avons eu la chance d'initier notre entreprise avec un projet phare : une application web qui vise à offrir une meilleure approche d'apprentissage du français aux illettrés, aux allophones et aux analphabètes, dans le but de favoriser leur réinsertion future.</p><br></br>
                        <p className="realisations__content">Étant profondément touchées par leur situation, nous avons décidé de nous porter volontaires, offrant nos services gratuitement pour les aider à améliorer leur situation et à bénéficier d'un meilleur système d'éducation. Notre objectif est de contribuer à leur réinsertion en proposant des outils éducatifs adaptés à leurs besoins spécifiques.</p>
                    </figcaption>
                </figure>


    </section>
}
export default Realisation;