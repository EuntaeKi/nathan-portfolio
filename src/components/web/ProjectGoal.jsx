import React from "react";

const ProjectGoal = ({ title, hashtag, description }) => {
  return (
    <div className="flex flex-col gap-6 items-center text-2xl text-white w-full lg:w-1/4 text-center">
      <svg
        width="45"
        height="34"
        viewBox="0 0 45 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 19.8L14.2 31L42.2 3"
          stroke="#4B60C0"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="bg-web-dark-blue px-4 py-20 w-3/4 min-w-64">{title}</div>
      <div className="border-l-2 border-dashed border-white h-32"></div>
      <div>#{hashtag}</div>
      <div>{description}</div>
    </div>
  );
};

export default ProjectGoal;
