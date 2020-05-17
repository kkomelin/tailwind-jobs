'use strict';

const sitemap = require('nextjs-sitemap-generator');

// @todo: Extract base url to the main site config.
sitemap({
  baseUrl: 'https://jobs.tailwindui.com',
  ignoredPaths: [],
  extraPaths: ['/'],
  pagesDirectory: 'jobs',
  targetDirectory : 'out',
  pagesConfig: {
    '/': { priority: '1', changefreq: 'daily' },
  },
});

console.log(`✅ sitemap.xml has been generated.`);
