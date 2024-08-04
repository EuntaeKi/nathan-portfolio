import React from "react";

import "./Main.css";

const Main = ({className}) => {
  const tree = `${process.env.PUBLIC_URL}/img/main_tree.png`;

  return (
      <div className={className} id="main-container">
        <span id="main-description">
          <span id="main-name">Nathan Seung</span>
          <div id="main-body">
            is a designer and researcher who loves simple and creativity
          </div>
        </span>
        <img src={tree} alt="tree" id="main-tree" />
      </div>
  );
};

export default Main;
