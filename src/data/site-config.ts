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
  papersPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: 'Foundation Agents',
  subtitle: 'A research organization dedicated to advancing Foundation Agent research and Agent Protocol',
  description: 'A research organization dedicated to advancing Foundation Agent research and Agent Protocol',
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
      text: 'Papers',
      href: '/papers'
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
      text: 'GitHub',
      href: 'https://github.com/FoundationAgents'
    }
  ],
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/FoundationAgents'
    },
    {
      text: 'Email',
      href: 'mailto:alexanderwu@deepwisdom.ai'
    }
  ],
  hero: {
    title: 'Towards Foundation Agents: Where Are We? And Where Do We Go? ',
    text: `The term **"Foundation Agent"** refers to an autonomous and adaptive intelligent system meticulously designed to perceive various signals from its environment actively. This system continuously learns from experience, enabling it to refine and update its structured internal states. Additionally, it can reason about purposeful external and internal actions, autonomously navigating toward complex and long-term objectives.

We establish the **Foundation Agents organization** to advance the development of Foundation Agents and, looking further into the future, the realization of Foundation Agents. We believe that the individual intelligence of agents will grow to surpass that of humans. Still, even in such a scenario, large-scale organizational collaboration will significantly enhance efficiency and the scale of solvable problems. Therefore, the Foundation Agents organization is committed to two missions:
1. Advancing the development of Foundation Agents.
2. Promoting the emergence of Agent Protocols (World, Action, Communication).

These goals require consensus, and we welcome all researchers who share this vision to join us.
<div class="heroimage">
    <img src="/home/agent_framework.png">
    <img src="/home/brain.png">
</div>
    `,
    // image: {
    //   src: '/home/hero.png',
    //   alt: 'Foundation Agents'
    // },
    actions: [
      { text: 'Github', href: 'https://github.com/FoundationAgents' },
      {
        text: 'Paper ',
        href: 'https://arxiv.org/abs/2504.01990v1'
      }
    ]
  },
  postsPerPage: 8,
  projectsPerPage: 8,
  papersPerPage: 8
};

export default siteConfig;
