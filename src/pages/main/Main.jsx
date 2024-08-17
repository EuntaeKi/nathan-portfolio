import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

  // Figure out why the Main is calling PreviousLocation 3 times
  useEffect(() => {
    setPageColor("#FFFFFF");
  }, [location, previousLocation, triggerBlink, setPageColor]);

  return (
    <>
      <Light
        display={
          // Make it disappear once it's done
          (triggerBlink || location.pathname === "/home") &&
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
      <div id="main-container">
        <span id="main-description">
          <span id="main-name">Nathan Seung</span>
          <div id="main-body">
            is a designer and researcher who loves simple and creativity
          </div>
        </span>
        <img src={tree} alt="tree" id="main-tree" />
      </div>
    </>
  );
};

export default Main;
