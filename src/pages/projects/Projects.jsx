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

    const handleClick = (index) => {
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
                        onClick={() => handleClick(index)}
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
                <div className="flex z-0">
                    <div>
                        PROJECT:
                    </div>
                    <div>
                        PROJECT TYPE:
                    </div>
                </div>
                <div>
                    <div>
                        ARCADERS'
                    </div>
                    <div>
                        10 WEEKS SOLO PROJECT <br /> SELF-SELECT PROMPT
                    </div>
                </div>
                <div>
                    <div>
                        ALL-AROUND GAME REVIEW APP
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;