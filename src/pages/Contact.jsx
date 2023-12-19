import React from "react";

const Contact = () => {

    return <section class="contact">
      
                <h3 class="contact__speech"></h3>
            
                <form class="contact__form" action="contact.php" method="post">
                    <p>Nous contacter</p>

                    <div class="contact__formGroup">
                        <label class="contact__label" for="nom">Nom </label><br/>
                        <input class="contact__input" type="text" id="nom" name="nom" required /><br />
                        {/* <span class="form__texte__error"><?= (!empty($errors['name']))? $errors['name'] : '' ?></span> */}
                    </div>

                    <div class="contact__formGroup">
                        <label class="contact__label" for="prenom">Prénom </label><br/>
                        <input class="contact__input" type="text" id="prenom" name="prenom" required/><br/>
                        {/* <span class="form__texte__error"><?= (!empty($errors['name']))? $errors['name'] : '' ?></span> */}
                    </div>

                    <div class="contact__formGroup">
                        <label class="contact__label" for="email">Mail</label><br/>
                        <input class="contact__input" type="email" id="email" name="email" required/><br/>
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