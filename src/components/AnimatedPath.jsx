import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedPath = () => {
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
        trigger: ".leSvg",
        start: "top 75%",
        end: "bottom 75%",
        toggleActions: "restart pause reverse pause",
        markers: true,
        scrub: 3,
      },
      duration: 4,
    });
  }, []);

  return (
    <div className="leSvg">
      <svg width="1440" height="420" viewBox="0 0 1440 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={pathRef}
          id="myPath"
          stroke="#27496D"
          d="M0 .5C1229.72 103.387 1437.22 202.809 1439.5 412M0 139.5C746.135 90.25 1089.23 101.226 1439.5 255"
        />
      </svg>
    </div>
  );
};

export default AnimatedPath;
