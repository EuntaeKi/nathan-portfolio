import React, { useEffect, useState } from "react";

import "./About.css";
import Main from "../main/Main";

const About = ({ setShowOverlay, setOverlayColor }) => {
  const light = `${process.env.PUBLIC_URL}/img/light.png`;
  const [phase, setPhase] = useState(0);

  // Inject light image
  useEffect(() => {
    let id;
    // Factor out the overlay blink logic to Overlay
    if (phase === 0) {
      setPhase(1);
    } else if (phase === 1) {
      setPhase(2);
      setShowOverlay(true);
    } else if (phase === 2) {
      id = setTimeout(() => {
        setShowOverlay(false);
        setPhase(3);
      }, 2500);
    } else if (phase === 3) {
      setShowOverlay(true);
      setOverlayColor("#000000");
    }

    return () => {
      clearTimeout(id);
    };
  }, [phase, setShowOverlay, setOverlayColor]);

  return (
    <>
      <img
        src={light}
        alt="Light"
        className="slide"
        style={{ display: phase === 0 ? "none" : "block" }}
      />
      {phase < 3 && <Main className={phase === 0 ? "" : "slide"} />}
    </>
  );
};

export default About;
