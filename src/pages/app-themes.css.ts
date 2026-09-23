import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const apps = await getCollection('apps');
  const rules = apps.flatMap(({ id, data: { theme: t } }) => [
    `[data-app-theme="${id}"] {`,
    `  --app-bg: ${t.bg};`,
    `  --app-surface: ${t.surface};`,
    `  --app-border: ${t.border};`,
    `  --app-text: ${t.text};`,
    `  --app-text-2: ${t.textSecondary};`,
    `  --app-accent: ${t.accent};`,
    `  --app-on-accent: ${t.onAccent};`,
    `}`,
    ...['surface', 'icon', 'name'].map(
      (part) => `[data-vt="${id}-${part}"] { view-transition-name: ${id}-${part}; }`,
    ),
  ]);
  rules.push('.vt-off [data-vt], [data-vt].vt-off { view-transition-name: none !important; }');

  return new Response(`${rules.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/css; charset=utf-8' },
  });
};
