import React from "react";

import "../../pages/projects/arcadersWeb/ArcadersWeb.css";

const DottedLine = ({ isHorizontal = true, isCirclePositionStart = true, className = "" }) => {
    const lineStyles =
        isHorizontal
            ? "h-1 repeating-stripes-x"
            : "w-1 repeating-stripes-y";

    const circleStyle =
        isCirclePositionStart !== null
            ? isHorizontal
                ? isCirclePositionStart
                    ? "bg-web-dark-blue rounded-full w-4 h-4 absolute left-0 top-1/2 transform -translate-y-1/2"
                    : "bg-web-dark-blue rounded-full w-4 h-4 absolute right-0 top-1/2 transform -translate-y-1/2"
                : isCirclePositionStart
                    ? "bg-web-dark-blue rounded-full w-4 h-4 absolute top-0 left-1/2 transform -translate-x-1/2"
                    : "bg-web-dark-blue rounded-full w-4 h-4 absolute bottom-0 left-1/2 transform -translate-x-1/2"
            : "";

    return (
        <div className={`relative w-fit`}>
            <div
                className={`${circleStyle}`}
            ></div>
            <div className={`${lineStyles} ${className}`}></div>
        </div>
    );
};

export default DottedLine;
