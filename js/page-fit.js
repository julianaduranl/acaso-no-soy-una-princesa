/**
 * Fit a full physical leaf without internal scrollbars or chopped last lines.
 *
 * The old check (content.scrollHeight * scale) did not measure the actual
 * painted bottom of the paragraphs after StPageFlip and the webfonts finished
 * laying out. In particular, collapsed margins/late image loads made the
 * final sentence run underneath the fixed page footer.
 */
export function fitLeaf(leaf, pageWidth, pageHeight) {
  if (!leaf?.isConnected) return false;

  leaf.style.width = `${pageWidth}px`;
  leaf.style.height = `${pageHeight}px`;

  const viewport = leaf.querySelector('.paper-scroll');
  const content = leaf.querySelector('.leaf-content');
  if (!viewport || !content) return false;

  content.style.transformOrigin = 'top left';

  // The covers have their own vertical flex layout and should not have their
  // title/illustration independently rescaled.
  if (leaf.classList.contains('page--cover') ||
      leaf.classList.contains('page--backcover')) {
    content.style.width = '100%';
    content.style.transform = 'none';
    return true;
  }

  const scrollerRect = viewport.getBoundingClientRect();
  // A hidden page (display:none) has no real layout to measure. It will be
  // measured again on the next flip/turnToPage.
  if (scrollerRect.height < 20 || scrollerRect.width < 20) return false;

  const children = Array.from(content.children)
    .filter((node) => !['STYLE', 'SCRIPT'].includes(node.tagName));

  const setScale = (scale) => {
    content.style.width = `${(100 / scale).toFixed(4)}%`;
    content.style.transform = scale === 1 ? 'none' : `scale(${scale})`;

    // Read painted rectangles instead of scrollHeight: this checks where
    // the ACTUAL last line/image ends after scaling and font reflow.
    const viewportBounds = viewport.getBoundingClientRect();
    const allowedBottom = viewportBounds.bottom - 12;
    let lastBottom = content.getBoundingClientRect().top;
    for (const node of children) {
      const rect = node.getBoundingClientRect();
      if (rect.height > 0) lastBottom = Math.max(lastBottom, rect.bottom);
    }
    return lastBottom <= allowedBottom;
  };

  if (setScale(1)) {
    leaf.dataset.fitScale = '1';
    delete leaf.dataset.needsEditing;
    return true;
  }

  // Interactively find the largest readable scale that fits ALL content,
  // not just the top of the final paragraph. One small extra margin makes
  // results robust to font rendering differences between Windows and macOS.
  let low = .30;
  let high = 1;
  if (!setScale(low)) {
    leaf.dataset.needsEditing = 'true';
    leaf.dataset.fitScale = String(low);
    console.warn(`El contenido de «${leaf.dataset.pageId}» excede la hoja incluso en escala mínima.`);
    return false;
  }

  for (let i = 0; i < 12; i += 1) {
    const middle = (low + high) / 2;
    if (setScale(middle)) low = middle;
    else high = middle;
  }
  const finalScale = Math.max(.30, low - .008);
  setScale(finalScale);
  leaf.dataset.fitScale = finalScale.toFixed(3);
  delete leaf.dataset.needsEditing;
  return true;
}
