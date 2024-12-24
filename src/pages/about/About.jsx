import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./About.css";
import Light from "../../components/light/Light";
import usePreviousLocation from "../../contexts/usePreviousLocation";

const About = ({
  pageColor,
  setPageColor,
  triggerBlink,
  setTriggerBlink,
  setShowOverlay,
  setOverlayColor,
}) => {
  const logoPath = `${process.env.PUBLIC_URL}/img/logo_about.png`;
  const location = useLocation();
  const previousLocation = usePreviousLocation();

  useEffect(() => {
    setPageColor("#EC7979");
  }, [setPageColor]);

  return (
    <>
      <Helmet>
        <title>NS | Portfolio</title>
      </Helmet>
      <Light
        display={triggerBlink}
        pageColor={pageColor}
        setShowOverlay={setShowOverlay}
        setOverlayColor={setOverlayColor}
        setPageColor={setPageColor}
        triggerBlink={triggerBlink}
        setTriggerBlink={setTriggerBlink}
      />
      <div
        className={`${
          triggerBlink
            ? "slide-down"
            : location.pathname === "home" &&
              previousLocation &&
              previousLocation.pathname !== "/" &&
              previousLocation.pathname !== location.pathname
            ? "slide-up"
            : ""
        }`}
      >
        <div className="about-description-container mb-0 md:mb-8 mt-12 md:-mt-20 lg:mt-0">
          <div className="about-logo-container">
            <Link to="/home" className="about-logo ml-4 md:ml-[-7rem]">
              <img src={logoPath} alt="Nathan Seung" />
            </Link>
          </div>
          <p className="about-description max-w-full md:max-w-[60vw] p-8 md:p-0">
            is a UX/UI designer and a formal psychology researcher who dedicated
            his work on various multi-disciplinary research studies for 3 years.
            Now he is applying this background to expand his passion in
            influencing the world through research-based projects by his UX/UI
            designs. He understands the dynamics of research and how to connect
            the collected data to life through this designs.
          </p>
        </div>
        <div className="about-resume-container max-w-full md:max-w-[60vw] p-8 md:p-0">
          <div>
            <div className="about-resume-header">Contact</div>
            <ul className="about-list">
              <li>
                <a
                  href="mailto:jeungha89@gmail.com"
                  className="underline"
                  style={{ color: pageColor }}
                >
                  jeungha89@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jeonghaseung/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-end"
                  style={{ color: pageColor }}
                >
                  <div className="underline">LinkedIn</div>
                  <span className="material-symbols-outlined text-lg mb-0 ml-1">
                    open_in_new
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`${process.env.PUBLIC_URL}/files/JeongHa_Seung CV Resume (UX).pdf`}
                  className="flex items-end"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: pageColor }}
                >
                  <div className="underline">Resume</div>
                  <div className="material-symbols-outlined text-lg mb-0 ml-1 no-underline">
                    open_in_new
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="about-resume-header">Experience</div>
            <ul className="about-list">
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
                <li>Create High-Fidelity Designs and Prototypes in Figma</li>
              </ul>
            </ul>
          </div>
          <div>
            <div className="about-resume-header">Capabilities</div>
            <ul className="about-list">
              <li>Website Design</li>
              <li>Mobile App Design</li>
              <li>Responsive Design</li>
              <li>Accessibility in UX</li>
              <li>Research Skills</li>
              <ul className="about-resume-subitems">
                <li>Usability Study</li>
                <li>Data managing/Analysis</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
