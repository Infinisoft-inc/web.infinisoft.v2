import { Project } from './index';
import { Document, ProjectDocuments } from './ProjectDocuments';

const documentList: Document[] = [
    { icon: <img src='assets/pdf-outlined.svg' alt='Pdf document' />, title: 'Presentation', url: '/assets/test_kickoff.pdf', download: false },
    { icon: <img src='assets/weblink.svg' alt='Web link' />, title: 'Manager', url: 'https://www.infini-soft.tools', download: false },
    { icon: <img src='assets/weblink.svg' alt='Web link' />, title: 'Portal', url: 'https://www.infini-soft.cloud', download: false },
    { icon: <img src='assets/security.svg' alt='Web link' />, title: 'Access', url: '', download: false }
]

export const projectListMock: Project[] = [
    { id: 0, title: 'Web Portal', subtitle: 'Petit Pont', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.', extra: <ProjectDocuments list={documentList} /> },
    { id: 1, title: 'SaaS ERP', subtitle: 'Petit Pont', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.', },
    { id: 2, title: 'Infinicode', subtitle: 'Infinisoft', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.', },
    { id: 3, title: 'VCE', subtitle: 'BDC', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.', },
    { id: 4, title: 'Jumbotron', subtitle: 'Jean Coutu', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.', },
];
