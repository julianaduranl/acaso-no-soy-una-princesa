
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
@media (min-width:801px) and (min-height:700px) {body.is-reading .reader-stage.is-visible #flipbook {zoom:1.12}}
@media (min-width:1100px) and (min-height:900px) {body.is-reading .reader-stage.is-visible #flipbook {zoom:1.16}}
@media (max-width:800px) {body.is-reading .reader-stage.is-visible #flipbook {zoom:1}}
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

    <a
      class="cuento-video-link"
      href="https://www.youtube.com/watch?v=LqYlBS7LUoE&t=90s"
      target="_blank"
      rel="noopener noreferrer"
    >
      Ver escena en YouTube ↗
    </a>
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
      terminé dañando mi cabello
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
      su cabello.
    </p>

    <p class="story">
      Durante décadas, la publicidad
      presentó ciertos tipos de cabello
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

page("la-tesis","Capítulo II · La transformación","¿De dónde aprendí a odiar mis crespos?",`<p class="story dropcap">Yo pensaba que había aprendido a peinarme. Pero con los años entendí que también había aprendido a desconfiar de mi cabello natural.</p><div class="thesis-page tesis-formal"><h3>Pregunta de investigación</h3><p>¿Cómo contribuyeron las representaciones del cabello en el cine, la publicidad y otros medios a construir ideales de belleza que desvalorizaban algunas texturas?</p><h3>Tesis</h3><p>La repetición de mensajes que asociaban el cabello liso o controlado con belleza y respetabilidad contribuyó a naturalizar la idea de que los crespos necesitaban corrección. Esta representación, marcada por historias distintas de racismo y género, fue cuestionada y transformada por movimientos culturales y nuevas imágenes mediáticas.</p></div><p class="story">Para comprender lo que interioricé de niña, tenemos que recorrer <strong>qué se decía del pelo crespo en cada época</strong>.</p>`,"story"),

page("reloj-atras","Capítulo III · ¿De dónde surgió el rechazo?","Antes de que naciera mi cuento.",`<div class="chapter-opener"><span class="num">1900 → 2025</span><h2>¿Cuándo empezó<br>el pelo crespo<br>a parecer un problema?</h2><p>Un recorrido por las palabras, imágenes e ideales que enseñaron a cambiar el cabello natural y por las voces que empezaron a cuestionarlos.</p><span class="ornament">✦</span></div>`,"chapter"),

page("collage-1900","Capítulo III · ¿De dónde surgió el rechazo?","1900–1919 · Los recortes",`
<span class="archive-step">LA TEXTURA QUE HABÍA QUE CORREGIR</span>
<div class="archive-collage archive-collage--photographic collage-epoca">
  <span class="archive-collage__stamp">1900–1919<br>ARCHIVO</span>
  <a class="scrap-photo scrap-photo--one image-scrap" href="https://www.haikudeck.com/garett-amorgan-education-presentation-8bf415c1cd" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://img.haikudeck.com/mg/594583aca8_1456409780030.jpg?imageFilter=false&rasterSignature=815f5c92142b1100278555dd444388bf&theme=Five+Seven+Five" alt="Anuncio de G. A. Morgan con peine caliente para alisar el cabello" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/8/86/Morgan_advert1.jpg" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">01 · G. A. Morgan, 1906 ↗</span></a>
  <a class="scrap-photo scrap-photo--two image-scrap" href="https://commons.wikimedia.org/wiki/File:Hair_grower_ad.jpg" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Hair_grower_ad.jpg" alt="Anuncio de 1919 Madam C. J. Walker's Wonderful Hair Grower; producto para el crecimiento, no necesariamente para alisar" data-fallbacks="https://image.invaluable.com/housePhotos/swanngalleries/84/283484/H0132-L15923729.jpg" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">02 · Madam C. J. Walker, 1919 ↗</span></a>
  <a class="scrap-photo scrap-photo--three image-scrap" href="https://nmaahc.si.edu/explore/stories/sizzle" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://nmaahc.si.edu/sites/default/files/styles/max_1300x1300/public/images/captioned/2011_170_18_main_020.png?itok=H8XeJvni" alt="Anuncio histórico Poro College con productos de cuidado capilar; archivo Smithsonian" data-fallbacks="https://dktix1rrcd7mv.cloudfront.net/legacy/Madam-CJ-Walker-advertisement.jpg" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">03 · Poro · primeras décadas del XX ↗</span></a>
  <span class="archive-collage__scribble" aria-hidden="true">✶</span>
</div>
<p class="archive-collage__note">Tres anuncios históricos diferentes. Morgan promocionaba el peine caliente; Walker y Poro también muestran el emprendimiento afroamericano en el cuidado del cabello. Las imágenes enlazan a sus fuentes.</p>
`,"story"),

page("analisis-1900","Capítulo III · ¿De dónde surgió el rechazo?","1900–1919 · El pelo crespo: un supuesto defecto",`<span class="archive-step">ANÁLISIS HISTÓRICO · LA TEXTURA QUE HABÍA QUE CORREGIR</span><p class="story">En anuncios de principios del siglo XX, productos para el cabello afro prometían hacerlo liso mediante pomadas y <em>hot combs</em>, peines metálicos calentados.</p><p class="story">Plough's Hair Dressing llegó a incluir la palabra <em>ugly</em> («feo») junto a <em>kinky</em> y <em>curly</em>. <strong>La publicidad no descubría un defecto: ayudaba a construirlo para ofrecer una solución.</strong></p><p class="story">Este discurso circulaba en Estados Unidos bajo segregación y racismo. Para muchas mujeres negras, el cabello también tenía consecuencias sociales, aunque no todas eligieran alisarse por la misma razón.</p><div class="study-note"><strong>Emma Dabiri e Ingrid Banks:</strong> la historia del cabello afro se entrelaza con identidad, autonomía y relaciones de poder.</div><p class="archive-source"><a href="https://dangerouspress.org/papers/chicago-defender/1919-08-02" target="_blank" rel="noopener noreferrer">Ver Plough's en prensa de 1919 ↗</a></p>`,"story"),

page("collage-1940","Capítulo III · ¿De dónde surgió el rechazo?","1930–1960 · Los recortes",`<span class="archive-step">LO LISO Y LO PULIDO COMO IDEAL</span><div class="archive-collage archive-collage--photographic collage-epoca"><span class="archive-collage__stamp">1930–1960<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://medium.com/nappy-head-club/black-at-work-the-struggle-to-navigate-black-hair-in-the-workplace-is-far-from-over-a95330decb4a" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://miro.medium.com/v2/resize%3Afit%3A1214/1%2AfKZgV-FVXegX_vj4Tj2O7Q.jpeg" alt="Anuncio Fashion Demands Straight Hair" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Perma-Strate · fecha sin confirmar ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://movies.disney.com/snow-white-and-the-seven-dwarfs" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://disneydorks.weebly.com/uploads/3/1/8/6/31863561/1354865_orig.jpg" alt="Póster de Blancanieves y los siete enanitos" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Blancanieves · 1937 ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://kissmyblackads.blogspot.com/2009/03/ebony-june-1960.html" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://1.bp.blogspot.com/_4ebKDFxiia8/ScelnGZzt5I/AAAAAAAACUo/ikRzDTFKHx0/s1600/Picture%2B24.png" alt="Publicidad Hair Strate con mujeres alisadas" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Hair-Strate · 1960 ↗</span></a><a class="scrap-photo scrap-photo--four image-scrap" href="https://commons.wikimedia.org/wiki/File:Hepburn_Kelly_Publicity_Photo_1956.jpg" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Hepburn_Kelly_Publicity_Photo_1956.jpg" alt="Fotografía publicitaria de Audrey Hepburn y Grace Kelly" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Actrices de Hollywood · 1956 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Princesas, celebridades y anuncios aparecen juntos porque pertenecen al contexto visual de la época.</p>`,"story"),

page("analisis-1940","Capítulo III · ¿De dónde surgió el rechazo?","1930–1960 · La belleza «exigía» alisar",`<span class="archive-step">ANÁLISIS HISTÓRICO · LO LISO Y LO PULIDO COMO IDEAL</span><p class="story">La publicidad de Perma-Strate llegó a decir que la moda <strong>«exigía cabello liso»</strong>. A la vez, el cine difundía modelos de belleza mayoritariamente blancos y cuidadosamente peinados.</p><p class="story">Blancanieves y las estrellas de Hollywood no tenían el mismo cabello: algunas llevaban ondas o rizos estilizados. Lo que se repetía era la apariencia pulida como sinónimo de elegancia.</p><p class="story">No podemos atribuir una relación causal directa a una imagen. Pero la repetición de esos ideales ayuda a explicar qué formas de verse eran presentadas como admirables.</p><div class="study-note"><strong>Stuart Hall (1997):</strong> las representaciones participan en la construcción cultural de lo que consideramos normal y deseable.</div><p class="archive-source"><a href="https://kissmyblackads.blogspot.com/2009/03/ebony-june-1960.html" target="_blank" rel="noopener noreferrer">Ver Hair-Strate (1960) ↗</a></p>`,"story"),

page("collage-1970","Capítulo III · ¿De dónde surgió el rechazo?","1960–1970 · Los recortes",`<span class="archive-step">EL PRIMER GRAN DESAFÍO</span><div class="archive-collage archive-collage--photographic collage-epoca"><span class="archive-collage__stamp">1960–1970<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://www.vintag.es/2016/09/vintage-afro-hairstyles-16-fascinating.html" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://3.bp.blogspot.com/-Dc3YizJjvHg/V-P5LkP_VXI/AAAAAAACYQU/LHY9WXqHpzc6S7QFBJtj2eJWIDWwYUPtACLcB/s1600/afro-hairstyle-ads-1960s-3.jpg" alt="Afro Sheen: pareja con afro natural, años setenta" data-fallbacks="https://media.wnyc.org/i/1860/1860/l/80/2026/01/._fE5AsPr" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">01 · Afro Sheen: pareja con afro natural, años setent ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://www.wnyc.org/story/how-black-hair-care-grew-black-power/" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://media.wnyc.org/i/1860/1860/l/80/2026/01/._fE5AsPr" alt="Afro Sheen: familia afro, años setenta" data-fallbacks="https://3.bp.blogspot.com/-Dc3YizJjvHg/V-P5LkP_VXI/AAAAAAACYQU/LHY9WXqHpzc6S7QFBJtj2eJWIDWwYUPtACLcB/s1600/afro-hairstyle-ads-1960s-3.jpg" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">02 · Afro Sheen: familia afro, años setenta ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://www.pinterest.com/pin/415738609347252904/" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://i.pinimg.com/736x/6d/73/ef/6d73efe37825d0cfbbd9a4a19573c299.jpg" alt="Publicidad First Straighten Then Style" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Perma-Strate · 1971 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">La aceptación del afro convivió con productos que continuaban promoviendo el alisado.</p>`,"story"),

page("analisis-1970","Capítulo III · ¿De dónde surgió el rechazo?","1960–1970 · El afro también era bello",`<span class="archive-step">ANÁLISIS HISTÓRICO · EL PRIMER GRAN DESAFÍO</span><p class="story">Con los movimientos por los derechos civiles y el <em>Black Power</em>, el afro natural se convirtió en símbolo de orgullo e identidad. <strong>Black Is Beautiful</strong> cuestionó los ideales eurocéntricos de belleza.</p><p class="story">Afro Sheen comenzó a mostrar afros admirados. Pero Perma-Strate todavía anunciaba en 1971 que primero había que alisar y después elegir el estilo.</p><p class="story">Por eso no existió un cambio repentino: el mensaje de reivindicación y los estándares anteriores coexistieron durante décadas.</p><div class="study-note"><strong>Duke University:</strong> desde 1969 proliferaron anuncios de productos para afros, algunos separados del sentido político del movimiento.</div><p class="archive-source"><a href="https://exhibits.library.duke.edu/exhibits/show/-black-is-beautiful-/the-afro" target="_blank" rel="noopener noreferrer">Archivo Black Is Beautiful ↗</a></p>`,"story"),

page("collage-1990","Capítulo III · ¿De dónde surgió el rechazo?","1990s · Los recortes",`<span class="archive-step">AHORA HABÍA QUE CONTROLAR</span><div class="archive-collage archive-collage--photographic collage-epoca"><span class="archive-collage__stamp">1990s<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://www.pinterest.com/pin/just-seventeen--826410600351775951/" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://i.pinimg.com/564x/03/6a/51/036a512a8d286f334b0899e02a93e8e2.jpg" alt="L.A. Looks: rizos definidos, publicidad de los noventa" data-fallbacks="https://i.pinimg.com/736x/0f/c9/9d/0fc99d32a440421614780c6b59d232e2.jpg|https://image.klikk.no/4490245.webp?croph=100.00&cropw=100.00&format=jpg&height=756&imageId=4490245&width=1200&x=0.00&y=0.00" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">01 · L.A. Looks: rizos definidos, publicidad de los n ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://www.klikk.no/helse/velvare/4-reklamer-vi-ler-litt-av-4490239" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://image.klikk.no/4490245.webp?croph=100.00&cropw=100.00&format=jpg&height=756&imageId=4490245&width=1200&x=0.00&y=0.00" alt="L'Oréal Studio Line: Pumping Curls, años noventa" data-fallbacks="https://i.pinimg.com/564x/03/6a/51/036a512a8d286f334b0899e02a93e8e2.jpg|https://i.pinimg.com/736x/0f/c9/9d/0fc99d32a440421614780c6b59d232e2.jpg" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">02 · L'Oréal Studio Line: Pumping Curls, años noventa ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://in.pinterest.com/pin/255649716416536340/" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://i.pinimg.com/736x/0f/c9/9d/0fc99d32a440421614780c6b59d232e2.jpg" alt="L.A. Looks, anuncio de productos para peinar de los años noventa" data-fallbacks="https://i.pinimg.com/564x/03/6a/51/036a512a8d286f334b0899e02a93e8e2.jpg|https://image.klikk.no/4490245.webp?croph=100.00&cropw=100.00&format=jpg&height=756&imageId=4490245&width=1200&x=0.00&y=0.00" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">03 · L.A. Looks, anuncio de productos para peinar de  ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Anuncios de la década: rizos definidos y promesas de control. El Frizz-Ease original de 1994 puede consultarse en la página de análisis.</p>`,"story"),

page("analisis-1990","Capítulo III · ¿De dónde surgió el rechazo?","1990s · De «feo» a «frizz»",`<span class="archive-step">ANÁLISIS HISTÓRICO · AHORA HABÍA QUE CONTROLAR</span><p class="story">En los años noventa, la publicidad adoptó palabras como <em>frizz</em>, control y definición. Un anuncio de Frizz-Ease (1994) prometía una «cura» para el encrespamiento.</p><p class="story">Era un lenguaje menos explícito que llamar «feo» al cabello crespo, pero podía mantener la idea de que algunas apariencias necesitaban corrección.</p><p class="story"><strong>No todo rizo era rechazado:</strong> las campañas también mostraban rizos definidos como resultado deseable. El frizz no es sinónimo de pelo afro ni de pelo crespo.</p><div class="study-note"><strong>Interpretación:</strong> el problema pasó de «tener rizos» a «no llevarlos suficientemente controlados».</div><p class="archive-source"><a href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" target="_blank" rel="noopener noreferrer">Ver anuncio de 1994 en Tufts ↗</a></p>`,"story"),

page("collage-2000","Capítulo III · ¿De dónde surgió el rechazo?","2000–2009 · Los recortes",`<span class="archive-step">EL DISCURSO LLEGÓ A LAS NIÑAS</span><div class="archive-collage archive-collage--photographic collage-epoca"><span class="archive-collage__stamp">2000–2009<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://pepsic.bvsalud.org/scielo.php?pid=S2359-07692017000200008&script=sci_arttext" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://pepsic.bvsalud.org/img/revistas/rs/v17n2/08f02.jpg" alt="Seda Anti-Sponge: el león antes y después" data-fallbacks="https://thevisualcommunicationguy.com/wp-content/uploads/2017/09/Humor-Appeal-Advertising-3.jpg" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">01 · Seda Anti-Sponge: el león antes y después ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://entretenimientoplus.com/musica/sedal-teens-llenate-de-musica/" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://i0.wp.com/entretenimientoplus.com/wp-content/uploads/2008/09/sedal-teens-concierto-citytv-302x137.jpg?resize=302%2C137" alt="Material promocional de Sedal Teens en Colombia" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Sedal Teens · Colombia, 2008 ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://amuellergds102.blogspot.com/2010/10/dove-anti-frizz-cream.html" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://1.bp.blogspot.com/_4lfcuwvyo4M/TLtKbHmBhVI/AAAAAAAAABQ/YBmrailjocI/s1600/dove.jpg" alt="Ilustración publicitaria comparativa de antes y después" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Antes / después · anti-frizz ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">La campaña del león es brasileña; Sedal Teens sí está documentada en Colombia en 2008.</p>`,"story"),

page("analisis-2000","Capítulo III · ¿De dónde surgió el rechazo?","2000–2009 · El pelo «esponjado» que yo conocí",`<span class="archive-step">ANÁLISIS HISTÓRICO · EL DISCURSO LLEGÓ A LAS NIÑAS</span><p class="story">El volumen se transformó en una preocupación cotidiana. Seda Anti-Sponge utilizó la melena de un león como ejemplo de lo que un producto debía «domar».</p><p class="story">En Colombia, <strong>Sedal Teens – Bye Bye Frizz</strong> se dirigió a adolescentes en 2008 con promesas de «pelo perfecto» y control del cabello «rebelde».</p><p class="story">Yo crecí llamando a mi propio cabello <em>esponjado</em>. La transformación de Mia en <em>El diario de la princesa</em> (2001) también me enseñó a asociar el alisado con verse mejor.</p><div class="study-note"><strong>Lectura personal:</strong> no fue un anuncio aislado; fue la repetición de palabras e imágenes lo que hizo familiar la idea de tener que arreglar mi textura.</div><p class="archive-source"><a href="https://www.yumpu.com/es/document/view/8565342/con-sedal-teens-el-pelo-perfecto-esta-cada-vez-mas-cerca-unilever" target="_blank" rel="noopener noreferrer">Unilever, Sedal Teens en Colombia ↗</a></p>`,"story"),

page("collage-2010","Capítulo III · ¿De dónde surgió el rechazo?","2010–2019 · Los recortes",`<span class="archive-step">EL GIRO HACIA LA ACEPTACIÓN</span><div class="archive-collage archive-collage--photographic collage-epoca"><span class="archive-collage__stamp">2010–2019<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://www.campaignlive.co.uk/article/john-frieda-primed-host-live-digital-show/1071489" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/26E4E16D-A9F2-016F-1820A9DDF86B4451.jpg" alt="Campaña donde se quema la fotografía del cabello voluminoso" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">John Frieda · 2011 ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://www.adsoftheworld.com/campaigns/love-your-curls" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://media.licdn.com/dms/image/v2/D4E10AQGN6Y9r5l6lOQ/image-shrink_1280/image-shrink_1280/0/1686240488311?e=2147483647&t=qyzWFIyPM9Wlc-keAa39braZC2u_egEiCoGNOpWEX_8&v=beta" alt="Dove Love Your Curls: emojis con cabello crespo, 2015" data-fallbacks="https://dp6mhagng1yw3.cloudfront.net/entries/8th/dove-hair-lyc.jpg" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">02 · Dove Love Your Curls: emojis con cabello crespo, ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://movies.disney.com/brave" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://d.ibtimes.co.uk/en/full/261749/brave-official-movie-poster.jpg?f=20b40ca81f1a02a7d5de059b88c9f0da&w=1440" alt="Póster de Mérida con su melena rizada" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Valiente · 2012 ↗</span></a><a class="scrap-photo scrap-photo--four image-scrap" href="https://movies.disney.com/moana" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://artofthemovies.co.uk/cdn/shop/files/IMG_0403-1_47361b2e-424f-436d-8b34-3fae440489c6.jpg?v=1684515925" alt="Póster de Moana con cabello ondulado" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Moana · 2016 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Publicidad y cine muestran un cambio de mensajes: de borrar el volumen a celebrar otras texturas.</p>`,"story"),

page("analisis-2010","Capítulo III · ¿De dónde surgió el rechazo?","2010–2019 · 2015: empezó a contarse otra historia",`<span class="archive-step">ANÁLISIS HISTÓRICO · EL GIRO HACIA LA ACEPTACIÓN</span><p class="story">Una campaña de John Frieda todavía podía presentar el pelo con volumen como un «antes» que había que dejar atrás. Pero en <strong>2015 Dove lanzó Love Your Curls</strong> para animar a niñas y mujeres a valorar sus rizos.</p><p class="story">En el cine, <em>Valiente</em> (2012) y <em>Moana</em> (2016) mostraban protagonistas que no necesitaban alisar su cabello para ser heroínas.</p><p class="story">El 2015 es un <strong>punto de inflexión visible en este archivo comercial</strong>, no el nacimiento de la aceptación. Esa lucha tenía antecedentes mucho más antiguos, como Black Is Beautiful.</p><div class="study-note"><strong>Contradicción:</strong> una marca puede combatir un estereotipo y al mismo tiempo convertir ese mensaje en una estrategia de venta.</div><p class="archive-source"><a href="https://www.prnewswire.com/news-releases/dove-hair-launches-poetic-tribute-to-curls-inspired-by-stories-from-real-women-300084598.html" target="_blank" rel="noopener noreferrer">Dove: Love Your Curls, 2015 ↗</a></p>`,"story"),

page("collage-2020","Capítulo III · ¿De dónde surgió el rechazo?","2020–2025 · Los recortes",`<span class="archive-step">EL CRESPO EN PANTALLAS Y REDES</span><div class="archive-collage archive-collage--photographic collage-epoca"><span class="archive-collage__stamp">2020–2025<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://movies.disney.com/encanto" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://lumiere-a.akamaihd.net/v1/images/au_disney_encanto_payoff_movie_poster_1e7be9e9.jpeg" alt="Póster de Encanto y su familia con texturas capilares diversas" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Encanto · 2021 ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://www.dove.com/us/en/campaigns/purpose/my-hair-a-mi-modo.html" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://www.creativemoment.co/images/uploads/features/dove-champions-hair-positivity-for-latinas-through-a-vibrant-music-video-myhairamimodo/_1200x630_crop_center-center_82_none/dove-lead.jpg?mtime=1698148249" alt="Mujeres latinas de diferentes estilos en campaña Dove" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Mi Pelo a Mi Modo · 2023 ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://shortyawards.com/9th-impact/code-my-crown" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://dp6mhagng1yw3.cloudfront.net/entries/9th-impact/f709c46a-a9df-4324-a1de-b000c89700c2.jpg" alt="Campaña de cabello afro en videojuegos" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Code My Crown · 2024 ↗</span></a><a class="scrap-photo scrap-photo--four image-scrap" href="https://bwretailworld.com/beauty/taapsee-pannu-leads-doves-reclaim-your-curls-campaign" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://i0.wp.com/bwretailworld.com/wp-content/uploads/2025/10/KV-V2.jpg?fit=960%2C640&ssl=1" alt="Campaña Dove India con actriz de rizos naturales" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.scrap-photo').remove()"></span><span class="scrap-photo__label">Reclaim Your Curls · 2025 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Películas, redes y videojuegos amplían los modelos de belleza. Las campañas proceden de distintos países.</p>`,"story"),

page("analisis-2020","Capítulo III · ¿De dónde surgió el rechazo?","2020–2025 · Más representación, nuevos ideales",`<span class="archive-step">ANÁLISIS HISTÓRICO · EL CRESPO EN PANTALLAS Y REDES</span><p class="story"><em>Encanto</em> (2021) representó diversas texturas en una familia colombiana. En 2023, Dove lanzó <strong>#MyHairAMiModo</strong> con Li Saumet, de Bomba Estéreo, para el mercado latino de Estados Unidos.</p><p class="story">En 2024, <em>Code My Crown</em> llevó la conversación a los peinados afro en los videojuegos. El cabello natural ganó espacio en medios donde antes era poco visible.</p><p class="story">La nueva diversidad no borró los estándares anteriores. La siguiente doble página muestra cómo las redes también crearon un ideal de cabello perfectamente recogido y cómo empezó a cuestionarse.</p><div class="study-note"><strong>McLuhan (1964):</strong> los medios transforman cómo circulan los ideales. Más diversidad no elimina automáticamente la presión por encajar.</div><p class="archive-source"><a href="https://www.dove.com/us/en/campaigns/purpose/my-hair-a-mi-modo.html" target="_blank" rel="noopener noreferrer">Dove: Mi Pelo a Mi Modo (2023) ↗</a></p>`,"story"),

page("collage-2026","Capítulo III · ¿De dónde surgió el rechazo?","2022–2026 · La pulcritud también se cuestiona",`<span class="archive-step">CLEAN GIRL LOOK → NO SLICKBACK NOVEMBER</span><div class="archive-collage archive-collage--photographic collage-epoca"><span class="archive-collage__stamp">2022–2026<br>TENDENCIAS</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://www.elle.com/beauty/hair/a60431197/sofia-richie-grainge-pregnancy-hair-nexxus-ambassador/" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://hips.hearstapps.com/hmg-prod/images/srg-x-nexxus-slicked-back-bun-6614248730b91.jpg" alt="Sofia Richie: moño pulido, Clean Girl Look" data-fallbacks="https://cdn.qumd.gr/img/1080/810/80/2023/11/07/45faa136-315971440_121787477387384_128081017541667040_n-%283%29.jpg?t=uXs78GHN7MUnJY9tuH-b4g" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">01 · Sofia Richie: moño pulido, Clean Girl Look ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://www.elle.com/tw/beauty/hair/g69277074/slick-back-bun/" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://hips.hearstapps.com/hmg-prod/images/haileybieber-1689545608-3148459220022447464-7141291-690cebba8184a.jpg" alt="Hailey Bieber: slick-back bun, 2023" data-fallbacks="https://cdnarchive.alem.com.tr/Documents/AlemDergisi/images/2022/08/26/2608202216615310246144eb75.jpg" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">02 · Hailey Bieber: slick-back bun, 2023 ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://www.bustle.com/beauty/no-slickback-november-tiktok" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://imgix.bustle.com/uploads/image/2025/11/4/e714939e/screenshot-2025-11-04.png?crop=faces&dpr=2&fit=crop&h=594&w=414" alt="Joy Burnett: No Slickback November, 2025" data-fallbacks="https://imgix.bustle.com/uploads/image/2025/11/4/62ec7583/noslickback001.jpeg?crop=focalpoint&fit=crop&fm=jpg&fp-x=0.4999&fp-y=0.512&h=675&w=1200" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">03 · Joy Burnett: No Slickback November, 2025 ↗</span></a><a class="scrap-photo scrap-photo--four image-scrap" href="https://www.bustle.com/beauty/no-slickback-november-tiktok" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><img src="https://imgix.bustle.com/uploads/image/2025/11/4/b3c7577b/screenshot-2025-11-04.jpeg?crop=faces&dpr=2&fit=crop&h=594&w=414" alt="Participante con trenzas sueltas, noviembre de 2025" data-fallbacks="https://imgix.bustle.com/uploads/image/2025/11/4/62ec7583/noslickback001.jpeg?crop=focalpoint&fit=crop&fm=jpg&fp-x=0.4999&fp-y=0.512&h=675&w=1200" loading="lazy" referrerpolicy="no-referrer" onerror="const urls=(this.dataset.fallbacks||'').split('|').filter(Boolean);if(urls.length){this.dataset.fallbacks=urls.slice(1).join('|');this.src=urls[0]}else{this.closest('.scrap-photo').remove()}"></span><span class="scrap-photo__label">04 · Participante con trenzas sueltas, noviembre de 2 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Un mismo medio difundió la estética pulida y el desafío a llevarla todos los días. Las fotografías corresponden a fuentes publicadas entre 2023 y 2025; el reto continuó en 2026.</p>`,"story"),

page("analisis-2026","Capítulo III · ¿De dónde surgió el rechazo?","2022–2026 · ¿Qué significa verse «arreglada»?",`<span class="archive-step">LA CONTRADICCIÓN DE LAS REDES SOCIALES</span><p class="story">El <strong>Clean Girl Look</strong>, popular desde alrededor de 2022, convirtió el moño muy pulido (<em>slick-back bun</em>) en símbolo de una apariencia elegante, minimalista y supuestamente natural.</p><p class="story">Pero llamar «limpia» a esa estética invita a preguntar: <strong>¿qué ocurre con los cabellos que tienen volumen, frizz o mechones sueltos?</strong> El peinado no es un defecto; el problema es transformar una moda en una norma.</p><p class="story">En noviembre de 2024 surgió el reto <strong>No Slickback November</strong>, difundido nuevamente en 2025 y 2026: dejar temporalmente los recogidos tirantes y experimentar con peinados de menor tensión y con la textura natural.</p><div class="study-note"><strong>Lectura crítica:</strong> no es una prohibición de alisarse ni de hacerse moños. La pregunta es quién decide qué cabello puede mostrarse sin tener que ser «domado».</div><p class="archive-source"><a href="https://www.glamour.com/story/how-to-do-slick-back-hairstyles-safely" target="_blank" rel="noopener noreferrer">Glamour: origen y contexto de No Slickback November ↗</a></p>`,"story"),

page("archivo-cierre","Capítulo III · ¿De dónde surgió el rechazo?","¿De dónde salió lo que yo sentía?",`<p class="story dropcap">La respuesta no era una película, una princesa o un champú.</p><div class="era-summary"><p><strong>1900–1960:</strong> el cabello afro fue presentado en anuncios como un defecto, y lo liso como un ideal de moda.</p><p><strong>1960–1970:</strong> Black Is Beautiful defendió el cabello natural, aunque el alisado seguía anunciándose.</p><p><strong>1990–2009:</strong> aparecieron nuevas palabras: frizz, control, esponjado y pelo rebelde.</p><p><strong>2010–2026:</strong> crecieron las representaciones de aceptación, mientras aparecían tendencias de cabello muy pulido y respuestas como No Slickback November.</p></div><p class="narrative-quote">El rechazo que aprendí a sentir por mis crespos no surgió de la nada. Era una idea repetida durante generaciones.</p>`,"story"),

page("otra-nina","Capítulo IV · Volver a la niña","Volvamos a la niña del cuento.",`<div class="chapter-opener"><span class="num">✧</span><h2>Ahora entiendo de dónde venían<br>algunas de mis ideas.</h2><p>Mi historia no equivale a la discriminación que enfrentaron las mujeres negras en los primeros anuncios. Pero crecí en un contexto donde lo «esponjado» parecía algo que debía arreglarse.</p><span class="ornament">❦</span></div>`,"chapter"),

page("mis-fotos-antes","Capítulo IV · Volver a la niña","Cuando el ideal se hizo costumbre.",`<p class="story dropcap">Mi pelo estaba entre liso y crespo. Como no sabía cuidarlo, empecé a intentar cambiarlo.</p><p class="story">Me hacía trenzas, me alisaba y con el tiempo me hice tratamientos de queratina. Lo repetí durante años, hasta que terminé dañándolo.</p><p class="narrative-quote">No quería otro peinado para una ocasión. Quería otro cabello para sentirme bonita.</p><p class="story">Mirando atrás, la transformación de Mia tenía un significado que yo nunca había cuestionado: ella ya era princesa antes de que le alisaran el pelo.</p>`,"story"),

page("eleccion-o-presion","Capítulo IV · Volver a la niña","¿Elección o presión?",`<p class="story">Alisarse no es malo. Puede ser una elección estética, una forma de expresión o una decisión práctica.</p><p class="story">Pero una elección se vuelve problemática cuando sentimos que nuestra textura natural no es suficientemente bonita, femenina o elegante para mostrarse.</p><p class="story">Ingrid Banks (2000) estudia cómo el cabello puede expresar identidad y autonomía, pero también negociar expectativas sociales.</p><p class="narrative-quote">No me arrepiento de haberme alisado. Me pregunto por qué sentí que debía hacerlo durante tantos años.</p>`,"story"),

page("anne","Capítulo V · Mi propio final","2026 · Mia también volvió a mirarse.",`<span class="archive-step">ANNE HATHAWAY · ABRIL DE 2026</span><p class="story">Veinticinco años después de <em>El diario de la princesa</em>, Anne Hathaway explicó que mostrar su propio cabello tras la transformación de Mia respondió a razones prácticas durante la filmación.</p><p class="story">Sin embargo, parte del público entendió que los rizos de Mia eran menos atractivos. <strong>Yo fui una de esas niñas que se quedó con ese mensaje.</strong></p><p class="narrative-quote">La intención con la que se produce una imagen y el significado que aprende quien la ve no siempre son iguales.</p><p class="archive-source"><a href="https://people.com/anne-hathaway-the-princess-diaries-worlds-most-beautiful-exclusive-11954368" target="_blank" rel="noopener noreferrer">Entrevista completa con Anne Hathaway ↗</a></p>`,"story"),

page("yo-hoy","Capítulo V · Mi propio final","La niña del cuento creció.",`<img src="assets/illustrations/curly-portrait.svg" class="story-portrait story-portrait--small" alt="Ilustración editorial de una mujer de cabello rizado"><p class="story">Hoy sé que mi pelo no estaba mal. Simplemente no había aprendido a mirarlo ni a cuidarlo sin intentar convertirlo en otro.</p><p class="story">Puedo llevar mis crespos sueltos y también alisarme un día si quiero. Lo que cambió fue el significado de esa decisión.</p><p class="narrative-quote">Ya no necesito parecerme a una princesa para sentirme bonita.</p>`,"story"),

page("moraleja","Capítulo V · Mi propio final","Conclusión · La belleza que escondimos.",`<p class="story">El recorrido muestra cómo, durante décadas, la publicidad y los medios asociaron algunas texturas de cabello con problemas que debían corregirse. También muestra que estas representaciones encontraron resistencia y empezaron a cambiar.</p><p class="story">El discurso pasó de exigir el alisado a promover el control del frizz y, más recientemente, a celebrar rizos y texturas naturales. Pero esa diversidad aún convive con tendencias que imponen nuevos ideales.</p><p class="narrative-quote">El problema no es llevar el pelo liso. Es crecer creyendo que solo con el pelo liso podemos ser bonitas.</p><p class="story">Mi deseo es que ninguna niña tenga que esconder sus crespos para imaginarse protagonista de su propio cuento.</p>`,"story"),

page(
    "yo-princesa",
    "Capítulo VII · El final que yo elijo",
    "Y así terminó el cuento...",
    `
    <div class="chapter-opener">

      <span class="ornament">♛</span>

      <p>
        Volví a mirar la historia con la que crecí,
        pero esta vez la entendí de otra manera.
      </p>

      <h2>
        Mia siempre fue<br>
        una princesa.<br>
        <em>Y yo también.</em>
      </h2>

      <p>
        FIN DEL CUENTO.<br>
        NO DEL PENSAMIENTO.
      </p>

      <span class="ornament">❦</span>

    </div>
    `,
    "chapter"
  ),

  // ==================================================
  // BIBLIOGRAFÍA
  // ==================================================

page("metodo","Apéndice · Las fuentes del cuento","Cómo analicé estas imágenes.",`<p class="story">Este ensayo presenta una lectura <strong>cualitativa e histórica de representaciones</strong>: compara titulares, imágenes y promesas de anuncios, películas y campañas digitales de distintas épocas.</p><p class="story">No busca demostrar que una publicidad causó una reacción específica en todas las personas. Identifica patrones de belleza, control, resistencia y aceptación para comprender mi experiencia.</p><div class="study-note"><strong>Marco teórico:</strong> Stuart Hall, Ingrid Banks, Emma Dabiri y Marshall McLuhan. <strong>Fuentes primarias:</strong> anuncios históricos y campañas fechadas.</div><p class="story">Las presiones raciales que afrontaron mujeres negras en Estados Unidos no son equivalentes a mi experiencia colombiana.</p>`,"story"),

page("autores-1","Apéndice · Las fuentes del cuento","Autores y perspectiva histórica.",`<ol class="refs"><li>Hall, S. (Ed.). (1997). <cite>Representation: Cultural Representations and Signifying Practices</cite>. SAGE.</li><li>Banks, I. (2000). <cite>Hair Matters: Beauty, Power, and Black Women's Consciousness</cite>. NYU Press.</li><li>Dabiri, E. (2019). <cite>Don't Touch My Hair</cite>. Allen Lane.</li><li>McLuhan, M. (1964). <cite>Understanding Media: The Extensions of Man</cite>. McGraw-Hill.</li><li><a href="https://exhibits.library.duke.edu/exhibits/show/-black-is-beautiful-/the-afro" target="_blank">Duke University</a>. <em>Black Is Beautiful: The Afro</em>.</li><li><a href="https://nmaahc.si.edu/explore/stories/strands-of-inspiration" target="_blank">Smithsonian NMAAHC</a>. <em>Strands of Inspiration</em>.</li></ol>`,"story"),

page("fuentes-2","Apéndice · Las fuentes del cuento","Anuncios y películas del archivo.",`<ol class="refs"><li><a href="https://dangerouspress.org/papers/colored-american/1903-11-14" target="_blank">Ozonized Ox Marrow (1903)</a>.</li><li><a href="https://dangerouspress.org/papers/chicago-defender/1919-08-02" target="_blank">Plough's Hair Dressing (1919)</a>.</li><li><a href="https://kissmyblackads.blogspot.com/2009/03/ebony-june-1960.html" target="_blank">Hair-Strate, Ebony (1960)</a>.</li><li><a href="https://www.wnyc.org/story/how-black-hair-care-grew-black-power/" target="_blank">Afro Sheen (años 70)</a>.</li><li><a href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" target="_blank">Frizz-Ease (1994)</a>.</li><li><a href="https://pepsic.bvsalud.org/scielo.php?pid=S2359-07692017000200008&script=sci_arttext" target="_blank">Seda Anti-Sponge (Brasil)</a>.</li><li><a href="https://www.yumpu.com/es/document/view/8565342/con-sedal-teens-el-pelo-perfecto-esta-cada-vez-mas-cerca-unilever" target="_blank">Sedal Teens, Colombia (2008)</a>.</li><li><a href="https://www.prnewswire.com/news-releases/dove-hair-launches-poetic-tribute-to-curls-inspired-by-stories-from-real-women-300084598.html" target="_blank">Dove, Love Your Curls (2015)</a>.</li><li><a href="https://www.dove.com/us/en/campaigns/purpose/my-hair-a-mi-modo.html" target="_blank">Dove, #MyHairAMiModo (2023)</a>.</li><li><a href="https://shortyawards.com/9th-impact/code-my-crown" target="_blank">Dove, Code My Crown (2024)</a>.</li><li><a href="https://movies.disney.com/brave" target="_blank">Brave (2012)</a>, <a href="https://movies.disney.com/moana" target="_blank">Moana (2016)</a> y <a href="https://movies.disney.com/encanto" target="_blank">Encanto (2021)</a>.</li><li><a href="https://people.com/anne-hathaway-the-princess-diaries-worlds-most-beautiful-exclusive-11954368" target="_blank">Anne Hathaway, PEOPLE (2026)</a>.</li><li><a href="https://www.elle.com/beauty/hair/a60431197/sofia-richie-grainge-pregnancy-hair-nexxus-ambassador/" target="_blank">Elle</a> (2024), moño pulido de Sofia Richie.</li><li><a href="https://www.glamour.com/story/how-to-do-slick-back-hairstyles-safely" target="_blank">Glamour</a> (2025), <em>No Slickback November</em>.</li><li><a href="https://www.bustle.com/beauty/no-slickback-november-tiktok" target="_blank">Bustle</a> (2025), imágenes de creadoras del reto.</li></ol>`,"story"),

page("declaracion","Apéndice · Las fuentes del cuento","Sobre este ensayo multimedia.",`<p class="story">El libro combina memoria personal, imágenes históricas, cine e investigación. Cada doble página corresponde a una época y presenta sus imágenes junto al análisis.</p><div class="paper-note"><p><strong>Desarrollo:</strong> HTML, CSS, JavaScript y StPageFlip.</p><p><strong>Fuentes visuales:</strong> cada recorte enlaza a su archivo. Las imágenes externas que no carguen se ocultan; no se presentan transcripciones como fotos originales.</p><p><strong>IA:</strong> ChatGPT apoyó investigación, redacción, edición y desarrollo web; un generador de imágenes se utilizó para ilustraciones editoriales.</p></div><p class="small">La experiencia autobiográfica es de la autora. Las interpretaciones de los anuncios no atribuyen una misma motivación a todas las mujeres.</p>`,"story"),

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
    "label": "Una historia de los crespos"
  },
  {
    "page": 24,
    "number": "04",
    "label": "Volver a la niña"
  },
  {
    "page": 27,
    "number": "05",
    "label": "Mi conclusión"
  },
  {
    "page": 31,
    "number": "06",
    "label": "Fuentes y bibliografía"
  }
];
