import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

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
            <div className="flex flex-col">
                <div className="flex gap-10 mb-16">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center bg-zinc-900 px-8 py-12 mb-4">
                            <div className="preview-container" id="arcaders-app">
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
                        <div className="text-white text-xl font-bebas-neue">ARCADERS APP</div>
                        <Link to="/projects/arcaders-app" className="text-lg flex w-fit items-center" style={{ fontFamily: 'ClashDisplay-Regular, system-ui' }}>Learn More <i className="material-symbols-outlined">arrow_right_alt</i></Link>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center bg-zinc-900 px-8 py-12 mb-4">
                            <div className="preview-container" id="arcaders-web">
                            </div>
                        </div>
                        <div className="text-white text-xl font-bebas-neue">ARCADERS WEBSITE</div>
                        <Link to="/projects/arcaders-web" className="text-lg flex w-fit items-center" style={{ fontFamily: 'ClashDisplay-Regular, system-ui' }}>Learn More <i className="material-symbols-outlined">arrow_right_alt</i></Link>
                    </div>
                </div>
                <div className="flex bg-zinc-900 w-full py-8 px-16 items-center">
                    <div className="flex flex-col">
                        <div className="text-white text-3xl font-clash-bold">Let's work together!</div>
                        <div className="text-gray-400 w-2/3 font-clash-bold">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>
                    </div>
                    <a href="mailto:jeungha89@gmail.com" className="bg-app-blue text-black py-3 px-16 font-clash-medium text-xl">contact</a>
                </div>
            </div>

        </>
    );
};

export default Projects;