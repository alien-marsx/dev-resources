import { categories } from 'const'
import { Resource } from 'types'

const { toolsAndUtilities, assets, programming, uiDesign, infrastructure, jobs, community, indieHacking } = categories

export const resources: Resource[] = [
    {
        name: 'Ubersuggest',
        categories: [toolsAndUtilities.seo],
        description:
            'Ubersuggest allows you to get insight into the strategies that are working for others in your market so you can adopt them, improve them, and gain an edge.',
        url: 'https://neilpatel.com/ubersuggest',
        icon: 'https://neilpatel.com/favicon.ico',
    },
    {
        name: 'Ucraft',
        categories: [assets.logos],
        description:
            'Logo maker by Ucraft is the #1 free online logo creator, trusted by hundreds of thousands. Design a cool, professional logo and download it in a high resolution format.',
        url: 'https://www.ucraft.com/free-logo-maker',
        icon: 'https://static.ucraft.app/fs/ucraft/userFiles/version5/images/favicon.png?v=1585142239',
    },
    {
        name: 'Udemy',
        categories: [programming.learn],
        description:
            'Udemy is an online learning and teaching marketplace with over 130,000 courses and 35 million students. Learn programming, marketing, data science and more.',
        url: 'https://www.udemy.com/',
        icon: 'https://www.udemy.com/staticx/udemy/images/v6/favicon-96x96.png',
    },
    {
        name: 'UI Design Daily',
        categories: [uiDesign.inspiration],
        description: 'Weekly FREE UI resources straight to your inbox.',
        keywords: ['UI Resources', 'UI Design', 'Open-Source Design'],
        url: 'https://uidesigndaily.com/',
        icon: 'https://uidesigndaily.com/public/img/favicon-32x32.png',
    },
    {
        name: 'UI Design for Developers',
        categories: [uiDesign.learn],
        description: 'Learn just enough visual design to be dangerous as a developer.',
        url: 'https://designcode.io/ui-design-for-developers',
        icon: 'https://designcode.io/icons/icon-96x96.png',
    },
    {
        name: 'UI Garage',
        categories: [uiDesign.inspiration],
        description:
            'Daily UI inspiration & patterns for designers, developers to find inspiration, tools and the best resources for your project.',
        url: 'https://uigarage.net/',
        icon: 'https://assets.uigarage.net/content/uploads/2019/05/favicon-50x50.png',
    },
    {
        name: 'UI HUT',
        categories: [uiDesign.inspiration, assets.icons, assets.illustrations],
        description:
            'Download thousands of templates, illustrations, icons, and ui design kits for web and mobile app design without paying designer prices.',
        url: 'https://www.uihut.com/',
        icon: 'https://www.uihut.com/favicon.jpg',
    },
    {
        name: 'UI Movement',
        categories: [uiDesign.inspiration],
        description: 'Only the best mobile and web UI design inspiration, right in your inbox.',
        keywords: ['ui', 'design', 'inspiration', 'ux', 'mobile', 'apps', 'screenshots'],
        url: 'https://uimovement.com/',
        icon: 'https://uimovement.com/static/website/images/icons/favicon-96x96.png',
    },
    {
        name: 'ui.dev',
        categories: [programming.newsletters, programming.learn],
        description: 'Comprehensive learning resources for mastering the JavaScript ecosystem.',
        url: 'https://ui.dev/',
        icon: 'https://ui.dev/icons/icon-96x96.png?v=bafaaa088cd219915cf56ed1d1dff86a',
    },
    {
        name: 'uiCookies',
        categories: [programming.templates],
        description:
            'UiCookies is dent of free bootstrap templates developed by experienced frontend designer & developers. Before buying premium HTML5 template, give drive here.',
        url: 'https://uicookies.com/',
        icon: 'https://uicookies.com/wp-content/uploads/2017/08/cropped-favicon-32x32.png',
    },
    {
        name: 'UIdeck',
        categories: [programming.templates],
        description:
            'Free HTML Landing Page Templates Based on Bootstrap Framework for - Business, Startups, SaaS, Personal, and Pretty Much Any Web Projects.',
        url: 'https://uideck.com/',
        icon: 'https://uideck.com/wp-content/uploads/2018/12/cropped-uideck-150x150.png',
    },
    {
        name: 'uiGradient',
        categories: [uiDesign.color],
        description: 'Library of dozens of Gradients ready to use with CSS class and also HEX color.',
        url: 'https://uigradients.com/',
        icon: 'https://uigradients.com/static/images/favicon-32x32.png',
    },
    {
        name: 'UIkit',
        categories: [programming.uiKitsAndLibraries],
        description:
            'UIkit, a lightweight and modular front-end framework for developing fast and powerful web interfaces.',
        url: 'https://getuikit.com/',
        icon: 'https://getuikit.com/images/apple-touch-icon.png',
    },
    {
        name: 'Umbler',
        categories: [infrastructure.hosting],
        description:
            'We are the website and applications hosting that you can trust. Perfect for the current needs of agencies, developers and entrepreneurs.',
        url: 'https://www.umbler.com/',
        icon: 'https://assets.umbler.com/site/favicons/favicon-96x96.png?v=20201212010736',
    },
    {
        name: 'Undefined',
        categories: [programming.podcasts],
        description: 'The only engineering podcast with a 2 drink minimum. Hosted by Jared Palmer and Ken Wheeler.',
        url: 'https://undefined.fm/',
        icon: 'https://undefined.fm/icons-570a917d807d23df1ae43c8aa270336f/apple-touch-icon-76x76.png',
    },
    {
        name: 'unDraw',
        categories: [assets.illustrations],
        description:
            'The design project with open-source illustrations for any idea you can imagine and create. Create beautiful websites, products and applications with your color, for free.',
        url: 'https://undraw.co/',
        icon: 'https://undraw.co/favicon-32x32.png',
    },
    {
        name: 'Unscreen',
        categories: [assets.videos],
        description:
            'Remove the background of any video - 100% automatically, online & free! Goodbye Greenscreen. Hello Unscreen.',
        url: 'https://www.unscreen.com/',
        icon: 'https://www.unscreen.com/favicon-96x96.png',
    },
    {
        name: 'Unsplash',
        categories: [assets.images],
        description:
            'Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.',
        url: 'https://unsplash.com/',
        icon: 'https://unsplash.com/favicon-32x32.png',
    },
    {
        name: 'Untools',
        categories: [toolsAndUtilities.general],
        description:
            'Collection of thinking tools and frameworks to help you solve problems, make decisions and understand systems.',
        url: 'https://untools.co/',
        icon: 'https://untools.co/icons/icon-96x96.png?v=48b6eb2cd872327651861e831bd90577',
    },
    {
        name: 'Upto.Site',
        categories: [toolsAndUtilities.general],
        description: 'Upto.Site is the ultimate url shortener which can be used to create instant FREE short urls.',
        keywords: ['url shortener', 'link', 'link shortener', 'link shortener api'],
        url: 'https://upto.site',
        icon: 'https://upto.site/favicon.png',
    },
    {
        name: 'UpLabs',
        categories: [assets.illustrations, assets.icons, uiDesign.inspiration],
        description: 'UpLabs curates the best of design & development inspiration, resources and freebies. Every day!',
        url: 'https://www.uplabs.com/',
        icon: 'https://www.uplabs.com/logos/uplabs/icons/favicon-96x96.png',
    },
    {
        name: 'Upwork',
        categories: [jobs.freelancing],
        description:
            'Upwork connects businesses of all sizes to freelancers, independent professionals, and agencies for all their hiring needs. Scale your workforce dynamically as business needs change.',
        url: 'https://www.upwork.com/',
        icon: 'https://www.upwork.com/ab/brontes/favicon.ico',
    },
    {
        name: 'Up For Grabs',
        categories: [community.hacktoberfest],
        description:
            'This is a list of projects which have curated tasks specifically for new contributors. These are a great way to get started with a project, or to help share the load of working on open source projects.',
        url: 'https://up-for-grabs.net/#/',
        icon: 'https://up-for-grabs.net/icons/favicon-196x196.png',
    },
    {
        name: 'urlmskr',
        description: 'Simple and free to use URL masker',
        categories: [toolsAndUtilities.general, toolsAndUtilities.domains],
        url: 'https://axorax.github.io/urlmskr/',
        icon: 'https://axorax.github.io/urlmskr/assets/icon.png',
        keywords: ['url', 'link', 'masker', 'url-masker'],
    },
    {
        name: 'Use The Keyboard',
        categories: [toolsAndUtilities.general],
        description: 'A collection of keyboard shortcuts for Mac apps, Windows programs, and a variety of websites.',
        url: 'https://usethekeyboard.com/',
        icon: 'https://usethekeyboard.com/assets/img/favicon-32x32.png',
    },
    {
        name: 'Useful Colours',
        categories: [uiDesign.color],
        description: 'Super quick, eye-pleasing colours for your UI design.',
        url: 'https://usefulcolours.com/',
        icon: 'https://usefulcolours.com/favicon.png',
    },
    {
        name: 'useHooks',
        categories: [programming.javascript.react],
        description: 'Easy to understand React Hook recipes.',
        keywords: ['react', 'javascript', 'hooks', 'useState', 'useEffect', 'tutorial', 'demo', 'code'],
        url: 'https://usehooks.com/',
        icon: 'https://usehooks.com/favicon.ico',
    },
    {
        name: 'UserBooster',
        categories: [indieHacking.marketing],
        description:
            'UserBooster is a Notion template that helps startups to get their first users and build their launch strategy',
        url: 'https://userbooster.co',
        icon: 'https://userbooster.co/images/home/share.jpg',
    },
    {
        name: 'UXfolio',
        categories: [toolsAndUtilities.general],
        description:
            'UXfolio is a powerful UX portfolio builder with no coding required. Pick a stunning template and tell the story behind your design process.',
        url: 'https://uxfol.io/',
        icon: 'https://uxfol.io/favicon/favicon-16x16.png',
    },
]
