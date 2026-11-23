/**
 * Keep an entire paper leaf visible at any desktop, laptop, tablet or
 * projector size. Only the CONTENT shrinks; the physical leaf dimensions
 * always match StPageFlip. No nested scrolling or cropped paragraphs.
 */
export function fitLeaf(leaf, pageWidth, pageHeight) {
  leaf.style.width = `${pageWidth}px`;
  leaf.style.height = `${pageHeight}px`;

  const viewport = leaf.querySelector('.paper-scroll');
  const content = leaf.querySelector('.leaf-content');
  if (!viewport || !content) return;

  content.style.transformOrigin = 'top left';
  content.style.width = '100%';
  content.style.transform = 'none';

  // The cover is a full-height flex composition with its own responsive
  // artwork sizes. Scaling it as if it were a text page cropped the author.
  if (leaf.classList.contains('page--cover') ||
      leaf.classList.contains('page--backcover')) return;

  const available = viewport.clientHeight - 3;
  if (available <= 0) return;

  function setScale(scale) {
    // More layout width before scaling = same visible text-column width.
    content.style.width = `${(100 / scale).toFixed(3)}%`;
    content.style.transform = scale === 1 ? 'none' : `scale(${scale})`;
    return content.scrollHeight * scale <= available;
  }

  if (setScale(1)) {
    delete leaf.dataset.needsEditing;
    return;
  }

  // Use a binary search rather than the previous 0.73 floor: shorter
  // laptops and browser zoom can require smaller layouts for the long
  // historical notes and large chronological collages.
  let low = 0.38;
  let high = 1;
  if (!setScale(low)) {
    // This diagnostic makes genuinely overfull pages easy to identify
    // without turning their contents into scrollable mini-pages.
    leaf.dataset.needsEditing = 'true';
    console.warn(`La página «${leaf.dataset.pageId}» tiene contenido excesivo para esta pantalla.`);
    return;
  }

  for (let iteration = 0; iteration < 10; iteration += 1) {
    const mid = (low + high) / 2;
    if (setScale(mid)) low = mid;
    else high = mid;
  }
  setScale(Math.max(0.38, low - 0.004));
  delete leaf.dataset.needsEditing;
}
