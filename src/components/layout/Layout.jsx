import React from "react";

import Header from "../header/Header";
import Overlay from "../overlay/Overlay";
import "./Layout.css";

const Layout = ({
  children,
  showHeader,
  showOverlay,
  overlayColor,
  pageColor,
  triggerBlink,
  setTriggerBlink,
  headerRef = null,
}) => {
  return (
    <>
      <Overlay trigger={showOverlay} overlayColor={overlayColor} />
      <div className="layout-container">
        {showHeader && (
          <Header
            pageColor={pageColor}
            triggerBlink={triggerBlink}
            setTriggerBlink={setTriggerBlink}
            ref={headerRef}
          />
        )}
        {children}
      </div>
    </>
  );
};

export default Layout;
