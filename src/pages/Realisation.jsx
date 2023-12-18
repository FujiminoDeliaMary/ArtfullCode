import React from "react";
import image from "../assets/projet2.png"

const Realisation = () => {

    return <>

        <h2 class="title">Ils nous ont fait confiance</h2>
        <main>
            <section class="projet1">
                <img class="projet1__logo" src={image} alt="logo " />
                <figure class="figure">
                    <img class="figure__img" src="images/projet1.png" alt="projet1" />
                    <figcaption class="figure__figcaption">
                        <p class="figure__figcaption__content">Ce club de canoë-kayak a fait appel à nous
                            afin de retravailler leur site </p>
                    </figcaption>
                </figure>
            </section>
            <section class="projet2">
                <img class="projet2__logo" src="images/projet2Logo.png" alt="logo " />
                <figure class="figure">
                    <img class="figure__img" src="images/projet2.png" alt="projet1" />

                    <figcaption class="figure__figcaption">
                        <p class="figure__figcaption__content">Studio Light Tattoo nous à fait confiance pour
                            la création et la réalisation de son site web    </p>
                    </figcaption>
                </figure>
            </section>
        </main>

    </>
}
export default Realisation;