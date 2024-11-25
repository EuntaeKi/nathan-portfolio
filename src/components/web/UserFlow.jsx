import React from "react";
import "./UserFlow.css"; // Import the required CSS

const UserFlow = ({ data }) => {
  const renderTree = (nodes, hasMultipleChildren) => {
    return (
      <ul>
        {nodes.map((node, index) => (
          <li key={index} className={hasMultipleChildren ? "px-2" : ""}>
            <div className={node.isFilled ? "filled" : "outlined"}>
              {node.label}
            </div>
            {node.children &&
              renderTree(node.children, node.children.length > 1)}
          </li>
        ))}
      </ul>
    );
  };

  return <div className="tree">{renderTree(data, false)}</div>;
};

export default UserFlow;
