import React from "react";
import cole from '../assets/membres/cole.jpg'
import linkedin from '../assets/icons/LinkedIn.png'
import victoriaImg from '../assets/membres/victoriaphoto2.png';
import loaneImg from '../assets/membres/loanphoto1.png';
import deliaImg from '../assets/membres/deliaphoto2.png';
import clarenceImg from '../assets/membres/clarencephoto2.png'

const Equipe = () => {
  return <section class="equipe">
    <h2 className="equipe__title">
      Rencontrez nos membres
    </h2>

    <article className="equipe__membres">
      <figure className="equipe__fig equipe--bleu">
        <img src={victoriaImg} alt="victoria" className="equipe__img" />
        <figcaption class="membre">
          <div className="membre__infos">
            <p className="membre__nom">Victoria Tandamba </p><br></br>
            <p className="membre__filiere">Développeuse Full Stack</p>
          </div>
          <a href="https://www.linkedin.com/in/victoria-tandamba/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className="membre__linkedin" /></a>
        </figcaption>

      </figure>


      <figure className="equipe__fig equipe--bleu">
        <img src={deliaImg} alt="" className="equipe__img" />
        <figcaption className="membre">
          <div className="membre__infos">
            <p className="membre__nom">Marilyne Tsene</p><br></br>
            <p className="membre__filiere">Développeuse Full Stack</p>
          </div>
          <a href="https://www.linkedin.com/in/marilyne-tsene/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className="membre__linkedin" /></a>

        </figcaption>
      </figure>

      <figure className="equipe__fig equipe--none">
        <img src={loaneImg} alt="" className="equipe__img" />
        <figcaption className="membre">
          <div className="membre__infos">
            <p className="membre__nom">Loane Sene</p><br></br>
            <p className="membre__filiere">Web Designeuse </p>
          </div>
          <a href="https://www.linkedin.com/in/loane-s%C3%A9n%C3%A9/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className="membre__linkedin" /></a>

        </figcaption>
      </figure>

      <figure className="equipe__fig equipe--none">
        <img src={clarenceImg} alt="" className="equipe__img" />
        <figcaption className="membre">
          <div className="membre__infos">
            <p className="membre__nom">Clarence Noirot</p><br></br>
            <p className="membre__filiere">Web Designeuse</p>
          </div>
          <a href="https://www.linkedin.com/in/clarence-noirot-5b517a251/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className="membre__linkedin" /></a>

        </figcaption>
      </figure>
    </article>

    {/* <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">

      <path d="M 50 50 Q 150 0, 250 50" stroke="turquoise" fill="none" />


      <circle cx="50" cy="50" r="30" fill="white" stroke="black" />


      <text x="50" y="55" font-family="Satoshi, sans-serif" font-size="18" text-anchor="middle">1</text>


      <text x="50" y="80" font-family="Satoshi, sans-serif" font-size="18" text-anchor="middle">16%</text>
    </svg> */}

  </section>
}

export default Equipe;
