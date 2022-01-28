import React, { MouseEventHandler, useEffect } from "react";

export function useClickAway(ref: React.MutableRefObject<any>, eventHandler: MouseEventHandler) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                eventHandler(event);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [eventHandler, ref]);
}