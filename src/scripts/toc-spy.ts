export function initTocSpy() {
  const nav = document.querySelector<HTMLElement>('[data-toc]');
  if (!nav || !('IntersectionObserver' in window)) return;

  const links = new Map<string, HTMLAnchorElement>();
  for (const a of nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
    links.set(decodeURIComponent(a.hash.slice(1)), a);
  }
  const heads = [...document.querySelectorAll<HTMLElement>('.prose h2[id]')].filter((h) => links.has(h.id));
  if (!heads.length) return;

  let current = '';
  const update = () => {
    const line = window.innerHeight / 3;
    let active = heads[0]!.id;
    for (const h of heads) {
      if (h.getBoundingClientRect().top <= line) active = h.id;
      else break;
    }
    if (active === current) return;
    current = active;
    for (const [id, a] of links) {
      if (id === active) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    }
  };

  const io = new IntersectionObserver(update, { rootMargin: '0px 0px -66% 0px' });
  heads.forEach((h) => io.observe(h));
  addEventListener('scrollend', update, { passive: true });
  update();
}
