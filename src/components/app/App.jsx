// Library Imports
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Project Imports
import "./App.css";
import Layout from "../../components/layout/Layout";
import Main from "../../pages/main/Main";
import Intro from "../../pages/intro/Intro";

const noHeaderPages = ["/intro"];
const showHeader = !noHeaderPages.includes(window.location.pathname);

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

function Root() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHeader={true}>
            <Main />
          </Layout>
        }
      />
      <Route
        path="/intro"
        element={
          <Layout showHeader={false}>
            <Intro />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
