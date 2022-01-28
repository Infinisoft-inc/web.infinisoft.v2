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
            { to: 'contact', label: 'Contact' },
            { to: 'projects', label: 'Projects' }
        ]} />
        <span className='logo'>
            <Logo />
            <h3 className='brand'>Infini<span className='colored'>soft</span></h3>
        </span>

        <span className='nav'>
            <NavLink to='/' className='item'>Home</NavLink>
            <NavLink to='projects' className='item'>Projects</NavLink>
            <NavLink to='contact' className='item'>Contact</NavLink>
        </span>

        <span className='nav'>
            <a target='_blank' href='https://www.npmjs.com/settings/infini-soft/packages' className='item' rel="noreferrer"><img className='icon' src='assets/npm.svg' alt='Npm link' /></a>

            <a target='_blank' href='https://github.com/orgs/Infinisoft-inc' className='item' rel="noreferrer"><img className='icon' src='assets/github.svg' alt='Github link' /></a>
        </span>
    </span>
}

export default Header