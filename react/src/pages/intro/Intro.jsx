import React from "react";

import "./Intro.css";

const Intro = () => {
  // Need to bring in the logic from ../../../../pages/intro/script.js

  return (
    <>
      <div id="layout">
        <div className="heading-container">
          <div className="heading"></div>
        </div>
        <div id="name-container">
          <span id="name">Nathan Seung</span>
        </div>
        <div className="plane-container">
          <div className="fly-in">
            <div className="plane plane-one"></div>
            <div className="plane plane-two"></div>
            <div className="plane plane-three"></div>
            <div className="plane plane-four"></div>
            <div className="plane plane-five"></div>
            <div className="plane plane-six"></div>
            <div className="plane plane-seven"></div>
            <div className="plane plane-eight" id="pre-loading-plane"></div>
            <div className="plane plane-nine"></div>
            <div className="plane plane-nine" id="loading-plane"></div>
          </div>
          <div className="drop-in">
            <div className="plane plane-one"></div>
            <div className="plane plane-two"></div>
            <div className="plane plane-three"></div>
            <div className="plane plane-four"></div>
            <div className="plane plane-five"></div>
            <div className="plane plane-six"></div>
            <div className="plane plane-seven"></div>
            <div className="plane plane-eight"></div>
            <div className="plane plane-nine"></div>
            <div className="plane plane-ten" id="pre-last-plane"></div>
            <div className="plane plane-eleven"></div>
            <div className="plane plane-eleven" id="last-plane"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
