import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Almanac',
  tagline: 'Notes on AI tools, LLM techniques, and practical prompting',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://stannyu.github.io',
  baseUrl: '/almanac/',
  organizationName: 'stannyu',
  projectName: 'almanac',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Almanac',
      logo: {
        alt: 'Almanac Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'almanacSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/CHANNEL',
          label: 'Channel',
          position: 'left',
        },
        {
          to: '/docs/CODEX-COMMANDS',
          label: 'Codex Commands',
          position: 'left',
        },
        {
          href: 'https://github.com/stannyu/almanac',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Channel',
              to: '/docs/CHANNEL',
            },
            {
              label: 'LLM',
              to: '/docs/llm',
            },
          ],
        },
        {
          title: 'Sections',
          items: [
            {
              label: 'AI',
              to: '/docs/ai',
            },
            {
              label: 'CODEX Commands',
              to: '/docs/CODEX-COMMANDS',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/stannyu/almanac',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Almanac. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
