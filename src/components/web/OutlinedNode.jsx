import React from "react";

const OutlinedNode = ({ text }) => {
  return (
    <>
      <div className="py-6 min-h-20 text-white bg-none border-2 border-web-dark-blue rounded-md font-clash-semibold text-center">
        {text}
      </div>
    </>
  );
};

export default OutlinedNode;
