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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "项目介绍",
    },
    {
      type: "category",
      label: "快速入门",
      items: [
        "quick-start/setup",
        "quick-start/hello-world",
        "quick-start/rsx",
      ],
    },
    {
      type: "category",
      label: "页面设计",
      items: [
        "ui-design/style",
        "ui-design/dyn-render",
        "ui-design/cond-render",
        "ui-design/list-render",
        "ui-design/special-attributes",
      ],
    },
    {
      type: "category",
      label: "组件封装",
      items: [
        "components/intro",
        "components/properties",
        "components/children",
      ],
    },
    {
      type: "category",
      label: "交互性",
      items: [
        "interaction/hooks",
        "interaction/hooks-func",
        "interaction/user-input",
      ],
    },
    {
      type: "category",
      label: "状态管理",
      items: ["state/local-state", "state/global-state"],
    },
    {
      type: "doc",
      id: "scripts",
      label: "脚本交互",
    },
    {
      type: "category",
      label: "桌面应用开发",
      items: ["desktop/window", "desktop/custom-html"],
    },
    {
      type: "category",
      label: "有用的crate",
      items: ["helper-crates/router"],
    },
  ],
};

module.exports = sidebars;
