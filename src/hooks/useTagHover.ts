import { useEffect, useState } from "react";

export const useTagHover = () => {
    const [position, setPosition] = useState(false);

    useEffect(() => {
        const setFromEvent = (e:any) => {
            if (e.target.id === 'notCursor' || e.target.offsetParent.id === 'notCursor'){
                setPosition(true)
            }else {
                setPosition(false)
            }
            // if (e.target.localName === TagName){
            //     setPosition(true)
            // }else {
            //     setPosition(false)
            // }
        };
        window.addEventListener("mousemove", setFromEvent);
        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return position;
};