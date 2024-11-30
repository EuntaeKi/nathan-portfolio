import React, { useEffect, useState } from "react";

import "./Light.css";

const Light = ({
  display,
  pageColor,
  triggerBlink,
  setTriggerBlink,
  slideType,
  setShowOverlay,
  setOverlayColor,
}) => {
  const [light, setLight] = useState(`${process.env.PUBLIC_URL}/img/light.png`);
  const [phase, setPhase] = useState(0);

  // Change the color of light based on the parameter
  useEffect(() => {
    if (pageColor === "#FFFFFF") {
      setLight(`${process.env.PUBLIC_URL}/img/light.png`);
    } else if (pageColor === "#85ECE0") {
      setLight(`${process.env.PUBLIC_URL}/img/light_blue.png`);
    } else if (pageColor === "#EC7979") {
      setLight(`${process.env.PUBLIC_URL}/img/light_red.png`);
    }
  }, [pageColor, setLight]);

  // Blink Logic
  useEffect(() => {
    let id;
    if (triggerBlink) {
      if (phase === 0) {
        document.documentElement.classList.add("overflow-y-hidden");
        setPhase(1);
      } else if (phase === 1) {
        id = setTimeout(() => {
          setPhase(2);
          setShowOverlay(true);
        }, 350);
      } else if (phase === 2) {
        id = setTimeout(() => {
          setShowOverlay(false);
          setPhase(3);
        }, 1000);
      } else if (phase === 3) {
        setShowOverlay(true);
        setOverlayColor("#000000");
        setPhase(4);
      } else if (phase === 4) {
        id = setTimeout(() => {
          setShowOverlay(false);
          setTriggerBlink(false);
        }, 1000);
      }
    }

    return () => {
      if (id) clearTimeout(id);
    };
  }, [
    triggerBlink,
    phase,
    pageColor,
    setTriggerBlink,
    setShowOverlay,
    setOverlayColor,
  ]);

  // Component Dismount Logic
  useEffect(() => {
    if (!triggerBlink) {
      setOverlayColor("#000000bb");
      setPhase(0);

      document.documentElement.classList.remove("overflow-y-hidden");
    }
  }, [triggerBlink]);

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
