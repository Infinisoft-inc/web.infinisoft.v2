/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Project } from '.';
import { trigger } from '../../helpers/events';

export const ProjectItem = (project: Project & {key: any})  => {

    return <div className='line' onClick={() => { trigger('project:click', project.id) }}>
        <div className='project-title'>{project.title}</div>
        <div className='project-subtitle'>{project.subtitle}</div>
    </div>;
};
