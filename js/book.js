/* 3D storybook opening - first click turns the cover; second enters essay. */
export function initBook({scrollTo}) {
  const book = document.querySelector('#storybook');
  const button = document.querySelector('#open-book');
  const label = document.querySelector('#book-action-label');
  const instruction = document.querySelector('#book-instruction');
  if (!book || !button) return;

  let opened = false;
  let busy = false;

  function sparkle() {
    const target = document.querySelector('#book-world');
    if (!target || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const dust = document.createElement('div');
    dust.className = 'book-sparkles';
    for (let i = 0; i < 18; i++) {
      const star = document.createElement('i');
      const angle = (Math.PI * 2 * i) / 18;
      const radius = 130 + (i % 4) * 23;
      star.style.setProperty('--tx', `${Math.cos(angle) * radius}px`);
      star.style.setProperty('--ty', `${Math.sin(angle) * radius}px`);
      star.style.setProperty('--delay', `${i * 18}ms`);
      dust.appendChild(star);
    }
    target.appendChild(dust);
    setTimeout(() => dust.remove(), 1600);
  }

  button.addEventListener('click', () => {
    if (opened) {
      scrollTo('#mia');
      return;
    }
    if (busy) return;
    opened = true;
    busy = true;
    button.disabled = true;
    book.classList.add('is-open');
    button.classList.add('is-opened');
    sparkle();
    instruction.textContent = 'Y aquí es donde el cuento empieza a cambiar.';

    // Respect the page-turn duration before revealing the next action.
    setTimeout(() => {
      label.textContent = 'ENTRAR A LA HISTORIA';
      button.querySelector('.button-arrow').textContent = '↓';
      button.disabled = false;
      busy = false;
    }, 1100);
  });
}