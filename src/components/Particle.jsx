import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particules = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    // value: "#0d47a1",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            fpsLimit: 120,
            fullScreen: {
                enable: false,
                zIndex: 10,
            },

            responsive: [
                {
                    breakpoint: 768,
                    options: {
                        particles: {
                            size: {
                                value: 3 // Taille des particules pour les écrans de largeur jusqu'à 768px
                            }
                        }
                    }
                },
                {
                    breakpoint: 1024,
                    options: {
                        particles: {
                            size: {
                                value: 5 // Taille des particules pour les écrans de largeur jusqu'à 1024px
                            }
                        }
                    }
                },
                // Ajouter d'autres points de rupture et options spécifiques si nécessaire
            ],

            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        // mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 80,
                    },
                    value: 140,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (

            <Particles
                id="tsparticles"
                className="particule"
                particlesLoaded={particlesLoaded}
                options={options}
            />

        );
    }

};
export default Particules;
