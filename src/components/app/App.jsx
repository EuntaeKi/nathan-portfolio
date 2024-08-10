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

const Root = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayColor, setOverlayColor] = useState("#00000040");
  const [pageColor, setPageColor] = useState("#FFFFFF");

  useEffect(() => {
    if (pageColor === "#FFFFFF") {
      document.documentElement.classList.remove('html-red');
      document.documentElement.classList.remove('html-blue');
      document.documentElement.classList.add('html-white');
    } else if (pageColor === "#85ECE0") {
      document.documentElement.classList.remove('html-red');
      document.documentElement.classList.remove('html-white');
      document.documentElement.classList.add('html-blue');
    } else if (pageColor === "#EC7979") {
      document.documentElement.classList.remove('html-white');
      document.documentElement.classList.remove('html-blue');
      document.documentElement.classList.add('html-red');
    }
  })

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Layout showHeader={true}
            pageColor={pageColor}>
            <Main
              setPageColor={setPageColor} />
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
            showOverlay={showOverlay}
            overlayColor={overlayColor}
            pageColor={pageColor}
          >
            <About
              setShowOverlay={setShowOverlay}
              setOverlayColor={setOverlayColor}
              setPageColor={setPageColor}
              pageColor={pageColor}
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
