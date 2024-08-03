import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PlaneSequence.css";

const PlaneSequence = ({ phaseFrames, interval, phase, setPhase }) => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [rotate, setRotate] = useState(false);
  // Trigger clear on user click from phase 2 to 3 requires to be factored out
  const [intervalId, setIntervalId] = useState(null);
  const [frameCoordinates] = useState([
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
  ]);
  const [x, setX] = useState(frameCoordinates[0][0]);
  const [y, setY] = useState(frameCoordinates[0][1]);

  // Function to get the image source based on the frame index
  const getCurrentFrame = (index) =>
    `${process.env.PUBLIC_URL}/img/intro_${index
      .toString()
      .padStart(4, "0")}.png`;

  // Preload images
  useEffect(() => {
    // Load image files
    const preloadImages = () => {
      const loadedImages = [];
      for (
        let i = 1;
        i <= phaseFrames[0] + phaseFrames[1] + phaseFrames[2];
        i++
      ) {
        const img = new Image();
        img.src = getCurrentFrame(i);
        img.onload = () => {
          loadedImages.push(img);
          if (
            loadedImages.length ===
            phaseFrames[0] + phaseFrames[1] + phaseFrames[2]
          ) {
            setImages(loadedImages);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${img.src}`);
        };
      }
    };
    preloadImages();
  }, [phaseFrames, frameCoordinates]);

  // Initialize the canvas
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    // Clickable image size
    context.canvas.width = 218;
    context.canvas.height = 85;
  }, []);

  // Image rendering process
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const render = () => {
      if (images.length > 0) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.drawImage(images[frameIndex], 0, 0);
      }
      requestAnimationFrame(render);
    };

    render();
  }, [frameIndex, images]);

  // Click handler to start the second phase
  const handleClick = () => {
    if (phase === 2) {
      clearInterval(intervalId);
      setRotate(false);
      setPhase(3);
      // Start from the first frame of the second phase
      setFrameIndex(phaseFrames[0] + phaseFrames[1]);
      // Update canvas dimensions
      const context = canvasRef.current.getContext("2d");
      context.canvas.width = 300;
      context.canvas.height = 200;
    }
  };

  // Phase logics
  useEffect(() => {
    let id, rotationId;
    if (phase === 1) {
      // Check if the animation is still running
      id = setInterval(() => {
        setFrameIndex((prevIndex) => {
          if (prevIndex < phaseFrames[0] - 1) {
            setX(x + frameCoordinates[prevIndex + 1][0]);
            setY(y + frameCoordinates[prevIndex + 1][1]);
            return prevIndex + 1;
          } else {
            clearInterval(id);
            setPhase(2);
            return prevIndex;
          }
        });
      }, interval);
    } else if (phase === 2) {
      setRotate(true);
      id = setInterval(() => {
        setFrameIndex((prevIndex) => {
          return prevIndex;
        });
      }, interval);
    } else if (phase === 3) {
      id = setInterval(() => {
        setFrameIndex((prevIndex) => {
          if (
            prevIndex <
            phaseFrames[0] + phaseFrames[1] + phaseFrames[2] - 1
          ) {
            setX(x + frameCoordinates[prevIndex + 1][0]);
            setY(y + frameCoordinates[prevIndex + 1][1]);
            return prevIndex + 1;
          } else {
            clearInterval(id);
            setPhase(4);
            return prevIndex;
          }
        });
      }, interval);
    } else {
      id = setInterval(() => {
        navigate("/");
      }, 1500);
    }

    setIntervalId(id);

    return () => {
      clearInterval(id);
      clearInterval(rotationId);
    };
  }, [phase, interval, phaseFrames, x, y, frameCoordinates, setPhase]);

  return (
    <canvas
      className={`canvas ${rotate ? "rotate" : ""}`}
      ref={canvasRef}
      onClick={handleClick}
      style={{
        // The container is relative, allowing translation of image over time
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
};

export default PlaneSequence;
