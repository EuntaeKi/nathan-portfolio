import React, { useEffect, useState } from "react";
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
        className={`${triggerBlink ? "pt-12 slide-down flex flex-col" : "flex flex-col"
          }`}
      >
        <div className="flex mb-16 justify-center min-[1152px]:justify-between flex-wrap items-center gap-10">
          <div className="flex flex-col">
            <div className="flex items-center justify-center bg-zinc-900 px-8 py-12 mb-4">
              <div className="preview-container" id="arcaders-app">
                <div className="flex text-gray-400 w-full justify-around">
                  <div className="w-1/3 text-[6.5px]">PROJECT:</div>
                  <div className="w-1/3 text-[6.5px]">PROJECT TYPE:</div>
                </div>
                <div className="flex w-full justify-around">
                  <div className="w-1/3 text-[22px]">ARCADERS'</div>
                  <div className="w-1/3 text-[8.5px] text-nowrap ">
                    10 WEEKS SOLO PROJECT <br /> SELF-SELECT PROMPT
                  </div>
                </div>
                <div className="flex w-full justify-around">
                  <div className="w-1/3 text-[10px]">
                    ALL-AROUND GAME REVIEW APP
                  </div>
                  <div className="w-1/3"></div>
                </div>
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
          <div className="flex flex-col w-fit">
            <div className="flex items-center justify-center bg-zinc-900 px-8 py-12 mb-4">
              <div className="preview-container" id="arcaders-web"></div>
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
        <div className="flex bg-zinc-900 w-full py-8 items-center justify-around">
          <div className="flex flex-col w-2/3">
            <div className="text-white text-3xl font-clash-bold w-fit">
              Let's work together!
            </div>
            <div className="text-gray-400 w-2/3 font-clash-bold">
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
