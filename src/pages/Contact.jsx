import React from "react";

const Contact = () => {

    return <section class="form">
        <h2 class="form__titre">Contactez-nous</h2>
        <h3 class="form__soustitre"></h3>

        <form class="form__message" action="#" method="post" />
        <label class="form__nom" for="nom">Nom </label><br />
        <input class="form__texte" type="text" id="nom" name="nom" required /><br />
        <label class="form__email1" for="email">Mail</label><br />
        <input class="form__email2" type="email" id="email" name="email" required /><br />
        <label class="form__contenu" for="message">Message</label><br />
        <textarea class="form__textarea" id="message" name="message" rows="4" required></textarea><br /><br />
        <input class="form__soumettre" type="submit" value="Envoyer" />

    </section>

}
export default Contact;