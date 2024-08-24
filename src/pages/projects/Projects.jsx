import React, { useEffect, useState } from "react";

import Light from "../../components/light/Light";
import "./Projects.css";

const Projects = ({ pageColor, setPageColor, triggerBlink, setTriggerBlink, setShowOverlay, setOverlayColor }) => {
    const [project, setProject] = useState(0);

    useEffect(() => {
        setPageColor("#85ECE0");
        setTriggerBlink(true);
    });

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

        </>
    );
};

const projectOne = ({ }) => {
    return (
        <>

        </>
    )
}

export default Projects;
