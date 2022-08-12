// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const oembed = require("@agentofuser/remark-oembed");
const smartypants = require("@ngsctt/remark-smartypants");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "iNZight",
  tagline: "Data exploration through visualisation",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/inzight-website/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          remarkPlugins: [oembed, [smartypants, { dashes: "oldschool" }], math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
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
      navbar: {
        // title: "iNZight",
        logo: {
          alt: "iNZight Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/",
            label: "Install",
            position: "left",
          },
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "User Guide",
          },
          { to: "/", label: "Support", position: "left" },
          { to: "/", label: "About", position: "left" },
          { to: "/", label: "Blog", position: "left" },
          {
            to: "/",
            label: "Related Projects",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Get Started",
          //       to: "/docs/getting-started",
          //     },
          //   ],
          // },

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
                to: "/",
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
                label: "iNZight Analytics Ltd.",
                href: "https://inzight.co.nz",
              },
              {
                label: "University of Auckland",
                href: "https://stat.auckland.ac.nz",
              },
              {
                label: "Statistics New Zealand",
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
    }),
};

module.exports = config;
