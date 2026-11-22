
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

page("la-tesis","Capítulo II · Lo que aprendimos","La pregunta que cambió el cuento.",`
<p class="story">Aquel recuerdo dejaba una pregunta que ya no podía ignorar:</p>
<p class="narrative-quote">Si Mia ya era princesa, ¿por qué parecía necesitar otro pelo para que el mundo la viera así?</p>
<div class="thesis-page"><h3>La tesis de este cuento</h3><p>El cine, la publicidad y las redes sociales han contribuido a privilegiar determinados estilos y texturas de cabello. Aunque las representaciones cambian, algunas presiones permanecen. El pelo liso y el crespo pueden ser igual de bellos: lo importante es elegir sin sentir que una textura vale menos.</p></div>
<p class="small">Para comprenderlo, viajaremos por anuncios, películas e investigaciones. No todas las mujeres vivieron estos ideales de la misma manera.</p>
`,"story"),

page("reloj-atras","Capítulo III · Un hechizo muy antiguo","1904: la promesa de un peine.",`
<span class="archive-step">1904 · ESTADOS UNIDOS</span>
<p class="story dropcap">Nuestro cuento retrocede casi un siglo. En <em>The Colored American</em>, una publicidad ya ofrecía transformar el cabello.</p>
<div class="archive-excerpt"><span class="archive-excerpt__label">TRANSCRIPCIÓN PARCIAL DEL ANUNCIO ORIGINAL · 1904</span><div class="archive-excerpt__headline">The Magic Hair Straightener</div><p class="archive-excerpt__quote">«Lo alisa mientras se peina»</p><p class="archive-excerpt__note">Extracto traducido del texto publicitario. No es un facsímil ni una recreación de la publicidad visual.</p></div>
<p class="story">El producto era un <strong>hot comb</strong>: un peine de metal calentado que alisaba el cabello mediante calor. El aviso prometía rapidez y una apariencia «natural».</p>
<p class="story">Aquí empieza una pregunta: ¿por qué lo liso era presentado como la apariencia que había que conseguir?</p>
<p class="archive-source"><a href="https://dangerouspress.org/papers/colored-american/1904-09-17" target="_blank" rel="noopener noreferrer">Ver periódico de 1904 y la propaganda completa ↗</a></p>
`,"story"),

page("primeros-anuncios","Capítulo III · Un hechizo muy antiguo","¿Para quién eran esas promesas?",`
<p class="story dropcap">Aquellos anuncios circulaban en la prensa afroamericana, dentro de una sociedad marcada por el racismo y la segregación.</p>
<p class="story">Durante décadas, los ideales eurocéntricos privilegiaron el cabello liso. Para algunas mujeres negras, modificar su textura podía relacionarse con prejuicios, oportunidades laborales y la necesidad de ser tomadas en serio.</p>
<p class="narrative-quote">No era solo una moda: el cabello también podía condicionar la forma en que otras personas las trataban.</p>
<p class="story">Eso no significa que todas se alisaran por presión. Peinarse también podía ser creatividad, cuidado, gusto personal o una fuente de independencia económica.</p>
<div class="study-note"><strong>Emma Dabiri e Ingrid Banks:</strong> el cabello afro debe leerse desde su historia, su identidad y las relaciones de poder, sin reducir cada decisión individual a una sola causa.</div>
`,"story"),

page("plough-1919","Capítulo III · Un hechizo muy antiguo","1919: cuando la palabra era «feo».",`
<span class="archive-step">1919 · THE CHICAGO DEFENDER</span>
<p class="story">Quince años después, un anuncio de <strong>Plough's Hair Dressing</strong> fue mucho más explícito.</p>
<div class="archive-excerpt"><span class="archive-excerpt__label">TRANSCRIPCIÓN PARCIAL DEL ANUNCIO ORIGINAL · 1919</span><div class="archive-excerpt__headline">PLOUGH'S HAIR DRESSING</div><p class="archive-excerpt__quote">«kinky, snarly, ugly, curly Hair»</p><p class="archive-excerpt__note">Fragmento en inglés de la pieza publicada en julio de 1919. No es un facsímil ni una recreación de la publicidad visual.</p></div>
<p class="story">La enumeración juntaba «crespo», «enredado» y «feo» para convertir una textura natural en un problema al que el producto prometía poner remedio.</p>
<p class="story">El anuncio no prueba cómo se sintió cada lectora, pero sí revela qué prejuicios podían utilizarse para vender belleza.</p>
<p class="archive-source"><a href="https://dangerouspress.org/papers/chicago-defender/1919-07-12?page=11" target="_blank" rel="noopener noreferrer">Abrir facsímil y texto del anuncio ↗</a></p>
`,"story"),

page("perma-1948","Capítulo III · Un hechizo muy antiguo","1948: un resultado que debía durar.",`
<span class="archive-step">1948 · THE BALTIMORE AFRO-AMERICAN</span>
<p class="story">Llegó una nueva promesa comercial: no solo alisar el pelo, sino mantenerlo así durante meses.</p>
<div class="archive-excerpt"><span class="archive-excerpt__label">TRANSCRIPCIÓN PARCIAL DEL ANUNCIO ORIGINAL · 1948</span><div class="archive-excerpt__headline">PERMA-STRATE</div><p class="archive-excerpt__quote">«HAIR STRAIGHT · 3 to 6 MONTHS»</p><p class="archive-excerpt__note">Titular de la publicidad del 14 de agosto de 1948. No es un facsímil ni una recreación de la publicidad visual.</p></div>
<p class="story">El producto anunciaba un cabello liso que resistiría varios meses, incluso después de lavarlo o peinarlo de otras maneras.</p>
<p class="story">La publicidad asociaba ese resultado con verse atractiva y bien presentada. Su idea central era que la transformación valía la pena si se mantenía.</p>
<p class="archive-source"><a href="https://msa.maryland.gov/megafile/ecpdata/webroot/msaref14/msa_sc5458_000045_000253/pdf/msa_afro_1948_01-0491.pdf" target="_blank" rel="noopener noreferrer">Ver periódico histórico y anuncio Perma-Strate ↗</a></p>
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

page("afro-sheen","Capítulo III · Un hechizo muy antiguo","1972: el afro entra en la publicidad.",`
<span class="archive-step">1972 · AFRO SHEEN</span>
<figure class="archive-ad"><a href="https://www.vintag.es/2016/09/vintage-afro-hairstyles-16-fascinating.html" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://3.bp.blogspot.com/-Dc3YizJjvHg/V-P5LkP_VXI/AAAAAAACYQU/LHY9WXqHpzc6S7QFBJtj2eJWIDWwYUPtACLcB/s1600/afro-hairstyle-ads-1960s-3.jpg" alt="Publicidad Afro Sheen de los años setenta con dos personas de cabello afro natural" loading="lazy" referrerpolicy="no-referrer"></a><figcaption>Anuncio de Afro Sheen, colección de publicidades de época · <a href="https://www.vintag.es/2016/09/vintage-afro-hairstyles-16-fascinating.html" target="_blank" rel="noopener noreferrer">Ver fuente ↗</a></figcaption></figure>
<p class="story">Una pareja aparece con afros grandes y visibles. En lugar de esconder la textura, el producto la convierte en protagonista.</p>
<p class="story">Pero hay otra contradicción: una reivindicación política también podía convertirse en un argumento de venta.</p>
<div class="study-note"><strong>Duke University:</strong> las campañas de productos para afro se multiplicaron desde 1969, a veces dejando en segundo plano el significado político del movimiento.</div>
`,"story"),

page("frizz-1994","Capítulo III · Un hechizo muy antiguo","1994: el frizz necesita una «cura».",`
<span class="archive-step">1994 · FRIZZ-EASE · JOHN FRIEDA</span>
<p class="story">La publicidad cambió su vocabulario. Ahora, el enemigo podía llamarse <strong>frizz</strong>.</p>
<div class="archive-excerpt"><span class="archive-excerpt__label">TRANSCRIPCIÓN PARCIAL DEL ANUNCIO ORIGINAL · 1994</span><div class="archive-excerpt__headline">NO MORE FRIZZ!</div><p class="archive-excerpt__quote">«No More Frizz!»</p><p class="archive-excerpt__note">Titular del anuncio publicado en The Tufts Daily. No es un facsímil ni una recreación de la publicidad visual.</p></div>
<p class="story">La pieza mostraba comparaciones de antes y después y presentaba un sérum como solución. También ofrecía rizos definidos: no era simplemente una campaña contra todo cabello rizado.</p>
<p class="story">El frizz no es sinónimo de pelo crespo. Sin embargo, palabras como «domar» y «controlar» podían seguir transmitiendo que el volumen natural necesitaba corrección.</p>
<p class="archive-source"><a href="https://dl.tufts.edu/downloads/47429m65d?filename=ht24ww119.pdf" target="_blank" rel="noopener noreferrer">Ver publicidad de 1994 en la página 8 ↗</a></p>
`,"story"),

page("sedal-2005","Capítulo III · Un hechizo muy antiguo","2005: «yo ya no me esponjo».",`
<span class="archive-step">2005 · SEDAL ANTI-SPONGE · MÉXICO</span>
<figure class="archive-ad"><a href="https://superbrands.s3.amazonaws.com/AAA%20MASTER%202%20PAGE%20PDF%20Case%20Studies/Mexico/Mexico%20Edition%202/Mexico%20Edition%202%20Sedal.pdf" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://www.liceodelsur.com/images/2020/juventino/fd5ed7408aaa5d9f19be1e24a332979e.jpg" alt="Anuncio verde de Sedal Anti-Sponge con león de melena peinada" loading="lazy" referrerpolicy="no-referrer"></a><figcaption>Campaña Sedal Anti-Sponge, documentación de Superbrands · <a href="https://superbrands.s3.amazonaws.com/AAA%20MASTER%202%20PAGE%20PDF%20Case%20Studies/Mexico/Mexico%20Edition%202/Mexico%20Edition%202%20Sedal.pdf" target="_blank" rel="noopener noreferrer">Ver fuente ↗</a></figcaption></figure>
<p class="story">Un león con la melena alisada anunciaba que había dejado de «esponjarse».</p>
<p class="story">Esa palabra me resulta familiar: <em>esponjado</em> era como yo describía el pelo que no sabía manejar cuando era pequeña.</p>
<div class="study-note"><strong>Mi lectura:</strong> un producto podía resolver una necesidad práctica y, al mismo tiempo, reforzar la idea de que el volumen era un defecto.</div>
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

page("valiente","Capítulo V · Reescribir el cuento","2012: una princesa diferente.",`
<span class="archive-step">2012 · BRAVE / VALIENTE · PIXAR</span>
<img src="assets/illustrations/curly-portrait.svg" class="story-portrait story-portrait--small" alt="Ilustración editorial de una protagonista de cabello crespo">
<p class="story">Mérida no necesitaba alisar su gran melena pelirroja para ser valiente ni para protagonizar una historia de princesas.</p>
<p class="story">Su personaje no borró décadas de ideales de belleza, pero abrió espacio para otro tipo de representación dentro de un medio que yo había amado desde niña.</p>
<p class="small">Ilustración editorial, no fotograma de la película. Película: <em>Brave</em> (Pixar, 2012).</p>
`,"story"),

page("dove","Capítulo V · Reescribir el cuento","2015: «ama tus rizos».",`
<span class="archive-step">2015 · DOVE · LOVE YOUR CURLS</span>
<figure class="archive-ad"><a href="https://shortyawards.com/8th/dove-hair-love-your-curls" target="_blank" rel="noopener noreferrer"><img class="archive-ad__image" src="https://dp6mhagng1yw3.cloudfront.net/entries/8th/dove-hair-lyc.jpg" alt="Arte publicitario Dove con mujer sonriente de rizos y flores" loading="lazy" referrerpolicy="no-referrer"></a><figcaption>Imagen de la campaña Love Your Curls, Dove (2015) · <a href="https://shortyawards.com/8th/dove-hair-love-your-curls" target="_blank" rel="noopener noreferrer">Ver fuente ↗</a></figcaption></figure>
<p class="story">Esta vez el mensaje no era «alisa» ni «controla», sino aprender a querer los rizos.</p>
<p class="story">El cambio era importante. Pero también hay una contradicción: la autoestima se convertía en parte de la estrategia de una marca que vendía productos para el cabello.</p>
<p class="archive-source"><a href="https://www.prnewswire.com/news-releases/dove-hair-launches-poetic-tribute-to-curls-inspired-by-stories-from-real-women-300084598.html" target="_blank" rel="noopener noreferrer">Leer comunicado de lanzamiento de Dove ↗</a></p>
`,"story"),

page("encanto","Capítulo V · Reescribir el cuento","2021: rizos en una historia colombiana.",`
<span class="archive-step">2021 · ENCANTO · COLOMBIA</span>
<img src="assets/illustrations/curly-portrait.svg" class="story-portrait story-portrait--small" alt="Ilustración editorial de cabello rizado, no fotograma">
<p class="story">En <em>Encanto</em>, Mirabel y otros personajes muestran diversas texturas de cabello en un cuento ambientado en Colombia. Ya no hacía falta esconder todos los rizos bajo el mismo peinado.</p>
<p class="story">No basta una película para cambiar un ideal. Pero sí importa que una niña pueda verse representada de otra manera.</p>
<div class="study-note"><strong>Stuart Hall:</strong> las representaciones no son espejos neutrales; contribuyen a producir significados culturales.</div>
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

page(
    "clean-girl",
    "Capítulo VI · Los nuevos hechizos",
    "El nuevo ideal tenía un nombre.",
    `
    <span class="page-kicker">
      2020s · REDES SOCIALES
    </span>

    <div class="social-card">
      <div class="social-card__top">
        <span>✧ tendencia</span>
        <span>♡ · · ·</span>
      </div>

      <img
        src="${ART}bun-portrait.svg"
        alt="Ilustración conceptual de un peinado recogido"
      >

      <div class="social-card__bottom">
        #CleanGirlLook · Ilustración, no publicación real
      </div>
    </div>

    <p class="story">
      Un recogido pulido. Una estética minimalista.
      La promesa de verse perfecta casi sin esfuerzo.
    </p>

    <p class="small">
      Peinarse así es una elección válida.
      Lo que discutimos es el significado cultural
      de presentar una sola apariencia como
      sinónimo de pulcritud.
    </p>
    `
  ),

page("que-cambio","Capítulo VI · Los nuevos hechizos","¿Y si el hechizo cambió de nombre?",`
<p class="story">En redes sociales, el <em>Clean Girl Look</em> popularizó recogidos tirantes, cabellos pulidos y una apariencia de esfuerzo invisible.</p>
<p class="story">No hay nada malo en llevar ese estilo. Lo que podemos preguntar es por qué palabras como «limpia», «arreglada» o «elegante» a veces parecen describir una sola clase de cabello.</p>
<p class="narrative-quote">El problema no es un moño. Es convertir una estética en la definición de la belleza.</p>
<div class="study-note"><strong>Marta Ezquerra Fernández (2026):</strong> analiza la feminidad y la estandarización estética en videos de TikTok sobre la tendencia <em>Clean Girl</em>.</div>
<p class="archive-source"><a href="https://firstmonday.org/ojs/index.php/fm/article/view/14323" target="_blank" rel="noopener noreferrer">Leer investigación sobre TikTok ↗</a></p>
`,"story"),

page("anne","Capítulo VII · El final que yo elijo","2026: hasta Mia volvió a mirar atrás.",`
<span class="archive-step">21 DE ABRIL DE 2026 · PEOPLE</span>
<p class="story">Veinticinco años después de <em>El diario de la princesa</em>, Anne Hathaway habló sobre la transformación del cabello de Mia.</p>
<p class="story">Explicó que su propio pelo era bastante liso. El contraste con los rizos de Mia se creó por razones prácticas durante la producción, pero tuvo una consecuencia que no habían previsto: parte del público interpretó que el cabello rizado era poco atractivo.</p>
<p class="narrative-quote">La intención de una escena no es siempre el significado que recibe quien la mira.</p>
<p class="story">Yo era una de esas niñas que se quedó con aquel mensaje. Tal vez Mia nunca necesitó cambiar para ser princesa.</p>
<p class="archive-source"><a href="https://people.com/anne-hathaway-the-princess-diaries-worlds-most-beautiful-exclusive-11954368" target="_blank" rel="noopener noreferrer">Leer entrevista original de Anne Hathaway ↗</a></p>
`,"story"),

page("yo-hoy","Capítulo VII · El final que yo elijo","La niña del cuento también creció.",`
<img src="assets/illustrations/curly-portrait.svg" class="story-portrait story-portrait--small" alt="Ilustración conceptual de cabello rizado">
<p class="story">Tardé mucho tiempo en entender algo que hoy me parece sencillo: mis crespos no eran un defecto que debía corregir. Había belleza en un cabello que durante años intenté esconder.</p>
<p class="story">Hoy puedo querer mis rizos y también alisarlos si un día lo deseo, sin sentir que ninguna de esas elecciones define mi valor.</p>
<p class="narrative-quote">La diferencia es que ahora quiero elegir yo.</p>
`,"story"),

page(
    "moraleja",
    "Capítulo VII · El final que yo elijo",
    "La moraleja nunca fue tener rizos.",
    `
    <div class="promise">

      <p class="story">
        El pelo liso es bonito.<br>
        El pelo crespo también.
      </p>

      <p class="story">
        Ambos pueden ser elegantes,
        naturales y especiales.
      </p>

      <div class="ornament-line">✦</div>

      <strong>
        La belleza no debería depender
        de la textura del cabello.
      </strong>

    </div>

    <p class="story">
      Alisarlo o llevarlo natural debería ser una elección,
      <em>nunca una condición para sentirse bonita
      o aceptada.</em>
    </p>
    `
  ),

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
</ol>
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
    "page": 17,
    "number": "04",
    "label": "Volver a la niña"
  },
  {
    "page": 20,
    "number": "05",
    "label": "Reescribir el cuento"
  },
  {
    "page": 24,
    "number": "06",
    "label": "Los nuevos hechizos"
  },
  {
    "page": 27,
    "number": "07",
    "label": "El final que yo elijo"
  },
  {
    "page": 31,
    "number": "08",
    "label": "Las notas del cuento"
  }
];
