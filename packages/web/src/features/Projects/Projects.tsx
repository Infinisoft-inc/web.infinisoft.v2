/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import loadable from '@loadable/component'
import { useEffect, useState } from 'react'
import { Project, PROJECTSEVENT } from '.'
import { off, on } from '../../helpers/events'
import { ProjectList } from './ProjectList'
import './styles.scss'

const ProjectDetails = loadable(() => import(/* webpackChunkName: 'ProjectDetails' */ './ProjectDetails'))

type ProjectsProps = {
    projectList: Project[]
}
const Projects = ({ projectList }: ProjectsProps) => {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const eventHandler = (event: any) => { setSelected(event?.detail) }
        on(PROJECTSEVENT.click, eventHandler)
        return () => off(PROJECTSEVENT.click, eventHandler)
    }, [])


    return <div className='projects'>
        <div className='container'>
            <h1 className='title'>Pr<span className='colored'>o</span>jects</h1>

            <ProjectList projectList={projectList} />

            <ProjectDetails {...projectList[selected]} count={projectList.length - 1} />
        </div>
    </div>
}

export default Projects