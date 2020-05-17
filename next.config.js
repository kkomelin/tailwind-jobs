const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')
const withReactSvg = require('next-react-svg')
const { resolve } = require('path')

module.exports = withPlugins(
  [
    [withMDX, {
      extension: /\.mdx?$/,
      pageExtensions: ['js', 'jsx', 'mdx'],
    }],
    [withReactSvg, {
      include: resolve(__dirname, 'icons'),
    }],
  ],
  { /* global config */ },
);
