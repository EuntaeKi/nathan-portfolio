import React, { useEffect } from "react";

import "./Main.css";
import Light from "../../components/light/Light";

const Main = ({ pageColor, showLight, setOverlayColor, actualPageRender }) => {
  const tree = `${process.env.PUBLIC_URL}/img/main_tree.png`;

  useEffect(() => {
    if (actualPageRender) {
      setOverlayColor("#00000040");
    }

    // if () {

    // }
  }, [setOverlayColor, actualPageRender])

  return (
    <>
      <Light display={showLight} color={pageColor} />
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
