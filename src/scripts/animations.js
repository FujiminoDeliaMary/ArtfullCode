gsap.registerPlugin(ScrollTrigger);

// Calculez la longueur totale du chemin
const myPath = document.getElementById("myPath");
const pathLength = myPath.getTotalLength();

// la longueur du tracé est correctement définie
myPath.style.strokeDasharray = pathLength;
myPath.style.strokeDashoffset = pathLength;

gsap.to("#myPath", {
    strokeDashoffset: 0,
    ease: 'linear',
    scrollTrigger: {
        trigger: ".leSvg",
        start: "top 75%",
        end: "bottom 75%",
        toggleActions: "restart pause reverse pause",
        markers: false,
        scrub: 3,

    },
    duration: 4,

});
