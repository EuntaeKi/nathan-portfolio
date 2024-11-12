// import React, { useState, useEffect } from "react";
// import {
//   ReactFlow,
//   ReactFlowProvider,
//   Controls,
//   useReactFlow,
// } from "@xyflow/react"; // Updated library name
// import dagre from "dagre";

// const UserFlow = () => {
//   // Define initial nodes and edges
//   const initialNodes = [
//     { id: "1", data: { label: "Home" } },
//     { id: "2", data: { label: "Login" } },
//     { id: "3", data: { label: "Dashboard" } },
//   ];

//   const initialEdges = [
//     { id: "e1-2", source: "1", target: "2" },
//     { id: "e2-3", source: "2", target: "3" },
//   ];

//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const { setNodes: setReactFlowNodes } = useReactFlow();

//   // Function to apply Dagre layout
//   const layoutGraph = () => {
//     const g = new dagre.graphlib.Graph();
//     g.setGraph({});
//     g.setDefaultEdgeLabel(() => ({}));

//     // Set default node dimensions
//     nodes.forEach((node) => {
//       g.setNode(node.id, { width: 150, height: 50 });
//     });

//     // Add edges to the graph
//     edges.forEach((edge) => {
//       g.setEdge(edge.source, edge.target);
//     });

//     // Apply Dagre layout algorithm
//     dagre.layout(g);

//     // Update node positions based on the layout computed by Dagre
//     const updatedNodes = nodes.map((node) => {
//       const layoutNode = g.node(node.id);
//       if (layoutNode) {
//         return {
//           ...node,
//           position: { x: layoutNode.x, y: layoutNode.y },
//         };
//       }
//       return node;
//     });

//     // Update the nodes state in React Flow
//     setReactFlowNodes(updatedNodes);
//   };

//   useEffect(() => {
//     layoutGraph(); // Trigger layout calculation when nodes or edges change
//   }, [nodes, edges]);

//   return (
//     <ReactFlowProvider>
//       <div className="w-full h-[500px]">
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           onNodesChange={(changes) => setNodes(changes)}
//           onEdgesChange={(changes) => setEdges(changes)}
//         >
//           <Controls />
//         </ReactFlow>
//       </div>
//     </ReactFlowProvider>
//   );
// };

import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import dagre from "dagre";

import FilledNode from "./FilledNode";
import OutlinedNode from "./OutlinedNode";

const nodeTypes = {
  filled: FilledNode,
  outlined: OutlinedNode,
};

const initialNodes = [
  {
    id: "1",
    type: "filled",
    position: { x: 0, y: 0 },
    data: { text: "test" },
  },
  {
    id: "2",
    type: "outlined",
    position: { x: 0, y: 100 },
    data: { text: "Test" },
  },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function UserFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      panOnDrag={false}
      panOnScroll={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      selectionOnDrag={false}
      edgesReconnectable={false}
      nodesDraggable={false}
      preventScrolling={false}
      elementsSelectable={false}
    >
      <Background className="bg-web-bg" gap={10000} />
    </ReactFlow>
  );
}

export default UserFlow;
