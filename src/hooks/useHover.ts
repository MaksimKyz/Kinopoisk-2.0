import {MutableRefObject, useEffect, useRef, useState} from "react";
import {useDebounce} from "./useDebounce";

export function useHover<T>(): [MutableRefObject<T>, boolean] {
    const [value, setValue] = useState<boolean>(false);
    const ref: any = useRef<T | null>(null);
    const debouncedSearchTerm = useDebounce(value, 1);
    const handleMouseOut = (): void => setValue(false);
    const handleMouseOver = (): void => setValue(true);


    function deleteHover(){
        setValue(false)
    }

    useEffect(
        () => {
            const node: any = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);
                return () => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseout", handleMouseOut);
                };
            }
        },
        [ref.current]
    );
    return [ref, debouncedSearchTerm];
}