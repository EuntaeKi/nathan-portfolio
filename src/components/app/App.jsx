import React, { useState, useEffect, useRef } from "react";
import {
  Routes,
  Route,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

import "./App.css";
import Layout from "../../components/layout/Layout";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import Main from "../../pages/main/Main";
import Intro from "../../pages/intro/Intro";
import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import ArcadersApp from "../../pages/projects/arcadersApp/ArcadersApp";
import ArcadersWeb from "../../pages/projects/arcadersWeb/ArcadersWeb";

const Root = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayColor, setOverlayColor] = useState("#00000075");
  const [pageColor, setPageColor] = useState("#FFFFFF");
  const [triggerBlink, setTriggerBlink] = useState(false);
  const headerRef = useRef(null);

  // Change the text color of the HTML based on page color
  useEffect(() => {
    if (pageColor === "#FFFFFF") {
      document.documentElement.classList.remove("html-red");
      document.documentElement.classList.remove("html-blue");
      document.documentElement.classList.add("html-white");
    } else if (pageColor === "#85ECE0") {
      document.documentElement.classList.remove("html-red");
      document.documentElement.classList.remove("html-white");
      document.documentElement.classList.add("html-blue");
    } else if (pageColor === "#EC7979") {
      document.documentElement.classList.remove("html-white");
      document.documentElement.classList.remove("html-blue");
      document.documentElement.classList.add("html-red");
    }
  });

  return (
    <>
      <ScrollToTop /> {/* This ensures scroll resets on route changes */}
      <Routes>
        <Route
          path="/home"
          element={
            <Layout
              showHeader={true}
              pageColor={pageColor}
              showOverlay={showOverlay}
              overlayColor={overlayColor}
              triggerBlink={triggerBlink}
              setTriggerBlink={setTriggerBlink}
            >
              <Main
                pageColor={pageColor}
                setPageColor={setPageColor}
                triggerBlink={triggerBlink}
                setTriggerBlink={setTriggerBlink}
                setShowOverlay={setShowOverlay}
                setOverlayColor={setOverlayColor}
              />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout showHeader={false}>
              <Intro />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout
              showHeader={true}
              pageColor={pageColor}
              showOverlay={showOverlay}
              overlayColor={overlayColor}
              triggerBlink={triggerBlink}
              setTriggerBlink={setTriggerBlink}
              headerRef={headerRef}
            >
              <About
                pageColor={pageColor}
                setPageColor={setPageColor}
                triggerBlink={triggerBlink}
                setTriggerBlink={setTriggerBlink}
                setShowOverlay={setShowOverlay}
                setOverlayColor={setOverlayColor}
                headerRef={headerRef}
              />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout
              showHeader={true}
              pageColor={pageColor}
              showOverlay={showOverlay}
              overlayColor={overlayColor}
              triggerBlink={triggerBlink}
              setTriggerBlink={setTriggerBlink}
            >
              <Projects
                pageColor={pageColor}
                setPageColor={setPageColor}
                triggerBlink={triggerBlink}
                setTriggerBlink={setTriggerBlink}
                setShowOverlay={setShowOverlay}
                setOverlayColor={setOverlayColor}
              />
            </Layout>
          }
        />
        <Route
          path="/projects/arcaders-app"
          element={<ArcadersApp setPageColor={setPageColor} />}
        />
        <Route
          path="/projects/arcaders-website"
          element={<ArcadersWeb setPageColor={setPageColor} />}
        />
      </Routes>
    </>
  );
};

const router = createHashRouter(
  [
    {
      path: "*",
      element: <Root />,
    },
  ],
  { basename: "/" } // Set the basename here
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
