
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

page("reloj-atras","Capítulo III · Un hechizo muy antiguo","1904: un peine y una promesa.",`
<span class="archive-step">1904 · THE COLORED AMERICAN</span>
<p class="story">A comienzos del siglo XX, un anuncio dirigido a lectores afroamericanos ofrecía transformar el cabello a través de un instrumento.</p>
<div class="archivo-ficha"><span>ARCHIVO HISTÓRICO · 1904</span><strong>THE MAGIC HAIR STRAIGHTENER</strong><em>“It will straighten and dry the hair quickly”</em><p>Facsímil original del periódico disponible para consultar.</p><a href="https://dangerouspress.org/papers/colored-american/1904-09-17" target="_blank" rel="noopener noreferrer">Abrir página del periódico ↗</a></div>
<p class="story">El producto era un <strong>hot comb</strong>, un peine metálico calentado que permitía alisar el cabello al peinarlo.</p>
<p class="story">Su publicidad lo presentaba como una forma de conseguir un cabello de apariencia «natural». Es revelador que el cabello transformado recibiera precisamente esa descripción.</p>
<p class="archive-source"><a href="https://dangerouspress.org/papers/colored-american/1904-09-17" target="_blank" rel="noopener noreferrer">Leer la fuente primaria de 1904 ↗</a></p>
`,"story"),

page("primeros-anuncios","Capítulo III · Un hechizo muy antiguo","¿Para quién eran esas promesas?",`
<p class="story dropcap">Aquellos anuncios circulaban en la prensa afroamericana, dentro de una sociedad marcada por el racismo y la segregación.</p>
<p class="story">Durante décadas, los ideales eurocéntricos privilegiaron el cabello liso. Para algunas mujeres negras, modificar su textura podía relacionarse con prejuicios, oportunidades laborales y la necesidad de ser tomadas en serio.</p>
<p class="narrative-quote">No era solo una moda: el cabello también podía condicionar la forma en que otras personas las trataban.</p>
<p class="story">Eso no significa que todas se alisaran por presión. Peinarse también podía ser creatividad, cuidado, gusto personal o una fuente de independencia económica.</p>
<div class="study-note"><strong>Emma Dabiri e Ingrid Banks:</strong> el cabello afro debe leerse desde su historia, su identidad y las relaciones de poder, sin reducir cada decisión individual a una sola causa.</div>
`,"story"),

page("plough-1919","Capítulo III · Un hechizo muy antiguo","1919: cuando lo crespo era «feo».",`
<span class="archive-step">1919 · PLOUGH'S HAIR DRESSING</span>
<p class="story">Algunos anuncios eran explícitos sobre qué cabellos debían cambiar.</p>
<figure class="archive-ad archive-ad--large"><a href="https://texashistory.unt.edu/ark:/67531/metapth278256/m1/3/" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://texashistory.unt.edu/ark:/67531/metapth278256/m1/3/thumbnail/" alt="Página original de prensa afroamericana de 1919 que incluye el anuncio de Plough's Hair Dressing" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>The Dallas Express, abril de 1919, página 3 · <a href="https://texashistory.unt.edu/ark:/67531/metapth278256/m1/3/" target="_blank" rel="noopener noreferrer">Abrir original ↗</a><span class="archive-caveat">Facsímil de página completa; el enlace permite ampliar el anuncio.</span></figcaption></figure>
<p class="story">Plough's Hair Dressing prometía transformar cabello <em>kinky</em> y <em>curly</em>, agrupando estas palabras con <em>ugly</em> («feo»).</p>
<p class="story">Así se definía un supuesto defecto y, al mismo tiempo, se vendía la solución. El mensaje no prueba cómo reaccionaron todas las lectoras, pero sí qué prejuicios podía explotar la publicidad.</p>
<p class="archive-source"><a href="https://dangerouspress.org/papers/chicago-defender/1919-07-12?page=11" target="_blank" rel="noopener noreferrer">Comparar el anuncio en Chicago Defender ↗</a></p>
`,"story"),

page("perma-1948","Capítulo III · Un hechizo muy antiguo","La moda exige el cabello liso.",`
<span class="archive-step">PERMA-STRATE · MEDIADOS DEL SIGLO XX</span>
<figure class="archive-ad archive-ad--large"><a href="https://medium.com/nappy-head-club/black-at-work-the-struggle-to-navigate-black-hair-in-the-workplace-is-far-from-over-a95330decb4a" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://miro.medium.com/v2/resize%3Afit%3A1214/1%2AfKZgV-FVXegX_vj4Tj2O7Q.jpeg" alt="Anuncio original Perma-Strate donde se lee Fashion Demands Straight Hair" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Anuncio histórico «Fashion Demands Straight Hair!» · <a href="https://medium.com/nappy-head-club/black-at-work-the-struggle-to-navigate-black-hair-in-the-workplace-is-far-from-over-a95330decb4a" target="_blank" rel="noopener noreferrer">Abrir original ↗</a><span class="archive-caveat">Fecha exacta de esta versión gráfica aún no verificada; existen anuncios Perma-Strate documentados en 1948.</span></figcaption></figure>
<p class="story">La frase es contundente: <strong>«¡La moda exige cabello liso!»</strong>. No lo presenta como una preferencia, sino casi como una norma.</p>
<p class="story">Para mujeres negras que enfrentaban prejuicios laborales y sociales, esos mensajes podían sumarse a presiones de aceptación; eso no significa que todas eligieran alisarse por la misma razón.</p>
`,"story"),

page("hair-strate-1960","Capítulo III · Un hechizo muy antiguo","1960: que los rizos no regresen.",`
<span class="archive-step">1960 · EBONY · HAIR-STRATE</span>
<figure class="archive-ad"><a href="https://kissmyblackads.blogspot.com/2009/03/ebony-june-1960.html" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://1.bp.blogspot.com/_4ebKDFxiia8/ScelnGZzt5I/AAAAAAAACUo/ikRzDTFKHx0/s1600/Picture%2B24.png" alt="Anuncio histórico de Hair-Strate con modelos afroamericanas" loading="lazy" referrerpolicy="no-referrer"></a><figcaption>Reproducción de un anuncio de <em>Ebony</em>, junio de 1960 · <a href="https://kissmyblackads.blogspot.com/2009/03/ebony-june-1960.html" target="_blank" rel="noopener noreferrer">Ver fuente ↗</a></figcaption></figure>
<p class="story">El anuncio celebraba que, después de nadar, ducharse o lavarse el pelo, el cabello no volviera a su textura anterior.</p>
<p class="narrative-quote">¿Por qué el regreso de los rizos parecía algo que había que evitar?</p>
<p class="small">El mensaje era comercial, no una descripción de lo que todas las mujeres negras deseaban.</p>
`,"story"),

page("black-is-beautiful","Capítulo III · Un hechizo muy antiguo","Pero otras mujeres dijeron que no.",`
<span class="archive-step">AÑOS 60 · BLACK IS BEAUTIFUL</span>
<p class="story dropcap">Mientras unos anuncios vendían el alisado como ideal, muchas mujeres negras estaban contando otra historia.</p>
<p class="story">En el contexto de los movimientos por los derechos civiles y el <em>Black Power</em>, el afro natural se convirtió en símbolo de orgullo racial, identidad y resistencia.</p>
<p class="narrative-quote">No necesitaban cambiar su textura para afirmar su belleza.</p>
<div class="study-note"><strong>Historia no lineal:</strong> la aceptación del cabello natural no empezó con TikTok ni con las campañas actuales. Ya había luchas y representaciones alternativas desde mucho antes.</div>
<p class="archive-source"><a href="https://exhibits.library.duke.edu/exhibits/show/-black-is-beautiful-/the-afro" target="_blank" rel="noopener noreferrer">Archivo «Black Is Beautiful», Duke University ↗</a></p>
`,"story"),

page("perma-1971","Capítulo III · Un hechizo muy antiguo","1971: primero alisa, luego decide.",`
<span class="archive-step">1971 · PERMA-STRATE</span>
<figure class="archive-ad"><a href="https://www.pinterest.com/pin/415738609347252904/" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://i.pinimg.com/736x/6d/73/ef/6d73efe37825d0cfbbd9a4a19573c299.jpg" alt="Publicidad vintage Perma-Strate, mujer con pelo alisado" loading="lazy" referrerpolicy="no-referrer"></a><figcaption>Reproducción de publicidad Perma-Strate atribuida a 1971 · <a href="https://www.pinterest.com/pin/415738609347252904/" target="_blank" rel="noopener noreferrer">Ver fuente ↗</a></figcaption></figure>
<p class="story">El anuncio sugiere que, antes de elegir un estilo, el primer paso es alisar la textura del cabello.</p>
<p class="story">Lo interesante es la fecha: mientras crecía la reivindicación del afro, la industria todavía vendía el alisado como punto de partida de la belleza.</p>
<p class="small">La imagen está reproducida en un archivo secundario; año atribuido por el coleccionista.</p>
`,"story"),

page("afro-sheen","Capítulo III · Un hechizo muy antiguo","El afro también protagonizó anuncios.",`
<span class="archive-step">AÑOS 70 · AFRO SHEEN</span>
<figure class="archive-ad archive-ad--large"><a href="https://www.wnyc.org/story/how-black-hair-care-grew-black-power/" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://media.wnyc.org/i/1860/1860/l/80/2026/01/._fE5AsPr" alt="Publicidad original de Afro Sheen con madre e hija con cabello afro natural" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Publicidad Afro Sheen de madre e hija con peinados afro · <a href="https://www.wnyc.org/story/how-black-hair-care-grew-black-power/" target="_blank" rel="noopener noreferrer">Abrir original ↗</a></figcaption></figure>
<p class="story">En el contexto de <em>Black Is Beautiful</em>, una madre y su hija podían aparecer con afros naturales celebrados en vez de corregidos.</p>
<p class="story">La publicidad comenzó a incorporar otras maneras de verse. Aunque una empresa seguía vendiendo productos, también podía ayudar a mostrar el orgullo por la textura natural.</p>
`,"story"),

page("frizz-1994","Capítulo III · Un hechizo muy antiguo","1994: la promesa de una «cura».",`
<span class="archive-step">1994 · JOHN FRIEDA · FRIZZ-EASE</span>
<p class="story">Más adelante, el vocabulario de la industria cambió: el problema ya no siempre se llamaba «crespo», sino <strong>frizz</strong>.</p>
<figure class="archivo-ficha archivo-ficha--pdf"><span>ARCHIVO HISTÓRICO · 1994</span><strong>NO MORE FRIZZ!</strong><em>The Tufts Daily · 29 de septiembre de 1994, p. 8</em><object data="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" type="application/pdf" aria-label="Facsímil del anuncio John Frieda de 1994">Abrir el anuncio histórico en el archivo de Tufts.</object><a href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf#page=8" target="_blank" rel="noopener noreferrer">Ver anuncio en el PDF ↗</a></figure>
<p class="story">El anuncio hablaba de una «cura» para el frizz, pero también ofrecía rizos definidos: no todos los rizos eran presentados como indeseables.</p>
<p class="small">El frizz, las ondas y el cabello afro no son lo mismo. Aquí analizamos el lenguaje de control, no una equivalencia entre texturas.</p>
`,"story"),

page("sedal-2005","Capítulo III · Un hechizo muy antiguo","2005: «yo ya no me esponjo».",`
<span class="archive-step">2005 · SEDAL ANTI-SPONGE · MÉXICO</span>
<figure class="archive-ad archive-ad--large"><a href="https://es.slideshare.net/slideshow/elementos-de-un-anuncio-publicitario-80879469/80879469" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://image.slidesharecdn.com/elementosdeunanunciopublicitario-171017012546/75/Elementos-de-un-anuncio-publicitario-1-2048.jpg" alt="Publicidad original Sedal con león de melena alisada y el texto Yo ya no me esponjo" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Publicidad Sedal Anti-Sponge con el león · <a href="https://es.slideshare.net/slideshow/elementos-de-un-anuncio-publicitario-80879469/80879469" target="_blank" rel="noopener noreferrer">Abrir original ↗</a></figcaption></figure>
<p class="story">El humor transformaba el volumen de una melena en un problema que debía solucionarse. La campaña fue creada para México y circuló en la región.</p>
<p class="story">Para mí, la palabra <em>esponjado</em> es especialmente significativa: era así como describía mi pelo cuando no sabía qué hacer con él.</p>
`,"story"),

page("sedal-colombia-2008","Capítulo III · Un hechizo muy antiguo","2008: el pelo «perfecto» llegó al colegio.",`
<span class="archive-step">2008 · SEDAL TEENS · COLOMBIA</span>
<figure class="archive-ad archive-ad--large"><a href="https://entretenimientoplus.com/musica/sedal-teens-llenate-de-musica/" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://i0.wp.com/entretenimientoplus.com/wp-content/uploads/2008/09/sedal-teens-concierto-citytv-302x137.jpg?resize=302%2C137" alt="Imagen promocional de la campaña Sedal Teens realizada en Colombia" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Material promocional colombiano Sedal Teens y Citytv, septiembre de 2008 · <a href="https://entretenimientoplus.com/musica/sedal-teens-llenate-de-musica/" target="_blank" rel="noopener noreferrer">Abrir original ↗</a><span class="archive-caveat">Imagen de promoción musical; el análisis capilar se basa en el comunicado colombiano de Unilever.</span></figcaption></figure>
<p class="story">En Bogotá, Sedal presentó <strong>Teens Bye Bye Frizz</strong> para niñas menores de 18 años. Hablaba del «pelo perfecto» y del cabello «rebelde» que debía controlarse.</p>
<p class="story">Esta vez, el mensaje estaba dirigido directamente a adolescentes como la niña de mi cuento. El ideal no se transmitía solamente en películas: también aparecía en productos y campañas pensados para nuestra edad.</p>
<p class="archive-source"><a href="https://www.yumpu.com/es/document/view/8565342/con-sedal-teens-el-pelo-perfecto-esta-cada-vez-mas-cerca-unilever" target="_blank" rel="noopener noreferrer">Comunicado original de Unilever, Bogotá, 2008 ↗</a></p>
`,"story"),

page("john-frieda-2010","Capítulo III · Un hechizo muy antiguo","2010: borrar el «antes».",`
<span class="archive-step">2010–2011 · JOHN FRIEDA · FRIZZ-EASE</span>
<figure class="archive-ad"><a href="https://www.campaignlive.co.uk/article/john-frieda-primed-host-live-digital-show/1071489" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/26E4E16D-A9F2-016F-1820A9DDF86B4451.jpg" alt="Mujer de pelo alisado sostiene una fotografía de cabello voluminoso en llamas" loading="lazy" referrerpolicy="no-referrer"></a><figcaption>Imagen de campaña Frizz-Ease, reproducida por Campaign · <a href="https://www.campaignlive.co.uk/article/john-frieda-primed-host-live-digital-show/1071489" target="_blank" rel="noopener noreferrer">Ver fuente ↗</a></figcaption></figure>
<p class="story">Una mujer con el cabello liso sostiene una foto de su versión con volumen, mientras la imagen arde.</p>
<p class="story">La metáfora visual es radical: el «antes» parece algo que debe desaparecer para poder mostrar el «después».</p>
<p class="small">Interpretación de la imagen; no afirmación sobre la intención personal de quienes la diseñaron.</p>
`,"story"),

page("otra-nina","Capítulo IV · Volver a la niña","Y ahora volvamos a Juliana.",`
<div class="chapter-opener"><span class="num">✧</span><h2>¿Recuerdas a la niña<br>que solo quería<br>ser una princesa?</h2><p>Mientras los anuncios repetían sus propias promesas, yo crecía en otro país y en otra época. Pero la idea de que mi cabello debía cambiar ya me parecía familiar.</p><span class="ornament">❦</span></div>
`,"chapter"),

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
<figure class="archive-ad archive-ad--large"><a href="https://www.pixar.com/feature-films/brave" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://d.ibtimes.co.uk/en/full/261749/brave-official-movie-poster.jpg?f=20b40ca81f1a02a7d5de059b88c9f0da&w=1440" alt="Póster de Mérida con una gran melena de rizos pelirrojos" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Póster de Valiente (2012) · <a href="https://www.pixar.com/feature-films/brave" target="_blank" rel="noopener noreferrer">Abrir original ↗</a></figcaption></figure>
<p class="story">Mérida tiene una enorme melena rizada. Su historia no exige que ese cabello desaparezca para convertirla en heroína.</p>
<p class="story">No es que los ideales de belleza terminaran en 2012, pero para las niñas aparecieron otras imágenes posibles de una princesa.</p>
`,"story"),

page("moana-2016","Capítulo V · Reescribir el cuento","2016: Moana también podía ser heroína.",`
<span class="archive-step">2016 · MOANA · DISNEY</span>
<figure class="archive-ad archive-ad--large"><a href="https://artofthemovies.co.uk/products/moana-2016-ds-os-adv-902" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://artofthemovies.co.uk/cdn/shop/files/IMG_0403-1_47361b2e-424f-436d-8b34-3fae440489c6.jpg?v=1684515925" alt="Moana sobre una canoa, con su pelo oscuro y ondulado al viento" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Póster original de Moana (2016) · <a href="https://artofthemovies.co.uk/products/moana-2016-ds-os-adv-902" target="_blank" rel="noopener noreferrer">Abrir original ↗</a></figcaption></figure>
<p class="story">Moana muestra una protagonista con cabello oscuro, ondulado y lleno de movimiento. No es una película sobre el pelo, y justamente por eso importa: su apariencia no se presenta como un obstáculo para liderar su propia historia.</p>
<p class="story">Junto con Mérida y Mirabel, amplía la variedad de protagonistas que una niña puede imaginar.</p>
`,"story"),

page("dove","Capítulo V · Reescribir el cuento","2015: «ama tus rizos».",`
<span class="archive-step">2015 · DOVE · LOVE YOUR CURLS</span>
<figure class="archive-ad archive-ad--large"><a href="https://www.etanbednarsh.com/dove-love-your-curls" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://images.squarespace-cdn.com/content/v1/59d84906f9a61eab9bb024e0/1507380188497-0AKAS16ZB62NFGI8KLIA/54811-DoveHair-LYC-PerfectlyNourishedHair-V8.png?format=1000w" alt="Publicidad Love Your Curls que celebra el cabello rizado" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Campaña auténtica Dove Love Your Curls (2015) · <a href="https://www.etanbednarsh.com/dove-love-your-curls" target="_blank" rel="noopener noreferrer">Abrir original ↗</a></figcaption></figure>
<p class="story">Ahora algunas campañas afirmaban que los rizos podían ser bellos y merecían aceptación. Era una ruptura con los anuncios que ofrecían «arreglarlos».</p>
<p class="story">Pero la contradicción continúa: la aceptación también puede vender productos. Una marca puede desafiar un prejuicio y obtener beneficios comerciales de ese cambio.</p>
`,"story"),

page("encanto","Capítulo V · Reescribir el cuento","2021: más rizos en una historia colombiana.",`
<span class="archive-step">2021 · ENCANTO · DISNEY</span>
<figure class="archive-ad archive-ad--large"><a href="https://www.disney.com.au/movies/encanto" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://lumiere-a.akamaihd.net/v1/images/au_disney_encanto_payoff_movie_poster_1e7be9e9.jpeg" alt="Póster de Encanto con Mirabel y su familia, con distintas texturas de cabello" referrerpolicy="no-referrer" loading="lazy"></a><figcaption>Póster de Encanto (2021), película ambientada en Colombia · <a href="https://www.disney.com.au/movies/encanto" target="_blank" rel="noopener noreferrer">Abrir original ↗</a></figcaption></figure>
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
    "page": 18,
    "number": "04",
    "label": "Volver a la niña"
  },
  {
    "page": 21,
    "number": "05",
    "label": "Reescribir el cuento"
  },
  {
    "page": 26,
    "number": "06",
    "label": "Los nuevos hechizos"
  },
  {
    "page": 29,
    "number": "07",
    "label": "El final que yo elijo"
  },
  {
    "page": 33,
    "number": "08",
    "label": "Las notas del cuento"
  }
];
