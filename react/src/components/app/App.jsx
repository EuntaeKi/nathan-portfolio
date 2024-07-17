// Library Imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Project Imports
import "./App.css";
import Layout from "../layout/Layout";
import Main from "../../pages/main/Main";

const noHeaderPages = ["/intro"];
const showHeader = !noHeaderPages.includes(window.location.pathname);

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Layout showHeader={showHeader}><Main /></Layout>,
  },
]);

const App = () => {
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
};

export default App;
