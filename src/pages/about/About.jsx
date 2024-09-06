import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';

import "./About.css";
import Light from "../../components/light/Light";

const About = ({
  pageColor,
  setPageColor,
  triggerBlink,
  setTriggerBlink,
  setShowOverlay,
  setOverlayColor,
}) => {
  const logoPath = `${process.env.PUBLIC_URL}/img/logo_about.png`;

  useEffect(() => {
    setPageColor("#EC7979");
  }, [setPageColor])

  return (
    <>
      <Helmet>
        <title>NS | Portfolio</title>
      </Helmet>
      <Light
        display={true}
        pageColor={pageColor}
        setShowOverlay={setShowOverlay}
        setOverlayColor={setOverlayColor}
        setPageColor={setPageColor}
        triggerBlink={triggerBlink}
        setTriggerBlink={setTriggerBlink} />
      <div className="about-container">
        <div className="about-description-container">
          <div className="about-logo-container">
            <img
              src={logoPath}
              alt="Nathan Seung"
              className="about-logo"
            />
          </div>
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
                  href="https://www.linkedin.com/in/jeonghaseung/"
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
  )
}
export default About;
