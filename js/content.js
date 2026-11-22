
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

page("la-tesis","Capítulo II · La transformación","La pregunta que cambió el cuento.",`
<p class="story">Lo que ocurrió con Mia y con mi propio cabello plantea una pregunta más amplia sobre las imágenes con las que crecemos.</p>
<div class="thesis-page tesis-formal">
<h3>Pregunta central</h3>
<p>¿Cómo han contribuido el cine, la publicidad y las redes sociales a construir y reproducir ideales de belleza asociados con determinadas texturas del cabello?</p>
<h3>Tesis</h3>
<p>Las representaciones mediáticas han contribuido históricamente a legitimar estándares que privilegian el cabello liso o controlado frente a otras texturas. Aunque las narrativas contemporáneas amplían las formas de belleza representadas, algunas tendencias digitales reformulan presiones semejantes. La belleza y la elegancia no dependen de la textura capilar; lo fundamental es poder elegir cómo llevar el cabello sin que esa elección condicione la aceptación social.</p>
</div>
<p class="small">Esta reflexión se apoya en una experiencia autobiográfica, fuentes publicitarias primarias y teorías de la representación, sin equiparar experiencias de discriminación racial distintas.</p>
`,"story"),

page("reloj-atras","Capítulo III · Un hechizo muy antiguo","Antes de que comenzara el cuento...",`
<div class="chapter-opener chapter-opener--midnight"><span class="num">✧ 1900 ✧</span><h2>Mucho antes de Mia,<br>la publicidad ya<br>escribía sus reglas.</h2><p>Volvamos al pasado. A la izquierda verás recortes publicitarios; a la derecha, aquello que estas imágenes nos permiten cuestionar.</p><span class="ornament">❦</span></div>`,"chapter"),

page("collage-1900","Capítulo III · Un hechizo muy antiguo","Recortes · 1900–1919",`<div class="archive-collage archive-collage--photographic" aria-label="Collage visual del periodo 1900–1919"><span class="archive-collage__stamp">1900–1919<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one" href="https://www.haikudeck.com/garett-amorgan-education-presentation-8bf415c1cd" target="_blank" rel="noopener noreferrer" aria-label="Ver G. A. Morgan · peine alisador, 1906"><span class="scrap-photo__picture"><img src="https://img.haikudeck.com/mg/594583aca8_1456409780030.jpg?imageFilter=false&rasterSignature=815f5c92142b1100278555dd444388bf&theme=Five+Seven+Five" alt="Publicidad histórica del peine alisador G. A. Morgan" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">G. A. Morgan · peine alisador, 1906 ↗</span></a><a class="scrap-photo scrap-photo--two" href="https://texashistory.unt.edu/ark:/67531/metapth278255/m1/3/" target="_blank" rel="noopener noreferrer" aria-label="Ver Plough's · prensa, 1919"><span class="scrap-photo__picture"><img src="https://texashistory.unt.edu/ark:/67531/metapth278255/m1/3/thumbnail/" alt="Facsímil de página de prensa de 1919 con anuncio Plough's" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Plough's · prensa, 1919 ↗</span></a><a class="scrap-photo scrap-photo--three scrap-photo--clipping" href="https://dangerouspress.org/papers/colored-american/1903-11-14" target="_blank" rel="noopener noreferrer"><span class="scrap-clipping__headline">WONDERFUL DISCOVERY</span><span class="scrap-clipping__quote">Ozonized Ox Marrow · 1903</span><span class="scrap-photo__label">Consultar anuncio original de 1903 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Ozonized Ox Marrow está documentado en 1903. Su recorte original sigue pendiente de incorporación local; las otras imágenes proceden de archivos o reproducciones históricas.</p>`,"story"),

page("analisis-1900","Capítulo III · Un hechizo muy antiguo","1900–1919: ¿qué había que cambiar?",`<span class="archive-step">EL CABELLO CRESPO COMO PROBLEMA</span>
<p class="story">En anuncios de principios del siglo XX, el cabello con textura afro podía aparecer asociado con algo que debía alisarse, corregirse o mejorar.</p>
<p class="story">Las publicidades del peine caliente y de Plough’s se dirigían a un público afroamericano que vivía en un contexto de segregación y racismo en Estados Unidos.</p>
<p class="story">Algunos anuncios usaban incluso palabras como <em>ugly</em> («feo») junto a descripciones de cabello rizado. De este modo, un prejuicio cultural se convertía en una oportunidad comercial.</p>
<div class="study-note"><strong>Emma Dabiri (2019):</strong> comprender el cabello afro exige considerar su historia y las relaciones de poder que rodean su representación.</div>
<p class="small">No todas las mujeres negras se alisaban por la misma razón. La elección individual y la presión social podían coexistir.</p>
`,"story"),

page("collage-1940","Capítulo III · Un hechizo muy antiguo","Recortes · 1940–1960",`<div class="archive-collage archive-collage--photographic" aria-label="Collage visual del periodo 1940–1960"><span class="archive-collage__stamp">1940–1960<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one" href="https://medium.com/nappy-head-club/black-at-work-the-struggle-to-navigate-black-hair-in-the-workplace-is-far-from-over-a95330decb4a" target="_blank" rel="noopener noreferrer" aria-label="Ver Perma-Strate · fecha no confirmada"><span class="scrap-photo__picture"><img src="https://miro.medium.com/v2/resize%3Afit%3A1214/1%2AfKZgV-FVXegX_vj4Tj2O7Q.jpeg" alt="Anuncio histórico Fashion Demands Straight Hair" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Perma-Strate · fecha no confirmada ↗</span></a><a class="scrap-photo scrap-photo--two" href="https://kissmyblackads.blogspot.com/2009/03/ebony-june-1960.html" target="_blank" rel="noopener noreferrer" aria-label="Ver Hair-Strate · 1960"><span class="scrap-photo__picture"><img src="https://1.bp.blogspot.com/_4ebKDFxiia8/ScelnGZzt5I/AAAAAAAACUo/ikRzDTFKHx0/s1600/Picture%2B24.png" alt="Anuncio de Hair-Strate en Ebony de 1960" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Hair-Strate · 1960 ↗</span></a><a class="scrap-photo scrap-photo--three scrap-photo--clipping" href="https://msa.maryland.gov/megafile/ecpdata/webroot/msaref14/msa_sc5458_000045_000253/pdf/msa_afro_1948_01-0491.pdf" target="_blank" rel="noopener noreferrer"><span class="scrap-clipping__headline">PERMA-STRATE</span><span class="scrap-clipping__quote">Liso hasta por seis meses · anuncio 1948</span><span class="scrap-photo__label">Facsímil de periódico, 1948 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">La publicidad de «Fashion Demands» no tiene fecha exacta verificada; el archivo de 1948 es una pieza diferente.</p>`,"story"),

page("analisis-1940","Capítulo III · Un hechizo muy antiguo","1940–1960: la moda lo exigía.",`<span class="archive-step">EL ALISADO COMO CONDICIÓN</span>
<p class="story">A mediados del siglo XX, Perma-Strate llegó a formular una exigencia: <strong>«Fashion Demands Straight Hair»</strong>. La frase convierte una preferencia estética en una aparente regla social.</p>
<p class="story">En 1948 se publicitaban productos para mantener el cabello liso durante meses. Más tarde, Hair-Strate reforzó la promesa de que la textura no regresaría con el agua.</p>
<p class="story">Pero la historia fue compleja: el cuidado capilar también creó negocios, conocimientos y espacios de autonomía para mujeres negras.</p>
<div class="study-note"><strong>Ingrid Banks (2000):</strong> un peinado no tiene un significado único; puede expresar gusto personal, pertenencia, resistencia o una negociación con las expectativas sociales.</div>
`,"story"),

page("collage-1970","Capítulo III · Un hechizo muy antiguo","Recortes · los años setenta",`<div class="archive-collage archive-collage--photographic" aria-label="Collage visual del periodo 1970s"><span class="archive-collage__stamp">1970s<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one" href="https://www.pinterest.com/pin/415738609347252904/" target="_blank" rel="noopener noreferrer" aria-label="Ver Perma-Strate · 1971"><span class="scrap-photo__picture"><img src="https://i.pinimg.com/736x/6d/73/ef/6d73efe37825d0cfbbd9a4a19573c299.jpg" alt="Anuncio de Perma-Strate: First Straighten Then Style" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Perma-Strate · 1971 ↗</span></a><a class="scrap-photo scrap-photo--two" href="https://www.wnyc.org/story/how-black-hair-care-grew-black-power/" target="_blank" rel="noopener noreferrer" aria-label="Ver Afro Sheen · 1971"><span class="scrap-photo__picture"><img src="https://media.wnyc.org/i/1860/1860/l/80/2026/01/._fE5AsPr" alt="Publicidad de Afro Sheen con familia afrodescendiente" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Afro Sheen · 1971 ↗</span></a><a class="scrap-photo scrap-photo--three" href="https://www.vintag.es/2016/09/vintage-afro-hairstyles-16-fascinating.html" target="_blank" rel="noopener noreferrer" aria-label="Ver Afro Sheen · años 70"><span class="scrap-photo__picture"><img src="https://3.bp.blogspot.com/-Dc3YizJjvHg/V-P5LkP_VXI/AAAAAAACYQU/LHY9WXqHpzc6S7QFBJtj2eJWIDWwYUPtACLcB/s1600/afro-hairstyle-ads-1960s-3.jpg" alt="Publicidad de los años setenta de cabello afro" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Afro Sheen · años 70 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">En la misma década coexistían la publicidad del alisado y el orgullo afro de Black Is Beautiful.</p>`,"story"),

page("analisis-1970","Capítulo III · Un hechizo muy antiguo","1970: dos mensajes enfrentados.",`<span class="archive-step">BLACK IS BEAUTIFUL</span>
<p class="story">Mientras algunos productos seguían promoviendo el alisado, el movimiento <em>Black Is Beautiful</em> había reivindicado el afro natural como símbolo de orgullo, identidad y resistencia.</p>
<p class="story">Afro Sheen convirtió ese cabello en protagonista de sus anuncios. En lugar de presentar el afro como un «antes», lo mostraba como una apariencia digna de admiración.</p>
<p class="narrative-quote">La publicidad empezaba a contar dos cuentos muy distintos sobre un mismo cabello.</p>
<p class="story">La reivindicación también podía convertirse en negocio. Aun así, estas imágenes evidencian que la aceptación del cabello natural tiene una historia anterior a las redes sociales.</p>
<p class="archive-source"><a href="https://exhibits.library.duke.edu/exhibits/show/-black-is-beautiful-/the-afro" target="_blank" rel="noopener noreferrer">Archivo universitario Black Is Beautiful ↗</a></p>
`,"story"),

page("collage-1990","Capítulo III · Un hechizo muy antiguo","Recortes · los años noventa",`<div class="archive-collage archive-collage--photographic" aria-label="Collage visual del periodo 1990s"><span class="archive-collage__stamp">1990s<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one scrapbook-pdf" href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" target="_blank" rel="noopener noreferrer"><span class="scrap-photo__picture"><object type="application/pdf" data="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" aria-label="Documento original escaneado">Frizz-Ease original · 1994</object></span><span class="scrap-photo__label">Frizz-Ease original · 1994 ↗</span></a><a class="scrap-photo scrap-photo--two" href="https://www.campaignlive.co.uk/article/john-frieda-primed-host-live-digital-show/1071489" target="_blank" rel="noopener noreferrer" aria-label="Ver John Frieda · campaña posterior"><span class="scrap-photo__picture"><img src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/26E4E16D-A9F2-016F-1820A9DDF86B4451.jpg" alt="Imagen de John Frieda, posterior al anuncio de 1994, usada para contraste" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">John Frieda · campaña posterior ↗</span></a><a class="scrap-photo scrap-photo--three scrap-photo--clipping" href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" target="_blank" rel="noopener noreferrer"><span class="scrap-clipping__headline">NO MORE FRIZZ!</span><span class="scrap-clipping__quote">La campaña de 1994 prometía una «cura».</span><span class="scrap-photo__label">Periódico The Tufts Daily · p. 8 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">El PDF escaneado de 1994 puede ampliarse al abrirlo. La fotografía de John Frieda es posterior, no de esa década.</p>`,"story"),

page("analisis-1990","Capítulo III · Un hechizo muy antiguo","1990: otra palabra, el mismo ideal.",`<span class="archive-step">EL LENGUAJE DEL «CONTROL»</span>
<p class="story">En 1994, un anuncio de <em>John Frieda Frizz-Ease</em> prometía una «cura» inmediata para el frizz.</p>
<p class="story">El lenguaje parecía más técnico y menos explícito que el de las primeras décadas: ya no hablaba de cabello «feo», sino de <em>control</em>, suavidad o manejabilidad.</p>
<p class="story">Sin embargo, hay un matiz decisivo: la campaña también proponía rizos definidos como un resultado atractivo. <strong>El frizz, el cabello crespo y el cabello afro no son lo mismo.</strong></p>
<div class="study-note"><strong>Hall (1997):</strong> es importante analizar no solo lo que dice el anuncio, sino cómo su montaje y su vocabulario producen significados.</div>
`,"story"),

page("collage-2000","Capítulo III · Un hechizo muy antiguo","Recortes · Colombia y la región",`<div class="archive-collage archive-collage--photographic" aria-label="Collage visual del periodo 2000s"><span class="archive-collage__stamp">2000s<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one" href="https://thevisualcommunicationguy.com/2017/09/15/the-humor-appeal-advertising/" target="_blank" rel="noopener noreferrer" aria-label="Ver Seda Anti-Sponge · el león"><span class="scrap-photo__picture"><img src="https://thevisualcommunicationguy.com/wp-content/uploads/2017/09/Humor-Appeal-Advertising-3.jpg" alt="Publicidad de champú contra el cabello esponjado con un león" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Seda Anti-Sponge · el león ↗</span></a><a class="scrap-photo scrap-photo--two" href="https://entretenimientoplus.com/musica/sedal-teens-llenate-de-musica/" target="_blank" rel="noopener noreferrer" aria-label="Ver Sedal Teens · Bogotá, 2008"><span class="scrap-photo__picture"><img src="https://i0.wp.com/entretenimientoplus.com/wp-content/uploads/2008/09/sedal-teens-concierto-citytv-302x137.jpg?resize=302%2C137" alt="Fotografía promocional Sedal Teens en Colombia" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Sedal Teens · Bogotá, 2008 ↗</span></a><a class="scrap-photo scrap-photo--three scrap-photo--clipping" href="https://www.yumpu.com/es/document/view/8565342/con-sedal-teens-el-pelo-perfecto-esta-cada-vez-mas-cerca-unilever" target="_blank" rel="noopener noreferrer"><span class="scrap-clipping__headline">BYE BYE FRIZZ</span><span class="scrap-clipping__quote">«El pelo perfecto está cada vez más cerca»</span><span class="scrap-photo__label">Unilever Colombia · 2008 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Anti-Sponge se documenta en la región (incluido Brasil); Sedal Teens tuvo una campaña colombiana en 2008.</p>`,"story"),

page("analisis-2000","Capítulo III · Un hechizo muy antiguo","2000: la promesa llegó a las niñas.",`<span class="archive-step">SEDAL Y LA BELLEZA ADOLESCENTE</span>
<p class="story">En 2005, Sedal utilizó la imagen de un león con la melena «esponjada» para representar un supuesto problema que un producto podía solucionar.</p>
<p class="story">En 2008, <strong>Sedal Teens – Bye Bye Frizz</strong> se promocionó en Bogotá para adolescentes, con la promesa de acercarse al «pelo perfecto».</p>
<p class="story">Estas imágenes importan para mi historia: «esponjado» y «rebelde» son palabras que escuchaba al hablar de mi propio pelo.</p>
<p class="narrative-quote">No solo vendían champú. También ofrecían una idea de cómo debía verse una niña arreglada.</p>
<p class="small">El anuncio del león se documenta originalmente fuera de Colombia; aquí distinguimos ambas campañas.</p>
`,"story"),

page("collage-2010","Capítulo III · Un hechizo muy antiguo","Recortes · 2010–2017",`<div class="archive-collage archive-collage--photographic" aria-label="Collage visual del periodo 2010–2017"><span class="archive-collage__stamp">2010–2017<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one" href="https://www.campaignlive.co.uk/article/john-frieda-primed-host-live-digital-show/1071489" target="_blank" rel="noopener noreferrer" aria-label="Ver John Frieda · cabello «antes»"><span class="scrap-photo__picture"><img src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/26E4E16D-A9F2-016F-1820A9DDF86B4451.jpg" alt="Campaña de John Frieda donde una imagen de cabello con volumen aparece en llamas" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">John Frieda · cabello «antes» ↗</span></a><a class="scrap-photo scrap-photo--two" href="https://shortyawards.com/8th/dove-hair-love-your-curls" target="_blank" rel="noopener noreferrer" aria-label="Ver Dove · Love Your Curls, 2015"><span class="scrap-photo__picture"><img src="https://dp6mhagng1yw3.cloudfront.net/entries/8th/dove-hair-lyc.jpg" alt="Imagen de campaña Dove que celebra los rizos" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Dove · Love Your Curls, 2015 ↗</span></a><a class="scrap-photo scrap-photo--three" href="https://www.kozikyles.com/content-producer/2016/12/20/pantene-gold-series-advertorial" target="_blank" rel="noopener noreferrer" aria-label="Ver Pantene · Gold Series, 2017"><span class="scrap-photo__picture"><img src="https://static1.squarespace.com/static/5521a2a2e4b0b038c6c9b504/5a39976424a69404d80e202f/5a3a901dc8302509260539db/1513787595590/Pantene-Advertorial-Example-2-2.jpg?format=1500w" alt="Campaña Pantene Gold Series con mujer de cabello afro natural" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Pantene · Gold Series, 2017 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">De la idea de borrar el «antes» a campañas que celebran la diversidad de texturas.</p>`,"story"),

page("analisis-2010","Capítulo III · Un hechizo muy antiguo","2010–2015: empezó a cambiar el mensaje.",`<span class="archive-step">DE BORRAR EL «ANTES» A AMAR LOS RIZOS</span>
<p class="story">En una campaña de John Frieda, la imagen de una mujer quemando la fotografía de su cabello con volumen permite interpretar ese «antes» como algo que debía dejarse atrás.</p>
<p class="story">En 2015, <em>Dove Love Your Curls</em> promovió el mensaje contrario: aprender a querer el cabello rizado.</p>
<p class="story">Los discursos publicitarios no avanzan siempre en la misma dirección. Las marcas pueden cuestionar estereotipos y, al mismo tiempo, obtener beneficios económicos de la reivindicación.</p>
<div class="study-note"><strong>Idea central:</strong> lo que el mercado presenta como «problema» o «solución» puede transformarse con los cambios culturales.</div>
`,"story"),

page("collage-2020","Capítulo III · Un hechizo muy antiguo","Recortes · 2023–2025",`<div class="archive-collage archive-collage--photographic" aria-label="Collage visual del periodo 2023–2025"><span class="archive-collage__stamp">2023–2025<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one" href="https://www.dove.com/us/en/campaigns/purpose/my-hair-a-mi-modo.html" target="_blank" rel="noopener noreferrer" aria-label="Ver Dove · Mi Pelo a Mi Modo, 2023"><span class="scrap-photo__picture"><img src="https://www.creativemoment.co/images/uploads/features/dove-champions-hair-positivity-for-latinas-through-a-vibrant-music-video-myhairamimodo/_1200x630_crop_center-center_82_none/dove-lead.jpg?mtime=1698148249" alt="Campaña de Dove con mujeres latinas de diversas texturas de cabello" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Dove · Mi Pelo a Mi Modo, 2023 ↗</span></a><a class="scrap-photo scrap-photo--two" href="https://www.dove.com/us/es/campaigns/purpose/code-my-crown.html" target="_blank" rel="noopener noreferrer" aria-label="Ver Dove · Code My Crown, 2024"><span class="scrap-photo__picture"><img src="https://cloudfront-us-east-1.images.arcpublishing.com/crain/VWAEWOETYVDRBNQHA2TR5QFTA4.jpg" alt="Campaña Dove para representar peinados afro en personajes de videojuegos" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Dove · Code My Crown, 2024 ↗</span></a><a class="scrap-photo scrap-photo--three" href="https://bwretailworld.com/beauty/taapsee-pannu-leads-doves-reclaim-your-curls-campaign" target="_blank" rel="noopener noreferrer" aria-label="Ver Dove · Reclaim Your Curls, 2025"><span class="scrap-photo__picture"><img src="https://i0.wp.com/bwretailworld.com/wp-content/uploads/2025/10/KV-V2.jpg?fit=960%2C640&ssl=1" alt="Anuncio Reclaim Your Curls de Dove con mujer de cabello rizado" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Dove · Reclaim Your Curls, 2025 ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Campañas en Estados Unidos, videojuegos e India: no son todas colombianas, pero muestran el cambio global de mensaje.</p>`,"story"),

page("analisis-2020","Capítulo III · Un hechizo muy antiguo","2023–2025: «Mi pelo, mis reglas».",`
<span class="archive-step">NUEVOS MEDIOS · NUEVAS REPRESENTACIONES</span>
<p class="story">La publicidad reciente comenzó a hablar de <strong>autoexpresión</strong> en lugar de proponer únicamente alisar o controlar.</p>
<p class="story">En 2023, Dove lanzó <em>#MyHairAMiModo</em> con Li Saumet, cantante colombiana de Bomba Estéreo, para cuestionar estereotipos sobre el pelo de las latinas. La campaña se orientó principalmente al mercado latino de Estados Unidos.</p>
<p class="story">En 2024, <em>Code My Crown</em> trasladó la conversación a la representación del cabello afro en videojuegos. En 2025, <em>Reclaim Your Curls</em> celebró el cabello rizado en India.</p>
<div class="study-note"><strong>Conclusión del periodo:</strong> el discurso comercial cambió, pero sigue siendo publicidad. Celebrar una textura también puede formar parte de una estrategia de marca.</div>
<p class="narrative-quote">La pregunta ya no es solo qué cabello vemos, sino quién puede decidir cómo llevar el suyo.</p>
`,"story"),

page("archivo-cierre","Capítulo III · Un hechizo muy antiguo","Y la pregunta regresó a Juliana.",`
<p class="story dropcap">Al observar anuncios de distintas épocas, descubrimos que la belleza nunca había tenido una sola definición.</p>
<p class="story">Algunos mensajes exigían alisar, otros prometían controlar y otros celebraban el cabello natural. Pero todos participaban en una conversación sobre cómo debía verse una mujer.</p>
<div class="ornament-line">✦</div>
<p class="narrative-quote">¿Cuántas de las ideas que yo tenía sobre mi pelo habían sido aprendidas antes de que siquiera pudiera cuestionarlas?</p>
<p class="story">Había llegado el momento de volver a la niña de nuestro cuento.</p>
`,"story"),

page("otra-nina","Capítulo IV · Volver a la niña","Y ahora volvamos a Juliana.",`
<div class="chapter-opener"><span class="num">✧</span><h2>¿Recuerdas a la niña<br>que solo quería<br>ser una princesa?</h2><p>Mientras los anuncios repetían sus propias promesas, yo crecía en otro país y en otra época. Pero la idea de que mi cabello debía cambiar ya me parecía familiar.</p><span class="ornament">❦</span></div>
`,"chapter"),

page("princesas-clasicas","Capítulo IV · Volver a la niña","¿De qué estaban hechas las princesas?",`
<span class="archive-step">1937–1991 · LOS CUENTOS QUE VIMOS</span>
<div class="archive-collage archive-collage--photographic" aria-label="Collage visual del periodo PRINCESAS"><span class="archive-collage__stamp">PRINCESAS<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one" href="https://www.disneyplus.com/explore/articles/disney-princess-movies" target="_blank" rel="noopener noreferrer" aria-label="Ver Blancanieves · 1937"><span class="scrap-photo__picture"><img src="https://disneydorks.weebly.com/uploads/3/1/8/6/31863561/1354865_orig.jpg" alt="Póster original de Blancanieves y los siete enanitos" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Blancanieves · 1937 ↗</span></a><a class="scrap-photo scrap-photo--two" href="https://www.disneyplus.com/explore/articles/disney-princess-movies" target="_blank" rel="noopener noreferrer" aria-label="Ver Cenicienta · Aurora · Bella"><span class="scrap-photo__picture"><img src="https://i.ebayimg.com/images/g/F-MAAOSwWgdiQjDE/s-l1200.jpg" alt="Arte promocional con princesas clásicas, incluida Jasmine" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Cenicienta · Aurora · Bella ↗</span></a><a class="scrap-photo scrap-photo--three" href="https://princess.disney.com/" target="_blank" rel="noopener noreferrer" aria-label="Ver La imagen de princesa cambia"><span class="scrap-photo__picture"><img src="https://www.sanity.com.au/media/Images/fullimage/440597/SDC_2374802_2018-15-5--15-34-16.jpg" alt="Póster grupal Disney Princess que también incluye personajes diversos" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">La imagen de princesa cambia ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Imágenes oficiales o promocionales. No todas las princesas tienen el pelo liso ni todas son blancas.</p>
<p class="story">Durante décadas, gran parte de las primeras princesas representó un canon de belleza bastante homogéneo: tez clara, juventud y cabello cuidadosamente peinado.</p>
`,"story"),

page("estrellas-hollywood","Capítulo IV · Volver a la niña","¿Y quiénes eran consideradas hermosas?",`
<span class="archive-step">1940–1960 · EL CINE Y SUS ÍCONOS</span>
<div class="archive-collage archive-collage--photographic" aria-label="Collage visual del periodo HOLLYWOOD"><span class="archive-collage__stamp">HOLLYWOOD<br>ARCHIVO</span><a class="scrap-photo scrap-photo--one" href="https://www.quien.com/moda/2015/09/10/style-icons-las-mujeres-que-marcaron-los-anos-en-la-moda" target="_blank" rel="noopener noreferrer" aria-label="Ver Monroe · Kelly · Hepburn"><span class="scrap-photo__picture"><img src="https://cdn-3.expansion.mx/dims4/default/8ebddc9/2147483647/strip/true/crop/620x480%2B0%2B0/resize/800x619%21/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fmedia%2F2015%2F09%2F10%2Festilocincuentas.jpg" alt="Retratos de Marilyn Monroe, Grace Kelly y Audrey Hepburn" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Monroe · Kelly · Hepburn ↗</span></a><a class="scrap-photo scrap-photo--two" href="https://www.vietnamplus.vn/phong-cach-trang-diem-old-hollywood-bi-quyet-toa-sang-nhu-bieu-tu-sac-dep-post938059.vnp" target="_blank" rel="noopener noreferrer" aria-label="Ver Audrey Hepburn · Grace Kelly"><span class="scrap-photo__picture"><img src="https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c8078530f2614a695e409189142594d44932d56f95a50c80a0d958454e8d04939fcc03ec78aae43c734f949466859f36a3ca2e/horizontal-1-1731.png" alt="Fotografías de Audrey Hepburn y Grace Kelly con peinados pulidos" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Audrey Hepburn · Grace Kelly ↗</span></a><a class="scrap-photo scrap-photo--three" href="https://www.vogue.com/article/the-history-and-impact-of-old-hollywood-glamour" target="_blank" rel="noopener noreferrer" aria-label="Ver Estrellas de Hollywood"><span class="scrap-photo__picture"><img src="https://pres.upmedia.cz/media/k2/items/cache/0482fc77902d0b4c9a449d5d1e0345a8_XL.jpg" alt="Retratos de actrices famosas de Hollywood de mediados del siglo XX" loading="lazy" referrerpolicy="no-referrer"></span><span class="scrap-photo__label">Estrellas de Hollywood ↗</span></a><span class="archive-collage__scribble" aria-hidden="true">✶</span></div><p class="archive-collage__note">Marilyn Monroe llevaba ondas y rizos trabajados, Audrey cortes pulidos y Grace ondas suaves: el ideal era la elaboración, no solo el alisado.</p>
<p class="story">La imagen de belleza dominante en Hollywood destacaba a estrellas mayoritariamente blancas con peinados muy estilizados. No eran todos lisos: muchos eran ondulados, pero siempre cuidadosamente construidos.</p>
`,"story"),

page("mis-fotos-antes","Capítulo IV · Volver a la niña","No era solo un peinado.",`
<p class="story dropcap">Durante años recurrí a trenzas, alisados y tratamientos de queratina. A veces era más fácil peinarme de esa manera. Otras, solo quería verme como creía que debía verme.</p>
<div class="ornament-line">✦</div>
<p class="narrative-quote">Había aprendido a ver mi cabello como una tarea pendiente: algo que debía arreglar antes de mostrarme al mundo.</p>
<p class="story">No era la misma historia que la de las mujeres negras de los anuncios de 1904. Pero al mirar las imágenes pude reconocer una pregunta parecida: ¿quién había decidido qué pelo era «bonito»?</p>
<p class="small">Relato autobiográfico. Las experiencias históricas no son equivalentes.</p>
`,"story"),

page("eleccion-o-presion","Capítulo IV · Volver a la niña","¿Elección o presión?",`
<p class="story">También entendí que el cabello puede tener muchos significados. Puede ser una manera de expresar identidad, seguir la moda o simplemente elegir un peinado que nos guste.</p>
<p class="narrative-quote">El problema no era alisarme. Era sentir que debía alisarme para ser bonita.</p>
<p class="story">No todas las mujeres que se alisan rechazan su textura natural, y tampoco llevar los rizos equivale siempre a resistencia. Es el contexto lo que cambia el significado.</p>
<div class="study-note"><strong>Ingrid Banks (2000):</strong> en <em>Hair Matters</em> estudia el cabello como un lugar de identidad, autonomía y relaciones de poder para las mujeres negras.</div>
`,"story"),

page(
    "cuento-cambia",
    "Capítulo V · Reescribir el cuento",
    "Pero las historias también pueden cambiar.",
    `
    <div class="chapter-opener chapter-opener--midnight">
      <span class="num">✦</span>

      <h2>
        Y, poco a poco,<br>
        el cuento comenzó<br>
        a reescribirse.
      </h2>

      <p>
        No sucedió en un solo año.
        No fue una transformación perfecta.
        Pero aparecieron más imágenes que desafiaban
        el ideal único.
      </p>

      <span class="ornament">✧</span>
    </div>
    `,
    "chapter"
  ),

page("valiente","Capítulo V · Reescribir el cuento","2012: una princesa que no se alisó.",`
<span class="archive-step">2012 · VALIENTE / BRAVE · PIXAR</span>
<figure class="cinema-scrap"><a href="https://www.pixar.com/feature-films/brave" target="_blank" rel="noopener noreferrer"><img class="cinema-scrap__image" src="https://d.ibtimes.co.uk/en/full/261749/brave-official-movie-poster.jpg?f=20b40ca81f1a02a7d5de059b88c9f0da&w=1440" alt="Póster de Mérida con una gran melena de rizos pelirrojos" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Póster de Valiente (2012) · <a href="https://www.pixar.com/feature-films/brave" target="_blank" rel="noopener noreferrer">Abrir original ↗</a></figcaption></figure>
<p class="story">Mérida tiene una enorme melena rizada. Su historia no exige que ese cabello desaparezca para convertirla en heroína.</p>
<p class="story">No es que los ideales de belleza terminaran en 2012, pero para las niñas aparecieron otras imágenes posibles de una princesa.</p>
`,"story"),

page("moana-2016","Capítulo V · Reescribir el cuento","2016: Moana también podía ser heroína.",`
<span class="archive-step">2016 · MOANA · DISNEY</span>
<figure class="cinema-scrap"><a href="https://artofthemovies.co.uk/products/moana-2016-ds-os-adv-902" target="_blank" rel="noopener noreferrer"><img class="cinema-scrap__image" src="https://artofthemovies.co.uk/cdn/shop/files/IMG_0403-1_47361b2e-424f-436d-8b34-3fae440489c6.jpg?v=1684515925" alt="Moana sobre una canoa, con su pelo oscuro y ondulado al viento" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Póster original de Moana (2016) · <a href="https://artofthemovies.co.uk/products/moana-2016-ds-os-adv-902" target="_blank" rel="noopener noreferrer">Abrir original ↗</a></figcaption></figure>
<p class="story">Moana muestra una protagonista con cabello oscuro, ondulado y lleno de movimiento. No es una película sobre el pelo, y justamente por eso importa: su apariencia no se presenta como un obstáculo para liderar su propia historia.</p>
<p class="story">Junto con Mérida y Mirabel, amplía la variedad de protagonistas que una niña puede imaginar.</p>
`,"story"),

page("dove","Capítulo V · Reescribir el cuento","2015: «ama tus rizos».",`
<span class="archive-step">2015 · DOVE · LOVE YOUR CURLS</span>
<figure class="cinema-scrap"><a href="https://www.etanbednarsh.com/dove-love-your-curls" target="_blank" rel="noopener noreferrer"><img class="cinema-scrap__image" src="https://images.squarespace-cdn.com/content/v1/59d84906f9a61eab9bb024e0/1507380188497-0AKAS16ZB62NFGI8KLIA/54811-DoveHair-LYC-PerfectlyNourishedHair-V8.png?format=1000w" alt="Publicidad Love Your Curls que celebra el cabello rizado" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Campaña auténtica Dove Love Your Curls (2015) · <a href="https://www.etanbednarsh.com/dove-love-your-curls" target="_blank" rel="noopener noreferrer">Abrir original ↗</a></figcaption></figure>
<p class="story">Ahora algunas campañas afirmaban que los rizos podían ser bellos y merecían aceptación. Era una ruptura con los anuncios que ofrecían «arreglarlos».</p>
<p class="story">Pero la contradicción continúa: la aceptación también puede vender productos. Una marca puede desafiar un prejuicio y obtener beneficios comerciales de ese cambio.</p>
`,"story"),

page("encanto","Capítulo V · Reescribir el cuento","2021: más rizos en una historia colombiana.",`
<span class="archive-step">2021 · ENCANTO · DISNEY</span>
<figure class="cinema-scrap"><a href="https://www.disney.com.au/movies/encanto" target="_blank" rel="noopener noreferrer"><img class="cinema-scrap__image" src="https://lumiere-a.akamaihd.net/v1/images/au_disney_encanto_payoff_movie_poster_1e7be9e9.jpeg" alt="Póster de Encanto con Mirabel y su familia, con distintas texturas de cabello" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Póster de Encanto (2021), película ambientada en Colombia · <a href="https://www.disney.com.au/movies/encanto" target="_blank" rel="noopener noreferrer">Abrir original ↗</a></figcaption></figure>
<p class="story">Mirabel y su familia muestran distintos peinados y texturas naturales. La diversidad de cabello no es aquello que las personajes deben arreglar para ser dignas de una historia.</p>
<div class="study-note"><strong>Stuart Hall:</strong> la representación importa porque las imágenes participan en la construcción de lo que entendemos como normal y bello.</div>
`,"story"),

page(
    "nuevos-hechizos",
    "Capítulo VI · Los nuevos hechizos",
    "Pero algo del viejo hechizo sobrevivió.",
    `
    <p class="story">
      El cuento parecía ir hacia un final feliz:
      más personajes, más campañas, más conversaciones
      sobre el pelo natural.
    </p>

    <p class="story">
      Y, sin embargo, llegó una nueva pregunta.
    </p>

    <div class="ornament-line">✦</div>

    <p class="narrative-quote">
      ¿Qué ocurre cuando los estándares de belleza
      no desaparecen, sino que se disfrazan
      de una nueva tendencia?
    </p>

    <p class="story">
      Esta vez el cuento ya no se contaba en la televisión.
      Se contaba en nuestros teléfonos.
    </p>
    `
  ),

page("clean-girl","Capítulo VI · Los nuevos hechizos","Un nuevo hechizo: Clean Girl Look.",`
<span class="archive-step">2020s · TIKTOK E INSTAGRAM</span>
<div class="social-card clean-girl-display"><div class="social-card__top"><span>✧ estética «Clean Girl»</span><span>♡</span></div><img src="assets/illustrations/bun-portrait.svg" alt="Ilustración editorial de una mujer con el cabello recogido en un moño pulido"><div class="social-card__bottom">Ilustración, no publicación real</div></div>
<p class="story">Un moño estirado, el cabello perfectamente recogido y una apariencia que promete verse impecable sin esfuerzo.</p>
<p class="story">El peinado no tiene nada de malo. La pregunta es por qué lo «limpio» o lo «elegante» puede asociarse con una sola textura o presentación del cabello.</p>
`,"story"),

page("que-cambio","Capítulo VI · Los nuevos hechizos","La misma presión, una nueva pantalla.",`
<p class="story">En las redes sociales, los ideales ya no aparecen únicamente como anuncios: también se repiten en tutoriales, tendencias y videos cotidianos.</p>
<p class="story">Para <strong>Marshall McLuhan (1964)</strong>, el medio influye en la manera en que circulan los mensajes. En plataformas digitales, la repetición y la comparación pueden volver un estilo especialmente visible.</p>
<p class="narrative-quote">No se trata de que un moño sea malo. Se trata de no convertirlo en la única forma de verse arreglada.</p>
<p class="small">La tendencia <em>Clean Girl</em> no es uniforme y no todas sus creadoras promueven las mismas ideas. Esta es una lectura crítica de sus representaciones.</p>
`,"story"),

page("anne","Capítulo VII · El final que yo elijo","2026: hasta Mia volvió a mirar atrás.",`
<span class="archive-step">21 DE ABRIL DE 2026 · PEOPLE</span>
<p class="story">Veinticinco años después de <em>El diario de la princesa</em>, Anne Hathaway habló sobre la transformación del cabello de Mia.</p>
<p class="story">Explicó que su propio pelo era bastante liso. El contraste con los rizos de Mia se creó por razones prácticas durante la producción, pero tuvo una consecuencia que no habían previsto: parte del público interpretó que el cabello rizado era poco atractivo.</p>
<p class="narrative-quote">La intención de una escena no es siempre el significado que recibe quien la mira.</p>
<p class="story">Yo era una de esas niñas que se quedó con aquel mensaje. Tal vez Mia nunca necesitó cambiar para ser princesa.</p>
<p class="archive-source"><a href="https://people.com/anne-hathaway-the-princess-diaries-worlds-most-beautiful-exclusive-11954368" target="_blank" rel="noopener noreferrer">Leer entrevista original de Anne Hathaway ↗</a></p>
`,"story"),

page("yo-hoy","Capítulo VII · El final que yo elijo","La niña del cuento también había crecido.",`
<img src="assets/illustrations/curly-portrait.svg" class="story-portrait story-portrait--small" alt="Ilustración original de una joven con cabello rizado">
<p class="story">Durante años llevé trenzas, me alisé y me hice queratina. Parte de aquello parecía más práctico, pero también me acostumbré a creer que mi pelo natural necesitaba cambiar para verse bonito.</p>
<p class="story">Hoy puedo mirar mis crespos con otros ojos. Mi cabello no tiene que parecerse al de mi mamá, al de Mia ni al de ninguna tendencia para merecer admiración.</p>
<p class="narrative-quote">La belleza que buscaba no estaba en un tratamiento. Estaba en aprender a mirar mi propio pelo.</p>
`,"story"),

page("moraleja","Capítulo VII · El final que yo elijo","La conclusión de mi cuento.",`
<p class="story">Esta investigación muestra que ciertos anuncios, películas y tendencias han difundido modelos de belleza que privilegian el cabello liso, controlado o ajustado a unas reglas de presentación. También muestra que siempre existieron alternativas y resistencias, especialmente en las comunidades negras.</p>
<p class="story">Las representaciones han cambiado y hoy vemos más diversidad, pero algunas presiones continúan transformadas en nuevas tendencias.</p>
<div class="promise"><p class="story"><strong>El cabello liso es bonito. El pelo crespo también.</strong></p><div class="ornament-line">✦</div><strong>El problema nunca fue alisarse, sino sentir que había que hacerlo para ser bella o aceptada.</strong></div>
<p class="story">Mi final feliz no es llevar los rizos todos los días. Es elegir: poder alisarme, hacerme trenzas o dejar mis crespos sueltos porque yo quiero, no porque una película o una publicidad me enseñó a esconderlos.</p>
`,"story"),

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

page("autores-1","Apéndice · Notas del cuento","Las voces detrás del cuento.",`
<p class="story">Esta historia personal se interpreta con teorías de representación, medios e identidad. Los argumentos son lecturas críticas de las piezas, no pruebas de que todos los espectadores recibieran el mismo mensaje.</p>
<ol class="refs">
<li>Hall, S. (Ed.). (1997). <cite>Representation: Cultural Representations and Signifying Practices</cite>. SAGE.</li>
<li>McLuhan, M. (1964). <cite>Understanding Media: The Extensions of Man</cite>. McGraw-Hill.</li>
<li>Dabiri, E. (2019). <cite>Don't Touch My Hair</cite>. Allen Lane.</li>
<li>Banks, I. (2000). <cite>Hair Matters: Beauty, Power, and Black Women's Consciousness</cite>. NYU Press.</li>
<li>González Herrera, M. P. (2019). <cite>Entre rizo y rizo</cite>. Universidad de La Sabana.</li>
<li>Ezquerra Fernández, M. (2026). Estudio de la estética <em>Clean Girl</em> en TikTok. <cite>First Monday</cite>.</li>
</ol>
`,"story"),

page("fuentes-2","Apéndice · Notas del cuento","Archivos que nos permitieron viajar.",`
<ol class="refs">
<li><a href="https://dangerouspress.org/papers/colored-american/1904-09-17" target="_blank">The Colored American</a> (1904), <em>Magic Hair Straightener</em>.</li>
<li><a href="https://dangerouspress.org/papers/chicago-defender/1919-07-12?page=11" target="_blank">Chicago Defender</a> (1919), <em>Plough's Hair Dressing</em>.</li>
<li><a href="https://msa.maryland.gov/megafile/ecpdata/webroot/msaref14/msa_sc5458_000045_000253/pdf/msa_afro_1948_01-0491.pdf" target="_blank">Baltimore Afro-American</a> (1948), <em>Perma-Strate</em>.</li>
<li><a href="https://kissmyblackads.blogspot.com/2009/03/ebony-june-1960.html" target="_blank">Ebony</a> (1960), <em>Hair-Strate</em>.</li>
<li><a href="https://exhibits.library.duke.edu/exhibits/show/-black-is-beautiful-/the-afro" target="_blank">Duke University</a>, archivo <em>Black Is Beautiful</em>.</li>
<li><a href="https://www.vintag.es/2016/09/vintage-afro-hairstyles-16-fascinating.html" target="_blank">Colección Afro Sheen</a> (años 70).</li>
<li><a href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf" target="_blank">Tufts Daily</a> (1994), <em>No More Frizz!</em>.</li>
<li><a href="https://superbrands.s3.amazonaws.com/AAA%20MASTER%202%20PAGE%20PDF%20Case%20Studies/Mexico/Mexico%20Edition%202/Mexico%20Edition%202%20Sedal.pdf" target="_blank">Superbrands</a>, Sedal Anti-Sponge (2005).</li>
<li><a href="https://www.campaignlive.co.uk/article/john-frieda-primed-host-live-digital-show/1071489" target="_blank">Campaign</a>, John Frieda Frizz-Ease (2010–11).</li>
<li><a href="https://www.prnewswire.com/news-releases/dove-hair-launches-poetic-tribute-to-curls-inspired-by-stories-from-real-women-300084598.html" target="_blank">Dove</a> (2015), <em>Love Your Curls</em>.</li>
<li><a href="https://people.com/anne-hathaway-the-princess-diaries-worlds-most-beautiful-exclusive-11954368" target="_blank">PEOPLE</a> (2026), entrevista con Anne Hathaway.</li>
<li><a href="https://entretenimientoplus.com/musica/sedal-teens-llenate-de-musica/" target="_blank">Sedal Teens Colombia</a> (2008), campaña con Citytv y Bye Bye Frizz.</li><li><a href="https://www.yumpu.com/es/document/view/8565342/con-sedal-teens-el-pelo-perfecto-esta-cada-vez-mas-cerca-unilever" target="_blank">Unilever Colombia</a> (2008), comunicado de lanzamiento de Sedal Teens.</li><li><a href="https://artofthemovies.co.uk/products/moana-2016-ds-os-adv-902" target="_blank">Disney</a> (2016), póster de Moana.</li></ol>
`,"story"),

page("declaracion","Apéndice · Notas del cuento","Cómo se construyó este cuento.",`
<p class="story">El libro interactivo combina memoria personal, imágenes comerciales, cine e investigación. El paso de páginas reproduce la experiencia de revisar las historias que aprendimos de niños.</p>
<div class="paper-note">
<p><strong>Herramientas:</strong> HTML, CSS y JavaScript; StPageFlip para la animación de hojas.</p>
<p><strong>Inteligencia artificial:</strong> se utilizó ChatGPT como apoyo para estructurar el argumento, redactar versiones, buscar y contrastar fuentes, y desarrollar código; un generador de imágenes se utilizó para ilustraciones editoriales identificadas como tales. La autora revisó las decisiones narrativas y el contenido.</p>
<p><strong>Archivos históricos:</strong> las imágenes de publicidad enlazan a sus repositorios; las composiciones tipográficas se identifican como transcripciones, nunca como originales.</p>
</div>
<p class="small">La experiencia personal corresponde a la autora. La interpretación académica no atribuye una misma motivación a todas las mujeres que eligen alisarse.</p>
`,"story"),

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
    "label": "La portada"
  },
  {
    "page": 1,
    "number": "01",
    "label": "Había una vez..."
  },
  {
    "page": 3,
    "number": "02",
    "label": "Mi transformación"
  },
  {
    "page": 6,
    "number": "03",
    "label": "Un hechizo muy antiguo"
  },
  {
    "page": 22,
    "number": "04",
    "label": "Volver a la niña"
  },
  {
    "page": 27,
    "number": "05",
    "label": "Reescribir el cuento"
  },
  {
    "page": 32,
    "number": "06",
    "label": "Los nuevos hechizos"
  },
  {
    "page": 35,
    "number": "07",
    "label": "El final que yo elijo"
  },
  {
    "page": 39,
    "number": "08",
    "label": "Las notas del cuento"
  }
];
