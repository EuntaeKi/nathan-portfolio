import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./Projects.css";
import Light from "../../components/light/Light";

const Projects = ({
  pageColor,
  setPageColor,
  triggerBlink,
  setTriggerBlink,
  setShowOverlay,
  setOverlayColor,
}) => {
  const imagePath = `${process.env.PUBLIC_URL}/img/`;
  useEffect(() => {
    setPageColor("#85ECE0");
  }, [setPageColor]);

  return (
    <>
      <Helmet>
        <title>NS | Portfolio</title>
      </Helmet>
      <Light
        display={triggerBlink}
        pageColor={pageColor}
        setPageColor={setPageColor}
        setShowOverlay={setShowOverlay}
        setOverlayColor={setOverlayColor}
        triggerBlink={triggerBlink}
        setTriggerBlink={setTriggerBlink}
        slideType={triggerBlink ? "down" : "up"}
      />
      <div
        className={`${
          triggerBlink
            ? "pt-24 slide-down flex flex-col items-center"
            : "flex flex-col items-center"
        }`}
      >
        <div className="flex mb-16 justify-center xl:justify-between flex-wrap items-center gap-10">
          <div className="flex flex-col mx-4">
            <div className="flex items-center justify-center bg-zinc-900 px-8 py-12 mb-4">
              <div className="preview-container" id="arcaders-app">
                <img
                  src={imagePath + "arcaders_app_preview.png"}
                  alt="Arcaders"
                />
              </div>
            </div>
            <div className="text-white text-xl font-bebas-neue">
              ARCADERS APP
            </div>
            <Link
              to="/projects/arcaders-app"
              className="text-lg flex w-fit items-center"
              style={{ fontFamily: "ClashDisplay-Regular, system-ui" }}
            >
              Learn More{" "}
              <i className="material-symbols-outlined">arrow_right_alt</i>
            </Link>
          </div>
          <div className="flex flex-col mx-4">
            <div className="flex items-center justify-center bg-zinc-900 px-8 py-12 mb-4">
              <div className="preview-container" id="arcaders-web">
                <img
                  src={imagePath + "arcaders_web_preview.png"}
                  alt="Arcaders"
                />
              </div>
            </div>
            <div className="text-white text-xl font-bebas-neue">
              ARCADERS WEBSITE
            </div>
            <Link
              to="/projects/arcaders-website"
              className="text-lg flex w-fit items-center"
              style={{ fontFamily: "ClashDisplay-Regular, system-ui" }}
            >
              Learn More{" "}
              <i className="material-symbols-outlined">arrow_right_alt</i>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-8 w-full bg-zinc-900 p-8 mx-8">
          <div className="flex flex-col">
            <div className="text-white text-3xl font-clash-bold w-fit">
              Let's work together!
            </div>
            <div className="text-gray-400 max-w-[700px] font-clash-bold">
              With a passion for designing simple, intuitive, and visually
              appealing user experiences, I’m ready to bring my skills to your
              next project.
            </div>
          </div>
          <a
            href="mailto:jeungha89@gmail.com"
            className="bg-app-blue text-black py-3 px-16 font-clash-medium text-xl"
          >
            contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
