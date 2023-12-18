import React from "react";

const Equipe  = () => {
    return <section class="equipe">
    <h2>
    Notre équipe
    </h2>

    <article class="equipe__membres">
    <figure class="equipe__fig equipe--bleu">
        <img src=" images/equipeClarence.png" alt="les membres de léquipe" />
        <figcaption class="membre">
        <p class="membre__nom">Victoria<br />Tandamba</p>
        <p class="membre__filiere">Développeuse</p>
        </figcaption>
    </figure>

    <figure class="equipe__fig equipe--bleu">
        <img src="images/equipeClarence.png" alt="les membres de léquipe" />
        <figcaption class="membre">
        <p class="membre__nom">Loane<br />Sene</p>
        <p class="membre__filiere">Web Designer</p>
        </figcaption>
    </figure>

    <figure class="equipe__fig equipe--none">
        <img src="images/equipeClarence.png" alt="les membres de léquipe" />
        <figcaption class="membre">
        <p class="membre__nom">Marilyne Delia<br />Tsene</p>
        <p class="membre__filiere">Développeuse</p>
        </figcaption>
    </figure>

    <figure class="equipe__fig equipe--none">
        <img src="images/equipeClarence.png" alt="les membres de léquipe" />
        <figcaption class="membre">
        <p class="membre__nom">Clarence<br />Noirot</p>
        <p class="membre__filiere">Web Designer</p>
        </figcaption>
    </figure>
    </article>
  </section>
}

export default Equipe;
