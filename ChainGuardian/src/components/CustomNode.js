import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

import './graphNode.css'

function CustomNode({ data }) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex graphNode">
        
        <div className="ml-2">
          <div className="text-sm font-bold">{data.hash}</div>
          <div className="text-gray-500">{data.emoji} | {data.type}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
    </div>
  );
}

export default memo(CustomNode);