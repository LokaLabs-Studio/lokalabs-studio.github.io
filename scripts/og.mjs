#!/usr/bin/env node
import { mkdirSync, readdirSync } from 'node:fs';
import sharp from 'sharp';
import { chromium } from 'playwright';

const i = process.argv.indexOf('--base');
const base = i > -1 ? process.argv[i + 1] : 'http://localhost:4321';
const names = ['home', ...readdirSync('src/content/apps')];

mkdirSync('public/og', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const name of names) {
  await page.goto(`${base}/dev/og/${name}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.card').screenshot({ path: `public/og/${name}.png` });
  console.log(`public/og/${name}.png`);
}
await browser.close();

const touch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="#2563EB"/>
  <g transform="translate(66.8 30) scale(1)" fill="#fff"><rect width="30" height="120"/><rect x="40" width="7" height="120"/></g>
</svg>`;
await sharp(Buffer.from(touch)).png().toFile('public/apple-touch-icon.png');
console.log('public/apple-touch-icon.png');
