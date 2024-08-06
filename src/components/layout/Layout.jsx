import React from "react";

import Header from "../header/Header";
import Overlay from "../overlay/Overlay";
import "./Layout.css";

const Layout = ({ children, showHeader, showOverlay, overlayColor }) => {
  return (
    <>
      <Overlay trigger={showOverlay} color={overlayColor} />
      <div className="layout-container">
        {showHeader && <Header />}
        {children}
      </div>
    </>
  );
};

export default Layout;
