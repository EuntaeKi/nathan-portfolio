import React, { useEffect } from "react";

import "./Light.css";

const Light = ({ color, display }) => {
  const light = `${process.env.PUBLIC_URL}/img/light.png`;

  return (
    <img
      src={light}
      alt="Light"
      className="slide"
      style={{ display: display === true ? "block" : "none" }}
    />
  );
};

export default Light;
