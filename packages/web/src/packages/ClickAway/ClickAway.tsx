import React, { MouseEventHandler, useRef } from "react";
import { useClickAway } from "./useClickAway";

type ClickAwayProps = {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    eventHandler: MouseEventHandler;
};

export function ClickAway({ children, eventHandler }: ClickAwayProps) {
    const wrapperRef = useRef(null);
    useClickAway(wrapperRef, eventHandler);

    return <div ref={wrapperRef}>{children}</div>;
}
