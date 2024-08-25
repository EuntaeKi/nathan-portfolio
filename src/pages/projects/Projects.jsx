import React, { useEffect, useState } from "react";

import Light from "../../components/light/Light";
import "./Projects.css";

const Projects = ({ pageColor, setPageColor, triggerBlink, setTriggerBlink, setShowOverlay, setOverlayColor }) => {
    const [project, setProject] = useState(0);

    useEffect(() => {
        setPageColor("#85ECE0");
    }, [setPageColor]);

    const projectList = [
        "Arcaders' (Application)",
        "Arcaders' (Website)",
        "Reverse Analysis",
        "Yihwa"
    ];

    const handleHover = (index) => {
        setProject(index);
    };

    return (
        <>
            <Light
                display={true}
                pageColor={pageColor}
                setShowOverlay={setShowOverlay}
                setOverlayColor={setOverlayColor}
                setPageColor={setPageColor}
                triggerBlink={triggerBlink}
                setTriggerBlink={setTriggerBlink} />
            <div className="project-list">
                {projectList.map((item, index) => (
                    <div
                        key={index}
                        className={`project-list-item ${project === index ? 'active' : ''}`}
                        onMouseOver={() => handleHover(index)}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="project-preview-container">
                {projectList[project] === "Arcaders' (Application)" && <PreviewArcadersApp />}
            </div>
        </>
    );
};

const PreviewArcadersApp = () => {
    return (
        <>
            <div className="preview-arcaders-app-container">
                <div className="flex text-gray-400 w-full justify-around">
                    <div className="w-1/3">
                        PROJECT:
                    </div>
                    <div className="w-1/3">
                        PROJECT TYPE:
                    </div>
                </div>
                <div className="flex w-full justify-around">
                    <div className="w-1/3 text-6xl">
                        ARCADERS'
                    </div>
                    <div className="w-1/3 text-xl text-nowrap">
                        10 WEEKS SOLO PROJECT <br /> SELF-SELECT PROMPT
                    </div>
                </div>
                <div className="flex w-full justify-around">
                    <div className="w-1/3 text-2xl">
                        ALL-AROUND GAME REVIEW APP
                    </div>
                    <div className="w-1/3">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;