import { initBook } from './book.js';
import { initMotion } from './motion.js';
import { initImages } from './images.js';
import { initEffects } from './effects.js';
import { initCompare } from './compare.js';

let lenis = null;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && window.Lenis) {
  lenis = new window.Lenis({
    autoRaf: true,
    duration: 1.1,
    smoothWheel: true,
    syncTouch: false
  });
  if (window.ScrollTrigger) {
    lenis.on('scroll', window.ScrollTrigger.update);
  }
}

const scrollTo = target => {
  if (lenis) lenis.scrollTo(target, { offset: -65, duration: 1.1 });
  else document.querySelector(target)?.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth' });
};

initBook({ scrollTo });
initEffects({ scrollTo });
initCompare();
initMotion();
initImages();