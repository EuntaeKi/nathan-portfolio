// import React from "react";

// import "./UserFlow.css";

// const TreeGroup = ({ children }) => {
//   return <div className="tree-group">{children}</div>;
// };

// const FilledNode = ({ text, children }) => {
//   return (
//     <>
//       <div className="py-6 min-h-20 min-w-16 w-64 text-white text-xl bg-web-dark-blue rounded-md font-clash-semibold text-center relative filled-node">
//         <div>{text}</div>
//         {children && <TreeGroup>{children}</TreeGroup>}
//       </div>
//     </>
//   );
// };

// const OutlinedNode = ({ text, children }) => {
//   return (
//     <>
//       <div className="py-6 min-h-20 min-w-16 w-64 text-white text-xl bg-none border-2 border-web-dark-blue rounded-md font-clash-semibold text-center relative outlined-node">
//         <div>{text}</div>
//         {children && <TreeGroup>{children}</TreeGroup>}
//       </div>
//     </>
//   );
// };

import React from "react";
import "./UserFlow.css";

const TreeNode = ({ node }) => {
  return (
    <div className={node.children ? "outlined-node" : "filled-node"}>
      <div className="node-label">{node.label}</div>
      {node.children && (
        <div className="tree-group">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const UserFlow = ({ data }) => {
  return (
    <div className="tree">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default UserFlow;
