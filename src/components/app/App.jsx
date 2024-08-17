import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Layout from "../../components/layout/Layout";
import Main from "../../pages/main/Main";
import Intro from "../../pages/intro/Intro";
import About from "../../pages/about/About";

/* To Fix
 * - Intro animation bug
 * - Light Masking
 * - Light Fixture Disappearing Animation
 * - Project Page
 */
const Root = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayColor, setOverlayColor] = useState("#00000040");
  const [pageColor, setPageColor] = useState("#FFFFFF");
  const [isPreviousPageIntro, setIsPreviousPageIntro] = useState("false");

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
    <Routes>
      <Route
        path="/home"
        element={
          <Layout showHeader={true} pageColor={pageColor}>
            <Main
              isPreviousPageIntro={!isPreviousPageIntro}
              setIsPreviousPageIntro={setIsPreviousPageIntro}
              setPageColor={setPageColor}
              pageColor={pageColor}
              setOverlayColor={setOverlayColor}
              actualPageRender={true}
            />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout showHeader={false}>
            <Intro setIsPreviousPageIntro={setIsPreviousPageIntro} />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout
            showHeader={true}
            showOverlay={showOverlay}
            overlayColor={overlayColor}
            pageColor={pageColor}
          >
            <About
              setShowOverlay={setShowOverlay}
              setOverlayColor={setOverlayColor}
              setPageColor={setPageColor}
              pageColor={pageColor}
              setIsPreviousPageIntro={setIsPreviousPageIntro}
            />
          </Layout>
        }
      />
    </Routes>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <Root />,
    },
  ],
  { basename: "/nathan-portfolio" } // Set the basename here
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
