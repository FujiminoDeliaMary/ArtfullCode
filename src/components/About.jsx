import React from "react";
import AnimatedPathHaut from "./AnimatedPathHaut";

const About = () => {
    return <section class="about" id="about">
        <h2 className="about__title">Notre Agence</h2>
        <p>
            ArtFull Code est une <span>agence web</span> basé sur la conception de
            site <span>e-learning</span>, <span>vitrine</span> et
            <span> e-commerce</span>.
        </p>
        <p className="about__content--justify">
            Pour les entreprises cherchant à établir leur présence en ligne, notre équipe d'artisans numériques développe des sites vitrines qui sont bien plus que des pages web. Ce sont des reflets numériques de votre essence, capturant l'essence de votre marque et créant des interactions significatives avec votre audience.

            Chez ArtFull Code, chaque ligne de code, chaque élément graphique est méticuleusement choisi et intégré pour transcender le simple site web. Nous créons des œuvres d'art digitales qui résistent à l'épreuve du temps et inspirent une connexion authentique entre votre marque et votre audience.
        </p>
        <AnimatedPathHaut />
    </section>
}

export default About;