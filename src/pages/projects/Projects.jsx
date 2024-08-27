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
                display={false}
                pageColor={pageColor}
                setShowOverlay={setShowOverlay}
                setOverlayColor={setOverlayColor}
                setPageColor={setPageColor}
                triggerBlink={triggerBlink}
                setTriggerBlink={setTriggerBlink} />
            <div className="flex">
                <div className="flex flex-col">
                    <div className="flex items-center justify-center bg-zinc-900 px-8 py-12 mb-4">
                        <div className="preview-arcaders-app-container">
                            <div className="flex text-gray-400 w-full justify-around">
                                <div className="w-1/3 text-[6.5px]">
                                    PROJECT:
                                </div>
                                <div className="w-1/3 text-[6.5px]">
                                    PROJECT TYPE:
                                </div>
                            </div>
                            <div className="flex w-full justify-around">
                                <div className="w-1/3 text-[22px]">
                                    ARCADERS'
                                </div>
                                <div className="w-1/3 text-[8.5px] text-nowrap ">
                                    10 WEEKS SOLO PROJECT <br /> SELF-SELECT PROMPT
                                </div>
                            </div>
                            <div className="flex w-full justify-around">
                                <div className="w-1/3 text-[10px]">
                                    ALL-AROUND GAME REVIEW APP
                                </div>
                                <div className="w-1/3">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white text-xl">ARCADERS WEBSITE</div>
                    <div>Learn More</div>
                </div>
            </div>
        </>
    );
};

export default Projects;