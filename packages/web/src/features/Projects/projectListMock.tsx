import { Project } from './index';
import { Document, ProjectDocuments } from './ProjectDocuments';

const webPortalDocumentList: Document[] = [
    { icon: <img src='assets/pdf-outlined.svg' alt='Pdf document' />, title: 'Presentation', url: '/assets/test_kickoff.pdf', download: false },
    { icon: <img src='assets/weblink.svg' alt='Web link' />, title: 'Manager', url: 'https://www.infini-soft.tools', download: false },
    { icon: <img src='assets/weblink.svg' alt='Web link' />, title: 'Portal', url: 'https://www.infini-soft.cloud', download: false },
    // { icon: <img src='assets/security.svg' alt='Web link' />, title: 'Access', url: '', download: false }
]

const vceDocumentList: Document[] = [
    { icon: <img src='assets/weblink.svg' alt='Web link' />, title: 'Official Site', url: 'https://www.bdc.ca/en/easy-small-business-loan?gclid=Cj0KCQiA6NOPBhCPARIsAHAy2zDcGSoj-k5n_aavsCQ13cYhj7zAg8XDnPS-upjTpp1OmZUGEadZuqMaApCaEALw_wcB&gclsrc=aw.ds', download: false },
    { icon: <img src='assets/weblink.svg' alt='Web link' />, title: 'CEO Press', url: 'https://plus.lapresse.ca/screens/6db3f32e-51e6-4db3-a11b-051394e8701a__7C___0.html', download: false },
]

const pjcDocumentList: Document[] = [
    { icon: <img src='assets/weblink.svg' alt='Web link' />, title: 'Official Site', url: 'https://www.jeancoutu.com/', download: false },
]


export const projectListMock: Project[] = [
    {
        id: 0,
        title: 'Portal',
        subtitle: 'Petit Pont',
        description: 'Multi tenant system with a public progressive web app portal offering subscriptions to broad range community services. Stack is React 17, Typescript 4.2, Antd, React Router 6, Less, Serverless, AWS, Lambda, IaC, Amplify, GraphQL, DynamoDB. State of the art designed with serverless lambda functions, event driven and micro front-end.',
        extra: <ProjectDocuments list={webPortalDocumentList}
        />
    },
    {
        id: 1,
        title: 'ERP',
        subtitle: 'Petit Pont',
        description: 'Multi tenant ERP system with features like calendar, appointments, resources management, tasks, followup, dashboards, automatic business processes, notifications, advanced report builder/viewer, accounts, role based access security control. Stack is React 17, Typescript 4.2, Antd, React Router 5, Less, Serverless, AWS, Lambda, IaC, Amplify, GraphQL, DynamoDB. Serverless backend design, event driven and monolitic front-end.',
    },

    {
        id: 2,
        title: 'VCE',
        subtitle: 'BDC',
        description: 'Less then 100K automated business loan without human intervention was the challenge we solved!. We collaborated to build this complex app for the Banque de Développement du Canada. Stack used Microsoft Dynamic CRM, C#, .Net framework, MSUnit Test, Unity Dependency Injection and Visual Studio Pro.',
        extra: <ProjectDocuments list={vceDocumentList} />
    },
    {
        id: 3,
        title: 'Jumbotron',
        subtitle: 'Jean Coutu',
        description: 'Refactored jumbotron template engine hosting ecommerce web app with more the 50 000 pages. Stack used EPI CMS Server, C#, .Net framework and Visual Studio Pro.',
        extra: <ProjectDocuments list={pjcDocumentList} />
    },
    {
        id: 4,
        title: 'Infinicode',
        subtitle: 'Infinisoft',
        description: 'This project is to bring developers experience to the next level. We are tired of wasting almost all our time boilerplating. So here is a Visual Code extension featuring wysywig ide for new and existing project, automatic boilerplating based on industry best practices, dynamic runtime code injection to hook inside app and reverse runtime code back to original sources with modifications. Using advanced semmantic language interpretation with AST and Babel.',
    },
];
