import loadable from '@loadable/component'
import { Route, Routes } from 'react-router-dom'

const Layout = loadable(() => import(/* webpackChunkName: 'Layout' */ './Layout/Layout'))
const Home = loadable(() => import(/* webpackChunkName: 'Home' */ './Home/Home'))
const Projects = loadable(() => import(/* webpackChunkName: 'Projects' */ './Projects'))
const Contact = loadable(() => import(/* webpackChunkName: 'Contact' */ './Contact/Contact'))

const Router = () => {
    return  <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='projects/*' element={<Projects />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Routes>
}
export default Router

