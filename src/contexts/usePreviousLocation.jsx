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
        console.log('Previous Location:', prevLocationRef.current);
        console.log('Current Location:', currentLocationRef.current);
        prevLocationRef.current = currentLocationRef.current;
        currentLocationRef.current = location;
        console.log('Updated Previous Location:', prevLocationRef.current);
        console.log('Updated Current Location:', currentLocationRef.current);
    }, [location]);

    return prevLocationRef.current;
};

export default usePreviousLocation;
