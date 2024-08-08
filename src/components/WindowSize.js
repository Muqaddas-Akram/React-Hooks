//Cleanup Function
import React, { useState, useEffect } from 'react';

const WindowSize = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        //property
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    };

    useEffect(() => {
        //jb jb size change hota event fire hota
        console.log("add event");
        window.addEventListener("resize", actualWidth);

        return () => {
            //use foe memory clenup like above useeffect
            console.log("remove Event");
            window.removeEventListener("resize", actualWidth);
        };
    }, []);

    return (
        <div>
            <p>The actual size of the window is:</p>
            <h1>{widthCount}</h1>
        </div>
    );
};

export default WindowSize;
