/** Fit content inside a physical sheet without inner scrolling. */
export function fitLeaf(leaf, pageWidth, pageHeight) {
  // StPageFlip provides leaf geometry; CSS controls its look.
  leaf.style.width = `${pageWidth}px`;
  leaf.style.height = `${pageHeight}px`;
  const viewport = leaf.querySelector('.paper-scroll');
  const content = leaf.querySelector('.leaf-content');
  if (!viewport || !content) return;

  content.style.transformOrigin = 'top left';
  content.style.transform = 'none';
  content.style.width = '100%';
  const available = viewport.clientHeight - 3;
  if (available <= 0) return;

  // Widen unscaled content before scaling, so visual lines fit their page.
  // This is a last refinement, not a replacement for concise page writing.
  let factor = 1;
  while (factor >= 0.73) {
    content.style.width = `${100 / factor}%`;
    content.style.transform = factor === 1 ? 'none' : `scale(${factor})`;
    if (content.scrollHeight * factor <= available) break;
    factor = +(factor - 0.025).toFixed(3);
  }
  if (factor < 0.73) {
    leaf.dataset.needsEditing = 'true';
    console.warn(`Página «${leaf.dataset.pageId}»: dividir o reducir contenido, no encoger indefinidamente.`);
  }
}
