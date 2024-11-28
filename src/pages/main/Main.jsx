import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';

import "./Main.css";
import Light from "../../components/light/Light";
import usePreviousLocation from "../../contexts/usePreviousLocation";

const Main = ({
  pageColor,
  setPageColor,
  triggerBlink,
  setTriggerBlink,
  setOverlayColor,
  setShowOverlay,
}) => {
  const tree = `${process.env.PUBLIC_URL}/img/main_tree.png`;
  const location = useLocation();
  const previousLocation = usePreviousLocation();

  useEffect(() => {
    setPageColor("#FFFFFF");
  }, [setPageColor]);

  return (
    <>
      <Helmet>
        <title>NS | Portfolio</title>
      </Helmet>
      <Light
        display={
          // Make it disappear once it's done
          triggerBlink &&
          previousLocation &&
          previousLocation.pathname !== "/"
        }
        pageColor={pageColor}
        triggerBlink={triggerBlink}
        setTriggerBlink={setTriggerBlink}
        setPageColor={setPageColor}
        setShowOverlay={setShowOverlay}
        setOverlayColor={setOverlayColor}
        slideType={triggerBlink ? "down" : "up"}
      />
      <div className={`${triggerBlink ? 'slide-down' :
        (location.pathname === "home" &&
          previousLocation &&
          previousLocation.pathname !== "/" &&
          previousLocation.pathname !== location.pathname) ? 'slide-up' : ''}`} id="main-container">
        <span id="main-description">
          <span id="main-name">Nathan Seung</span>
          <div id="main-body">
            is a designer and researcher who loves creativity and simplicity
          </div>
        </span>
        <img src={tree} alt="tree" id="main-tree" />
      </div>
    </>
  );
};

export default Main;
