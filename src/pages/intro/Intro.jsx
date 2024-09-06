import React, { useState } from "react";
import { Helmet } from 'react-helmet';

import PlaneSequence from "../../components/plane-sequence/PlaneSequence";
import "./Intro.css";

const Intro = ({ setIsPreviousPageIntro }) => {
  // Broken up by different phases
  const phaseFrames = [8, 1, 10];

  // 1 is the start, 4 is the end
  const [phase, setPhase] = useState(1);

  return (
    <>
      <Helmet>
        <title>NS | Portfolio</title>
      </Helmet>
      <div className="intro-container">
        {
          // Before user interaction
          phase <= 2 && (
            <div className="intro-heading-container">
              <div className="intro-heading"></div>
            </div>
          )
        }
        {
          // After animation finisehd
          <div
            id="intro-name-container"
            style={{
              flexGrow: phase > 2 ? "1" : "0",
            }}
          >
            <span
              id="name"
              style={{
                opacity: phase === 4 ? "1" : "0",
              }}
            >
              Nathan Seung
            </span>
          </div>
        }
        <div className="plane-container">
          <PlaneSequence
            phaseFrames={phaseFrames}
            interval={250}
            phase={phase}
            setPhase={setPhase}
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
