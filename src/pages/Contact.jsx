
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import emailjs from '@emailjs/browser'

const Contact = () => {
   
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_81pdbks', 'template_5nqqb8l', form.current, 'ru9WsHxGXFFGqcYiL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return <section class="contact">
      
                <h3 class="contact__speech"  ><TypeAnimation 
                                                sequence={[
                                                    'Notre equipe est à votre écoute',
                                                    1000,
                                                ]}
                                                />
                </h3>
            
                <form class="contact__form" action="contact.php" method="post" ref={form} onSubmit={sendEmail}>
                    <p>Nous contacter</p>

                    <div class="contact__formGroup">
                        <label class="contact__label" for="nom">Nom </label><br/>
                        <input class="contact__input" type="text" id="nom" name="from_name" required /><br />
                        {/* <span class="form__texte__error"><?= (!empty($errors['name']))? $errors['name'] : '' ?></span> */}
                    </div>


                    <div class="contact__formGroup">
                        <label class="contact__label" for="email">Mail</label><br/>
                        <input class="contact__input" type="email" id="email" name="from_email" required/><br/>
                        {/* <span class="form__email2__error"><?= (!empty($errors['email']))? $errors['email'] : '' ?></span> */}
                    </div>


                    <div class="contact__formGroup">
                        <label class="contact__label" for="message">Message</label><br/>
                        <textarea class="contact__textarea" id="message" name="message" rows="7" required></textarea><br/><br/>
                        {/* <span class="form__textarea__error"><?= (!empty($errors['message']))? $errors['message'] : '' ?></span> */}
                    </div>


                    <button class="contact__submit" type="submit">Envoyer</button>
                </form>
    </section>

}
export default Contact;