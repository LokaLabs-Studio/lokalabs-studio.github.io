export function initVtGuard() {
  addEventListener('pageswap', () => {
    const vh = window.innerHeight;
    for (const el of document.querySelectorAll<HTMLElement>('[data-vt]')) {
      const r = el.getBoundingClientRect();
      el.classList.toggle('vt-off', r.bottom < 0 || r.top > vh);
    }
  });
  addEventListener('pageshow', () => {
    for (const el of document.querySelectorAll<HTMLElement>('[data-vt].vt-off')) el.classList.remove('vt-off');
  });
}
