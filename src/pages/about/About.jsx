import React, { useEffect, useState } from "react";

import "./About.css";
import Main from "../main/Main";
import Light from "../../components/light/Light";

const About = ({ setShowOverlay, setOverlayColor, setPageColor, pageColor }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let id;
    // Factor out the overlay blink logic to Overlay
    if (phase === 0) {
      setPhase(1);
    } else if (phase === 1) {
      id = setTimeout(() => {
        setPhase(2);
        setShowOverlay(true);
      }, 500);
    } else if (phase === 2) {
      id = setTimeout(() => {
        setShowOverlay(false);
        setPhase(3);
      }, 3000);
    } else if (phase === 3) {
      setShowOverlay(true);
      setOverlayColor("#000000");
      setPhase(4);
    } else if (phase === 4) {
      setShowOverlay(false);
      setPageColor("#EC7979");
    }

    return () => {
      clearTimeout(id);
      setPageColor("#FFFFFF")
    };
  }, [phase, setShowOverlay, setOverlayColor, setPageColor]);

  return (
    <>
      <Light display={phase !== 0} />
      {phase < 3 && <Main className={phase === 0 ? "" : "slide"} />}
      {
        phase > 3 &&
        <>
          <div className="about-container">
            <div className="about-description-container">
              <p className="about-description">
                is a UX/UI designer and a formal psychology researcher who dedicated his work on various multi-disciplinary research studies for 3 years. Now he is applying this background to expand his passion in influencing the world through research-based projects by his UX/UI designs. He understands the dynamics of research and how to connect the collected data to life through this designs.
              </p>
            </div>
            <div className="about-resume-container">
              <div className="about-resume-category">
                <span>Contact</span>
                <ul>
                  <li>
                    <a href="mailto:jeungha89@gmail.com" style={{ color: pageColor }}>jeungha89@gmail.com</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/nathan-seung-174b63203/" style={{ color: pageColor }}>LinkedIn</a>
                  </li>
                  <li>
                    <a href="mailto:jeungha89@gmail.com" style={{ color: pageColor }}>Resume</a>
                  </li>
                </ul>
              </div>
              <div className="about-resume-category">
                <span>Experience</span>
              </div>
              <div className="about-resume-category">
                <span>Capabilities</span>
              </div>
            </div>
          </div>

        </>
      }
    </>
  );
};

export default About;
