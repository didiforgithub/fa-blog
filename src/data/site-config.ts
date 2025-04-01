export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'MGX',
    subtitle: 'AI Multi-Agent Collaborative Development Platform',
    description:
        'MGX is a multi-agent system that replicates the collaborative workflow of real development teams, covering the entire software development lifecycle.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'MGX - AI Multi-Agent Collaborative Development Platform'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Documentation',
            href: 'https://docs.deepwisdom.ai/main/en/guide/get_started/introduction.html'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/geekan/MetaGPT'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/geekan/MetaGPT'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/company/metagpt'
        },
        {
            text: 'Email',
            href: 'mailto:business@deepwisdom.com'
        }
    ],
    hero: {
        title: 'MGX: AI Multi-Agent Collaborative Development Platform',
        text: 'MGX is a multi-agent system that replicates the collaborative workflow of real development teams, covering the entire software development lifecycle. Unlike single AI developers or IDE enhancement tools, MGX employs specialized AI agents (Product Manager, Architect, Data Analyst, Engineer, etc.), each with distinct expertise, to deliver a more efficient and intuitive development process.',
        image: {
            src: '/home/hero.png',
            alt: 'MGX Development Platform'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to MGX Updates',
    //     text: 'Stay informed about the latest features, tutorials, and community news. Get MGX insights directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
