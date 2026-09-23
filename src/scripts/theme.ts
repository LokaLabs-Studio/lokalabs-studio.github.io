type Choice = 'system' | 'light' | 'dark';

const KEY = 'loka-theme';
const ORDER: Choice[] = ['system', 'light', 'dark'];
const LABEL: Record<Choice, string> = { system: 'match system', light: 'light', dark: 'dark' };
const META = { light: '#F7F6F3', dark: '#0A0C10' } as const;

const root = document.documentElement;

function current(): Choice {
  const t = root.getAttribute('data-theme');
  return t === 'light' || t === 'dark' ? t : 'system';
}

function apply(choice: Choice) {
  if (choice === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', choice);

  try {
    if (choice === 'system') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, choice);
  } catch {
  }

  for (const meta of document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"][data-scheme]')) {
    const scheme = meta.dataset.scheme as 'light' | 'dark';
    meta.content = choice === 'system' ? META[scheme] : META[choice];
  }
}

function label(button: HTMLButtonElement, choice: Choice) {
  const next = ORDER[(ORDER.indexOf(choice) + 1) % ORDER.length]!;
  button.setAttribute('aria-label', `Theme: ${LABEL[choice]}. Switch to ${LABEL[next]}.`);
}

export function initThemeToggle() {
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]')) {
    label(button, current());
    if (current() !== 'system') apply(current());
    button.addEventListener('click', () => {
      const next = ORDER[(ORDER.indexOf(current()) + 1) % ORDER.length]!;
      apply(next);
      label(button, next);
    });
  }
}
