/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import loadable from '@loadable/component'
import { Route, Routes } from 'react-router-dom'
import { projectListMock } from './projectListMock'

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

const ProjectsLoader = () => {
    return <Routes>
            <Route index element={<Projects projectList={projectListMock} />} />
        </Routes>
}

export default ProjectsLoader