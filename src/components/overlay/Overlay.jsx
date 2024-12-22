import React from "react";

import "./Overlay.css";

const Overlay = ({ trigger, overlayColor }) => {
  return (
    // <div
    //   id="overlay"
    //   className={`${trigger === true ? "blink" : ""}`}
    //   style={{
    //     display: trigger === true ? "block" : "none",
    //     backgroundColor: overlayColor,
    //   }}
    // ></div>
    <div
      id="overlay"
      className={`${trigger === true ? "blink" : ""}`}
      style={{
        display: trigger ? "block" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: overlayColor,
      }}
    ></div>
  );
};

export default Overlay;
