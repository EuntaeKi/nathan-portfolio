import React, { useEffect, useState } from "react";

import "./About.css";
import Main from "../main/Main";

const About = ({ setShowOverlay }) => {
  const light = `${process.env.PUBLIC_URL}/img/light.png`;
  const [phase, setPhase] = useState(0);

  // Inject light image
  useEffect(() => {
    let id;
    if (phase === 0) {
      setPhase(1);
    } else if (phase === 1) {
      setPhase(2);
      setShowOverlay(true);
    } else if (phase === 2) {
      id = setInterval(() => {
        setShowOverlay(false);
      }, 100000);
    }

  }, [phase, setShowOverlay])

  return (
    <>
      <img src={light} alt="Light" className="slide" style={{ display: phase === 0 ? "none" : "block" }} />
      {phase < 3 && <Main className={phase === 0 ? "" : "slide"} />}
    </>
  );
};

export default About;
