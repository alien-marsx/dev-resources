import { categories } from 'const'
import { Resource } from 'types'

const { assets, programming, jobs } = categories

export const resources: Resource[] = [
    {
        name: 'Jam',
        categories: [assets.icons],
        description: '890+ handcrafted SVG icons to make your web app awesome.',
        url: 'https://jam-icons.com/',
        icon: 'https://jam-icons.com/icons/icon-96x96.png?v=15da575dd058a8724fe062f4043331c8',
    },
    {
        name: 'JAMStack Radio',
        categories: [programming.podcasts],
        description:
            'A show all about the JAMstack, a new way to build fast & secure apps or websites. Brought to you by Heavybit.',
        url: 'https://www.heavybit.com/library/podcasts/jamstack-radio/',
        icon: 'https://www.heavybit.com/wp-content/themes/heavybit/favicon.ico',
    },
    {
        name: 'JAMstacked',
        categories: [programming.newsletters],
        description: 'An email update on the evolving JAMstack ecosystem.',
        url: 'https://jamstack.email/',
        icon: 'https://jamstack.email/favicon.png',
    },
    {
        name: 'JavaScript Air',
        categories: [programming.podcasts],
        description:
            'The live JavaScript podcast all about JavaScript and the web platform. Available on YouTube, iTunes, and an RSS audio feed.',
        url: 'https://javascriptair.com/',
        icon: 'https://javascriptair.com/favicon.ico',
    },
    {
        name: 'JavaScript Developer Jobs',
        categories: [jobs.boards],
        description:
            'Find specific JavaScript Developer Jobs, including Remote Jobs. You are looking for JavaScript Developers? Submit your position for free.',
        url: 'https://javascriptjob.xyz/',
        icon: 'https://javascriptjob.xyz/img/icons/favicon-32x32.png',
    },
    {
        name: 'JavaScript for impatient programmers',
        categories: [programming.books],
        description:
            'This book makes JavaScript less challenging to learn for newcomers, by offering a modern view that is as consistent as possible.',
        url: 'https://exploringjs.com/impatient-js/toc.html',
    },
    {
        name: 'JavaScript Info',
        categories: [programming.learn],
        description:
            'Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming and more.',
        url: 'https://javascript.info/',
        icon: 'https://javascript.info/img/favicon/apple-touch-icon-precomposed.png',
    },
    {
        name: 'JavaScript Interview Questions',
        categories: [jobs.interviews],
        description:
            'Collection of questions that can help you improve your JavaScript knowledge and prepare to an interview.',
        url: 'https://iq.js.org/',
        icon: 'https://iq.js.org/favicon.ico',
    },
    {
        name: 'JavaScript Jabber',
        categories: [programming.podcasts],
        description: 'A podcast about JavaScript.',
        url: 'https://devchat.tv/podcasts/js-jabber/',
        icon: 'https://devchat.tv/wp-content/uploads/2020/06/cropped-Logo-web-32x32.png',
    },
    {
        name: 'JavaScript Weekly',
        categories: [programming.newsletters],
        description: 'A newsletter of JavaScript articles, news and cool projects.',
        url: 'https://javascriptweekly.com/',
        icon: 'https://javascriptweekly.com/favicon.png',
    },
    {
        name: 'JavaScript30',
        categories: [programming.learn],
        description: 'Build 30 things with vanilla JS in 30 days with 30 tutorials.',
        url: 'https://javascript30.com/',
        icon: 'https://javascript30.com/images/favion-JS3.png',
    },
    {
        name: 'Jest',
        categories: [programming.testing],
        description: '🃏 Delightful JavaScript Testing.',
        url: 'https://jestjs.io/',
        icon: 'https://jestjs.io/img/favicon/favicon.ico',
    },
    {
        name: 'Joblist.app',
        categories: [jobs.boards],
        description: 'A Job Board for Tech Enthusiasts.',
        url: 'https://joblist.app/',
        icon: 'https://joblist.app/favicon/favicon-96x96.png',
    },
    {
        name: 'Jobspresso',
        categories: [jobs.remoteOnly],
        description:
            'Jobspresso is the easiest way to find remote jobs and careers at interesting and innovative companies.',
        url: 'https://jobspresso.co/',
        icon: 'https://jobspresso.co/wp-content/uploads/2015/04/Favicon-iOS.jpg',
    },
    {
        name: 'JS Remotely',
        categories: [jobs.remoteOnly],
        description:
            'Welcome to JS Remotely, the job board with all JavaScript remote jobs in the world. More than 200 remote Node.js, Meteor, Angular, React and Electron jobs are waiting for you. Find your perfect remote job now!',
        keywords: [
            'javascript jobs',
            'js jobs',
            'remote jobs',
            'remote',
            'jobs',
            'react jobs',
            'angular jobs',
            'vue jobs',
        ],
        url: 'https://jsremotely.com/',
        icon: 'https://jsremotely.com/static/media/favicon-32x32.png',
    },
    {
        name: 'JSbooks',
        categories: [programming.books],
        description:
            'Directory of free JavaScript ebooks. Contribute to revolunet/JSbooks development by creating an account on GitHub.',
        url: 'https://jsbooks.revolunet.com/',
        icon: 'https://jsbooks.revolunet.com/img/ico/apple-touch-icon-114-precomposed.png',
    },
    {
        name: 'Jobstache',
        categories: [jobs.boards],
        description:
            'Hand-picked jobs for developers. Find the best developer job opportunities in some of the best companies.',
        url: 'https://jobstache.com',
        icon: 'https://jobstache.com/favicon/favicon.ico',
        keywords: [
            'jobs',
            'developers',
            'software engineering',
            'web development',
            'javascript',
            'typescript',
            'html',
            'css',
            'python',
        ],
    },
    {
        name: 'JustRemote',
        categories: [jobs.remoteOnly],
        description:
            'Discover Remote Jobs from around the world. Give up the commute, work remotely and do what you love, daily, from anywhere. Find your perfect remote development, design, sales or marketing job today.',
        url: 'https://justremote.co/',
        icon: 'https://justremote.co/favicon.ico',
    },
]
