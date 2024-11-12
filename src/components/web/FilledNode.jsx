import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

function FilledNode({ data }) {
  return (
    <div className="flex justify-center items-center px-4 py-2 rounded-xl bg-web-dark-blue w-[237px] h-[75px] cursor-pointer">
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

export default memo(FilledNode);
