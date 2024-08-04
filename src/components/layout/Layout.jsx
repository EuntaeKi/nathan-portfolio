import React from "react";

import Header from "../header/Header";
import Overlay from "../overlay/Overlay";
import "./Layout.css";

const Layout = ({ children, showHeader, showOverlay }) => {
  return (
    <>
      <Overlay trigger={showOverlay} />
      <div className="layout-container">
        {showHeader && <Header />}
        {children}
      </div>
    </>
  );
};

export default Layout;
