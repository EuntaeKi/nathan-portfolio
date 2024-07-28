import React from "react";
import PlaneSequence from "../../components/plane-sequence/PlaneSequence";

const Intro = () => {
  const phaseFrames = [8, 1, 10];
  const frameCoordinates = [
    [64, 34],
    [-52, 16],
    [15, 33],
    [-15, 37.5],
    [111.5, 52],
    [117, 44.5],
    [53, 4],
    [-1, -4],
    [-3, 55.5],
    [0, 31],
    [-2.5, 35],
    [-0.5, 23],
    [0.5, 16],
    [-4, 10.5],
    [-6.5, -31],
    [0, 5],
    [-6, 6],
    [0, -16],
    [0, 5],
  ];

  return (
    <PlaneSequence
      phaseFrames={phaseFrames}
      frameCoordinates={frameCoordinates}
      interval={250}
    />
  );
};

export default Intro;
