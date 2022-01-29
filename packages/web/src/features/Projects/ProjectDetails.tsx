/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react";
import { Project, PROJECTSEVENT } from '.';
import { trigger } from "../../helpers/events";
import '../../styles/buttons.scss';

const ProjectDetails = (props: Project & { count: number }) => {
    const { title = '', subtitle = '', description = '', extra = '' } = props || {};

    return <div className='details'>
        <span>
            <span className='dtitle'>{`${title}, `}</span>
            <span className='dsubtitle'>{subtitle}</span>
        </span>

        <p>{description}</p>
        {extra}

        <div className='footer'>
            {
                props?.id > 0 &&
                <span className='button-outlined' onClick={() => { trigger(PROJECTSEVENT.click, props.id - 1) }}>Back</span>
            }

            {
                props.id < props.count &&
                <span className='button-contained' onClick={() => { trigger(PROJECTSEVENT.click, props.id + 1) }}>Next</span>
            }

        </div>
    </div>;
};

export default ProjectDetails