import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manuel Nila',
  tagline: 'Manuel Nila',
  favicon: 'img/favicon.ico',

  url: 'https://manic.so/',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'manila',
  projectName: 'manic.so',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          id: 'blog',
          path: './blog',
          routeBasePath: '/blog',
          showReadingTime: true,
          blogTitle: 'Blog',
          blogSidebarCount: 0,
          feedOptions: {
	          copyright: `© ${new Date().getFullYear()} Manuel Nila`
	        },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'projects',
        path: './projects',
        routeBasePath: 'projects',
        showReadingTime: false,
        blogTitle: 'Projects',
        blogSidebarCount: 0,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'notes',
        path: './notes',
        routeBasePath: 'notes',
        showReadingTime: false,
        blogSidebarCount: 0,
      },
    ],
    /*
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'index',
        path: './pages',
        routeBasePath: '/',
      },
    ],
    */
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo-large.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Manuel Nila',
        hideOnScroll: true,
        items: [
          /*
          {
            label: 'about',
            position: 'left',
            to: 'about',
          },
          */
          {
            label: 'blog',
            position: 'left',
            to: 'blog',
          },
          {
            label: 'projects',
            position: 'left',
            to: 'projects',
          },
          {
            position: 'right',
            href: 'https://github.com/manila',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            position: 'right',
            href: 'https://manic.so/blog/rss.xml',
            className: 'header-rss-link',
            'aria-label': 'RSS Feed',
          },
          /*
          {
            label: 'notes',
            position: 'left',
            to: 'notes'
          },
          */
        ],
      },
/*
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
*/
    }),
};

export default config;
