/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React, { useRef } from 'react';
import './styles.scss';

const Logo = () => {
    const logoRef = useRef<SVGSVGElement | null>(null);

    React.useEffect(() => {
        if (logoRef?.current) {
            //@ts-ignore
            logoRef.current.style.setProperty('--total-length', document.querySelector("#loopingPath path").getTotalLength())
        }
    }, [])

    return <>
        <svg style={{ display: 'none' }}>
            <defs>
                <symbol id="loopingPath" viewBox="0 0 147.5 68">
                    <title>Loading</title>
                        <path d="M94.65,14a27.5,27.5,0,1,1-.17,39.88L52.93,14.06a27.5,27.5,0,1,0,.12,39.77Z" fill="none" strokeMiterlimit="10" />
                </symbol>
            </defs>
        </svg>

        <svg className="loading-spinner" ref={logoRef}>
            <use id="background" xlinkHref="#loopingPath" />
            <use id="master" xlinkHref="#loopingPath" />
        </svg>      
    </>
}

export default Logo