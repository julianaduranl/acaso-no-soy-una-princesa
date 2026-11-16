/*
 No broken pictures, no accidental use of unsourced images.
 When a real asset is ready, place it in assets/images/ and add the filename
 to assets/images/manifest.json. The illustration will be replaced automatically.
*/
export async function initImages() {
  let filenames = [];
  try {
    const url = new URL('../assets/images/manifest.json', import.meta.url);
    const response = await fetch(url);
    if (response.ok) filenames = (await response.json()).images || [];
  } catch (e) {
    // A missing manifest must not break the site.
  }
  const available = new Set(filenames);
  for (const region of document.querySelectorAll('.photo-region[data-image]')) {
    const file = region.dataset.image;
    const shortName = file.split('/').pop();
    if (!available.has(shortName)) continue;
    const img = region.querySelector('img');
    if (!img) continue;
    const replacement = new Image();
    replacement.onload = () => {
      replacement.alt = img.alt.replace('Ilustración provisional', 'Imagen de referencia').replace('Ilustración conceptual', 'Imagen de referencia');
      if (region.classList.contains('poster')) {
        region.style.backgroundImage = `url("${file}")`;
      } else {
        img.replaceWith(replacement);
      }
      region.classList.add('is-real');
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    };
    replacement.src = file;
  }
}