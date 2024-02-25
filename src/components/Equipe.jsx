import React from "react";
import cole from '../assets/membres/cole.jpg'
import linkedin from '../assets/icons/LinkedIn.png'
import victoriaImg from '../assets/membres/victoriaphoto2.png';
import loaneImg from '../assets/membres/loanephoto2.png';
import deliaImg from '../assets/membres/deliaphoto2.png';
import clarenceImg from '../assets/membres/clarencephoto2.png'

const Equipe  = () => {
    return <section class="equipe">
    <h2 className="equipe__title">
     Rencontrez nos membres
    </h2>

    <article className="equipe__membres">
      <figure className="equipe__fig equipe--bleu">
        <img src={cole} alt="victoria" className="equipe__img"/>
        <figcaption class="membre">
          <div className="membre__infos">
              <p className="membre__nom">Victoria Tandamba </p><br></br>
              <p className="membre__filiere">Développeuse Full Stack</p>
          </div>
          <a href="https://www.linkedin.com/in/victoria-tandamba/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className="membre__linkedin"/></a>
   
        </figcaption>
      </figure>

        
        <figure className="equipe__fig equipe--bleu">
        <img src={cole} alt="" className="equipe__img"/>
        <figcaption className="membre">
          <div className="membre__infos">
            <p className="membre__nom">Marilyne Delia Tsene</p><br></br>
            <p className="membre__filiere">Développeuse Full Stack</p>
          </div>
          <a href="www.linkedin.com/in/delia-marilyne-tsene-4895a52a9" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className="membre__linkedin"/></a>
   
        </figcaption>
        </figure>

      <figure className="equipe__fig equipe--none">
      <img src={cole} alt="" className="equipe__img"/>
        <figcaption className="membre">
          <div className="membre__infos">
            <p className="membre__nom">Loane Sene</p><br></br>
            <p className="membre__filiere">Web Designeuse </p>
          </div>
          <a href="https://www.linkedin.com/in/loane-s%C3%A9n%C3%A9/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className="membre__linkedin"/></a>
   
        </figcaption>
      </figure>

      <figure className="equipe__fig equipe--none">
      <img src={cole} alt="" className="equipe__img"/>
        <figcaption className="membre">
          <div className="membre__infos">
            <p className="membre__nom">Clarence Noirot</p><br></br>
            <p className="membre__filiere">Web Designeuse</p>
          </div>
          <a href="https://www.linkedin.com/in/clarence-noirot-5b517a251/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className="membre__linkedin"/></a>
   
        </figcaption>
      </figure>
    </article>
  </section>
}

export default Equipe;
