import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'feb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b6e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '152'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f4d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e79'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'c8b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '52b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'bdb'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'ace'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '3a1'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4f2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'd78'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '378'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '757'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'cd5'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'adc'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '1d4'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '85d'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '585'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/flips-basic---pages',
        component: ComponentCreator('/category/flips-basic---pages', '3f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/flips-pro---pages',
        component: ComponentCreator('/category/flips-pro---pages', 'cea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/test-menu',
        component: ComponentCreator('/category/test-menu', 'e89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Contact',
        component: ComponentCreator('/Contact', '29c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Definitions',
        component: ComponentCreator('/Definitions', '23e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/FAQ',
        component: ComponentCreator('/FAQ', '9ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/FlipsDiscord',
        component: ComponentCreator('/FlipsDiscord', 'a2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/FreePages/CollectionPage',
        component: ComponentCreator('/FreePages/CollectionPage', '0e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/FreePages/dashboard',
        component: ComponentCreator('/FreePages/dashboard', '308'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/FreePages/homepage',
        component: ComponentCreator('/FreePages/homepage', 'ef1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Home_test',
        component: ComponentCreator('/Home_test', 'f2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Pricing',
        component: ComponentCreator('/Pricing', 'fc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ProPages/ProCollection',
        component: ComponentCreator('/ProPages/ProCollection', '0af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ProPages/research',
        component: ComponentCreator('/ProPages/research', '62b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ProPages/Warroom',
        component: ComponentCreator('/ProPages/Warroom', '441'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test/ProCollection',
        component: ComponentCreator('/Test/ProCollection', '7e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test/test1',
        component: ComponentCreator('/Test/test1', '4b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test/test2',
        component: ComponentCreator('/Test/test2', '1b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test/test3',
        component: ComponentCreator('/Test/test3', '3df'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
