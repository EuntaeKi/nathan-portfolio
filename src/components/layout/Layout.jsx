import React from "react";

import Header from "../header/Header";
import "./Layout.css";

const Layout = ({ children, showHeader }) => {
  return (
    <div className="layout-container">
      { showHeader && <Header /> }
      {children}
    </div>
  );
};

export default Layout;
