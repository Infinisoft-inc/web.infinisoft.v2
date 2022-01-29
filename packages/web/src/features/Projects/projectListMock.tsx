import { Project } from './index';
import { Document, ProjectDocuments } from './ProjectDocuments';

const documentList: Document[] = [
    { icon: <img src='assets/pdf-outlined.svg' alt='Pdf document' />, title: 'Presentation', url: '/assets/test_kickoff.pdf', download: false },
    { icon: <img src='assets/weblink.svg' alt='Web link' />, title: 'Manager', url: 'https://www.infini-soft.tools', download: false },
    { icon: <img src='assets/weblink.svg' alt='Web link' />, title: 'Portal', url: 'https://www.infini-soft.cloud', download: false },
    { icon: <img src='assets/security.svg' alt='Web link' />, title: 'Access', url: '', download: false }
]

export const projectListMock: Project[] = [
    {
        id: 0,
        title: 'Web Portal',
        subtitle: 'Petit Pont',
        description: 'Multi tenant system with a public progressive web app portal offering subscriptions to broad range community services. Stack is React 17, Typescript 4.2, Antd, React Router 6, Less, Serverless, AWS, Lambda, IaC, Amplify, GraphQL, DynamoDB. State of the art designed with serverless lambda functions, event driven and micro front-end.',
        extra: <ProjectDocuments list={documentList}
        />
    },
    {
        id: 1,
        title: 'SaaS ERP',
        subtitle: 'Petit Pont',
        description: 'Multi tenant ERP system with features like calendar, appointments, resources management, tasks, followup, dashboards, automatic business processes, notifications, advanced report builder/viewer, accounts, role based access security control. Stack is React 17, Typescript 4.2, Antd, React Router 5, Less, Serverless, AWS, Lambda, IaC, Amplify, GraphQL, DynamoDB. Serverless backend design, event driven and monolitic front-end.',
    },
    {
        id: 2,
        title: 'Infinicode',
        subtitle: 'Infinisoft',
        description: 'This project is to bring developers experience to the next level. We are tired of wasting almost all our time boilerplating. So here is a Visual Code extension featuring wysywig ide for new and existing project, automatic boilerplating based on industry best practices, dynamic runtime code injection to hook inside app and reverse runtime code back to original sources with modifications. Using advanced semmntic language interpretation using AST and Babel.',
    },
    {
        id: 3,
        title: 'VCE',
        subtitle: 'BDC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.',
    },
    {
        id: 4,
        title: 'Jumbotron',
        subtitle: 'Jean Coutu',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor ac volutpat, purus ultrices enim, ut. Phasellus urna rhoncus pharetra tristique sed felis faucibus ultrices.',
    },
];
