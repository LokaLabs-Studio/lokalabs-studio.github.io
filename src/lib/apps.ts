import { getCollection, type CollectionEntry } from 'astro:content';
import type { DocKind } from '../content.config';

export type App = CollectionEntry<'apps'>;

export const DOC_LABEL: Record<DocKind, string> = {
  privacy: 'Privacy Policy',
  terms: 'Terms of Use',
  'delete-data': 'Delete your data',
};

export const DOC_BLURB: Record<DocKind, string> = {
  privacy: 'What the app stores, what leaves your phone and why.',
  terms: 'The rules for using the app, in plain words where we can.',
  'delete-data': 'How to export, move or erase everything yourself.',
};

export const STATUS_LABEL: Record<App['data']['status'], string> = {
  'coming-soon': 'Coming soon to Google Play',
  live: 'On Google Play',
};

export async function getApps() {
  return (await getCollection('apps')).sort((a, b) => a.data.order - b.data.order);
}

export const docHref = (appId: string, kind: DocKind) => `/apps/${appId}/${kind}/`;

const lockups = import.meta.glob<string>('/src/content/apps/*/lockup.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function lockupSvg(appId: string): string {
  const svg = lockups[`/src/content/apps/${appId}/lockup.svg`];
  if (!svg) throw new Error(`[apps] missing src/content/apps/${appId}/lockup.svg`);
  return svg.replace('<svg ', '<svg aria-hidden="true" focusable="false" ');
}
