import React, { useEffect } from "react";

import "./Overlay.css";

const Overlay = (trigger, color) => {
  // const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    // const newTrigger = parentTrigger;
    if (trigger === true) {

    } else {

    }
    console.log(trigger);
  }, [trigger]);

  return (
    <div id="overlay" className={`${trigger ? 'blink' : ''}`} style={{ backgroundColor: color, display: trigger === true ? "block" : "none" }}>
    </div>
  );
};

export default Overlay;
