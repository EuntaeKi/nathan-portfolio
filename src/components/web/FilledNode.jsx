import React from "react";

const FilledNode = ({ text }) => {
  return (
    <>
      <div className="py-6 min-h-20 text-white bg-web-dark-blue rounded-md font-clash-semibold text-center">
        {text}
      </div>
    </>
  );
};

export default FilledNode;
