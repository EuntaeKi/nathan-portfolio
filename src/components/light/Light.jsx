import React, { useEffect, useState } from "react";

import "./Light.css";

const Light = ({ color, display, slideType }) => {
  const [light, setLight] = useState(`${process.env.PUBLIC_URL}/img/light.png`);

  // Change the color of light based on the parameter
  useEffect(() => {
    if (color === "#FFFFFF") {
      setLight(`${process.env.PUBLIC_URL}/img/light.png`)
    } else if (color === "#85ECE0") {
      setLight(`${process.env.PUBLIC_URL}/img/light_blue.png`)
      // setLight(`${process.env.PUBLIC_URL}/img/light.png`)
    } else if (color === "#EC7979") {
      setLight(`${process.env.PUBLIC_URL}/img/light_red.png`)
      // setLight(`${process.env.PUBLIC_URL}/img/light.png`)
    }
  }, [color, setLight]);

  return (
    <img
      src={light}
      alt="Light"
      className={`light ${slideType === "up" ? "slide-up" : "slide-down"}`}
      style={{ display: display === true ? "block" : "none" }}
    />
  );
};

export default Light;
