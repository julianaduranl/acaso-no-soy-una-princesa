/**
 * Motor de libro abierto, 2 páginas, con StPageFlip 2.0.7.
 * content.js sigue siendo la única fuente del ensayo.
 * La portada 3D original permanece como entrada cinematográfica.
 */
import { pages, chapters } from './content.js';
import { hydrateMedia } from './media.js';
import { fitLeaf } from './page-fit.js';

const $ = (selector) => document.querySelector(selector);
const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const intro = $('#book-frame');
const introTop = $('#spread-top');
const reader = $('#reader-stage');
const flipbookElement = $('#flipbook');
const announcement = $('#reader-announcement');

let pageFlip = null;
let current = 0;
let busy = false;
let activeSize = null;
let resizing = null;

// An even total number places the back cover on its own, after the final spread.
const libraryPages = [...pages.slice(0, -1)];
if (pages.length % 2 !== 0) {
  libraryPages.push({
    id: 'ultima-hoja', chapter: 'Epílogo', title: 'Una última página',
    kind: 'regular', body: '<div class="quiet-leaf"><span>✦</span><p>El final de un cuento.<br>El comienzo de otra mirada.</p></div>'
  });
}
libraryPages.push(pages[pages.length - 1]);
const lastIndex = libraryPages.length - 1;

function renderPage(page, index) {
  const special = page.kind === 'cover' || page.kind === 'backcover';
  const node = document.createElement('div');
  node.className = `page page--single page--${page.kind} page-leaf`;
  node.dataset.pageId = page.id;
  node.dataset.density = special ? 'hard' : 'soft';
  node.setAttribute('aria-label', `${page.chapter}: ${page.title}`);
  node.innerHTML = `
    <div class="paper-inner ${special ? 'paper-inner--cover' : ''}">
      ${special
        ? `<div class="paper-scroll"><div class="leaf-content">${page.body}</div></div>`
        : `<p class="page-kicker">${page.chapter}</p>
           <div class="paper-scroll"><div class="leaf-content">
             <h2 class="page-title">${page.title}</h2>${page.body}
           </div></div>
           <footer class="page-footer"><span>¿ACASO NO SOY UNA PRINCESA?</span><span>${String(index).padStart(2, '0')}</span></footer>`}
    </div>`;
  return node;
}

function getSize() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const mobile = viewportWidth < 800;
  // Keep a real margin around the book and reserve room for fixed controls.
  const availableHeight = Math.max(300, viewportHeight - (mobile ? 138 : 196));
  const availableWidth = Math.max(270, viewportWidth - (mobile ? 28 : 112));
  const ratio = 0.74; // width / height of a paper leaf
  const widthByHeight = availableHeight * ratio;
  const widthByViewport = availableWidth / (mobile ? 1 : 2);
  const pageWidth = Math.floor(Math.max(180, Math.min(widthByHeight, widthByViewport, 550)));
  const pageHeight = Math.round(pageWidth / ratio);
  return { pageWidth, pageHeight, mobile };
}

function updateUI() {
  const selected = libraryPages[Math.min(current, lastIndex)];
  const open = current > 0;
  $('#prev-page').disabled = busy || current === 0;
  $('#next-page').disabled = busy || current >= lastIndex;
  $('#next-page-label').textContent = current === 0 ? 'ABRIR EL CUENTO' : current >= lastIndex ? 'EL FIN' : 'SIGUIENTE';
  $('#chapter-label').textContent = selected.chapter.toUpperCase();
  $('#book-position').textContent = current === 0 ? 'LA PORTADA' : current === lastIndex ? 'CONTRAPORTADA' : 'LIBRO ABIERTO';
  $('#reading-fill').style.width = `${((Math.min(current + (open ? 2 : 1), libraryPages.length)) / libraryPages.length) * 100}%`;
  const rightPage = Math.min(current + 1, lastIndex);
  $('#reading-label').textContent = current === 0
    ? 'Portada'
    : current >= lastIndex
      ? 'Contraportada'
      : `Páginas ${current}–${rightPage} de ${lastIndex}`;
  announcement.textContent = `${selected.chapter}. ${selected.title}. ${current === 0 ? 'Portada' : `Página ${current}`}`;
  history.replaceState(null, '', `#${selected.id}`);
  intro.classList.toggle('is-closed', current === 0);
}

function buildFlipbook({ keepPage = 0 } = {}) {
  if (!window.St?.PageFlip) {
    $('#library-error').hidden = false;
    throw new Error('No se cargó StPageFlip. Revisa conexión o el script del index.html.');
  }
  if (pageFlip) {
    pageFlip.destroy();
    pageFlip = null;
    // StPageFlip may remove its host when destroyed. Restore it on resize.
    if (!flipbookElement.isConnected) reader.append(flipbookElement);
  }
  activeSize = getSize();
  const { pageWidth, pageHeight, mobile } = activeSize;
  // Size CSS and the engine from the same leaf dimensions. This is essential:
  // an individual page MUST NOT be set to 100% of the two-page book.
  flipbookElement.style.setProperty('--leaf-width', `${pageWidth}px`);
  flipbookElement.style.setProperty('--leaf-height', `${pageHeight}px`);
  flipbookElement.style.setProperty('--visible-leaves', mobile ? '1' : '2');
  flipbookElement.replaceChildren();
  const leaves = libraryPages.map(renderPage);
  // Measure in the real flipbook so the exact same scoped CSS is used.
  flipbookElement.append(...leaves);
  leaves.forEach((leaf) => fitLeaf(leaf, pageWidth, pageHeight));

  pageFlip = new window.St.PageFlip(flipbookElement, {
    width: pageWidth,
    height: pageHeight,
    size: 'fixed',
    showCover: true,
    usePortrait: mobile,
    drawShadow: true,
    maxShadowOpacity: .42,
    flippingTime: prefersReducedMotion.matches ? 250 : 1050,
    mobileScrollSupport: false,
    disableFlipByClick: false,
    showPageCorners: true,
    swipeDistance: 35,
    startPage: Math.min(keepPage, lastIndex)
  });
  pageFlip.on('flip', (event) => {
    current = event.data;
    busy = false;
    updateUI();
    if (current === 0 && document.body.classList.contains('is-reading')) {
      // Returning to the original 3D cover closes the reading experience.
      setTimeout(() => {
        if (current !== 0) return;
        document.body.classList.remove('is-reading');
        reader.classList.remove('is-visible');
      }, prefersReducedMotion.matches ? 0 : 360);
    }
  });
  pageFlip.loadFromHTML(leaves);
  hydrateMedia(flipbookElement);
  current = Math.min(keepPage, lastIndex);
  updateUI();
}

async function openBook() {
  if (busy || current !== 0) return;
  busy = true;
  updateUI();
  // One opening: zoom into the book, then StPageFlip turns the actual cover.
  // No competing CSS cover rotation or second transition.
  document.body.classList.add('is-opening');
  reader.classList.add('is-visible');
  document.body.classList.add('is-reading');
  if (!prefersReducedMotion.matches) await sleep(520);
  document.body.classList.remove('is-opening');
  busy = false;
  pageFlip.flipNext('bottom');
}

export function turn(direction) {
  if (busy || !pageFlip) return;
  if (direction > 0 && current === 0) {
    openBook();
    return;
  }
  if (direction < 0 && current === 0) return;
  if (direction > 0 && current >= lastIndex) return;
  if (direction < 0) pageFlip.flipPrev('bottom');
  else pageFlip.flipNext('bottom');
}

export function jumpToPage(index) {
  if (!pageFlip || busy || index < 0 || index >= pages.length) return;
  const mapped = index === pages.length - 1 ? lastIndex : index;
  if (mapped === 0) {
    pageFlip.turnToPage(0);
    current = 0;
    document.body.classList.remove('is-reading', 'is-opening');
    reader.classList.remove('is-visible');
  } else {
    document.body.classList.add('is-reading');
    reader.classList.add('is-visible');
    pageFlip.turnToPage(mapped);
    current = pageFlip.getCurrentPageIndex();
  }
  updateUI();
}

export function initBook() {
  $('#chapter-list').innerHTML = chapters.map((c) => `<button type="button" data-go="${c.page}"><span>${c.number}</span>${c.label}</button>`).join('');
  // Only the intro 3D book needs to be rendered by the old stage.
  introTop.replaceChildren(renderPage(pages[0], 0));
  hydrateMedia(introTop);
  try {
    buildFlipbook();
  } catch (error) {
    console.error(error);
    return;
  }
  const hash = decodeURIComponent(location.hash.slice(1));
  const direct = pages.findIndex((p) => p.id === hash);
  if (direct > 0) jumpToPage(direct);
  $('#next-page').addEventListener('click', () => turn(1));
  $('#prev-page').addEventListener('click', () => turn(-1));
  window.addEventListener('keydown', (event) => {
    if (!$('#chapter-drawer').hidden) {
      if (event.key === 'Escape') $('#close-drawer').click();
      return;
    }
    if (event.target.closest('a,button,input,textarea,select,[contenteditable="true"]')) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); turn(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); turn(-1); }
  });
  flipbookElement.addEventListener('click', (event) => {
    const trigger = event.target.closest('.note-trigger');
    if (!trigger) return;
    const body = trigger.nextElementSibling;
    if (!body) return;
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!expanded));
    body.hidden = expanded;
  });
  window.addEventListener('resize', () => {
    clearTimeout(resizing);
    resizing = setTimeout(() => {
      const next = getSize();
      if (activeSize && next.pageWidth === activeSize.pageWidth && next.mobile === activeSize.mobile) return;
      buildFlipbook({ keepPage: current });
    }, 260);
  });
}
