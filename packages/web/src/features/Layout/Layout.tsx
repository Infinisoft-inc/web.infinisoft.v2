/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import loadable from '@loadable/component';
import './styles.scss';

const Header = loadable(() => import(/* webpackChunkName: 'Header' */ '../Header/Header'))

const Layout = () => {
    return <div className='layout'>
        <div className='video-container'>
            <video
                loop
                preload="auto"
                autoPlay
                muted
                className='video'
            >
                <source src="assets/hero-home.mp4" type="video/mp4" />
            </video>
        </div>

        <div className='toplayer'>
            <div className='container'>
                <Header />

                {/* <main className='content'>
                    <Outlet />
                </main> */}
            </div>
        </div>
    </div>
}

export default Layout