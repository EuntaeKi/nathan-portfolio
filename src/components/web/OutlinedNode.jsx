import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

function OutlinedNode({ data }) {
  return (
    <div className="flex justify-center items-center px-4 py-2 rounded-xl border-web-dark-blue border-2 bg-none w-[237px] h-[75px]">
      <div className="text-lg font-bold text-center">{data.text}</div>

      <Handle
        type="target"
        position={Position.Top}
        isConnectable={false}
        className="invisible"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={false}
        className="invisible"
      />
    </div>
  );
}

export default memo(OutlinedNode);
