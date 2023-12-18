import React from "react";
import photo from "../assets/membre.jpg"

const Equipe  = () => {
    return <section class="equipe">
    <h2 className="equipe__title">
     Notre équipe
    </h2>

    <article className="equipe__membres">
      <figure className="equipe__fig equipe--bleu">
        <img src={photo} alt="les membres de léquipe" />
        <figcaption class="membre">
          <p className="membre__nom">Victoria<br />Tandamba</p>
          <p className="membre__filiere">Développeuse Full Satck</p>
        </figcaption>
      </figure>

        
        <figure className="equipe__fig equipe--bleu">
        <img src={photo} alt="les membres de léquipe" />
        <figcaption className="membre">
            <p className="membre__nom">Marilyne Delia<br />Tsene</p>
            <p className="membre__filiere">Développeuse Full Stack</p>
        </figcaption>
        </figure>

      <figure className="equipe__fig equipe--none">
        <img src={photo} alt="les membres de léquipe" />
        <figcaption className="membre">
          <p className="membre__nom">Loane<br />Sene</p>
          <p className="membre__filiere">Web Designer</p>
        </figcaption>
      </figure>

      <figure className="equipe__fig equipe--none">
        <img src={photo} alt="les membres de léquipe" />
        <figcaption className="membre">
          <p className="membre__nom">Clarence<br />Noirot</p>
          <p className="membre__filiere">Web Designer</p>
        </figcaption>
      </figure>
    </article>
  </section>
}

export default Equipe;
