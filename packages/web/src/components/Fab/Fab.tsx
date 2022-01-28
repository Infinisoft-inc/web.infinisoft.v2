/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React, { MouseEventHandler, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useClickAway } from "../../packages/ClickAway/useClickAway";
import './styles.scss';

type FabMenuItem = {
    to: string
    label: string
}
type FabProps = {
    menuItems: FabMenuItem[]
}
const Fab = ({ menuItems }: FabProps) => {
    type IState = {
        isOpen: boolean
    }
    const initialState: IState = { isOpen: false }
    const [state, setState] = useState<IState>(initialState);
    const handleOpen: MouseEventHandler<HTMLDivElement> = (e) => {
        // alert(`Open`)
        setState(prev => ({ ...prev, isOpen: !prev.isOpen }))
    }
    const handleClose: MouseEventHandler<HTMLDivElement> = () => {
        // alert(`Close`)
        setState(prev => ({ ...prev, isOpen: false }))
    }

    const wrapperRef = useRef(null);
    useClickAway(wrapperRef, handleClose);

    return <div className='fab'>
        <div className={`menu ${state.isOpen ? 'open' : 'close'}`}>
            {
                menuItems.map(({ to, label }, index) => <Link to={to} key={index} className='item'>{label}</Link>)
            }
        </div>
        <div className='button' onClick={handleOpen} ref={wrapperRef}>
            {/* <img className={`image ${state.isOpen ? '' : 'close'}`} src='assets/hamburger.svg' alt='Mobile menu' /> */}
        </div>
    </div>
}

export default Fab