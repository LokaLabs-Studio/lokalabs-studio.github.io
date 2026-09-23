// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import headingAnchors from './src/lib/heading-anchors.mjs';

/**
 * @param {string} name
 * @param {`--${string}`} cssVariable
 * @param {string} src
 * @param {string} weight
 * @param {string[]} fallbacks
 */
const local = (name, cssVariable, src, weight, fallbacks) => ({
  provider: fontProviders.local(),
  name,
  cssVariable,
  fallbacks,
  display: /** @type {const} */ ('swap'),
  options: {
    variants: /** @type {[{ src: [string], weight: string, style: 'normal' }]} */ ([{ src: [src], weight, style: 'normal' }]),
  },
});

const FS = '@fontsource-variable';

export default defineConfig({
  site: 'https://lokalabs-studio.github.io',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/dev/') })],
  markdown: {
    processor: satteri({ hastPlugins: [headingAnchors] }),
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        "frame-src 'none'",
        "manifest-src 'self'",
      ],
    },
  },
  fonts: [
    local('Geist', '--font-body', `${FS}/geist/files/geist-latin-wght-normal.woff2`, '100 900', ['Arial', 'sans-serif']),
    local('Geist Mono', '--font-mono', `${FS}/geist-mono/files/geist-mono-latin-wght-normal.woff2`, '100 900', ['ui-monospace', 'monospace']),
    local('Mona Sans', '--font-mona', `${FS}/mona-sans/files/mona-sans-latin-wght-normal.woff2`, '200 900', ['Arial', 'sans-serif']),
  ],
});
