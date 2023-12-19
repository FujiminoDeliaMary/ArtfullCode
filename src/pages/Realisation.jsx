import React from "react";
import image from "../assets/projet2.png"
import projet1 from "../assets/projet1.png"
import projet2 from "../assets/projet2.png"
import projet1Logo from "../assets/projet1Logo.png"
import projet2Logo from "../assets/projet2Logo.png"
const Realisation = () => {

    return <>

        <h2 class="title">Ils nous ont fait confiance</h2>
        <main>
            <section class="projet1">
                <img class="projet1__logo" src={projet1Logo} alt="logo " />
                <div class="rectangle"></div>
                <figure class="figure">
                    <img class="figure__img" src={projet1} alt="projet1" />
                    <figcaption class="figure__figcaption">
                        <p class="figure__figcaption__content">Ce club de canoë-kayak a fait appel à nous afin de retravailler leur site </p>
                    </figcaption>
                </figure>
            </section>

            <section class="projet2">
                <img class="projet2__logo" src={projet2} alt="logo " />
                <div class="rectangle"></div>
                <figure class="figure">
                    <img class="figure__img" src={projet2Logo} alt="projet1" />
                    <figcaption class="figure__figcaption">
                        <p class="figure__figcaption__content">Studio Light Tattoo nous à fait confiance pour la création et la réalisation de son site web </p>
                    </figcaption>
                </figure>
            </section>
        </main>
    </>
}
export default Realisation;