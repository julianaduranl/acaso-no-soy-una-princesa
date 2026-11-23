
/*
 * CONTENIDO DEL CUENTO
 * Cada objeto representa una página física.
 * Compatible con book-engine.js de la versión V4.
 */

const ART = "assets/illustrations/";

const img = (
  name,
  cls = "story-portrait",
  alt = "Ilustración editorial provisional"
) => `
  <img
    class="${cls}"
    src="${ART}${name}.svg"
    alt="${alt}"
  >
`;

const margin = (text) => `
  <aside class="paper-note">
    <p>${text}</p>
  </aside>
`;

const pending = (title, year) => `
  <div class="newspaper">
    <span class="date">ARCHIVO POR DOCUMENTAR · ${year}</span>
    <h3>${title}</h3>
    <p>Esta composición es un marcador editorial,
    no una publicidad histórica original.</p>
    <span class="ad-badge">AÑADIR ANUNCIO CON FUENTE</span>
  </div>
`;

function page(
  id,
  chapter,
  title,
  body,
  kind = "story",
  opts = {}
) {
  return { id, chapter, title, body, kind, ...opts };
}


// HISTORIA COMPLETA · edición documentada
export const pages = [
page(
    "portada",
    "Portada",
    "¿Acaso no soy una princesa?",
    `
    <div class="cover-inner cover-redesign"><style>
/* Archivo histórico y hojas continuas */
#flipbook .page--story,#flipbook .page--regular,#flipbook .page--story .paper-inner,#flipbook .page--regular .paper-inner {
  background-color:#f8eddb!important;background-image:none!important;
}
#flipbook .page--chapter .paper-inner {background:#39283c!important}
#flipbook .archive-ad {margin:8px auto 9px;width:93%;text-align:center}
#flipbook .archive-ad__image {display:block;max-height:177px;min-height:116px;margin:auto;object-fit:contain;max-width:100%;width:auto;border:1px solid #d5bea5;box-shadow:0 5px 14px #3c26341a;background:#eee3d4}
#flipbook .archive-ad figcaption {font-size:9px;line-height:1.4;font-family:var(--font-sans),sans-serif;font-style:italic;color:#76645c;margin-top:5px}
#flipbook .archive-ad a,#flipbook .archive-excerpt a,#flipbook .archive-link {color:#87536f;text-decoration:underline;text-underline-offset:2px}
#flipbook .archive-excerpt {border:1px solid #a98d68;outline:1px solid #d8c5aa;outline-offset:-5px;background:#ead9bb;padding:14px 18px 12px;margin:10px auto 12px;text-align:center;max-width:100%;box-shadow:2px 4px 10px #65493213}
#flipbook .archive-excerpt__label {display:block;font:700 8px/1.4 var(--font-sans),sans-serif;letter-spacing:.13em;color:#76583f;margin-bottom:7px}
#flipbook .archive-excerpt__headline {font:600 22px/1.08 Georgia,serif;letter-spacing:-.02em;color:#4d372e;margin:0 0 8px}
#flipbook .archive-excerpt__quote {font:italic 14px/1.28 Georgia,serif;color:#5a4037;margin:0 0 6px}
#flipbook .archive-excerpt__note {font:9px/1.45 var(--font-sans),sans-serif;color:#765e50;margin:0}
#flipbook .archive-source {font:10px/1.5 var(--font-sans),sans-serif;margin:6px 0!important}
#flipbook .archive-source a {color:#87536f;text-decoration:underline;text-underline-offset:2px}
#flipbook .study-note {background:#eedecd;border-left:2px solid #b17e94;padding:9px 12px;font-size:12px;line-height:1.48;margin:9px 0}
#flipbook .study-note strong {color:#74415b}
#flipbook .archive-step {font:700 9px/1.4 var(--font-sans),sans-serif;color:#a27360;letter-spacing:.18em}
#flipbook .cuento-imagen--sin-marco {width:100%;margin:5px auto;padding:0;background:transparent;border:0}
#flipbook .cuento-imagen--sin-marco img {display:block;height:145px;max-height:145px;max-width:100%;width:100%;object-fit:contain;margin:0 auto;box-shadow:none;border:0}
#flipbook .cuento-cierre {font:italic 15px/1.4 var(--font-display),Georgia,serif;color:#955c77;text-align:center;margin:8px 0}
#flipbook .cuento-video iframe {aspect-ratio:16/9;width:100%;height:auto}
#flipbook .refs a {color:#87536f;text-decoration:underline}
@media(max-height:720px){#flipbook .archive-ad__image{max-height:135px;min-height:95px}#flipbook .archive-excerpt{padding:10px 14px;margin:6px auto}}

/* Acabado editorial: hojas consistentes, anuncios grandes y libro más inmersivo */
#flipbook .page--story, #flipbook .page--regular {background:#f8eddb!important;background-image:none!important}
#flipbook .page--story .paper-inner, #flipbook .page--regular .paper-inner {background:transparent!important;background-image:none!important}
#flipbook .archive-ad--large {width:100%;margin:8px auto 11px;text-align:center}
#flipbook .archive-ad--large>a {height:215px;display:flex;justify-content:center;align-items:center;padding:5px;border:1px solid #d5bf9b;background:#eee0c9;box-shadow:0 4px 14px #5034261e}
#flipbook .archive-ad--large img.archive-ad__image {width:100%;height:100%;max-height:205px;object-fit:contain;background:transparent;border:0;box-shadow:none;min-height:0}
#flipbook .archive-ad--large figcaption {font:italic 10px/1.35 Georgia,serif;color:#806b61;margin:5px 0}
#flipbook .archive-ad--large figcaption a {color:#86526f;font-weight:700;text-decoration:underline}
#flipbook .archive-caveat {display:block;font:9px/1.35 var(--font-sans),sans-serif;color:#966471}
#flipbook .archivo-ficha {border:1px solid #b99f82;background:#e9dcc8;padding:12px 16px;display:flex;flex-direction:column;align-items:center;gap:6px;margin:9px auto 12px;text-align:center}
#flipbook .archivo-ficha>span {font:700 9px/1.4 var(--font-sans),sans-serif;letter-spacing:.12em;color:#896b52}
#flipbook .archivo-ficha>strong {font:600 21px/1.2 Georgia,serif;color:#4c3242}
#flipbook .archivo-ficha>em {font:italic 13px/1.4 Georgia,serif;color:#694755}
#flipbook .archivo-ficha>p {font:10px/1.4 var(--font-sans),sans-serif;color:#796663;margin:0}
#flipbook .archivo-ficha>a {font:700 10px/1.4 var(--font-sans),sans-serif;color:#925575;text-decoration:underline}
#flipbook .archivo-ficha object {width:100%;height:162px;background:#f4eadb;border:0}
#flipbook .tesis-formal {max-width:100%;padding:11px 15px;margin:7px auto;background:#f0e2d0;border-left:3px solid #a46f87}
#flipbook .tesis-formal h3 {font:700 15px/1.3 var(--font-display),Georgia,serif;color:#6b3c56;margin:8px 0 5px}
#flipbook .tesis-formal p {font:13px/1.5 Georgia,serif;color:#463742;margin:0 0 10px}
#flipbook .clean-girl-display {margin:9px auto;max-width:225px}
#flipbook .clean-girl-display img {height:140px;object-fit:contain}
#flipbook .page--story .page-title {color:#442b3d}
#flipbook .page--story .page-kicker {color:#926452}
/* La escala se calcula en book-engine.js a partir del área disponible.
   No ampliar el libro con zoom: recortaba hojas en pantallas pequeñas. */
@media (max-height:750px) {#flipbook .archive-ad--large>a {height:160px}#flipbook .archive-ad--large img.archive-ad__image{max-height:150px}#flipbook .tesis-formal p{font-size:12px}#flipbook .archivo-ficha object{height:115px}}

/* Collage editorial: recortes superpuestos con cinta adhesiva decorativa */
#flipbook .archive-collage{position:relative;width:100%;height:355px;max-height:min(60vh,355px);margin:5px auto 7px;isolation:isolate;overflow:visible;transform:translateZ(0)}
#flipbook .archive-collage__stamp{position:absolute;right:2%;top:0;z-index:1;transform:rotate(10deg);font:700 10px/1.45 var(--font-sans),sans-serif;letter-spacing:.12em;color:#986b74;border:2px solid #b48a8c;border-radius:3px;padding:5px 11px;text-align:center;opacity:.9}
#flipbook .scrap-photo{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box;padding:7px 7px 10px;background:#f1e4cf;color:#574039;text-decoration:none;box-shadow:3px 7px 13px #48312c56,0 0 0 1px #a48b7450;transform-origin:50% 50%;transition:transform .24s ease,box-shadow .24s ease;min-width:0;min-height:0}
#flipbook .scrap-photo::before{content:"";position:absolute;z-index:6;top:-7px;left:37%;width:56px;height:18px;transform:rotate(-4deg);background:repeating-linear-gradient(115deg,#d8cba2bb 0,#eadbb4bb 9px,#d9c69cbb 17px);border:1px solid #d0bd93b0;box-shadow:0 1px 2px #5b483e30;clip-path:polygon(0 0,100% 0,96% 100%,3% 100%);pointer-events:none}
#flipbook .scrap-photo:nth-of-type(2)::before{left:15%;transform:rotate(8deg)}
#flipbook .scrap-photo:nth-of-type(3)::before{left:47%;transform:rotate(-11deg)}
#flipbook .scrap-photo--one{z-index:2;left:1%;top:6%;width:58%;height:58%;transform:rotate(-9deg)}
#flipbook .scrap-photo--two{z-index:3;right:1%;top:14%;width:55%;height:62%;transform:rotate(11deg)}
#flipbook .scrap-photo--three{z-index:4;left:18%;top:48%;width:61%;height:51%;transform:rotate(-5deg)}
#flipbook .scrap-photo:hover,#flipbook .scrap-photo:focus-visible{z-index:12;transform:rotate(0) scale(1.09)!important;box-shadow:4px 11px 21px #48312c65}
#flipbook .scrap-photo__picture{display:flex;flex:1;align-items:center;justify-content:center;width:100%;min-height:0;overflow:hidden;background:#e7dac7}
#flipbook .scrap-photo__picture img{display:block;max-width:100%;max-height:100%;height:100%;width:100%;object-fit:contain;filter:grayscale(.30) sepia(.11)}
#flipbook .scrap-photo__label{display:block;flex:0 0 auto;max-width:100%;margin:4px 0 0;font:600 8px/1.25 var(--font-sans),sans-serif;text-align:center;color:#655049;letter-spacing:.02em}
#flipbook .scrap-photo--clipping{background:#eee2c8;border:1px solid #baa17c;padding:15px 8px 12px;text-align:center;gap:5px}
#flipbook .scrap-clipping__date{display:block;font:700 8px/1.3 var(--font-sans),sans-serif;color:#7b6254;letter-spacing:.16em}
#flipbook .scrap-clipping__headline{display:block;font:800 clamp(14px,2vw,22px)/1.08 Georgia,serif;color:#4d3c36;letter-spacing:-.04em}
#flipbook .scrap-clipping__quote{display:block;font:italic 12px/1.22 Georgia,serif;color:#69544c}
#flipbook .archive-collage__scribble{position:absolute;bottom:2%;right:0;transform:rotate(13deg);font-size:28px;color:#ae8d6d;opacity:.65}
#flipbook .archive-collage__note{font:italic 10px/1.45 Georgia,serif;color:#806c64;text-align:center;margin:8px 0}
#flipbook .page[data-page-id^="collage-"] .page-title{font-size:clamp(24px,2.25vw,30px);line-height:1.13;margin-bottom:3px}
#flipbook .page[data-page-id^="collage-"] .paper-scroll{overflow:visible!important}
#flipbook .page[data-page-id^="collage-"] .leaf-content{overflow:visible!important}
#flipbook .page[data-page-id^="analisis-"] .page-title{font-size:clamp(24px,2.3vw,32px);line-height:1.13}
#flipbook .page[data-page-id^="collage-"],#flipbook .page[data-page-id^="analisis-"]{background:#f8eddb!important;background-image:none!important}
#flipbook .page[data-page-id^="collage-"] .paper-inner,#flipbook .page[data-page-id^="analisis-"] .paper-inner{background:transparent!important;background-image:none!important}
@media(max-height:730px){#flipbook .archive-collage{height:280px;max-height:280px}#flipbook .scrap-photo__label{font-size:7px}#flipbook .scrap-clipping__headline{font-size:16px}}
@media(max-width:760px){#flipbook .archive-collage{height:310px;max-height:min(48vh,310px)}#flipbook .archive-collage__stamp{font-size:8px}#flipbook .scrap-photo::before{width:41px;height:15px}#flipbook .scrap-clipping__headline{font-size:16px}}
@media(prefers-reduced-motion:reduce){#flipbook .scrap-photo{transition:none}}


/* 2026-11-22 · imágenes reales, superpuestas, con cinta de papel */
#flipbook .archive-collage--photographic{height:390px;max-height:min(60vh,390px);margin:10px 0 3px}
#flipbook .archive-collage--photographic .scrap-photo{border:4px solid #f4e6ce;padding:5px 5px 8px;background:#efe1c8}
#flipbook .archive-collage--photographic .scrap-photo__picture{background:#f3e7d6}
#flipbook .archive-collage--photographic .scrap-photo__picture img{width:100%;height:100%;max-width:none;max-height:none;object-fit:contain;filter:none}
#flipbook .archive-collage--photographic .scrap-photo__label{font-size:8px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 2px}
#flipbook .archive-collage--photographic .scrap-photo--one{left:0;top:7%;width:57%;height:64%;transform:rotate(-8deg);z-index:2}
#flipbook .archive-collage--photographic .scrap-photo--two{right:0;top:12%;width:56%;height:61%;transform:rotate(7deg);z-index:3}
#flipbook .archive-collage--photographic .scrap-photo--three{left:20%;top:49%;width:60%;height:48%;transform:rotate(-5deg);z-index:4}
#flipbook .archive-collage--photographic .scrap-photo--one::before{left:30%;top:-8px}
#flipbook .archive-collage--photographic .scrap-photo--two::before{left:46%;top:-8px}
#flipbook .archive-collage--photographic .scrap-photo--three::before{left:12%;top:-7px;transform:rotate(15deg)}
#flipbook .scrap-photo--clipping{background:#e2cead!important;border:2px solid #b29b7b!important}
#flipbook .scrapbook-pdf .scrap-photo__picture object{width:100%;height:100%;pointer-events:none;background:#eee5d9}
#flipbook .archive-collage__note{font:italic 10px/1.32 Georgia,serif;color:#87736c;max-width:100%;margin:6px 0 0;text-align:center}
#flipbook .cinema-scrap{position:relative;margin:12px auto 15px;max-width:78%;width:78%;padding:9px 9px 14px;background:#eee0c8;box-shadow:3px 8px 20px #4e39334a;transform:rotate(-4deg);border:1px solid #cbb597;text-align:center}
#flipbook .cinema-scrap::before{content:"";position:absolute;width:76px;height:23px;top:-12px;left:35%;background:repeating-linear-gradient(115deg,#d2c39ab0 0,#e4d2aab0 12px,#d1c097b0 22px);border:1px solid #c8b88e88;transform:rotate(8deg);box-shadow:0 1px 4px #4b362332;pointer-events:none;z-index:6}
#flipbook .cinema-scrap:nth-of-type(2){transform:rotate(4deg)}
#flipbook .cinema-scrap>a{display:flex;align-items:center;justify-content:center;height:220px;background:#e9dfd0;max-height:220px;border:0}
#flipbook .cinema-scrap img.cinema-scrap__image{display:block;height:100%;max-height:220px;width:100%;object-fit:contain;box-shadow:none;border:0;background:transparent}
#flipbook .cinema-scrap figcaption{font:italic 10px/1.35 Georgia,serif;margin:8px 0 0;color:#755e54}
#flipbook .cinema-scrap figcaption a{color:#87536f;text-decoration:underline}
#flipbook .page[data-page-id="princesas-clasicas"] .archive-collage,#flipbook .page[data-page-id="estrellas-hollywood"] .archive-collage{height:360px}
#flipbook .page[data-page-id^="collage-"] .page-title,#flipbook .page[data-page-id="princesas-clasicas"] .page-title,#flipbook .page[data-page-id="estrellas-hollywood"] .page-title{font-size:27px;line-height:1.14}
#flipbook .page[data-page-id^="collage-"] .archive-collage__stamp{font-size:8px;right:0;top:-6px}
#flipbook .page[data-page-id^="collage-"] .paper-inner,#flipbook .page[data-page-id="princesas-clasicas"] .paper-inner,#flipbook .page[data-page-id="estrellas-hollywood"] .paper-inner{overflow:hidden}
#flipbook .page[data-page-id^="collage-"] .scrap-photo:hover,#flipbook .page[data-page-id^="collage-"] .scrap-photo:focus-visible{z-index:12}
@media (max-height:800px){#flipbook .archive-collage--photographic{height:300px;max-height:300px}#flipbook .page[data-page-id="princesas-clasicas"] .archive-collage,#flipbook .page[data-page-id="estrellas-hollywood"] .archive-collage{height:280px}#flipbook .cinema-scrap>a,#flipbook .cinema-scrap img.cinema-scrap__image{height:165px;max-height:165px}}
@media (max-width:760px){#flipbook .archive-collage--photographic{height:285px;max-height:285px}#flipbook .cinema-scrap{width:88%;max-width:88%}#flipbook .cinema-scrap>a,#flipbook .cinema-scrap img.cinema-scrap__image{height:175px;max-height:175px}}

/* 2026-11 · una sola página: princesas, actrices y publicidad */
#flipbook .page[data-page-id="princesas-clasicas"] .archive-collage.collage-imaginario {
  width:100%;height:355px;max-height:355px;margin:8px auto 11px;position:relative;
}
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario .scrap-photo{
  box-sizing:border-box;overflow:visible;border:4px solid #eee0c6;padding:4px 4px 9px;
  box-shadow:4px 7px 15px #533b3266;background:#f3e5cf;
}
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario .scrap-photo--one{
  left:1%;top:4%;width:56%;height:58%;z-index:2;transform:rotate(-8deg);
}
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario .scrap-photo--two{
  right:0%;top:12%;width:51%;height:59%;z-index:3;transform:rotate(9deg);
}
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario .scrap-photo--three{
  left:7%;top:48%;width:48%;height:50%;z-index:4;transform:rotate(5deg);
}
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario .scrap-photo--four{
  right:1%;bottom:0%;width:49%;height:46%;z-index:5;transform:rotate(-8deg);
}
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario .scrap-photo__picture{
  overflow:hidden;background:#ede0cb;width:100%;height:100%;display:flex;align-items:center;justify-content:center;
}
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario img{
  width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain;filter:none;
}
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario .scrap-photo__label{
  font-size:7px;line-height:1.15;margin-top:3px;padding:0 2px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;
}
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario .scrap-photo--four::before{
  top:-8px;left:32%;transform:rotate(-10deg);
}
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario .scrap-photo:focus-visible,
#flipbook .page[data-page-id="princesas-clasicas"] .collage-imaginario .scrap-photo:hover{
  z-index:15;transform:rotate(0deg) scale(1.06);
}
#flipbook .page[data-page-id="princesas-clasicas"] .fallback-clipping{
  display:block;color:#513738;text-align:center;font:bold 15px/1.2 Georgia,serif;padding:6px;
}
#flipbook .page[data-page-id="princesas-clasicas"] .fallback-clipping small{
  display:block;font-size:9px;line-height:1.3;margin-top:5px;
}
#flipbook .page[data-page-id="princesas-clasicas"] .page-title{font-size:27px;line-height:1.12}
#flipbook .page[data-page-id="princesas-clasicas"] .story{font-size:12px;line-height:1.45;margin-bottom:5px}
#flipbook .page[data-page-id="princesas-clasicas"] .archive-collage__note{
  font-size:10px;line-height:1.3;margin:2px 0;
}
@media(max-height:790px){
  #flipbook .page[data-page-id="princesas-clasicas"] .archive-collage.collage-imaginario{
    height:285px;max-height:285px;margin:5px auto;
  }
  #flipbook .page[data-page-id="princesas-clasicas"] .page-title{font-size:23px}
}
@media(max-width:760px){
  #flipbook .page[data-page-id="princesas-clasicas"] .archive-collage.collage-imaginario{
    height:280px;max-height:280px;
  }
}


/* Recortes originales con cinta adhesiva: siete dobles páginas cronológicas */
#flipbook .collage-epoca{position:relative;width:100%;height:min(405px,57vh);max-height:405px;margin:9px auto 5px;overflow:visible;isolation:isolate}
#flipbook .collage-epoca .image-scrap{position:absolute;box-sizing:border-box;display:flex;flex-direction:column;padding:5px 5px 9px;background:#eee0ca;border:4px solid #eee0ca;box-shadow:5px 7px 15px #47322e57;min-width:0;min-height:0;transition:transform .2s}
#flipbook .collage-epoca .image-scrap::before{content:"";width:63px;height:20px;position:absolute;top:-12px;left:31%;z-index:7;background:repeating-linear-gradient(115deg,#e0d0a9c2 0,#f1e1b8c2 11px,#d5bd95c2 23px);border:1px solid #cbb58f91;transform:rotate(7deg);box-shadow:0 1px 3px #493e3440;pointer-events:none}
#flipbook .collage-epoca .image-scrap .scrap-photo__picture{width:100%;height:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#f3e8d6}
#flipbook .collage-epoca .image-scrap img{display:block;width:100%;height:100%;object-fit:contain;max-width:100%;max-height:100%;filter:none;border:0;box-shadow:none}
#flipbook .collage-epoca .image-scrap .scrap-photo__label{display:block;flex:0 0 auto;font:700 8px/1.2 var(--font-sans),sans-serif;text-align:center;color:#665248;margin:4px 0 0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:100%}
#flipbook .collage-epoca .scrap-photo--one{top:5%;left:0;width:59%;height:66%;transform:rotate(-8deg);z-index:2}
#flipbook .collage-epoca .scrap-photo--two{top:12%;right:0;width:55%;height:65%;transform:rotate(8deg);z-index:3}
#flipbook .collage-epoca .scrap-photo--three{bottom:0;left:18%;width:59%;height:52%;transform:rotate(-5deg);z-index:4}
#flipbook .collage-epoca .scrap-photo--four{bottom:2%;right:0;width:43%;height:44%;transform:rotate(5deg);z-index:5}
#flipbook .collage-epoca .image-scrap:hover,#flipbook .collage-epoca .image-scrap:focus-visible{z-index:15;transform:rotate(0deg) scale(1.07);box-shadow:7px 12px 22px #50373766}
#flipbook .collage-epoca .archive-collage__stamp{top:-7px;right:0;font-size:9px;z-index:1}
#flipbook .page[data-page-id^="collage-"] .page-title,#flipbook .page[data-page-id^="analisis-"] .page-title{font-size:clamp(22px,2.1vw,30px);line-height:1.13;margin-bottom:7px}
#flipbook .page[data-page-id^="collage-"] .archive-collage__note{font-size:10px;line-height:1.3;margin:3px 0}
#flipbook .page[data-page-id^="analisis-"] .story{font-size:clamp(13px,1vw,16px);line-height:1.5;margin-bottom:10px}
#flipbook .page[data-page-id^="analisis-"] .study-note{font-size:11px;line-height:1.4;margin:7px 0}
#flipbook .page[data-page-id^="analisis-"] .archive-source{font-size:10px}
#flipbook .page[data-page-id^="collage-"],#flipbook .page[data-page-id^="analisis-"]{background:#f8eddb!important;background-image:none!important}
#flipbook .page[data-page-id^="collage-"] .paper-inner,#flipbook .page[data-page-id^="analisis-"] .paper-inner{background:transparent!important;background-image:none!important}
#flipbook .era-summary{padding:12px 17px;background:#eee0cf;border-left:3px solid #a87991;margin:9px 0}
#flipbook .era-summary p{font:13px/1.4 Georgia,serif;margin:8px 0;color:#473742}
#flipbook .era-summary strong{color:#763c57}
#flipbook .page[data-page-id="la-tesis"] .tesis-formal{padding:13px 16px;margin:8px 0}
#flipbook .page[data-page-id="la-tesis"] .tesis-formal p{font-size:13px;line-height:1.45}
@media(max-height:760px){#flipbook .collage-epoca{height:282px;max-height:282px}#flipbook .page[data-page-id^="analisis-"] .story{font-size:12px;margin-bottom:6px}#flipbook .page[data-page-id^="analisis-"] .study-note{font-size:10px}}
@media(max-width:760px){#flipbook .collage-epoca{height:278px;max-height:278px}}
@media(prefers-reduced-motion:reduce){#flipbook .collage-epoca .image-scrap{transition:none}}

/* Apertura histórica legible y tesis editorial */
#flipbook .page[data-page-id="reloj-atras"]{background:#f8eddb!important;background-image:none!important}
#flipbook .page[data-page-id="reloj-atras"] .paper-inner{background:transparent!important;background-image:none!important}
#flipbook .page[data-page-id="reloj-atras"] .page-kicker{color:#986957!important}
#flipbook .page[data-page-id="reloj-atras"] .page-title{font:600 clamp(28px,2.8vw,41px)/1.12 var(--font-display),Georgia,serif;color:#472c40!important;margin:5px 0 15px}
#flipbook .page[data-page-id="reloj-atras"] .story{font-size:clamp(13px,1.05vw,16px);line-height:1.5;margin-bottom:12px}
#flipbook .page[data-page-id="reloj-atras"] .archive-step{font-size:10px;color:#9a675f;letter-spacing:.13em}
#flipbook .early-history{position:relative;margin:10px auto 15px;padding:12px 15px 10px;border:1px solid #bf987b;background:#eee0cb;text-align:center;overflow:hidden}
#flipbook .early-history__top{display:block;font:700 10px/1.4 var(--font-sans),sans-serif;letter-spacing:.16em;color:#895f58}
#flipbook .early-history__heading{display:block;font:500 23px/1.12 var(--font-display),Georgia,serif;color:#5e3b47;margin:5px 0}
#flipbook .early-history svg{display:block;max-width:290px;width:100%;height:86px;margin:-3px auto -4px}
#flipbook .early-history__caption{display:block;font:italic 10px/1.45 Georgia,serif;color:#785f59}
#flipbook .page[data-page-id="la-tesis"] .page-title{font-size:clamp(29px,2.8vw,41px);line-height:1.13;margin-bottom:12px}
#flipbook .page[data-page-id="la-tesis"] .story{font-size:clamp(13px,1.08vw,16px);line-height:1.5;margin-bottom:10px}
#flipbook .page[data-page-id="la-tesis"] .thesis-statement{background:#f1e1ca;border-left:3px solid #945e79;padding:12px 16px;text-align:left}
#flipbook .page[data-page-id="la-tesis"] .thesis-statement h3{font:700 16px/1.2 var(--font-display),Georgia,serif;color:#723d58;text-align:left;margin:8px 0 4px}
#flipbook .page[data-page-id="la-tesis"] .thesis-statement p{font:13px/1.44 Georgia,serif;color:#47353e;text-align:left;margin:0 0 10px}
#flipbook .page[data-page-id="la-tesis"] .thesis-statement h3:first-child{margin-top:1px}
#flipbook .page[data-page-id="reloj-atras"] .archive-source{font-size:10px;margin:4px 0}
@media(max-height:760px){
  #flipbook .page[data-page-id="reloj-atras"] .page-title{font-size:29px;margin-bottom:9px}
  #flipbook .early-history{padding:7px 11px;margin:6px auto}
  #flipbook .early-history svg{height:58px}
  #flipbook .early-history__heading{font-size:20px}
  #flipbook .page[data-page-id="reloj-atras"] .story,#flipbook .page[data-page-id="la-tesis"] .story{font-size:12px;margin-bottom:6px}
  #flipbook .page[data-page-id="la-tesis"] .thesis-statement p{font-size:11.5px}
}


/* Archivo visual autohospedado: las fotos originales no dependen de enlaces externos */
#flipbook .collage-epoca{height:370px!important;max-height:min(51vh,370px)!important;margin:9px auto 10px}
#flipbook .collage-epoca .scrap-photo__picture{background:#f5ead8!important}
#flipbook .collage-epoca .scrap-photo__picture img{display:block;width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain!important}
#flipbook .collage-epoca--two .scrap-photo--one{top:6%;left:0;width:73%;height:82%;transform:rotate(-8deg);z-index:2}
#flipbook .collage-epoca--two .scrap-photo--two{top:14%;right:0;width:72%;height:82%;transform:rotate(8deg);z-index:3}
#flipbook .collage-epoca .image-scrap--illustrative{background:#eee2d2}
#flipbook .collage-epoca .image-scrap--illustrative .scrap-photo__picture{background:#f7ebdf!important}
#flipbook .collage-epoca .image-scrap--illustrative img{padding:8px;box-sizing:border-box}
#flipbook .collage-epoca .image-scrap--illustrative .scrap-photo__label::after{content:" · ilustración";font-style:italic;font-weight:400}
#flipbook .page[data-page-id^="collage-"] .archive-collage__note{font-size:10px;line-height:1.34;max-width:96%;text-align:center;margin:7px auto}
@media(max-height:760px){#flipbook .collage-epoca{height:282px!important;max-height:282px!important}}
@media(max-width:760px){#flipbook .collage-epoca{height:280px!important;max-height:280px!important}}

</style>

      <span class="cover-tiny">
        ÉRASE UNA VEZ...
      </span>

      <div class="cover-main">

        <svg
          class="cover-crown"
          viewBox="0 0 500 160"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g
            fill="none"
            stroke="#eac78e"
            stroke-width="2.6"
            stroke-linecap="round"
          >
            <path d="M35 80 H188 M312 80 H465"/>
            <path d="M194 97 L178 45 L219 69 L250 20 L281 69 L322 45 L306 97 Z"/>
            <path d="M194 109 H306"/>
            <path d="M105 58 Q132 80 105 102 M395 58 Q368 80 395 102"/>
            <path d="M60 68 L44 80 L60 92 M440 68 L456 80 L440 92"/>
          </g>
          <g fill="#f5d69c">
            <circle cx="250" cy="20" r="4"/>
            <circle cx="180" cy="45" r="3"/>
            <circle cx="320" cy="45" r="3"/>
            <circle cx="250" cy="83" r="5"/>
          </g>
        </svg>

        <h1 class="cover-title cover-title--storybook">
          <span class="cover-title__line">¿ACASO</span>
          <span class="cover-title__line">NO SOY</span>
          <span class="cover-title__line cover-title__line--last">
            UNA PRINCESA?
          </span>
        </h1>

        <p class="cover-subtitle">
          La belleza que nos enseñaron a esconder
        </p>

        <div class="cover-princesses"><img class="cover-princesses-image" src="assets/illustrations/princesas-lineas.png" alt="Dos princesas, una crespa y otra lisa, con igual dignidad y belleza"><span class="cover-princesses__caption">DOS CORONAS. LA MISMA BELLEZA.</span></div>
      </div>

      <div class="cover-signature">
        <span class="cover-signature__ornament" aria-hidden="true">
          ✦
        </span>
        <p class="cover-author">Juliana Durán</p>
        <span class="cover-bylines">NUEVOS MEDIOS · 2026</span>
      </div>

    </div>
    `,
    "cover"
  ),


  
  // PÁGINA 1 — ÉRASE UNA VEZ JULIANA

page(
  'erase-una-vez',
  'Capítulo I · Había una vez',
  'Érase una vez... Juliana.',
  `
  <p class="story dropcap">
    Había una vez una niña llamada
    <strong>Juliana</strong>, que creció
    rodeada de cuentos de hadas,
    películas y princesas.
  </p>

  <p class="story">
    Su papá tenía el pelo crespo y su mamá
    lo tenía liso. El suyo parecía estar
    justo en la mitad: no era completamente
    liso ni completamente crespo.
  </p>

  <p class="story">
    Era esponjado, con mucho volumen,
    y Juliana nunca sabía muy bien cómo
    peinarlo. Como su mamá tenía el pelo
    liso, tampoco sabía a quién acudir
    para aprender a manejar el suyo.
  </p>

  <figure class="cuento-imagen cuento-imagen--sin-marco">
    <img
      src="assets/images/juliana-nina.png"
      alt="Ilustración de Juliana cuando era pequeña"
    >
  </figure>

  <p class="cuento-cierre">
    Hasta que un día, una película
    pareció darle la respuesta...
  </p>
  `
),


  // PÁGINA 2 — LA PELÍCULA

page(
    'princesa-mia',
    'Capítulo I · Había una vez',
    'La película que cambió mi cuento.',
    `
    <p class="story">
      Un día vi <em>El diario de la princesa</em>
      (2001), donde Mia Thermopolis
      descubre que es una princesa.
    </p>

    <p class="story">
      Mia tenía un pelo muy parecido al mío:
      esponjado, voluminoso y difícil de
      controlar. Pero para parecer una
      princesa, tenía que pasar por una
      transformación.
    </p>

    <figure class="cuento-video">
      <iframe
        src="https://www.youtube-nocookie.com/embed/LqYlBS7LUoE?start=90"
        title="Transformación de Mia Thermopolis"
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <figcaption>
        The Princess Diaries (2001).
        Escena compartida por Disney UK.
      </figcaption>
    </figure>

    <p class="story">
      Le cambiaron la ropa, las gafas
      y, sobre todo,
      <strong>le alisaron el pelo.</strong>
    </p>

    <p class="story">
      Ese día entendí algo que se quedaría
      conmigo durante años: si quería
      ser bonita, si quería parecer
      una princesa, tenía que tener
      el pelo liso.
    </p>

    <p class="cuento-pregunta">
      Pero Mia ya era una princesa
      antes de que le alisaran el pelo.
      Entonces, ¿por qué tenía que cambiar?
    </p>

    
    `
  ),

  // ==========================================
  // PÁGINA 3 — MI PROPIA TRANSFORMACIÓN
  // ==========================================

page(
    'el-espejo',
    'Capítulo II · La transformación',
    'Y así comenzó mi transformación.',
    `
    <p class="story dropcap">
      Desde aquel día, decidí que
      <strong>quería tener el pelo liso.</strong>
      Si así era como Mia se había convertido
      en una princesa, yo también quería
      verme de esa manera.
    </p>

    <p class="story">
      Además, parecía mucho más fácil
      de manejar. Dejé de intentar entender
      mis crespos y empecé a buscar maneras
      de mantenerlos bajo control.
    </p>

    <p class="story">
      A veces me hacía trenzas.
      Otras veces me alisaba el pelo.
      Con el tiempo, llegué a hacerme
      tratamientos de queratina.
    </p>

    <p class="story">
      Lo hice durante años, tantos que
      terminé dañando mi pelo
      en el intento de transformarlo.
    </p>

    <div class="ornament-line">✦</div>

    <p class="narrative-quote">
      Pasé años intentando cambiar
      el pelo que tenía, para conseguir
      el pelo que creía que debía tener.
    </p>

    <p class="story">
      Y durante todo ese tiempo,
      nunca me detuve a preguntarme
      de dónde había salido aquella idea.
    </p>
    `
  ),

  // ==========================================
  // PÁGINA 4 — NO ERA LA ÚNICA
  // ==========================================

page(
    'transformacion',
    'Capítulo II · La transformación',
    'Pero yo no era la única...',
    `
    <p class="story dropcap">
      Lo que Juliana no sabía era que
      <strong>su historia no era la única.</strong>
    </p>

    <p class="story">
      Mucho antes de que ella naciera,
      e incluso antes de que Mia Thermopolis
      apareciera en el cine, generaciones
      de mujeres habían crecido rodeadas
      de ideales sobre cómo debía verse
      su pelo.
    </p>

    <p class="story">
      Durante décadas, la publicidad
      presentó ciertos tipos de pelo
      como elegantes, arreglados y deseables,
      mientras ofrecía productos para
      alisar, controlar o transformar otros.
    </p>

    <p class="story">
      No todas las mujeres se alisaban
      por las mismas razones. Pero aquellas
      imágenes ayudaron a construir
      una idea de belleza que se repitió
      de generación en generación.
    </p>

    <div class="ornament-line">✦</div>

    <p class="narrative-quote">
      Porque antes de que Juliana
      quisiera cambiar sus crespos,
      el mundo llevaba mucho tiempo
      diciéndole a las mujeres
      cómo debía verse su pelo.
    </p>

    <p class="story">
      Para entender cómo nació esta idea,
      nuestro cuento tendrá que
      <em>retroceder en el tiempo...</em>
    </p>
    `
  ),

  // ==================================================
  // CAPÍTULO II
  // ==================================================

page("la-tesis","Capítulo II · La transformación","¿Quién nos enseñó qué pelo era bello?",`
<p class="story dropcap">Cuando era pequeña, las películas me enseñaron a admirar cierto tipo de pelo. Con el tiempo entendí que esas imágenes formaban parte de una historia mucho más larga.</p>
<div class="thesis-page tesis-formal thesis-statement">
<h3>Pregunta de investigación</h3>
<p>¿Cómo han contribuido el cine y la publicidad a construir ideales de belleza sobre el pelo crespo, y cómo pueden también cuestionarlos?</p>
<h3>Tesis</h3>
<p>Los medios no solo reflejan lo que consideramos bello: también ayudan a construirlo. Durante décadas, parte del cine y la publicidad vinculó el pelo liso o controlado con elegancia y mostró el crespo como algo que debía corregirse. Pero esas mismas imágenes y plataformas también han servido para cuestionar el estereotipo, reivindicar las texturas naturales y ampliar las formas en que podemos reconocernos como personas bellas.</p>
</div>
<p class="story"><strong>Este ensayo sigue ese doble movimiento: cómo se construyó un ideal excluyente, cómo empezó a cuestionarse y por qué la representación puede cambiar la manera en que nos miramos.</strong></p>
`,"story"),

page("reloj-atras","Capítulo III · ¿De dónde surgió el rechazo?","Todo empezó mucho antes de mí.",`
<span class="archive-step">PRINCIPIOS DEL SIGLO XX · EL INICIO DE NUESTRO RECORRIDO</span>
<p class="story dropcap">Mucho antes de Mia Thermopolis y de las redes sociales, ya existía una promesa: <strong>transformar el pelo crespo para acercarlo a un ideal de belleza.</strong></p>
<div class="early-history">
  <span class="early-history__top">HACIA 1900</span>
  <span class="early-history__heading">Del peine caliente<br>a la promesa de alisado</span>
  <svg viewBox="0 0 310 94" aria-label="Ilustración editorial de un peine caliente histórico" role="img">
    <g transform="translate(31 24) rotate(-8 124 25)" fill="none" stroke="#6b4a45" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 26 Q48 17 80 19 L136 18 L174 22 L186 32 L173 41 L136 45 L80 42 Q45 45 5 36Z" fill="#b49a79" stroke-width="3"/>
      <path d="M185 22 L263 19 L268 42 L186 40Z" fill="#cbad80" stroke-width="3"/>
      <g stroke-width="2.4">
        <path d="M192 40 L190 65 M201 41 L200 69 M210 40 L210 70 M219 40 L220 70 M228 40 L229 68 M237 40 L239 66 M246 41 L248 63 M255 40 L258 60"/>
      </g>
      <path d="M40 25 L140 23" stroke="#f4e6c9" stroke-width="2"/>
    </g>
  </svg>
  <span class="early-history__caption">El <em>hot comb</em> alisaba temporalmente el pelo mediante calor. · Ilustración editorial</span>
</div>
<p class="story">El peine caliente ya existía desde el siglo XIX, pero a comienzos del XX ganó protagonismo en la industria capilar afroamericana. Su uso ofrecía posibilidades para peinarse, y también respondía a una sociedad que asociaba el pelo liso con una apariencia respetable.</p>
<p class="story">No fue el nacimiento del rechazo a los crespos. Fue uno de los momentos en que <strong>ese ideal se volvió visible y comercial</strong>.</p>

`,"story"),

page("collage-1900","Capítulo III · ¿De dónde surgió el rechazo?","1900–1939 · Los recortes",`<span class="archive-step">LAS PRIMERAS PROMESAS DE TRANSFORMACIÓN</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--two"><span class="archive-collage__stamp">1900–1939<br>ARCHIVO</span><div class="scrap-photo scrap-photo--one image-scrap"><span class="scrap-photo__picture"><img src="assets/ads/ozonized-1903.webp" alt="Publicidad Wonderful Discovery: pelo crespo antes y alisado después" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Ozonized Ox Marrow · 1903</span></div><div class="scrap-photo scrap-photo--two image-scrap"><span class="scrap-photo__picture"><img src="assets/ads/ploughs-1919.webp" alt="Anuncio auténtico Take Out The Kinks de Plough's Hair Dressing" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Plough's · 1919</span></div><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Recortes originales de 1903 y 1919: dos anuncios distintos que muestran cómo el alisado se ofrecía como mejora.</p>`,"story"),

page("analisis-1900","Capítulo III · ¿De dónde surgió el rechazo?","1900–1939 · El crespo se convertía en un problema",`<span class="archive-step">ANÁLISIS · LAS PRIMERAS PROMESAS DE TRANSFORMACIÓN</span><p class="story">A comienzos del siglo XX, la publicidad de productos capilares ofrecía alisar el pelo afro con pomadas y peines calientes. En <strong>1919</strong>, Plough's Hair Dressing vinculó el pelo <em>curly</em> y <em>kinky</em> con el adjetivo <em>ugly</em> («feo»).</p><p class="story">En los años treinta, anuncios como <em>Slick Black</em> incluían el alisado temporal entre sus promesas. El pelo natural podía presentarse como algo que debía transformarse para conseguir una apariencia deseable.</p><p class="story">Esas imágenes circularon en una sociedad atravesada por la segregación racial. <strong>Para las mujeres negras, el pelo también podía relacionarse con prejuicios y aceptación social</strong>, aunque alisarse no tuviera el mismo significado para todas.</p><div class="study-note"><strong>Argumento:</strong> la publicidad no inventó por sí sola el racismo, pero pudo aprovecharlo y reproducirlo para vender productos.</div>`,"story"),

page("collage-1940","Capítulo III · ¿De dónde surgió el rechazo?","1940–1959 · Los recortes",`<span class="archive-step">LA BELLEZA PULIDA Y LOS ALISADOS DURADEROS</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">1940–1959<br>ARCHIVO</span><div class="scrap-photo scrap-photo--one image-scrap"><span class="scrap-photo__picture"><img src="assets/ads/perma-fashion.webp" alt="Anuncio Fashion Demands Straight Hair de Perma-Strate, fecha específica por verificar" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Perma-Strate · publicidad de época</span></div><div class="scrap-photo scrap-photo--two image-scrap"><span class="scrap-photo__picture"><img src="https://www.originalfilmart.com/cdn/shop/products/cinderella_1950_styleB_half_sheet_linen_original_film_art_2000x.jpg?v=1617370865" alt="Póster original de Cenicienta 1950" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/princesas-lineas.png';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Cenicienta · 1950</span></div><div class="scrap-photo scrap-photo--three image-scrap"><span class="scrap-photo__picture"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Monroe_1953_publicity_%28cropped%29.jpg" alt="Retrato publicitario de Marilyn Monroe con pelo ondulado, 1953" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Marilyn Monroe · 1953</span></div><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Publicidad de Perma-Strate y referencias visuales del cine de los años cincuenta. Si una imagen externa falla, aparece una ilustración editorial.</p>`,"story"),

page("analisis-1940","Capítulo III · ¿De dónde surgió el rechazo?","1940–1959 · El alisado se vendía como moda",`<span class="archive-step">ANÁLISIS · LA BELLEZA PULIDA Y LOS ALISADOS DURADEROS</span><p class="story">El alisado pasó de ser una posibilidad técnica a una promesa de duración. <strong>Perma-Strate ya anunciaba en 1948</strong> tratamientos capaces de mantener el pelo liso durante meses.</p><p class="story">En paralelo, el cine popularizaba modelos de belleza cuidadosamente elaborada, como Cenicienta o las estrellas de Hollywood. No todas llevaban el pelo liso —Marilyn Monroe usaba ondas—, pero sí una apariencia especialmente pulida.</p><p class="story">Una publicidad de Perma-Strate llegó a declarar: <strong>«Fashion Demands Straight Hair!»</strong>. Su fecha exacta no está establecida; sirve para ilustrar la presión comercial, no para fecharla en 1950.</p><div class="study-note"><strong>Stuart Hall:</strong> la reiteración de imágenes ayuda a construir qué apariencias son percibidas como elegantes o admirables.</div>`,"story"),

page("collage-1970","Capítulo III · ¿De dónde surgió el rechazo?","1960–1979 · Los recortes",`<span class="archive-step">BLACK IS BEAUTIFUL Y LA PUBLICIDAD DEL AFRO</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">1960–1979<br>ARCHIVO</span><div class="scrap-photo scrap-photo--one image-scrap"><span class="scrap-photo__picture"><img src="assets/ads/hair-strate-1960.webp" alt="Publicidad auténtica Hair Strate, Swim Shower Shampoo, pelo alisado no regresa a rizo" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Hair-Strate · 1960</span></div><div class="scrap-photo scrap-photo--two image-scrap"><span class="scrap-photo__picture"><img src="assets/ads/afro-sheen-1970.webp" alt="Anuncio de una familia negra con afros naturales y productos Afro Sheen" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Afro Sheen · años setenta</span></div><div class="scrap-photo scrap-photo--three image-scrap"><span class="scrap-photo__picture"><img src="assets/ads/perma-first-straighten.webp" alt="Publicidad Perma-Strate First Straighten Then Style" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Perma-Strate · primeros setenta</span></div><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Tres anuncios reales de época: el alisado duradero y la celebración del afro convivían en el mismo periodo.</p>`,"story"),

page("analisis-1970","Capítulo III · ¿De dónde surgió el rechazo?","1960–1979 · El afro desafió el ideal dominante",`<span class="archive-step">ANÁLISIS · BLACK IS BEAUTIFUL Y LA PUBLICIDAD DEL AFRO</span><p class="story">Desde los años sesenta, el movimiento <strong>Black Is Beautiful</strong> reivindicó el afro natural como símbolo de orgullo racial. Era una respuesta a siglos de discriminación y a los ideales que privilegiaban rasgos europeos.</p><p class="story">Pero el cambio no fue inmediato: Hair-Strate (1960) y Perma-Strate (1965 y 1971) seguían vendiendo el alisado. Al mismo tiempo, anuncios como Ultra Sheen (1970) mostraban afros como una forma legítima de belleza.</p><p class="story"><strong>La misma década contenía mensajes opuestos.</strong> La aceptación del pelo afro no empezó con las redes sociales: ya existían movimientos culturales que la defendían.</p>`,"story"),

page("collage-1990","Capítulo III · ¿De dónde surgió el rechazo?","1980–1999 · Los recortes",`
<span class="archive-step">TRES FORMAS DE VENDER EL CONTROL DEL PELO EN LOS NOVENTA</span>
<div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi">
  <span class="archive-collage__stamp">1980–1999<br>ARCHIVO</span>
  <div class="scrap-photo scrap-photo--one image-scrap">
    <span class="scrap-photo__picture">
      <img src="https://hips.hearstapps.com/hmg-prod/images/historical-just-for-me-ad-autumn-yarbrough-in-yellow-1-662665c8b27ba.png?resize=640%3A%2A" alt="Publicidad histórica de Just for Me: niñas junto a productos para su pelo y alisador infantil" loading="lazy" onerror="this.onerror=null;this.closest('.scrap-photo').classList.add('is-missing');">
      <span class="scrap-archive-fallback">JUST FOR ME<small>Alisado dirigido a niñas<br>Década de 1990</small></span>
    </span>
    <span class="scrap-photo__label">Just for Me · años 90</span>
  </div>
  <div class="scrap-photo scrap-photo--two image-scrap">
    <span class="scrap-photo__picture"><img src="assets/ads/frizz-ease-1994.webp" alt="Anuncio original de John Frieda Frizz-Ease de 1994: No More Frizz" loading="lazy" onerror="this.onerror=null;this.closest('.scrap-photo').classList.add('is-missing');"><span class="scrap-archive-fallback">NO MORE FRIZZ<small>John Frieda · 1994<br>El frizz como problema</small></span></span>
    <span class="scrap-photo__label">Frizz-Ease · 1994</span>
  </div>
  <div class="scrap-photo scrap-photo--three image-scrap">
    <span class="scrap-photo__picture">
      <img src="https://adroots.wordpress.com/wp-content/uploads/2024/03/early-black-hair-ad.png?w=646" alt="Anuncio African Pride en Today's Black Women (1996), con palabras confianza, orgullo y poder ligadas al control del pelo" loading="lazy" onerror="this.onerror=null;this.closest('.scrap-photo').classList.add('is-missing');">
      <span class="scrap-archive-fallback">CONFIDENCE.<br>PRIDE.<br>POWER.<small>African Pride · 1996<br>Cuidado y control</small></span>
    </span>
    <span class="scrap-photo__label">African Pride · 1996</span>
  </div>
  <span class="archive-collage__scribble" aria-hidden="true">✶</span>
</div>
<p class="archive-collage__note">Tres anuncios distintos de los noventa: alisado para niñas, tratamiento anti-frizz y confianza asociada al control del pelo.</p>
`,"story"),

page("analisis-1990","Capítulo III · ¿De dónde surgió el rechazo?","1980–1999 · El pelo debía estar bajo control",`
<span class="archive-step">ANÁLISIS · TRES MENSAJES PUBLICITARIOS DE LOS NOVENTA</span>
<p class="story">En los años noventa, la publicidad del pelo no transmitía un único ideal. Sin embargo, varios anuncios compartían una promesa: <strong>hacer que la textura fuera más fácil de manejar y se ajustara a una apariencia deseable</strong>.</p>
<p class="story"><strong>Just for Me</strong>, lanzado a comienzos de esa década, vendía alisadores dirigidos a niñas. El mercado llegaba así a consumidoras muy jóvenes, aunque sus elecciones y circunstancias no fueran iguales.</p>
<p class="story">En <strong>1994</strong>, John Frieda <em>Frizz-Ease</em> presentó el frizz como algo que debía «curarse». También mostraba rizos definidos como resultado posible: la promesa no era siempre alisar, sino <strong>controlar el volumen</strong>.</p>
<p class="story">Un anuncio de <strong>African Pride (1996)</strong> asociaba confianza, orgullo y poder con controlar el pelo. En esa imagen se promocionaban acondicionadores: el mensaje iba más allá del alisado químico.</p>
<div class="study-note"><strong>Lectura del periodo:</strong> distintos productos podían reforzar una misma expectativa: que el pelo natural necesitaba intervención para verse «bien».</div>

`,"story"),

page("collage-2000","Capítulo III · ¿De dónde surgió el rechazo?","2000–2009 · Los recortes",`
<span class="archive-step">VOLUMEN, HUMEDAD Y «PELO PERFECTO» EN LOS 2000</span>
<div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi">
  <span class="archive-collage__stamp">2000–2009<br>ARCHIVO</span>
  <div class="scrap-photo scrap-photo--one image-scrap">
    <span class="scrap-photo__picture">
      <img src="assets/ads/seda-anti-sponge.webp" alt="Anuncio de Seda Anti-Sponge de 2006: dos leones con diferente volumen de melena" loading="lazy" onerror="this.onerror=null;this.closest('.scrap-photo').classList.add('is-missing');">
      <span class="scrap-archive-fallback">ANTI-SPONGE<small>Seda · 2006<br>El volumen como problema</small></span>
    </span>
    <span class="scrap-photo__label">Seda Anti-Sponge · 2006</span>
  </div>
  <div class="scrap-photo scrap-photo--two image-scrap">
    <span class="scrap-photo__picture">
      <img src="https://i.ebayimg.com/images/g/UYoAAOSwosNjPPSv/s-l1200.jpg" alt="Publicidad impresa de Garnier Fructis Sleek and Shine de 2007 con modelo de pelo liso y el titular Defy Humidity, Go Sleek" loading="lazy" onerror="this.onerror=null;this.closest('.scrap-photo').classList.add('is-missing');">
      <span class="scrap-archive-fallback">DEFY HUMIDITY<small>Garnier Fructis · 2007<br>Alisar y resistir la humedad</small></span>
    </span>
    <span class="scrap-photo__label">Garnier Fructis · 2007</span>
  </div>
  <div class="scrap-photo scrap-photo--three image-scrap">
    <span class="scrap-photo__picture">
      <img src="https://2.bp.blogspot.com/_yOCCyZjbOAA/SKXsPJn2AZI/AAAAAAAAAR4/C_CGSy1aih4/s400/mr004.png" alt="Imagen promocional de envases de Seda Teens Frizz e'limy, creada para Brasil en 2008, de color verde lima y morado" loading="lazy" onerror="this.onerror=null;this.closest('.scrap-photo').classList.add('is-missing');">
      <span class="scrap-archive-fallback">SEDA TEENS<small>Frizz e'limy · Brasil, 2008<br>Productos dirigidos a adolescentes</small></span>
    </span>
    <span class="scrap-photo__label">Seda Teens · Brasil, 2008</span>
  </div>
  <span class="archive-collage__scribble" aria-hidden="true">✶</span>
</div>
<p class="archive-collage__note">Tres piezas distintas de 2006–2008: un anuncio brasileño, una publicidad estadounidense y una imagen promocional brasileña. La campaña colombiana de Sedal Teens de 2008 se analiza al lado.</p>
`,"story"),

page("analisis-2000","Capítulo III · ¿De dónde surgió el rechazo?","2000–2009 · Lo esponjado llegó a nuestra infancia",`
<span class="archive-step">ANÁLISIS · FRIZZ Y «PELO REBELDE» EN LOS 2000</span>
<p class="story">En <strong>2006</strong>, Seda Anti-Sponge comparó el pelo voluminoso con la melena de un león. La transformación visual sugería que había que <strong>domar lo «esponjado»</strong> para verse mejor.</p>
<p class="story">En <strong>2007</strong>, Garnier Fructis <em>Sleek &amp; Shine</em> anunciaba que su producto permitía desafiar la humedad y mantener el pelo liso. La textura natural aparecía como algo que debía controlarse incluso frente al clima.</p>
<p class="story">En <strong>Colombia, Sedal Teens lanzó Bye Bye Frizz en 2008</strong> para adolescentes. Su publicidad prometía acercarlas al «pelo perfecto» y ayudar a controlar el pelo «rebelde». La imagen del collage muestra la línea juvenil brasileña del mismo año, no el anuncio colombiano.</p>
<p class="story">Yo también decía que tenía el pelo <em>esponjado</em>. Y la transformación de Mia en <em>El diario de la princesa</em> (2001) me había enseñado a asociar el alisado con verse mejor.</p>
<div class="study-note"><strong>Relación personal:</strong> la repetición de estos mensajes hizo que el volumen pareciera un defecto, no una característica de mi pelo.</div>

`,"story"),

page("collage-2010","Capítulo III · ¿De dónde surgió el rechazo?","2010–2019 · Los recortes",`<span class="archive-step">DEL CONTROL DEL FRIZZ A AMAR LOS RIZOS</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">2010–2019<br>ARCHIVO</span><div class="scrap-photo scrap-photo--one image-scrap"><span class="scrap-photo__picture"><img src="assets/ads/john-frieda-2011.webp" alt="Campaña de Frizz Ease en que una mujer quema una foto de su pelo con volumen" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">John Frieda · pelo «antes»</span></div><div class="scrap-photo scrap-photo--two image-scrap"><span class="scrap-photo__picture"><img src="assets/ads/dove-curls-2015.webp" alt="Publicidad Dove Love Your Curls sobre la ausencia de emojis de personas crespas" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Dove · Love Your Curls, 2015</span></div><div class="scrap-photo scrap-photo--three image-scrap"><span class="scrap-photo__picture"><img src="assets/ads/valiente-2012-poster.jpg" alt="Póster de Valiente con princesa Mérida rizada" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/princesas-lineas.png';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Valiente · 2012</span></div><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Dos campañas auténticas sobre el pelo y una referencia cinematográfica. Imágenes de anuncios guardadas dentro del proyecto.</p>`,"story"),

page("analisis-2010","Capítulo III · ¿De dónde surgió el rechazo?","2010–2019 · El cambio empezó a verse en los medios",`<span class="archive-step">ANÁLISIS · DEL CONTROL DEL FRIZZ A AMAR LOS RIZOS</span><p class="story">En 2011 todavía aparecían campañas que presentaban el pelo voluminoso como un «antes» que debía desaparecer. Pero en <strong>2015 Dove lanzó Love Your Curls</strong>, una campaña que invitaba a apreciar los rizos.</p><p class="story">El cine también empezó a ampliar sus protagonistas: <em>Valiente</em> (2012) mostraba a Mérida con una melena muy rizada; <em>Moana</em> (2016) llevaba el pelo ondulado sin necesidad de una transformación estética.</p><p class="story"><strong>2015 es un cambio visible dentro del archivo que analizamos</strong>, no el año en que nació la aceptación. Black Is Beautiful ya había defendido el pelo natural décadas atrás.</p><div class="study-note"><strong>Dos caras de los medios:</strong> las imágenes pueden repetir un estereotipo o desafiarlo. Incluso una campaña que celebra la diversidad sigue siendo publicidad.</div>`,"story"),

page("collage-2020","Capítulo III · ¿De dónde surgió el rechazo?","2020–2023 · Los recortes",`<span class="archive-step">PELO NATURALES Y TENDENCIAS DIGITALES</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">2020–2023<br>ARCHIVO</span><div class="scrap-photo scrap-photo--one image-scrap"><span class="scrap-photo__picture"><img src="https://lumiere-a.akamaihd.net/v1/images/au_disney_encanto_payoff_movie_poster_1e7be9e9.jpeg" alt="Póster de Encanto con personajes de pelo ondulado y crespo" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/princesas-lineas.png';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Encanto · 2021</span></div><div class="scrap-photo scrap-photo--two image-scrap"><span class="scrap-photo__picture"><img src="https://www.creativemoment.co/images/uploads/features/dove-champions-hair-positivity-for-latinas-through-a-vibrant-music-video-myhairamimodo/_1200x630_crop_center-center_82_none/dove-lead.jpg?mtime=1698148249" alt="Campaña Dove con Li Saumet, cantante colombiana" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Dove · #MyHairAMiModo, 2023</span></div><div class="scrap-photo scrap-photo--three image-scrap"><span class="scrap-photo__picture"><img src="https://hips.hearstapps.com/hmg-prod/images/haileybieber-1689545608-3148459220022447464-7141291-690cebba8184a.jpg" alt="Moño slickback pulido de Hailey Bieber" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/bun-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Clean Girl · 2023</span></div><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Campañas y películas del periodo. Una ilustración editorial reemplaza cualquier imagen externa que no pueda mostrarse.</p>`,"story"),

page("analisis-2020","Capítulo III · ¿De dónde surgió el rechazo?","2020–2023 · La diversidad llegó a más pantallas",`<span class="archive-step">ANÁLISIS · PELO NATURALES Y TENDENCIAS DIGITALES</span><p class="story"><em>Encanto</em> (2021) mostró una familia colombiana con distintas texturas de pelo. En 2023, Dove presentó <strong>#MyHairAMiModo</strong>, con Li Saumet, para celebrar el pelo de las latinas.</p><p class="story">Al mismo tiempo, el <strong>Clean Girl Look</strong> popularizó el moño tirante y un acabado sin mechones sueltos. No hay nada malo en ese peinado, pero sí vale la pena cuestionar que se asocie con verse «limpia» o impecable.</p><p class="story">La mayor representación de los crespos no eliminó todas las presiones: ahora podían coexistir mensajes de autoaceptación con modas que exigían pulcritud extrema.</p>`,"story"),

page("collage-2026","Capítulo III · ¿De dónde surgió el rechazo?","2024–2026 · Los recortes",`<span class="archive-step">CODE MY CROWN Y NO SLICKBACK NOVEMBER</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">2024–2026<br>ARCHIVO</span><div class="scrap-photo scrap-photo--one image-scrap"><span class="scrap-photo__picture"><img src="https://dp6mhagng1yw3.cloudfront.net/entries/9th-impact/f709c46a-a9df-4324-a1de-b000c89700c2.jpg" alt="Campaña de representación de peinados afro en videojuegos" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Code My Crown · 2024</span></div><div class="scrap-photo scrap-photo--two image-scrap"><span class="scrap-photo__picture"><img src="https://imgix.bustle.com/uploads/image/2025/11/4/e714939e/screenshot-2025-11-04.png?crop=faces&amp;dpr=2&amp;fit=crop&amp;h=594&amp;w=414" alt="Creadora mostrando un peinado sin recogido tirante" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/bun-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">No Slickback November · 2025</span></div><div class="scrap-photo scrap-photo--three image-scrap"><span class="scrap-photo__picture"><img src="https://i0.wp.com/bwretailworld.com/wp-content/uploads/2025/10/KV-V2.jpg?fit=960%2C640&amp;ssl=1" alt="Publicidad Dove India Reclaim Your Curls con pelo rizado" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/princesas-lineas.png';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Reclaim Your Curls · 2025</span></div><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Campañas y tendencias recientes. Las imágenes que no carguen muestran una ilustración editorial, nunca una tarjeta vacía.</p>`,"story"),

page("analisis-2026","Capítulo III · ¿De dónde surgió el rechazo?","2024–2026 · El ideal pulido empezó a cuestionarse",`<span class="archive-step">ANÁLISIS · CODE MY CROWN Y NO SLICKBACK NOVEMBER</span><p class="story">En 2024, <strong>Code My Crown</strong> impulsó una representación más cuidadosa del pelo afro y los peinados protectores en videojuegos. La diversidad empezó a discutirse también en medios interactivos.</p><p class="story">Mientras los moños pulidos seguían de moda, <strong>No Slickback November</strong> invitó a descansar de los recogidos tirantes y probar otras formas de llevar el pelo. El reto ganó visibilidad en 2025 y continuó circulando en 2026.</p><p class="story">No se trata de prohibir los peinados lisos o recogidos. Se trata de que ninguna moda defina quién puede verse elegante.</p><div class="study-note"><strong>Conclusión del recorrido:</strong> las imágenes que imponen ideales también pueden convertirse en espacios para cuestionarlos.</div>`,"story"),

page("archivo-cierre","Capítulo III · ¿De dónde surgió el rechazo?","¿De dónde salió lo que yo sentía?",`<p class="story dropcap">El archivo muestra que los ideales sobre el pelo cambiaron con los años. No hubo una sola causa ni un momento preciso en que nació el rechazo al pelo crespo.</p><div class="era-summary"><p><strong>1900–1959:</strong> se anunciaba que algunas texturas debían transformarse; el alisado se vinculó con moda, belleza y respeto social.</p><p><strong>1960–1979:</strong> Black Is Beautiful cuestionó el ideal dominante, aunque persistió la publicidad del alisado.</p><p><strong>1980–2009:</strong> el lenguaje comercial recurrió a palabras como frizz, control y pelo «rebelde», incluso para adolescentes.</p><p><strong>2010–2026:</strong> crecieron las campañas de aceptación y las nuevas formas de representación, junto a otras presiones digitales.</p></div><p class="narrative-quote">La pregunta ya no es solo qué anunciaban esos productos, sino qué aprendimos a considerar bello al ver sus imágenes una y otra vez.</p>`,"story"),

page("teoria-hall","Capítulo IV · El poder de las imágenes","¿Por qué importa tanto lo que vemos?",`
<span class="archive-step">UNA CLAVE PARA LEER EL ARCHIVO</span>
<p class="story dropcap">Al terminar el recorrido histórico, aparece una pregunta: ¿por qué un anuncio de champú o una escena de cine podrían influir en algo tan personal como la relación con nuestro pelo?</p>
<p class="story">El investigador <strong>Stuart Hall (1997)</strong> ofrece una respuesta: representar no significa solamente mostrar algo que ya existe. Al elegir imágenes, palabras y personajes, los medios también participan en la construcción de lo que una cultura considera normal, deseable o bello.</p>
<p class="story">Una mujer con el pelo liso en un anuncio no es, por sí misma, el problema. El mensaje cambia cuando el pelo liso aparece repetidamente como la solución, mientras el crespo queda asociado con desorden, dificultad o falta de elegancia.</p>
<div class="study-note"><strong>Lo que tomo de Hall:</strong> no basta con preguntar quién aparece en la imagen. Hay que mirar <strong>qué significado se le da a su apariencia</strong>.</div>
`,"story"),

page("analisis-mensaje","Capítulo IV · El poder de las imágenes","El problema cambió de nombre.",`
<span class="archive-step">DEL «ALISADO» AL «CONTROL»</span>
<p class="story dropcap">A comienzos del siglo XX, algunos anuncios invitaban a eliminar los <em>kinks</em> del pelo afro. En 1919, Plough's relacionó ciertas texturas con lo feo. Décadas después, el lenguaje comercial cambió: ya no siempre se exigía alisar, sino combatir el <em>frizz</em>, dominar el volumen o conseguir un pelo «perfecto».</p>
<p class="story">En 1994, Frizz-Ease presentó el frizz como algo que necesitaba una «cura». El mismo anuncio también mostraba rizos definidos como un resultado bonito. Eso revela que el ideal no era simplemente «todo pelo liso»: también se premiaba el rizo cuando parecía suficientemente controlado.</p>
<p class="story">En 2008, Sedal Teens llevó mensajes de control del frizz a un público adolescente. Distintas décadas y públicos, pero una pregunta parecida: <strong>¿qué parte de nuestro pelo aprendimos a ver como algo que hay que arreglar?</strong></p>
`,"story"),

page("estudio-banks","Capítulo IV · El poder de las imágenes","El pelo nunca fue solo pelo.",`
<span class="archive-step">INGRID BANKS · HAIR MATTERS (2000)</span>
<p class="story dropcap">La investigación de <strong>Ingrid Banks (2000)</strong> ayuda a entender por qué estas representaciones tienen tanto peso. A partir de entrevistas con más de cincuenta mujeres negras, Banks analiza cómo hablar del pelo también es hablar de identidad, pertenencia, belleza, género y poder.</p>
<p class="story">Un peinado puede ser una decisión estética y, al mismo tiempo, una respuesta a lo que el entorno espera. Para algunas mujeres, alisarse puede resultar cómodo; para otras, llevar el pelo natural puede tener un sentido de afirmación. No existe una experiencia universal ni una sola razón para escoger una textura o un estilo.</p>
<p class="story">Eso cambia la manera de leer las publicidades: no venden únicamente productos, sino que se relacionan con ideas sobre cómo queremos ser vistas y aceptadas. <strong>La presión surge cuando una opción deja de parecer una opción y empieza a sentirse como una obligación.</strong></p>
`,"story"),

page("estudio-sesgos","Capítulo IV · El poder de las imágenes","Cuando el prejuicio sale de la pantalla.",`
<span class="archive-step">GOOD HAIR STUDY · PERCEPTION INSTITUTE (2017)</span>
<p class="story dropcap">Los ideales de belleza no se quedan necesariamente en la publicidad. El <strong>Good Hair Study</strong> (2017) investigó actitudes explícitas e implícitas frente al pelo natural de mujeres negras en Estados Unidos y encontró evidencia de prejuicios hacia las texturas afro.</p>
<p class="story">Es un estudio exploratorio y su población no representa a todas las personas ni a Colombia. Tampoco demuestra que un anuncio concreto haya producido esos prejuicios. Lo importante aquí es otra cosa: muestra que ciertas ideas sobre el pelo pueden convertirse en evaluaciones sociales de la apariencia.</p>
<p class="story">Resulta especialmente significativo que las participantes vinculadas con una comunidad de pelo natural mostraran actitudes más positivas. <strong>Ese dato no prueba que ver imágenes distintas transforme automáticamente la autoestima</strong>, pero invita a pensar en la importancia de los espacios que celebran texturas antes desvalorizadas.</p>
`,"story"),

page("sintesis-archivo","Capítulo IV · El poder de las imágenes","Lo que las tres lecturas permiten concluir.",`
<span class="archive-step">DE LA TEORÍA A LOS ANUNCIOS</span>
<p class="story dropcap">Al poner los anuncios junto a estos estudios, las piezas empiezan a encajar. <strong>Hall</strong> ayuda a explicar cómo se construye el significado de lo «bonito»; <strong>Banks</strong> muestra que el pelo está ligado a identidad y a expectativas sociales; y el <strong>Good Hair Study</strong> señala que los prejuicios sobre ciertas texturas no son solamente una cuestión imaginaria.</p>
<p class="story">Mi conclusión de esta primera parte es que <strong>la repetición de un ideal puede hacer que algunas personas aprendan a mirar su pelo desde la falta</strong>: falta de orden, de control, de elegancia o de aceptación.</p>
<p class="story">Pero esto no quiere decir que todas las mujeres que se alisan rechacen sus crespos, ni que los medios determinen lo que pensamos. Las personas interpretan, resisten y eligen. Y precisamente por eso la historia no termina en las campañas que exigían transformar el pelo.</p>
<div class="study-note"><strong>Hasta aquí:</strong> los medios pueden reforzar un estereotipo. La siguiente pregunta es si también pueden ayudar a desmontarlo.</div>`,"story"),

page("otra-nina","Capítulo V · Cambiar la mirada","¿Y si las imágenes también pudieran liberarnos?",`
<div class="chapter-opener"><span class="num">✧</span><h2>Los medios ayudaron<br>a crear un ideal.<br><em>También pueden cuestionarlo.</em></h2><p>La historia del pelo crespo no es solo una historia de rechazo. También es una historia de resistencia, representación y reconocimiento.</p><span class="ornament">❦</span></div>`,"chapter"),

page("resistencia-afro","Capítulo V · Cambiar la mirada","El afro también fue una respuesta.",`
<span class="archive-step">BLACK IS BEAUTIFUL · AÑOS SESENTA Y SETENTA</span>
<p class="story dropcap">La respuesta a los estereotipos no nació con Instagram ni con TikTok. En los años sesenta, el movimiento <em>Black Is Beautiful</em> convirtió el afro en una expresión visible de orgullo racial y cuestionamiento de los ideales eurocéntricos de belleza.</p>
<p class="story">Como documenta el archivo de <strong>Duke University</strong>, la publicidad terminó incorporando imágenes de afros y mensajes de orgullo. Parte de la industria comercializó esa estética y redujo su dimensión política, pero su aparición también rompió con la idea de que el pelo afro solo podía mostrarse después de alisarlo.</p>
<p class="story">Este momento es esencial para la tesis: <strong>la misma cultura visual que podía presentar el crespo como un defecto también podía presentarlo como símbolo de belleza y dignidad</strong>. Una imagen no resuelve la discriminación, pero puede discutir públicamente lo que parecía incuestionable.</p>
`,"story"),

page("princesas-medios","Capítulo V · Cambiar la mirada","¿Qué hace diferente a una princesa?",`
<span class="archive-step">DEL DIARIO DE LA PRINCESA A VALIENTE Y ENCANTO</span>
<p class="story dropcap">En <em>El diario de la princesa</em> (2001), la transformación de Mia puede leerse como el paso de una apariencia desordenada a otra más aceptada. La película no afirma que todas las niñas deban alisarse, pero su escena de cambio puede alimentar esa interpretación.</p>
<p class="story">En <em>Valiente</em> (2012), Mérida es protagonista con una melena rizada y abundante que no necesita desaparecer para que ella sea una heroína. <em>Encanto</em> (2021) muestra además una familia con distintas texturas de pelo, sin reducir a todos sus personajes a un único modelo.</p>
<p class="story">La diferencia no es que unas películas sean «malas» y otras «buenas». Es que amplían las posibilidades de representación: <strong>una niña puede encontrar una protagonista admirada que se parezca más a ella</strong>. Ver esa posibilidad también cambia las preguntas que hacemos sobre belleza.</p>
`,"story"),

page("campanas-crespos","Capítulo V · Cambiar la mirada","Cuando la publicidad celebra lo que antes corregía.",`
<span class="archive-step">LOVE YOUR CURLS · MY HAIR A MI MODO · CODE MY CROWN</span>
<p class="story dropcap">La publicidad tampoco conserva siempre un mensaje único. Campañas como <em>Love Your Curls</em> de Dove (2015), <em>#MyHairAMiModo</em> (2023) y <em>Code My Crown</em> (2024) propusieron imágenes y discursos que celebran los rizos, las texturas naturales y la representación del pelo afro.</p>
<p class="story">Por supuesto, son campañas de marcas que también quieren vender. Una publicidad sobre aceptación no elimina por sí sola las presiones estéticas, y el lenguaje del empoderamiento puede convertirse en otra estrategia comercial.</p>
<p class="story">Sin embargo, la contradicción no invalida el cambio: <strong>ahora esas mismas pantallas también pueden mostrar que el pelo crespo merece cuidado y admiración, no corrección</strong>. El archivo histórico evidencia las dos posibilidades de los medios: repetir un prejuicio o participar en la conversación que lo cuestiona.</p>
`,"story"),

page("eleccion-o-presion","Capítulo V · Cambiar la mirada","No se trata de prohibir el pelo liso.",`
<span class="archive-step">REPRESENTACIÓN Y LIBERTAD DE ELECCIÓN</span>
<p class="story dropcap">Sería contradictorio luchar contra un único ideal de belleza para reemplazarlo por otro. <strong>El problema no es alisarse ni llevar el pelo liso</strong>; tampoco es tenerlo crespo. El problema aparece cuando una textura se considera automáticamente más bonita, elegante o profesional que otra.</p>
<p class="story">Banks ayuda a recordar que la manera de llevar el pelo puede responder a muchos motivos. La verdadera libertad no consiste en obligar a alguien a mostrar sus crespos, sino en que pueda hacerlo sin sentir vergüenza, y que pueda alisarse si así lo desea sin que esa sea la condición para ser aceptada.</p>
<p class="story">Por eso importa la representación de ambas texturas. No se trata de invertir una jerarquía, sino de dejar de construirla. <strong>La belleza no debería ser el resultado de parecerse a un único modelo.</strong></p>`,"story"),

page("yo-hoy","Capítulo VI · El poder de vernos","Yo también aprendí a mirarme distinto.",`
<span class="archive-step">LO PERSONAL, DESPUÉS DEL ANÁLISIS</span>
<p class="story dropcap">Mi experiencia no demuestra por sí sola lo que los estudios describen. Pero me permite reconocer algo de esa historia en la forma como aprendí a mirar mi propio pelo. Durante años, ver determinadas transformaciones y escuchar que el volumen era un problema me hizo querer cambiarlo.</p>
<p class="story">Con el tiempo empecé a ver otras imágenes: mujeres, personajes y tendencias que llevaban sus crespos con orgullo, como una parte bella de sí mismas. Esa representación me ayudó a cambiar mi mirada.</p>
<p class="story"><strong>Hoy amo mis crespos.</strong> Hace <strong>más de dos años que no me aliso el pelo</strong>, ni siquiera para ocasiones especiales. Cuidarlo puede ser mucho trabajo y hay días en que requiere paciencia, pero ya no siento que tenga que transformarlo para verme arreglada o bonita.</p>
<p class="narrative-quote">No dejé de alisarme porque el pelo liso fuera feo. Dejé de sentir que necesitaba alisarme para ser bonita.</p>`,"story"),

page("conclusion-1","Capítulo VI · El poder de vernos","Conclusión · El poder de los medios.",`
<span class="archive-step">LO QUE DEMUESTRA EL RECORRIDO</span>
<p class="story dropcap">Este recorrido empezó con una niña que se preguntaba si podía ser una princesa con el pelo crespo. Después de comparar más de un siglo de anuncios, escenas y campañas, la respuesta dejó de depender de una sola película.</p>
<p class="story">La teoría de <strong>Hall</strong> permite comprender cómo imágenes que se repiten pueden convertir una preferencia en una norma. <strong>Banks</strong> muestra por qué esa norma importa: el pelo también está ligado a identidad, pertenencia y autonomía. Y el <em>Good Hair Study</em> aporta evidencia de que ciertos prejuicios sobre el pelo natural circulan más allá de las pantallas.</p>
<p class="story">De estas fuentes y del archivo concluyo que <strong>los medios tienen poder para influir en qué texturas se admiran, cuáles se cuestionan y qué aprende una persona a considerar aceptable en sí misma</strong>. No son la única causa de esos ideales, pero tampoco son simples espectadores.</p>`,"story"),

page("conclusion-2","Capítulo VI · El poder de vernos","Conclusión · La otra cara de ese poder.",`
<span class="archive-step">REPRESENTAR TAMBIÉN ES ABRIR POSIBILIDADES</span>
<p class="story dropcap">Sin embargo, el poder de los medios no es únicamente el de imponer. El archivo de <strong>Duke University</strong> muestra cómo <em>Black Is Beautiful</em> convirtió el afro en una imagen de orgullo y resistencia. Junto con las campañas que celebran los rizos y las películas con protagonistas de diferentes texturas, ese recorrido demuestra que <strong>las imágenes también pueden confrontar los estereotipos que antes ayudaron a normalizar</strong>.</p>
<p class="story">Cuando una niña se encuentra una y otra vez con personajes admirados que nunca se parecen a ella, puede llegar a preguntarse qué le falta. Cuando empieza a ver personas que comparten sus rasgos y aparecen como bellas, capaces o protagonistas, encuentra nuevos modelos con los cuales reconocerse. Eso no garantiza autoestima ni elimina la discriminación, pero puede ampliar el horizonte de lo que cree posible.</p>
<p class="story">En mi caso, esos nuevos referentes fueron parte de aprender a amar mi pelo. Por eso defiendo una representación diversa: <strong>no porque todas debamos vernos iguales, sino porque nadie debería creer que tiene que cambiar para merecer ser vista como bella.</strong></p>`,"story"),

page("dos-coronas","Capítulo VI · El poder de vernos","Dos coronas. La misma belleza.",`
<figure class="princess-equality-art"><img src="assets/illustrations/dos-princesas-frente.svg" alt="Dos princesas de estilo editorial tomadas de la mano, una con pelo crespo y otra con pelo liso, ambas con coronas iguales."></figure>
<p class="story">Estas dos princesas no son un «antes» y un «después». Ninguna representa la versión mejorada de la otra. Tienen distintas texturas y <strong>el mismo derecho a ser vistas como bellas</strong>.</p>
<p class="narrative-quote">La representación importa porque puede enseñarnos a dejar de buscar belleza únicamente en lo que no somos.</p>`,"story"),

page("yo-princesa","Capítulo VII · El final del cuento","Y así terminó el cuento...",`
<div class="chapter-opener"><span class="ornament">♛</span>
<p>Las imágenes me enseñaron a querer cambiar mi pelo.<br>Otras me enseñaron que también podía amarlo.</p>
<h2>No hay un solo<br>tipo de princesa.<br><em>Ni una sola forma de belleza.</em></h2>
<p>Crespo o liso: ninguna niña tiene que transformarse<br>para ser protagonista de su propio cuento.</p>
<span class="ornament">❦</span></div>`,"chapter"),

page("metodo","Apéndice · Las fuentes del cuento","Cómo llegué a esta conclusión.",`
<p class="story">Este ensayo desarrolla una <strong>lectura histórica y cualitativa</strong> de anuncios, escenas de cine y campañas digitales. Compara lo que muestran las imágenes con los significados que les atribuye su lenguaje: «alisado», «frizz», «control», orgullo y aceptación.</p>
<p class="story">El análisis se apoya en <strong>cuatro fuentes principales</strong>: <strong>Stuart Hall (1997)</strong>, para explicar cómo las imágenes construyen significados; <strong>Ingrid Banks (2000)</strong>, sobre pelo, identidad y autonomía; el <strong>Good Hair Study (2017)</strong>, como evidencia de prejuicios frente al pelo afro; y el <strong>archivo de Duke University sobre Black Is Beautiful</strong>, que documenta cómo esas mismas representaciones también pudieron convertirse en una forma de resistencia.</p>
<p class="story">Las investigaciones tienen contextos propios, especialmente de mujeres negras en Estados Unidos. No prueban que una campaña haya causado mi experiencia ni representan a todas las personas colombianas. La historia personal es una reflexión situada, no un resultado científico.</p>
<div class="study-note"><strong>Cuatro fuentes principales:</strong> Hall, Banks, Perception Institute y el archivo histórico de Duke University. <strong>Material complementario:</strong> anuncios de época, películas y campañas, reunidos en la bibliografía final.</div>`,"story"),

page("autores-1","Apéndice · Las fuentes del cuento","Las cuatro fuentes principales.",`
<ol class="refs">
<li><strong>Hall, S. (Ed.). (1997).</strong> <cite>Representation: Cultural Representations and Signifying Practices</cite>. SAGE. <a href="https://books.google.com/books/about/Representation.html?id=Vs-BdyhM9JEC" target="_blank" rel="noopener noreferrer">Hall (1997) ↗</a>. Base de la idea de que las imágenes producen significados culturales.</li>
<li><strong>Banks, I. (2000).</strong> <cite>Hair Matters: Beauty, Power, and Black Women's Consciousness</cite>. NYU Press. <a href="https://nyupress.org/9780814709023/hair-matters/" target="_blank" rel="noopener noreferrer">Banks (2000) ↗</a>. Investigación sobre pelo, identidad, autonomía y experiencias de mujeres negras.</li>
<li><strong>Perception Institute. (2017).</strong> <cite>The “Good Hair” Study: Explicit and Implicit Attitudes Toward Black Women’s Hair</cite>. <a href="https://perception.org/publications/goodhairstudy/" target="_blank" rel="noopener noreferrer">Perception Institute (2017) ↗</a>. Informe exploratorio de actitudes y prejuicios hacia el pelo afro.</li>
<li><strong>Duke University. Archivo histórico de Black Is Beautiful.</strong> <a href="https://exhibits.library.duke.edu/exhibits/show/-black-is-beautiful-/the-afro" target="_blank" rel="noopener noreferrer">Black Is Beautiful: The Afro ↗</a>. Documenta cómo el afro se convirtió en una imagen pública de orgullo y resistencia frente a ideales de belleza excluyentes.</li>
</ol>
<p class="small">Los anuncios y películas utilizados como ejemplos están enlazados individualmente en la sección siguiente.</p>`,"story"),

page("fuentes-2","Apéndice · Las fuentes del cuento","Fuentes de anuncios y películas · 1",`<ol class="refs"><li><a href="https://dangerouspress.org/papers/colored-american/1903-11-14" target="_blank">Ozonized Ox Marrow (1903)</a>.</li><li><a href="https://dangerouspress.org/papers/chicago-defender/1919-08-02" target="_blank">Plough's Hair Dressing (1919)</a>.</li><li><a href="https://kissmyblackads.blogspot.com/2009/03/ebony-june-1960.html" target="_blank">Hair-Strate, Ebony (1960)</a>.</li><li><a href="https://www.wnyc.org/story/how-black-hair-care-grew-black-power/" target="_blank">Afro Sheen (años 70)</a>.</li><li><a href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" target="_blank">Frizz-Ease (1994)</a>.</li><li><a href="https://www.elle.com/beauty/hair/a60504710/pro-line-just-for-me-nu-standard-cottrell-family/" target="_blank">ELLE (2024)</a>. Archivo familiar del anuncio de Just for Me, marca lanzada a comienzos de los noventa.</li><li><a href="https://adroots.wordpress.com/2024/03/21/black-beauty-in-advertising/" target="_blank">AdRoots (2024)</a>. Reproducción de publicidad de African Pride en <em>Today’s Black Women</em> (1996), documentada por Mayes (1997).</li><li><a href="https://pepsic.bvsalud.org/scielo.php?pid=S2359-07692017000200008&script=sci_arttext" target="_blank">Seda Anti-Sponge (Brasil)</a>.</li></ol>`,"story"),

page("fuentes-3","Apéndice · Las fuentes del cuento","Fuentes de anuncios y películas · 2",`<ol class="refs"><li><a href="https://www.yumpu.com/es/document/view/8565342/con-sedal-teens-el-pelo-perfecto-esta-cada-vez-mas-cerca-unilever" target="_blank">Sedal Teens, Colombia (2008)</a>.</li><li><a href="https://www.ebay.com/itm/134784994836" target="_blank">Garnier Fructis Sleek &amp; Shine (2007)</a>, reproducción de publicidad impresa de época.</li><li><a href="https://estudiomr.blogspot.com/2008/08/seda-teens-brasil.html" target="_blank">Milstein Ravel (2008)</a>, imagen de diseño promocional de Seda Teens Brasil.</li><li><a href="https://www1.folha.uol.com.br/folha/especial/2006/topofmind/fj2410200605.shtml" target="_blank">Folha de S.Paulo (2006)</a>, descripción contemporánea de la campaña de Seda Anti-Sponge.</li><li><a href="https://www.prnewswire.com/news-releases/dove-hair-launches-poetic-tribute-to-curls-inspired-by-stories-from-real-women-300084598.html" target="_blank">Dove, Love Your Curls (2015)</a>.</li><li><a href="https://www.dove.com/us/en/campaigns/purpose/my-hair-a-mi-modo.html" target="_blank">Dove, #MyHairAMiModo (2023)</a>.</li><li><a href="https://shortyawards.com/9th-impact/code-my-crown" target="_blank">Dove, Code My Crown (2024)</a>.</li><li><a href="https://movies.disney.com/brave" target="_blank">Brave (2012)</a>, <a href="https://movies.disney.com/moana" target="_blank">Moana (2016)</a> y <a href="https://movies.disney.com/encanto" target="_blank">Encanto (2021)</a>.</li></ol>`,"story"),

page("fuentes-4","Apéndice · Las fuentes del cuento","Fuentes de anuncios y películas · 3",`<ol class="refs"><li><a href="https://people.com/anne-hathaway-the-princess-diaries-worlds-most-beautiful-exclusive-11954368" target="_blank">Anne Hathaway, PEOPLE (2026)</a>.</li><li><a href="https://www.elle.com/beauty/hair/a60431197/sofia-richie-grainge-pregnancy-hair-nexxus-ambassador/" target="_blank">Elle</a> (2024), moño pulido de Sofia Richie.</li><li><a href="https://www.glamour.com/story/how-to-do-slick-back-hairstyles-safely" target="_blank">Glamour</a> (2025), <em>No Slickback November</em>.</li><li><a href="https://www.bustle.com/beauty/no-slickback-november-tiktok" target="_blank">Bustle</a> (2025), imágenes de creadoras del reto.</li><li><a href="https://americanhistory.si.edu/es/collections/object/nmah_1195120" target="_blank">Smithsonian</a>, peine alisador, usado desde los años veinte.</li><li><a href="https://ofanotherfashion.tumblr.com/post/2923472471/an-advertisement-for-perma-strate-cream-hair" target="_blank">Of Another Fashion</a>, anuncio Perma-Strate (1965).</li><li><a href="https://www.trademarkelite.com/trademark/trademark-detail/72084130/EVER-PERM" target="_blank">Helene Curtis</a>, Ever-Perm, registro de alisador (1960).</li><li><a href="https://www.carpelibrumbooks.com/charles-c-dawsons-designs-for-black-beauty-products" target="_blank">Slick Black</a>, publicidad de Charles C. Dawson de finales de los años treinta.</li></ol>`,"story"),

page("fuentes-5","Apéndice · Las fuentes del cuento","Fuentes de anuncios y películas · 4",`<ol class="refs"><li><a href="https://mdhistory.msa.maryland.gov/msaref14/msa_sc5458_000045_000261/pdf/msa_afro_1950_08_1951_08-0130.pdf" target="_blank">Perma-Strate</a>, anuncio fechado en 1950.</li><li><a href="https://www.pinterest.com/pin/278097345714200568/" target="_blank">Ultra Sheen</a>, <em>Ebony</em> (1970).</li><li><a href="https://www.streetfaireantiques.com/listing/1197611312/ebony-magazine-denzel-washington-march" target="_blank">Raveen</a>, anuncio (1992).</li><li><a href="https://www.youtube.com/watch?v=LqYlBS7LUoE&amp;t=90s" target="_blank" rel="noopener noreferrer">El diario de la princesa: escena de transformación (video).</a></li><li><a href="https://www.americanhistory.si.edu/es/collections/object/nmah_1195120" target="_blank" rel="noopener noreferrer">Smithsonian: peine alisador histórico.</a></li><li><a href="https://movies.disney.com/cinderella-1950" target="_blank" rel="noopener noreferrer">Disney: Cenicienta (1950).</a></li><li><a href="https://commons.wikimedia.org/wiki/File:Monroe_1953_publicity_(cropped).jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons: retrato de Marilyn Monroe (1953).</a></li><li><a href="https://www.pinterest.com/pin/415738609347252904/" target="_blank" rel="noopener noreferrer">Publicidad Perma-Strate, reproducción de los años setenta.</a></li></ol>`,"story"),

page("fuentes-6","Apéndice · Las fuentes del cuento","Fuentes de anuncios y películas · 5",`<ol class="refs"><li><a href="https://www.campaignlive.co.uk/article/john-frieda-primed-host-live-digital-show/1071489" target="_blank" rel="noopener noreferrer">Campaign: campaña de John Frieda (2011).</a></li><li><a href="https://shortyawards.com/8th/dove-hair-love-your-curls" target="_blank" rel="noopener noreferrer">Shorty Awards: Dove Love Your Curls (2015).</a></li><li><a href="https://www.elle.com/tw/beauty/hair/g69277074/slick-back-bun/" target="_blank" rel="noopener noreferrer">ELLE Taiwan: artículo sobre slick-back bun.</a></li><li><a href="https://bwretailworld.com/beauty/taapsee-pannu-leads-doves-reclaim-your-curls-campaign" target="_blank" rel="noopener noreferrer">BW Retail World: Dove, Reclaim Your Curls (2025).</a></li></ol>`,"story"),

page("declaracion","Apéndice · Las fuentes del cuento","Sobre este ensayo multimedia.",`<p class="story">El libro combina memoria personal, imágenes históricas, cine e investigación. Cada doble página corresponde a una época y presenta sus imágenes junto al análisis.</p><div class="paper-note"><p><strong>Desarrollo:</strong> HTML, CSS, JavaScript y StPageFlip.</p><p><strong>Fuentes visuales:</strong> todos los anuncios, películas y estudios consultados se enlazan únicamente en la bibliografía final. Las imágenes aparecen como recortes, sin enlaces externos.</p></div><p class="small">La experiencia autobiográfica es de la autora. Las interpretaciones de los anuncios no atribuyen una misma motivación a todas las mujeres.</p>`,"story"),

page(
    "contraportada",
    "Contraportada",
    "El final del libro",
    `
    <div>
      <div class="back-cover-ornament">❦</div>

      <p class="back-cover-text">
        La belleza no estaba escondida en mis crespos.<br>
        Estaba escondida en la forma en que
        había aprendido a mirarlos.
      </p>

      <div class="ornament-line">✦</div>

      <span class="back-cover-sub">
        FIN · ¿ACASO NO SOY UNA PRINCESA?
      </span>
    </div>
    `,
    "backcover"
  )
];

export const chapters = [
  {
    "page": 0,
    "number": "00",
    "label": "Portada"
  },
  {
    "page": 1,
    "number": "01",
    "label": "Mi historia"
  },
  {
    "page": 3,
    "number": "02",
    "label": "La transformación"
  },
  {
    "page": 6,
    "number": "03",
    "label": "Archivo de publicidad y cine"
  },
  {
    "page": 24,
    "number": "04",
    "label": "El poder de las imágenes"
  },
  {
    "page": 29,
    "number": "05",
    "label": "Cambiar la mirada"
  },
  {
    "page": 34,
    "number": "06",
    "label": "El poder de vernos"
  },
  {
    "page": 38,
    "number": "07",
    "label": "El final del cuento"
  },
  {
    "page": 39,
    "number": "08",
    "label": "Fuentes y bibliografía"
  }
];
