import React, { useRef, useEffect, useState } from "react";

import "./PlaneSequence.css";

const PlaneSequence = ({ phaseFrames, frameCoordinates, interval }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [x, setX] = useState(frameCoordinates[0][0]);
  const [y, setY] = useState(frameCoordinates[0][1]);
  const [phase, setPhase] = useState(1);
  const [rotate, setRotate] = useState(false);
  // Trigger clear on user click from phase 2 to 3 requires to be factored out
  const [intervalId, setIntervalId] = useState(null);
  // Function to get the image source based on the frame index
  const getCurrentFrame = (index) =>
    `${process.env.PUBLIC_URL}/img/intro_${index
      .toString()
      .padStart(4, "0")}.png`;

  // Preload images
  useEffect(() => {
    // Adjust coordinates to the center
    const element = canvasRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      frameCoordinates[0][0] = rect.left + rect.width / 2 + 64;
      frameCoordinates[0][1] = rect.top + rect.height / 2 + 34;
      console.log(rect);
      setX(frameCoordinates[0][0]);
      setY(frameCoordinates[0][1]);
    }

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

  // Set up the canvas and render the images
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = 300;
    context.canvas.height = 200;

    const render = () => {
      if (images.length > 0) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.drawImage(images[frameIndex], 0, 0);
      }
      requestAnimationFrame(render);
    };

    render();
  }, [frameIndex, images]);

  // Handle click event to start the second phase
  const handleClick = () => {
    if (phase === 2) {
      clearInterval(intervalId);
      setRotate(false);
      setPhase(3);
      setFrameIndex(phaseFrames[0] + phaseFrames[1]); // Start from the first frame of the second phase
    }
  };

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
            return prevIndex;
          }
        });
      }, interval);
    }

    setIntervalId(id);

    return () => {
      clearInterval(id);
      clearInterval(rotationId);
    };
  }, [phase, interval, phaseFrames, x, y, frameCoordinates]);

  return (
    <canvas
      className={`canvas ${rotate ? "rotate" : ""}`}
      ref={canvasRef}
      onClick={handleClick}
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
};

export default PlaneSequence;
