/* Quiet decorative details, reading progress, and accessible mobile navigation. */
export function initEffects({scrollTo}) {
  const starField = document.querySelector('#gate-stars');
  if (starField) {
    // Deterministic distribution to keep the visual stable between reloads.
    for (let i = 0; i < 45; i++) {
      const star = document.createElement('i');
      const x = (i * 41.37 + Math.sin(i * 9.6) * 12 + 1000) % 100;
      const y = (i * 29.17 + Math.sin(i * 5.7) * 13 + 1000) % 100;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.setProperty('--dur', `${3 + (i % 6) * .6}s`);
      star.style.animationDelay = `${-(i % 7)}s`;
      starField.appendChild(star);
    }
  }

  const progress = document.querySelector('#reading-progress');
  const header = document.querySelector('#topbar');
  let scheduled = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max ? Math.max(0, Math.min(1, window.scrollY / max)) : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 85);
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }, {passive:true});
  window.addEventListener('resize', update);
  update();

  const toggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#mobile-nav');
  if (toggle && nav) {
    const close = () => { nav.hidden = true; toggle.setAttribute('aria-expanded','false'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.hidden = !open;
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      if (!document.querySelector(href)) return;
      e.preventDefault();
      scrollTo(href);
      history.replaceState(null, '', href);
    });
  });
}