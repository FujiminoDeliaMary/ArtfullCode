import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedPathHaut = () => {
    const pathRef = useRef();

    useEffect(() => {
        const myPath = pathRef.current;
        const pathLength = myPath.getTotalLength();
        myPath.style.strokeDasharray = pathLength;
        myPath.style.strokeDashoffset = pathLength;

        gsap.to(pathRef.current, {
            strokeDashoffset: 0,
            ease: 'linear',
            scrollTrigger: {
                trigger: ".leSvg__haut",
                start: "top 100%",
                end: "bottom 0%",
                toggleActions: "restart pause reverse pause",
                markers: false,
                scrub: 3,
            },
            duration: 4,
        });
    }, []);

    return (
        <div className="leSvg__haut">
            <svg width="1440" height="420" viewBox="0 0 1440 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    ref={pathRef}
                    id="myPath"
                    d="M0 0C0 349.981 957.333 433.806 1436 431.971" stroke="#053F5E" />
            </svg>
        </div>
    );
};

export default AnimatedPathHaut;
