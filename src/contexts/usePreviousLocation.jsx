// import { useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';

// const usePreviousLocation = () => {
//     const location = useLocation();
//     const prevLocationRef = useRef();

//     useEffect(() => {
//         prevLocationRef.current = location;
//     }, [location]);

//     return prevLocationRef.current;
// };

// export default usePreviousLocation;
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const usePreviousLocation = () => {
    const location = useLocation();
    const prevLocationRef = useRef();
    const currentLocationRef = useRef(location);

    useEffect(() => {
        prevLocationRef.current = currentLocationRef.current;
        currentLocationRef.current = location;
        console.log("Location Hook Updated");
    }, [location]);

    return prevLocationRef.current;
};

export default usePreviousLocation;
