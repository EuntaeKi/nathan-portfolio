import { useState } from "react";
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

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Layout showHeader={true}>
            <Main />
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
          <Layout showHeader={true} showOverlay={showOverlay} color="rgba(0, 0, 0, 0.08)">
            <About setShowOverlay={setShowOverlay} />
          </Layout>
        }
      />
    </Routes>
  );
}

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
