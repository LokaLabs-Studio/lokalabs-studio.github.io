export function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const sentinel = document.querySelector<HTMLElement>('[data-header-sentinel]');
  if (!header || !sentinel || header.dataset.over === 'none') return;

  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry) return;
      const passed = !entry.isIntersecting && entry.boundingClientRect.top < header.offsetHeight;
      header.toggleAttribute('data-solid', passed);
    },
    { rootMargin: `-${header.offsetHeight}px 0px 0px 0px` },
  );
  io.observe(sentinel);
}
