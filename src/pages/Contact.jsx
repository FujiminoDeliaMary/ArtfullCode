
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import emailjs from '@emailjs/browser'

const Contact = () => {
   
    const form = useRef();
    const [isValidEmail, setIsValid] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);


    const sendEmail = (e) => {

      e.preventDefault();
      console.log(formSubmitted);
      setFormSubmitted(true)
      if (isValidEmail){
        emailjs.sendForm('service_81pdbks', 'template_5nqqb8l', form.current, 'ru9WsHxGXFFGqcYiL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      }else{

      }
    };

    //Vérification de la validité de l'email
    const handleEmailChange = (event) => {
        setFormSubmitted(false)
        const inputEmail = event.target.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(inputEmail);
        setIsValid(isValidEmail);
    };
    console.log(formSubmitted);
    return <section class="contact">
      
                <h3 class="contact__speech"  ><TypeAnimation 
                                                sequence={[
                                                    'Notre equipe est à votre écoute',
                                                    1000,
                                                ]}
                                                
                                                />
                </h3>
            
                <form className="contact__form" action="contact.php" method="post" ref={form} onSubmit={sendEmail}>
                   {formSubmitted===true && <p className={`contact__alert ${isValidEmail ? 'valid' : 'invalid'}`}>{(!isValidEmail) ? 'Vous avez entrer une mauvaise adresse Email' : 'Envoyé avec succès'}</p>}
                    <h2 className="contact__title">Nous contacter</h2>

                    <div class="contact__formGroup">
                        <label class="contact__label" for="nom">Nom et Prénom</label><br/>
                        <input class="contact__input" type="text" id="nom" name="from_name" required placeholder="Nom et Prénom"/><br />
                        <span></span>
                    </div>


                    <div class="contact__formGroup">
                        <label class="contact__label" for="email">Mail</label><br/>
                        <input class="contact__input" id="email" name="from_email" required placeholder="Entrez votre email" onChange={handleEmailChange}/><br/>
                    </div>

                    <div class="contact__formGroup">
                        <label class="contact__label" for="objet">Objet</label><br/>
                        <input class="contact__input" type="text" id="objet" name="from_name" required placeholder="Objet"/><br />
                        <span></span>
                    </div>


                    <div class="contact__formGroup">
                        <label class="contact__label" for="message">Message</label><br/>
                        <textarea class="contact__textarea" id="message" name="message" rows="7" required placeholder="Votre message"></textarea><br/><br/>
                    </div>


                    <button class="contact__submit" type="submit">Envoyer</button>
                </form>
    </section>

}
export default Contact;