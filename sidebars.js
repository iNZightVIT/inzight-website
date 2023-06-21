/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "index",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
        title: "Getting Started",
        description: "Get started learning the basics of iNZight.",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "02-getting-started",
        },
      ],
    },
    {
      type: "category",
      label: "Explore the Interface",
      link: {
        type: "doc",
        id: "interface/index",
      },
      items: ["interface/menubar/index"],
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
        title: "Reference",
        description: "Guides to all iNZight features.",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "10-reference",
        },
      ],
    },
  ],
};

module.exports = sidebars;
