/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import loadable from '@loadable/component';
import { NavLink } from 'react-router-dom';
import './styles.scss';


const Logo = loadable(() => import(/* webpackChunkName: 'Logo' */ './Logo'))
const Fab = loadable(() => import(/* webpackChunkName: 'Fab' */ '../../components/Fab'))

const Header = () => {

    return <span className='header'>
        <Fab menuItems={[
            { to: '/', label: 'Home' },
            { to: 'projects', label: 'Projects' },
            { to: 'contact', label: 'Contact' },

        ]} />
        <span className='logo'>
            <Logo />
            <span className='brand'>Infini<span className='colored'>soft</span></span>
        </span>

        <span className='nav menu'>
            <NavLink to='/' className='item'>Home</NavLink>
            <NavLink to='projects' className='item'>Projects</NavLink>
            <NavLink to='contact' className='item'>Contact</NavLink>
        </span>

        <span className='nav links'>
            <a target='_blank' href='https://www.npmjs.com/org/infini-soft' className='item' rel="noreferrer"><img className='icon' src='assets/npm.svg' alt='Npm link' /></a>

            <a target='_blank' href='https://github.com/orgs/Infinisoft-inc' className='item' rel="noreferrer"><img className='icon' src='assets/github.svg' alt='Github link' /></a>
        </span>
    </span>
}

export default Header