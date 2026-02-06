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
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // Old user guide paths
          { from: "/user_guides/addons", to: "/docs/reference/modules" },
          { from: "/user_guides/add_ons", to: "/docs/reference/modules" },
          { from: "/user_guides/basics", to: "/docs/category/getting-started" },
          { from: "/user_guides/data_options", to: "/docs/category/data-wrangling" },
          { from: "/user_guides/file_options", to: "/docs/category/importexport-data" },
          { from: "/user_guides/plot_options", to: "/docs/interface/plot-toolbar" },
          { from: "/user_guides/variables", to: "/docs/reference" },
          { from: "/user_guides/advanced", to: "/docs/reference/advanced-features" },
          { from: "/user_guides/interface", to: "/docs/interface" },
          { from: "/user_guides", to: "/docs" },
          // Old pages
          { from: "/download", to: "/install" },
          { from: "/getstarted", to: "/docs" },
        ],
      },
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
      metadata: [
        { name: "description", content: "iNZight is a free data exploration and analytics platform designed for everyone — from students to researchers. Built on R." },
        { property: "og:title", content: "iNZight — Free Data Exploration & Analytics" },
        { property: "og:description", content: "Pick your variables and iNZight handles the rest — the right graph, the right summary, the right test. No coding required." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://inzight.nz" },
        { property: "og:image", content: "https://inzight.nz/img/og-image.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@iNZightVIT" },
      ],
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
                html: `<a href="https://inzight.co.nz" target="_blank" rel="noreferrer noopener" class="footer-sponsor-logo" title="iNZight Analytics Ltd."><img src="/img/ial-dark.png" alt="iNZight Analytics Ltd." /></a>`,
              },
              {
                html: `<a href="https://stat.auckland.ac.nz" target="_blank" rel="noreferrer noopener" class="footer-sponsor-logo" title="University of Auckland"><img src="/img/uoa_logo.png" alt="University of Auckland" /></a>`,
              },
              {
                label: "View all sponsors",
                to: "/about/sponsors",
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
