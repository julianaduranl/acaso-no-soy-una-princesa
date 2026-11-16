/* The meaning is in the montage: an accessible, draggable comparison. */
export function initCompare() {
  const stage = document.querySelector('[data-compare]');
  const slider = document.querySelector('#mia-slider');
  if (!stage || !slider) return;

  const update = (value) => {
    stage.style.setProperty('--split', `${value}%`);
    slider.setAttribute('aria-valuetext', `${value} % de la imagen posterior visible`);
  };
  slider.addEventListener('input', () => update(slider.value));
  slider.addEventListener('change', () => update(slider.value));
  update(slider.value);
}