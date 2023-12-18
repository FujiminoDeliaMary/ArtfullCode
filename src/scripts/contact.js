
/* page contact */

let app = document.querySelector('h3');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});


typewriter
.typeString('Notre équipe')
.pauseFor(300)
.typeString(' est à')
.pauseFor(350)
.typeString(' votre <span style = "color: #D27C2C">écoute</span>')
.pauseFor(900)
.deleteChars(12)
.pauseFor(700)
.start()

