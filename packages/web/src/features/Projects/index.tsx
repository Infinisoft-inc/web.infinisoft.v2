/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import loadable from '@loadable/component'
import { Route, Routes } from 'react-router-dom'

const Projects = loadable(() => import(/* webpackChunkName: 'ProjectList' */ './Projects'))

export const PROJECTSEVENT = {
    click: 'project:click'
}

export type Project = {
    id: number,
    title: string
    subtitle: string
    description: string;
    extra?: React.ReactNode;

}

 const projectListMock:Project[] = [
    {id: 0, title: 'Web Portal', subtitle: 'Petit Pont', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.', },
    {id: 1, title: 'SaaS ERP', subtitle: 'Petit Pont', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.', },
    {id: 2, title: 'Infinicode', subtitle: 'Infinisoft', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.', },
    {id: 3, title: 'VCE', subtitle: 'BDC', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.', },
    {id: 4, title: 'Jumbotron', subtitle: 'Jean Coutu', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.', },
]

const ProjectsLoader = () => {
    return <Routes>
            <Route index element={<Projects projectList={projectListMock} />} />
        </Routes>
}

export default ProjectsLoader