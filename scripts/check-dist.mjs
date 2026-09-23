#!/usr/bin/env node
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const ORIGIN = 'https://lokalabs-studio.github.io';

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    statSync(p).isDirectory() ? walk(p) : files.push(p);
  }
};
walk(DIST);

const errors = [];
const rel = (p) => relative(DIST, p).replaceAll('\\', '/');
const external = (url) => /^(https?:)?\/\//i.test(url) && !url.startsWith(ORIGIN);

const FETCHING = /<(script|img|source|link|iframe|video|audio|embed|object|track|image|use)\b[^>]*>/gi;
const URL_ATTR = /\s(src|href|srcset|poster|data|xlink:href)\s*=\s*("([^"]*)"|'([^']*)')/gi;

for (const file of files.filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  const page = rel(file);

  for (const [tag] of html.matchAll(FETCHING)) {
    if (/^<link\b/i.test(tag) && /\srel\s*=\s*["']?(canonical|alternate|sitemap)\b/i.test(tag)) continue;
    for (const m of tag.matchAll(URL_ATTR)) {
      const value = m[3] ?? m[4] ?? '';
      const urls = m[1].toLowerCase() === 'srcset' ? value.split(',').map((s) => s.trim().split(/\s+/)[0]) : [value];
      for (const u of urls) if (external(u)) errors.push(`${page}: loads ${u}`);
    }
  }

  const csp = html.match(/<meta\s+http-equiv="content-security-policy"\s+content="([^"]+)"/i);
  if (!csp) errors.push(`${page}: no CSP`);
  else if (!/default-src 'self'/.test(csp[1])) errors.push(`${page}: CSP default-src isn't 'self'`);
}

for (const file of files.filter((f) => f.endsWith('.css') || f.endsWith('.js'))) {
  const text = readFileSync(file, 'utf8');
  for (const m of text.matchAll(/(?:url\(\s*['"]?|@import\s+['"]|fetch\(\s*['"`])((?:https?:)?\/\/[^'"`)\s]+)/gi)) {
    if (external(m[1])) errors.push(`${rel(file)}: loads ${m[1]}`);
  }
}

const ads = join(DIST, 'app-ads.txt');
if (existsSync(ads)) {
  for (const line of readFileSync(ads, 'utf8').split(/\r?\n/)) {
    const l = line.trim();
    if (l && !l.startsWith('#') && !/^google\.com,\s*pub-\d{16},\s*DIRECT,\s*f08c47fec0942fa0$/.test(l)) {
      errors.push(`app-ads.txt: bad line "${l}"`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('dist ok');
