import React from "react";

const Equipe  = () => {
    return <section class="equipe">
    <h2 className="equipe__title">
     Notre équipe
    </h2>

    <article className="equipe__membres">
      <figure className="equipe__fig equipe--bleu">
        <div className="membre__image--victoria"></div>
        <figcaption class="membre">
          <p className="membre__nom">Victoria<br />Tandamba </p>
          <p className="membre__filiere">Développeuse Full Stack</p>
        </figcaption>
      </figure>

        
        <figure className="equipe__fig equipe--bleu">
        <div className="membre__image--delia"></div>
        <figcaption className="membre">
            <p className="membre__nom">Marilyne Delia<br />Tsene</p>
            <p className="membre__filiere">Développeuse Full Stack</p>
        </figcaption>
        </figure>

      <figure className="equipe__fig equipe--none">
      <div className="membre__image--loane"></div>
        <figcaption className="membre">
          <p className="membre__nom">Loane<br />Sene</p>
          <p className="membre__filiere">Web Designeuse Intégratrice</p>
        </figcaption>
      </figure>

      <figure className="equipe__fig equipe--none">
      <div className="membre__image--clarence"></div>
        <figcaption className="membre">
          <p className="membre__nom">Clarence<br />Noirot</p>
          <p className="membre__filiere">Web Designeuse Intégratrice</p>
        </figcaption>
      </figure>
    </article>
  </section>
}

export default Equipe;
