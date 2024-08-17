import React, { useEffect } from "react";

import "./Main.css";
import Light from "../../components/light/Light";
import usePreviousLocation from '../../contexts/usePreviousLocation';

const Main = ({
  pageColor,
  setPageColor,
  triggerBlink,
  setTriggerBlink,
  setOverlayColor,
  setShowOverlay,
}) => {
  const tree = `${process.env.PUBLIC_URL}/img/main_tree.png`;
  const previousLocation = usePreviousLocation();

  // Figure out why the Main is calling PreviousLocation 3 times
  useEffect(() => {
    setPageColor("#FFFFFF");
    // console.log(triggerBlink, previousLocation)
    console.log('Main component render');
    console.log('Trigger Blink:', triggerBlink);
    console.log('Previous Location:', previousLocation);
  }, [triggerBlink, setPageColor, previousLocation])

  return (
    <>
      <Light
        display={triggerBlink && previousLocation && previousLocation.pathname !== "/"}
        pageColor={pageColor}
        triggerBlink={triggerBlink}
        setTriggerBlink={setTriggerBlink}
        setPageColor={setPageColor}
        setShowOverlay={setShowOverlay}
        setOverlayColor={setOverlayColor}
        slideType="up"
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
