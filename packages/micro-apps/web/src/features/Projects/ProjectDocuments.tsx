/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react'
export type Document = {
    icon: React.ReactNode
    title: string
    url: string
    download: boolean
}

const ProjectDocument = ({ icon, title, url, download }: Document) => {
    return <a href={url} target='_blank'  className='document' rel="noopener noreferrer" download={download}>
        {icon}
        <div>{title}</div>
    </a>
}

type ProjectDocumentsProps = {
    list?: Document[]
}
export const ProjectDocuments = ({ list }: ProjectDocumentsProps) => {

    return <div className='documents'>
        <div className='doctitle'>Documents</div>
        <div className='doccontainer'>
            {
                list?.map(d => <ProjectDocument key={d.title} {...d} />)
            }
        </div>
    </div>
}

export default ProjectDocuments