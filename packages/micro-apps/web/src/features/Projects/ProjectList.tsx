/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Project } from ".";
import { ProjectItem } from "./ProjectItem";

type ProjectListProps = {
    projectList: Project[];    
};
export const ProjectList = ({ projectList }: ProjectListProps) => {

    return <div className='list'>
        {projectList?.map((p, index) => <ProjectItem key={index} {...p} />)}
    </div>;
};
