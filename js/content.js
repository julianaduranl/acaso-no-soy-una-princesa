
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

page("la-tesis","Capítulo II · La transformación","¿Quién nos enseñó qué pelo era bello?",`
<p class="story dropcap">Cuando era pequeña, las películas me enseñaron a admirar cierto tipo de cabello. Con el tiempo entendí que esas imágenes formaban parte de una historia mucho más larga.</p>
<div class="thesis-page tesis-formal thesis-statement">
<h3>Pregunta de investigación</h3>
<p>¿Cómo influyen la publicidad, el cine y otros medios de comunicación en lo que consideramos un cabello bello?</p>
<h3>Tesis</h3>
<p>Los medios no solo reflejan los ideales de belleza: también contribuyen a construirlos. Durante décadas, anuncios y películas privilegiaron el cabello liso o cuidadosamente peinado como sinónimo de elegancia y atractivo, mientras mostraban el crespo como una textura que debía controlarse o transformar. Estas representaciones, ligadas a contextos históricos y raciales específicos, ayudaron a normalizar esa jerarquía y también encontraron resistencia.</p>
</div>
<p class="story"><strong>Este ensayo analiza cómo el pelo liso llegó a ocupar el centro del ideal visual, cómo se cuestionó ese modelo y por qué yo también lo interioricé.</strong></p>
`,"story"),

page("reloj-atras","Capítulo III · ¿De dónde surgió el rechazo?","Todo empezó mucho antes de mí.",`
<span class="archive-step">PRINCIPIOS DEL SIGLO XX · EL INICIO DE NUESTRO RECORRIDO</span>
<p class="story dropcap">Mucho antes de Mia Thermopolis y de las redes sociales, ya existía una promesa: <strong>transformar el cabello crespo para acercarlo a un ideal de belleza.</strong></p>
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
  <span class="early-history__caption">El <em>hot comb</em> alisaba temporalmente el cabello mediante calor. · Ilustración editorial</span>
</div>
<p class="story">El peine caliente ya existía desde el siglo XIX, pero a comienzos del XX ganó protagonismo en la industria capilar afroamericana. Su uso ofrecía posibilidades para peinarse, y también respondía a una sociedad que asociaba el cabello liso con una apariencia respetable.</p>
<p class="story">No fue el nacimiento del rechazo a los crespos. Fue uno de los momentos en que <strong>ese ideal se volvió visible y comercial</strong>.</p>
<p class="archive-source"><a href="https://www.americanhistory.si.edu/es/collections/object/nmah_1195120" target="_blank" rel="noopener noreferrer">Smithsonian · peine alisador usado desde los años veinte ↗</a></p>
`,"story"),

page("collage-1900","Capítulo III · ¿De dónde surgió el rechazo?","1900–1939 · Los recortes",`<span class="archive-step">LAS PRIMERAS PROMESAS DE TRANSFORMACIÓN</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--two"><span class="archive-collage__stamp">1900–1939<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://dangerouspress.org/papers/colored-american/1903-11-14" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Ozonized Ox Marrow · 1903"><span class="scrap-photo__picture"><img src="assets/ads/ozonized-1903.webp" alt="Publicidad Wonderful Discovery: cabello crespo antes y alisado después" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Ozonized Ox Marrow · 1903 ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://dangerouspress.org/papers/chicago-defender/1919-08-02" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Plough's · 1919"><span class="scrap-photo__picture"><img src="assets/ads/ploughs-1919.webp" alt="Anuncio auténtico Take Out The Kinks de Plough's Hair Dressing" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Plough's · 1919 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Recortes originales de 1903 y 1919: dos anuncios distintos que muestran cómo el alisado se ofrecía como mejora.</p>`,"story"),

page("analisis-1900","Capítulo III · ¿De dónde surgió el rechazo?","1900–1939 · El crespo se convertía en un problema",`<span class="archive-step">ANÁLISIS · LAS PRIMERAS PROMESAS DE TRANSFORMACIÓN</span><p class="story">A comienzos del siglo XX, la publicidad de productos capilares ofrecía alisar el cabello afro con pomadas y peines calientes. En <strong>1919</strong>, Plough's Hair Dressing vinculó el pelo <em>curly</em> y <em>kinky</em> con el adjetivo <em>ugly</em> («feo»).</p><p class="story">En los años treinta, anuncios como <em>Slick Black</em> incluían el alisado temporal entre sus promesas. El cabello natural podía presentarse como algo que debía transformarse para conseguir una apariencia deseable.</p><p class="story">Esas imágenes circularon en una sociedad atravesada por la segregación racial. <strong>Para las mujeres negras, el cabello también podía relacionarse con prejuicios y aceptación social</strong>, aunque alisarse no tuviera el mismo significado para todas.</p><div class="study-note"><strong>Argumento:</strong> la publicidad no inventó por sí sola el racismo, pero pudo aprovecharlo y reproducirlo para vender productos.</div><p class="archive-source"><a href="https://dangerouspress.org/papers/chicago-defender/1919-08-02" target="_blank" rel="noopener noreferrer">Anuncio Plough’s «Take Out the Kinks» (1919) ↗</a></p>`,"story"),

page("collage-1940","Capítulo III · ¿De dónde surgió el rechazo?","1940–1959 · Los recortes",`<span class="archive-step">LA BELLEZA PULIDA Y LOS ALISADOS DURADEROS</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">1940–1959<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://ofanotherfashion.tumblr.com/post/2923472471/an-advertisement-for-perma-strate-cream-hair" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Perma-Strate · publicidad de época"><span class="scrap-photo__picture"><img src="assets/ads/perma-fashion.webp" alt="Anuncio Fashion Demands Straight Hair de Perma-Strate, fecha específica por verificar" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Perma-Strate · publicidad de época ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://movies.disney.com/cinderella-1950" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Cenicienta · 1950"><span class="scrap-photo__picture"><img src="https://www.originalfilmart.com/cdn/shop/products/cinderella_1950_styleB_half_sheet_linen_original_film_art_2000x.jpg?v=1617370865" alt="Póster original de Cenicienta 1950" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/princesas-lineas.png';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Cenicienta · 1950 ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://commons.wikimedia.org/wiki/File:Monroe_1953_publicity_(cropped).jpg" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Marilyn Monroe · 1953"><span class="scrap-photo__picture"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Monroe_1953_publicity_%28cropped%29.jpg" alt="Retrato publicitario de Marilyn Monroe con cabello ondulado, 1953" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Marilyn Monroe · 1953 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Publicidad de Perma-Strate y referencias visuales del cine de los años cincuenta. Si una imagen externa falla, aparece una ilustración editorial.</p>`,"story"),

page("analisis-1940","Capítulo III · ¿De dónde surgió el rechazo?","1940–1959 · El alisado se vendía como moda",`<span class="archive-step">ANÁLISIS · LA BELLEZA PULIDA Y LOS ALISADOS DURADEROS</span><p class="story">El alisado pasó de ser una posibilidad técnica a una promesa de duración. <strong>Perma-Strate ya anunciaba en 1948</strong> tratamientos capaces de mantener el cabello liso durante meses.</p><p class="story">En paralelo, el cine popularizaba modelos de belleza cuidadosamente elaborada, como Cenicienta o las estrellas de Hollywood. No todas llevaban el pelo liso —Marilyn Monroe usaba ondas—, pero sí una apariencia especialmente pulida.</p><p class="story">Una publicidad de Perma-Strate llegó a declarar: <strong>«Fashion Demands Straight Hair!»</strong>. Su fecha exacta no está establecida; sirve para ilustrar la presión comercial, no para fecharla en 1950.</p><div class="study-note"><strong>Stuart Hall:</strong> la reiteración de imágenes ayuda a construir qué apariencias son percibidas como elegantes o admirables.</div><p class="archive-source"><a href="https://mdhistory.msa.maryland.gov/msaref14/msa_sc5458_000045_000261/pdf/msa_afro_1950_08_1951_08-0130.pdf" target="_blank" rel="noopener noreferrer">Perma-Strate en prensa afroamericana (1950) ↗</a></p>`,"story"),

page("collage-1970","Capítulo III · ¿De dónde surgió el rechazo?","1960–1979 · Los recortes",`<span class="archive-step">BLACK IS BEAUTIFUL Y LA PUBLICIDAD DEL AFRO</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">1960–1979<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://kissmyblackads.blogspot.com/2009/03/ebony-june-1960.html" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Hair-Strate · 1960"><span class="scrap-photo__picture"><img src="assets/ads/hair-strate-1960.webp" alt="Publicidad auténtica Hair Strate, Swim Shower Shampoo, pelo alisado no regresa a rizo" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Hair-Strate · 1960 ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://www.wnyc.org/story/how-black-hair-care-grew-black-power/" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Afro Sheen · años setenta"><span class="scrap-photo__picture"><img src="assets/ads/afro-sheen-1970.webp" alt="Anuncio de una familia negra con afros naturales y productos Afro Sheen" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Afro Sheen · años setenta ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://www.pinterest.com/pin/415738609347252904/" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Perma-Strate · primeros setenta"><span class="scrap-photo__picture"><img src="assets/ads/perma-first-straighten.webp" alt="Publicidad Perma-Strate First Straighten Then Style" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Perma-Strate · primeros setenta ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Tres anuncios reales de época: el alisado duradero y la celebración del afro convivían en el mismo periodo.</p>`,"story"),

page("analisis-1970","Capítulo III · ¿De dónde surgió el rechazo?","1960–1979 · El afro desafió el ideal dominante",`<span class="archive-step">ANÁLISIS · BLACK IS BEAUTIFUL Y LA PUBLICIDAD DEL AFRO</span><p class="story">Desde los años sesenta, el movimiento <strong>Black Is Beautiful</strong> reivindicó el afro natural como símbolo de orgullo racial. Era una respuesta a siglos de discriminación y a los ideales que privilegiaban rasgos europeos.</p><p class="story">Pero el cambio no fue inmediato: Hair-Strate (1960) y Perma-Strate (1965 y 1971) seguían vendiendo el alisado. Al mismo tiempo, anuncios como Ultra Sheen (1970) mostraban afros como una forma legítima de belleza.</p><p class="story"><strong>La misma década contenía mensajes opuestos.</strong> La aceptación del cabello afro no empezó con las redes sociales: ya existían movimientos culturales que la defendían.</p><p class="archive-source"><a href="https://exhibits.library.duke.edu/exhibits/show/-black-is-beautiful-/the-afro" target="_blank" rel="noopener noreferrer">Archivo académico Black Is Beautiful ↗</a></p>`,"story"),

page("collage-1990","Capítulo III · ¿De dónde surgió el rechazo?","1980–1999 · Los recortes",`
<span class="archive-step">TRES FORMAS DE VENDER EL CONTROL DEL CABELLO EN LOS NOVENTA</span>
<div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi">
  <span class="archive-collage__stamp">1980–1999<br>ARCHIVO</span>
  <a class="scrap-photo scrap-photo--one image-scrap" href="https://www.elle.com/beauty/hair/a60504710/pro-line-just-for-me-nu-standard-cottrell-family/" target="_blank" rel="noopener noreferrer" aria-label="Ver archivo histórico de Just for Me en ELLE">
    <span class="scrap-photo__picture">
      <img src="https://hips.hearstapps.com/hmg-prod/images/historical-just-for-me-ad-autumn-yarbrough-in-yellow-1-662665c8b27ba.png?resize=640%3A%2A" alt="Publicidad histórica de Just for Me: niñas junto a productos para su cabello y alisador infantil" loading="lazy" onerror="this.onerror=null;this.closest('.scrap-photo').classList.add('is-missing');">
      <span class="scrap-archive-fallback">JUST FOR ME<small>Alisado dirigido a niñas<br>Década de 1990</small></span>
    </span>
    <span class="scrap-photo__label">Just for Me · años 90 ↗</span>
  </a>
  <a class="scrap-photo scrap-photo--two image-scrap" href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" target="_blank" rel="noopener noreferrer" aria-label="Ver anuncio Frizz-Ease de 1994">
    <span class="scrap-photo__picture"><img src="assets/ads/frizz-ease-1994.webp" alt="Anuncio original de John Frieda Frizz-Ease de 1994: No More Frizz" loading="lazy" onerror="this.onerror=null;this.closest('.scrap-photo').classList.add('is-missing');"><span class="scrap-archive-fallback">NO MORE FRIZZ<small>John Frieda · 1994<br>El frizz como problema</small></span></span>
    <span class="scrap-photo__label">Frizz-Ease · 1994 ↗</span>
  </a>
  <a class="scrap-photo scrap-photo--three image-scrap" href="https://adroots.wordpress.com/2024/03/21/black-beauty-in-advertising/" target="_blank" rel="noopener noreferrer" aria-label="Ver anuncio African Pride de 1996 reproducido por AdRoots">
    <span class="scrap-photo__picture">
      <img src="https://adroots.wordpress.com/wp-content/uploads/2024/03/early-black-hair-ad.png?w=646" alt="Anuncio African Pride en Today's Black Women (1996), con palabras confianza, orgullo y poder ligadas al control del cabello" loading="lazy" onerror="this.onerror=null;this.closest('.scrap-photo').classList.add('is-missing');">
      <span class="scrap-archive-fallback">CONFIDENCE.<br>PRIDE.<br>POWER.<small>African Pride · 1996<br>Cuidado y control</small></span>
    </span>
    <span class="scrap-photo__label">African Pride · 1996 ↗</span>
  </a>
  <span class="archive-collage__scribble" aria-hidden="true">✶</span>
</div>
<p class="archive-collage__note">Tres anuncios distintos de los noventa: alisado para niñas, tratamiento anti-frizz y confianza asociada al control del cabello.</p>
`,"story"),

page("analisis-1990","Capítulo III · ¿De dónde surgió el rechazo?","1980–1999 · El cabello debía estar bajo control",`
<span class="archive-step">ANÁLISIS · TRES MENSAJES PUBLICITARIOS DE LOS NOVENTA</span>
<p class="story">En los años noventa, la publicidad del cabello no transmitía un único ideal. Sin embargo, varios anuncios compartían una promesa: <strong>hacer que la textura fuera más fácil de manejar y se ajustara a una apariencia deseable</strong>.</p>
<p class="story"><strong>Just for Me</strong>, lanzado a comienzos de esa década, vendía alisadores dirigidos a niñas. El mercado llegaba así a consumidoras muy jóvenes, aunque sus elecciones y circunstancias no fueran iguales.</p>
<p class="story">En <strong>1994</strong>, John Frieda <em>Frizz-Ease</em> presentó el frizz como algo que debía «curarse». También mostraba rizos definidos como resultado posible: la promesa no era siempre alisar, sino <strong>controlar el volumen</strong>.</p>
<p class="story">Un anuncio de <strong>African Pride (1996)</strong> asociaba confianza, orgullo y poder con controlar el cabello. En esa imagen se promocionaban acondicionadores: el mensaje iba más allá del alisado químico.</p>
<div class="study-note"><strong>Lectura del periodo:</strong> distintos productos podían reforzar una misma expectativa: que el cabello natural necesitaba intervención para verse «bien».</div>
<p class="archive-source">Fuentes: <a href="https://www.elle.com/beauty/hair/a60504710/pro-line-just-for-me-nu-standard-cottrell-family/" target="_blank" rel="noopener noreferrer">Just for Me</a> · <a href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" target="_blank" rel="noopener noreferrer">Frizz-Ease (1994)</a> · <a href="https://adroots.wordpress.com/2024/03/21/black-beauty-in-advertising/" target="_blank" rel="noopener noreferrer">African Pride (1996)</a></p>
`,"story"),

page("collage-2000","Capítulo III · ¿De dónde surgió el rechazo?","2000–2009 · Los recortes",`<span class="archive-step">FRIZZ Y «CABELLO REBELDE» EN AMÉRICA LATINA</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">2000–2009<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://pepsic.bvsalud.org/scielo.php?pid=S2359-07692017000200008&amp;script=sci_arttext" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Seda Anti-Sponge · Brasil"><span class="scrap-photo__picture"><img src="assets/ads/seda-anti-sponge.webp" alt="Anuncio completo de Seda Anti Sponge, dos leones con distintas melenas" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Seda Anti-Sponge · Brasil ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://pepsic.bvsalud.org/scielo.php?pid=S2359-07692017000200008&amp;script=sci_arttext" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Antes · melena con volumen"><span class="scrap-photo__picture"><img src="assets/ads/seda-before.webp" alt="Detalle del león con melena natural y volumen del anuncio brasileño" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Antes · melena con volumen ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://pepsic.bvsalud.org/scielo.php?pid=S2359-07692017000200008&amp;script=sci_arttext" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Después · melena controlada"><span class="scrap-photo__picture"><img src="assets/ads/seda-after.webp" alt="Detalle del león alisado en la misma publicidad" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Después · melena controlada ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Un anuncio real de Seda Anti-Sponge y dos detalles ampliados de sus leones. El lanzamiento de Sedal Teens en Colombia está analizado en la página derecha.</p>`,"story"),

page("analisis-2000","Capítulo III · ¿De dónde surgió el rechazo?","2000–2009 · Lo esponjado llegó a nuestra infancia",`<span class="archive-step">ANÁLISIS · FRIZZ Y «CABELLO REBELDE» EN AMÉRICA LATINA</span><p class="story">A principios de los años 2000, campañas de anti-frizz convirtieron el volumen y el cabello «esponjado» en situaciones que debían resolverse. En Brasil, Seda Anti-Sponge utilizó la melena de un león como metáfora visual.</p><p class="story">En <strong>Colombia, Sedal Teens promocionó Bye Bye Frizz en 2008</strong> con mensajes de «pelo perfecto» dirigidos a adolescentes.</p><p class="story">Yo usaba la palabra <em>esponjado</em> para describir mi cabello. Y en <em>El diario de la princesa</em> (2001), la transformación de Mia reforzó mi asociación entre alisarse y verse mejor.</p><div class="study-note"><strong>Relación personal:</strong> no fue una sola imagen, sino la repetición de palabras e ideales lo que influyó en mi percepción.</div><p class="archive-source"><a href="https://www.yumpu.com/es/document/view/8565342/con-sedal-teens-el-pelo-perfecto-esta-cada-vez-mas-cerca-unilever" target="_blank" rel="noopener noreferrer">Sedal Teens en Colombia (2008) ↗</a></p>`,"story"),

page("collage-2010","Capítulo III · ¿De dónde surgió el rechazo?","2010–2019 · Los recortes",`<span class="archive-step">DEL CONTROL DEL FRIZZ A AMAR LOS RIZOS</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">1900–1939<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://www.campaignlive.co.uk/article/john-frieda-primed-host-live-digital-show/1071489" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: John Frieda · cabello «antes»"><span class="scrap-photo__picture"><img src="assets/ads/john-frieda-2011.webp" alt="Campaña de Frizz Ease en que una mujer quema una foto de su cabello con volumen" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">John Frieda · cabello «antes» ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://shortyawards.com/8th/dove-hair-love-your-curls" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Dove · Love Your Curls, 2015"><span class="scrap-photo__picture"><img src="assets/ads/dove-curls-2015.webp" alt="Publicidad Dove Love Your Curls sobre la ausencia de emojis de personas crespas" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Dove · Love Your Curls, 2015 ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://movies.disney.com/brave" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Valiente · 2012"><span class="scrap-photo__picture"><img src="https://d.ibtimes.co.uk/en/full/261749/brave-official-movie-poster.jpg?f=20b40ca81f1a02a7d5de059b88c9f0da&amp;w=1440" alt="Póster de Valiente con princesa Mérida rizada" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/princesas-lineas.png';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Valiente · 2012 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Dos campañas auténticas sobre el cabello y una referencia cinematográfica. Imágenes de anuncios guardadas dentro del proyecto.</p>`,"story"),

page("analisis-2010","Capítulo III · ¿De dónde surgió el rechazo?","2010–2019 · El cambio empezó a verse en los medios",`<span class="archive-step">ANÁLISIS · DEL CONTROL DEL FRIZZ A AMAR LOS RIZOS</span><p class="story">En 2011 todavía aparecían campañas que presentaban el cabello voluminoso como un «antes» que debía desaparecer. Pero en <strong>2015 Dove lanzó Love Your Curls</strong>, una campaña que invitaba a apreciar los rizos.</p><p class="story">El cine también empezó a ampliar sus protagonistas: <em>Valiente</em> (2012) mostraba a Mérida con una melena muy rizada; <em>Moana</em> (2016) llevaba el pelo ondulado sin necesidad de una transformación estética.</p><p class="story"><strong>2015 es un cambio visible dentro del archivo que analizamos</strong>, no el año en que nació la aceptación. Black Is Beautiful ya había defendido el pelo natural décadas atrás.</p><div class="study-note"><strong>Contradicción:</strong> la autoestima y la diversidad también pueden convertirse en herramientas de marketing.</div><p class="archive-source"><a href="https://www.prnewswire.com/news-releases/dove-hair-launches-poetic-tribute-to-curls-inspired-by-stories-from-real-women-300084598.html" target="_blank" rel="noopener noreferrer">Dove Love Your Curls (2015) ↗</a></p>`,"story"),

page("collage-2020","Capítulo III · ¿De dónde surgió el rechazo?","2020–2023 · Los recortes",`<span class="archive-step">CABELLOS NATURALES Y TENDENCIAS DIGITALES</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">2020–2023<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://movies.disney.com/encanto" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Encanto · 2021"><span class="scrap-photo__picture"><img src="https://lumiere-a.akamaihd.net/v1/images/au_disney_encanto_payoff_movie_poster_1e7be9e9.jpeg" alt="Póster de Encanto con personajes de cabello ondulado y crespo" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/princesas-lineas.png';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Encanto · 2021 ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://www.dove.com/us/en/campaigns/purpose/my-hair-a-mi-modo.html" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Dove · #MyHairAMiModo, 2023"><span class="scrap-photo__picture"><img src="https://www.creativemoment.co/images/uploads/features/dove-champions-hair-positivity-for-latinas-through-a-vibrant-music-video-myhairamimodo/_1200x630_crop_center-center_82_none/dove-lead.jpg?mtime=1698148249" alt="Campaña Dove con Li Saumet, cantante colombiana" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Dove · #MyHairAMiModo, 2023 ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://www.elle.com/tw/beauty/hair/g69277074/slick-back-bun/" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Clean Girl · 2023"><span class="scrap-photo__picture"><img src="https://hips.hearstapps.com/hmg-prod/images/haileybieber-1689545608-3148459220022447464-7141291-690cebba8184a.jpg" alt="Moño slickback pulido de Hailey Bieber" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/bun-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Clean Girl · 2023 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Campañas y películas del periodo. Una ilustración editorial reemplaza cualquier imagen externa que no pueda mostrarse.</p>`,"story"),

page("analisis-2020","Capítulo III · ¿De dónde surgió el rechazo?","2020–2023 · La diversidad llegó a más pantallas",`<span class="archive-step">ANÁLISIS · CABELLOS NATURALES Y TENDENCIAS DIGITALES</span><p class="story"><em>Encanto</em> (2021) mostró una familia colombiana con distintas texturas de cabello. En 2023, Dove presentó <strong>#MyHairAMiModo</strong>, con Li Saumet, para celebrar el pelo de las latinas.</p><p class="story">Al mismo tiempo, el <strong>Clean Girl Look</strong> popularizó el moño tirante y un acabado sin mechones sueltos. No hay nada malo en ese peinado, pero sí vale la pena cuestionar que se asocie con verse «limpia» o impecable.</p><p class="story">La mayor representación de los crespos no eliminó todas las presiones: ahora podían coexistir mensajes de autoaceptación con modas que exigían pulcritud extrema.</p><p class="archive-source"><a href="https://www.dove.com/us/en/campaigns/purpose/my-hair-a-mi-modo.html" target="_blank" rel="noopener noreferrer">Dove Mi Pelo a Mi Modo (2023) ↗</a></p>`,"story"),

page("collage-2026","Capítulo III · ¿De dónde surgió el rechazo?","2024–2026 · Los recortes",`<span class="archive-step">CODE MY CROWN Y NO SLICKBACK NOVEMBER</span><div class="archive-collage archive-collage--photographic collage-epoca collage-epoca--multi"><span class="archive-collage__stamp">2024–2026<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one image-scrap" href="https://shortyawards.com/9th-impact/code-my-crown" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Code My Crown · 2024"><span class="scrap-photo__picture"><img src="https://dp6mhagng1yw3.cloudfront.net/entries/9th-impact/f709c46a-a9df-4324-a1de-b000c89700c2.jpg" alt="Campaña de representación de peinados afro en videojuegos" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/curly-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Code My Crown · 2024 ↗</span></a><a class="scrap-photo scrap-photo--two image-scrap" href="https://www.bustle.com/beauty/no-slickback-november-tiktok" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: No Slickback November · 2025"><span class="scrap-photo__picture"><img src="https://imgix.bustle.com/uploads/image/2025/11/4/e714939e/screenshot-2025-11-04.png?crop=faces&amp;dpr=2&amp;fit=crop&amp;h=594&amp;w=414" alt="Creadora mostrando un peinado sin recogido tirante" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/bun-portrait.svg';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">No Slickback November · 2025 ↗</span></a><a class="scrap-photo scrap-photo--three image-scrap" href="https://bwretailworld.com/beauty/taapsee-pannu-leads-doves-reclaim-your-curls-campaign" target="_blank" rel="noopener noreferrer" aria-label="Abrir fuente: Reclaim Your Curls · 2025"><span class="scrap-photo__picture"><img src="https://i0.wp.com/bwretailworld.com/wp-content/uploads/2025/10/KV-V2.jpg?fit=960%2C640&amp;ssl=1" alt="Publicidad Dove India Reclaim Your Curls con cabello rizado" loading="lazy" onerror="this.onerror=null;this.src='assets/illustrations/princesas-lineas.png';this.closest('.scrap-photo').classList.add('image-scrap--illustrative');"></span><span class="scrap-photo__label">Reclaim Your Curls · 2025 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Campañas y tendencias recientes. Las imágenes que no carguen muestran una ilustración editorial, nunca una tarjeta vacía.</p>`,"story"),

page("analisis-2026","Capítulo III · ¿De dónde surgió el rechazo?","2024–2026 · El ideal pulido empezó a cuestionarse",`<span class="archive-step">ANÁLISIS · CODE MY CROWN Y NO SLICKBACK NOVEMBER</span><p class="story">En 2024, <strong>Code My Crown</strong> impulsó una representación más cuidadosa del cabello afro y los peinados protectores en videojuegos. La diversidad empezó a discutirse también en medios interactivos.</p><p class="story">Mientras los moños pulidos seguían de moda, <strong>No Slickback November</strong> invitó a descansar de los recogidos tirantes y probar otras formas de llevar el cabello. El reto ganó visibilidad en 2025 y continuó circulando en 2026.</p><p class="story">No se trata de prohibir los peinados lisos o recogidos. Se trata de que ninguna moda defina quién puede verse elegante.</p><div class="study-note"><strong>Conclusión del recorrido:</strong> las imágenes que imponen ideales también pueden convertirse en espacios para cuestionarlos.</div><p class="archive-source"><a href="https://www.bustle.com/beauty/no-slickback-november-tiktok" target="_blank" rel="noopener noreferrer">No Slickback November, 2025 ↗</a></p>`,"story"),

page("archivo-cierre","Capítulo III · ¿De dónde surgió el rechazo?","¿De dónde salió lo que yo sentía?",`<p class="story dropcap">El rechazo al pelo crespo que aprendí de niña no apareció en una fecha exacta ni tuvo una sola causa.</p><div class="era-summary"><p><strong>1900–1959:</strong> se anunciaba que algunas texturas debían transformarse; el alisado se vinculó con moda, belleza y respeto social.</p><p><strong>1960–1979:</strong> Black Is Beautiful cuestionó el ideal dominante, aunque persistió la publicidad del alisado.</p><p><strong>1980–2009:</strong> el lenguaje comercial recurrió a palabras como frizz, control y pelo «rebelde», incluso para adolescentes.</p><p><strong>2010–2026:</strong> crecieron las campañas de aceptación y las nuevas formas de representación, junto a otras presiones digitales.</p></div><p class="narrative-quote">Cuando crecí, esas ideas ya llevaban generaciones circulando en imágenes, películas y anuncios.</p>`,"story"),

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

page("fuentes-2","Apéndice · Las fuentes del cuento","Anuncios y películas del archivo.",`<ol class="refs"><li><a href="https://dangerouspress.org/papers/colored-american/1903-11-14" target="_blank">Ozonized Ox Marrow (1903)</a>.</li><li><a href="https://dangerouspress.org/papers/chicago-defender/1919-08-02" target="_blank">Plough's Hair Dressing (1919)</a>.</li><li><a href="https://kissmyblackads.blogspot.com/2009/03/ebony-june-1960.html" target="_blank">Hair-Strate, Ebony (1960)</a>.</li><li><a href="https://www.wnyc.org/story/how-black-hair-care-grew-black-power/" target="_blank">Afro Sheen (años 70)</a>.</li><li><a href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" target="_blank">Frizz-Ease (1994)</a>.</li><li><a href="https://www.elle.com/beauty/hair/a60504710/pro-line-just-for-me-nu-standard-cottrell-family/" target="_blank">ELLE (2024)</a>. Archivo familiar del anuncio de Just for Me, marca lanzada a comienzos de los noventa.</li><li><a href="https://adroots.wordpress.com/2024/03/21/black-beauty-in-advertising/" target="_blank">AdRoots (2024)</a>. Reproducción de publicidad de African Pride en <em>Today’s Black Women</em> (1996), documentada por Mayes (1997).</li><li><a href="https://pepsic.bvsalud.org/scielo.php?pid=S2359-07692017000200008&script=sci_arttext" target="_blank">Seda Anti-Sponge (Brasil)</a>.</li><li><a href="https://www.yumpu.com/es/document/view/8565342/con-sedal-teens-el-pelo-perfecto-esta-cada-vez-mas-cerca-unilever" target="_blank">Sedal Teens, Colombia (2008)</a>.</li><li><a href="https://www.prnewswire.com/news-releases/dove-hair-launches-poetic-tribute-to-curls-inspired-by-stories-from-real-women-300084598.html" target="_blank">Dove, Love Your Curls (2015)</a>.</li><li><a href="https://www.dove.com/us/en/campaigns/purpose/my-hair-a-mi-modo.html" target="_blank">Dove, #MyHairAMiModo (2023)</a>.</li><li><a href="https://shortyawards.com/9th-impact/code-my-crown" target="_blank">Dove, Code My Crown (2024)</a>.</li><li><a href="https://movies.disney.com/brave" target="_blank">Brave (2012)</a>, <a href="https://movies.disney.com/moana" target="_blank">Moana (2016)</a> y <a href="https://movies.disney.com/encanto" target="_blank">Encanto (2021)</a>.</li><li><a href="https://people.com/anne-hathaway-the-princess-diaries-worlds-most-beautiful-exclusive-11954368" target="_blank">Anne Hathaway, PEOPLE (2026)</a>.</li><li><a href="https://www.elle.com/beauty/hair/a60431197/sofia-richie-grainge-pregnancy-hair-nexxus-ambassador/" target="_blank">Elle</a> (2024), moño pulido de Sofia Richie.</li><li><a href="https://www.glamour.com/story/how-to-do-slick-back-hairstyles-safely" target="_blank">Glamour</a> (2025), <em>No Slickback November</em>.</li><li><a href="https://www.bustle.com/beauty/no-slickback-november-tiktok" target="_blank">Bustle</a> (2025), imágenes de creadoras del reto.</li><li><a href="https://americanhistory.si.edu/es/collections/object/nmah_1195120" target="_blank">Smithsonian</a>, peine alisador, usado desde los años veinte.</li><li><a href="https://ofanotherfashion.tumblr.com/post/2923472471/an-advertisement-for-perma-strate-cream-hair" target="_blank">Of Another Fashion</a>, anuncio Perma-Strate (1965).</li><li><a href="https://www.trademarkelite.com/trademark/trademark-detail/72084130/EVER-PERM" target="_blank">Helene Curtis</a>, Ever-Perm, registro de alisador (1960).</li><li><a href="https://www.carpelibrumbooks.com/charles-c-dawsons-designs-for-black-beauty-products" target="_blank">Slick Black</a>, publicidad de Charles C. Dawson de finales de los años treinta.</li><li><a href="https://mdhistory.msa.maryland.gov/msaref14/msa_sc5458_000045_000261/pdf/msa_afro_1950_08_1951_08-0130.pdf" target="_blank">Perma-Strate</a>, anuncio fechado en 1950.</li><li><a href="https://www.pinterest.com/pin/278097345714200568/" target="_blank">Ultra Sheen</a>, <em>Ebony</em> (1970).</li><li><a href="https://www.streetfaireantiques.com/listing/1197611312/ebony-magazine-denzel-washington-march" target="_blank">Raveen</a>, anuncio (1992).</li></ol>`,"story"),

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
