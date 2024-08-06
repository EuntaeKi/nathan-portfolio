import React, { useEffect } from "react";

import "./Overlay.css";

const Overlay = ({ trigger, color }) => {
  return (
    <div
      id="overlay"
      className={`${trigger === true ? "blink" : ""}`}
      style={{
        backgroundColor: color,
        display: trigger === true ? "block" : "none",
      }}
    ></div>
  );
};

export default Overlay;
