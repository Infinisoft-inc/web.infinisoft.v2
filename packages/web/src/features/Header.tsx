/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import loadable from '@loadable/component';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Logo = loadable(() => import(/* webpackChunkName: 'Logo' */ './Logo'))

const Header = () => {

    return <span className='menu'>
        <span className='logo'>
            <Logo />
            <h1 className='brand'>Infinisoft</h1>
        </span>

        <span className='nav'>
            <NavLink to='/' className='item'>Home</NavLink>
            <NavLink to='projects' className='item'>Projects</NavLink>
            <NavLink to='contact' className='item'>Contact</NavLink>
        </span>
    </span>
}

export default Header