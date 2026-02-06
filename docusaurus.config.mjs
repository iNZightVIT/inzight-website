// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "iNZight",
  tagline: "A free data exploration and analytics platform.",
  url: "https://inzight.nz",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenAnchors: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "iNZightVIT", // Usually your GitHub org/user name.
  projectName: "inzight-website", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      // /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: "./sidebars.cjs",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/iNZightVIT/inzight-website/edit/main/",
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/iNZightVIT/inzight-website/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "support",
        path: "support",
        routeBasePath: "support",
        sidebarPath: "./sidebars-support.cjs",
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: "iNZight",
        logo: {
          alt: "iNZight Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/install",
            label: "Install",
            position: "left",
          },
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "User Guide",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "ref",
            label: "Reference",
          },
          { to: "/support", label: "Support", position: "left" },
          {
            type: "search",
            position: "left",
          },
          { to: "/about", label: "About", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
          {
            to: "/related",
            label: "Related Projects",
            position: "right",
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/category/getting-started",
              },
              {
                label: "Reference",
                to: "/docs/reference",
              },
            ],
          },

          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/vQN8Mbnv",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/iNZightVIT",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/iNZightVIT",
              },
            ],
          },
          {
            title: "Sponsors",
            items: [
              {
                label: "University of Auckland",
                href: "https://stat.auckland.ac.nz",
              },
              {
                label: "Te Rourou Tātaritanga",
                href: "https://terourou.org",
              },
              {
                label: "iNZight Analytics Ltd.",
                href: "https://inzight.co.nz",
              },
              {
                label: "Stats New Zealand",
                href: "https://stats.govt.nz",
              },
            ],
          },
        ],
        copyright: `Copyright © 2014&ndash;${new Date().getFullYear()} iNZight. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "LM0R8NEREJ",
        apiKey: "fad0b6e47b54ebe6f9dcec2e38dbe902",
        indexName: "inzight",
      },
    }),
};

export default config;
