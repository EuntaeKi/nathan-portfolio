import React, { useEffect, useState } from "react";

import "./About.css";
import Main from "../main/Main";
import Light from "../../components/light/Light";

const About = ({
  setShowOverlay,
  setOverlayColor,
  setPageColor,
  pageColor,
  setIsPreviousPageIntro,
}) => {
  const [phase, setPhase] = useState(0);
  const logoPath = `${process.env.PUBLIC_URL}/img/logo_about.png`;

  useEffect(() => {
    let id;
    // Factor out the overlay blink logic to Overlay
    if (phase === 0) {
      setPhase(1);
      setIsPreviousPageIntro(false);
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
      id = setTimeout(() => {
        setShowOverlay(false);
        setPageColor("#EC7979");
      }, 1000);
    }

    return () => {
      clearTimeout(id);
      setPageColor("#FFFFFF");
    };
  }, [
    phase,
    setShowOverlay,
    setOverlayColor,
    setPageColor,
    setIsPreviousPageIntro,
  ]);

  useEffect(() => {
    setOverlayColor("#00000040");
  }, [setOverlayColor]);

  return (
    <>
      <Light display={phase !== 0} color={pageColor} />
      {phase < 3 && <Main className={phase === 0 ? "" : "slide-down"} />}
      {phase > 3 && (
        <>
          <div className="about-container">
            <div className="about-description-container">
              {phase > 3 && (
                <div className="about-logo-container">
                  <img
                    src={logoPath}
                    alt="Nathan Seung"
                    className="about-logo"
                  />
                </div>
              )}
              <p className="about-description">
                is a UX/UI designer and a formal psychology researcher who
                dedicated his work on various multi-disciplinary research
                studies for 3 years. Now he is applying this background to
                expand his passion in influencing the world through
                research-based projects by his UX/UI designs. He understands the
                dynamics of research and how to connect the collected data to
                life through this designs.
              </p>
            </div>
            <div className="about-resume-container">
              <div className="about-resume-header">
                <span>Contact</span>
                <ul>
                  <li>
                    <a
                      href="mailto:jeungha89@gmail.com"
                      style={{ color: pageColor }}
                    >
                      jeungha89@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nathan-seung-174b63203/"
                      style={{ color: pageColor }}
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${process.env.PUBLIC_URL}/files/JeongHa_Seung CV Resume (UX).pdf`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: pageColor }}
                    >
                      {" "}
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
              <div className="about-resume-header">
                <span>Experience</span>
                <ul>
                  <li>Developmental Psychology Researcher</li>
                  <li>Learning Assistant Mentor</li>
                  <li>Google Certificate</li>
                  <ul className="about-resume-subitems">
                    <li>Conduct UX Research and Test Early Concepts</li>
                    <li>
                      Start the UX Design Process: Empathize, Define, and Ideate
                    </li>
                    <li>Foundations of User Experience (UX) Design</li>
                    <li>Build Wireframes and Low-Fidelity Prototypes</li>
                    <li>
                      Create High-Fidelity Designs and Prototypes in Figma
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="about-resume-header">
                <span>Capabilities</span>
                <ul>
                  <li>Website Design</li>
                  <li>Mobile App Design</li>
                  <li>Research</li>
                  <ul className="about-resume-subitems">
                    <li>Usability Study</li>
                    <li>Data managing/Analysis</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
