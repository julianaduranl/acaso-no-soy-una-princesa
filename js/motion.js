/* Motion system: GSAP/ScrollTrigger when loaded, native fallback otherwise. */
export function initMotion() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = [...document.querySelectorAll('.reveal')];
  if (reduce) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
    revealElements.forEach(el => io.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  if (!window.gsap || !window.ScrollTrigger) return;
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();
  mm.add('(min-width: 800px)', () => {
    gsap.to('.history-opening__huge', {
      yPercent: -26, xPercent: 6, ease: 'none',
      scrollTrigger: { trigger: '.history-opening', start: 'top bottom', end: 'bottom top', scrub: 1.2 }
    });
    gsap.utils.toArray('.poster').forEach((poster) => {
      gsap.fromTo(poster, { rotate: 1.5, scale: .96 }, {
        rotate: -1, scale: 1, ease: 'none',
        scrollTrigger: { trigger: poster, start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
    });
    gsap.fromTo('.ending-photo', { rotate: -6, scale: .91 }, {
      rotate: 1.8, scale: 1, ease: 'none',
      scrollTrigger: { trigger: '.ending-photo', start: 'top bottom', end: 'bottom top', scrub: 1 }
    });
  });
  ScrollTrigger.refresh();
}