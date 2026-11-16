
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

export const chapters = [
  { page: 0, number: "00", label: "La portada" },
  { page: 1, number: "01", label: "Había una vez..." },
  { page: 3, number: "02", label: "La princesa y el espejo" },
  { page: 6, number: "03", label: "Un hechizo muy antiguo" },
  { page: 11, number: "04", label: "La otra niña" },
  { page: 14, number: "05", label: "El cuento empieza a cambiar" },
  { page: 18, number: "06", label: "¿Y si el hechizo sigue vivo?" },
  { page: 21, number: "07", label: "El final que yo elijo" },
  { page: 24, number: "08", label: "Las notas del cuento" }
];

export const pages = [

  // ==================================================
  // PORTADA
  // ==================================================

  page(
    "portada",
    "Portada",
    "¿Acaso no soy una princesa?",
    `
    <div class="cover-inner cover-redesign">

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

        <div class="cover-princesses">

         
            
            <img
            class="cover-princesses-image"
            src="assets/illustrations/princesas-lineas.png"
            alt="Dos princesas mirándose, una crespa y otra lisa"
            />




            <!-- Decoraciones -->

            <g
              fill="none"
              stroke="#d6ac73"
              stroke-width="1.6"
              opacity=".65"
            >
              <path d="M17 120 Q39 106 64 120 M576 120 Q600 106 624 120"/>
              <path d="M290 115 Q320 90 350 115"/>
              <path d="M301 157 Q320 177 339 157"/>
              <path d="M309 135 L320 118 L331 135 L320 150 Z"/>
              <circle
                cx="320" cy="134" r="3"
                fill="#dfc08c" stroke="none"
              />
              <path d="M320 63 V82 M311 72 H329 M320 187 V201 M313 194 H327"/>
              <path d="M38 177 l4 -9 4 9 9 4 -9 4 -4 9 -4 -9 -9 -4z"/>
              <path d="M593 43 l3 -7 3 7 7 3 -7 3 -3 7 -3 -7 -7 -3z"/>
            </g>

            <!-- PRINCESA CRESPA -->

            <g transform="translate(55 5)">

              <path
                d="M72 226 Q65 195 101 184 L139 171 L191 183 Q230 194 227 226"
                fill="#a36b8e"
                stroke="#e3be91"
                stroke-width="2"
              />

              <path
                d="M125 180 Q145 209 168 179"
                fill="#ead2bf"
                stroke="#e3be91"
                stroke-width="2"
              />

              <path
                d="M129 145 H167 V187 Q147 199 129 185 Z"
                fill="#ae745c"
              />

              <!-- Crespos -->

              <g
                fill="#261c30"
                stroke="#bb8b82"
                stroke-width="1.05"
              >
                <circle cx="91" cy="108" r="29"/>
                <circle cx="88" cy="77" r="26"/>
                <circle cx="111" cy="51" r="30"/>
                <circle cx="141" cy="40" r="28"/>
                <circle cx="173" cy="47" r="28"/>
                <circle cx="195" cy="69" r="26"/>
                <circle cx="210" cy="97" r="23"/>
                <circle cx="201" cy="127" r="27"/>
                <circle cx="189" cy="158" r="23"/>
                <circle cx="97" cy="144" r="28"/>
                <circle cx="114" cy="166" r="24"/>
                <circle cx="164" cy="164" r="24"/>
              </g>

              <!-- Rostro -->

              <path
                d="M116 85 Q135 65 166 78 Q185 86 189 108 Q193 123 205 132 L214 138 Q209 144 199 145 Q198 166 180 174 Q155 184 135 162 Q111 137 116 85Z"
                fill="#bb8167"
                stroke="#e4b58f"
                stroke-width="2"
              />

              <path
                d="M113 84 Q124 69 151 68 M155 67 Q179 67 190 88"
                fill="none"
                stroke="#2b1d2f"
                stroke-width="14"
                stroke-linecap="round"
              />

              <!-- Textura de rizos -->

              <g
                fill="none"
                stroke="#b98a91"
                stroke-width="1.5"
                opacity=".65"
              >
                <circle cx="90" cy="106" r="11"/>
                <circle cx="105" cy="55" r="13"/>
                <circle cx="168" cy="44" r="13"/>
                <circle cx="200" cy="103" r="10"/>
                <circle cx="114" cy="160" r="11"/>
              </g>

              <!-- Ojo y sonrisa -->

              <path
                d="M181 115 Q190 112 196 117"
                stroke="#51303c"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
              />
              <circle cx="189" cy="117" r="2.5" fill="#31202d"/>
              <path
                d="M190 153 Q198 157 204 152"
                stroke="#743a52"
                stroke-width="2.4"
                fill="none"
                stroke-linecap="round"
              />

              <!-- Corona -->

              <path
                d="M112 34 L118 8 L139 23 L153 0 L167 23 L188 8 L195 34 Z"
                fill="none"
                stroke="#f1cd89"
                stroke-width="3.3"
                stroke-linejoin="round"
              />
              <path
                d="M113 39 H195"
                stroke="#f1cd89"
                stroke-width="3"
              />
              <circle cx="153" cy="4" r="4" fill="#f1cd89"/>

              <path
                d="M106 194 Q146 214 192 193"
                fill="none"
                stroke="#e8c796"
                stroke-width="2"
              />

            </g>

            <!-- PRINCESA LISA -->

            <g transform="translate(585 5) scale(-1 1)">

              <path
                d="M72 226 Q65 195 101 184 L139 171 L191 183 Q230 194 227 226"
                fill="#a36b8e"
                stroke="#e3be91"
                stroke-width="2"
              />

              <path
                d="M125 180 Q145 209 168 179"
                fill="#ead2bf"
                stroke="#e3be91"
                stroke-width="2"
              />

              <path
                d="M129 145 H167 V187 Q147 199 129 185 Z"
                fill="#b47d67"
              />

              <!-- Cabello liso -->

              <path
                d="M79 190 Q62 145 79 84 Q85 44 121 36 Q165 22 194 51 Q223 79 210 129 L216 189 Q198 209 178 197 L175 107 Q170 80 149 76 Q115 73 105 104 L109 189Z"
                fill="#2a202d"
                stroke="#bd8e83"
                stroke-width="2"
              />

              <path
                d="M116 85 Q135 65 166 78 Q185 86 189 108 Q193 123 205 132 L214 138 Q209 144 199 145 Q198 166 180 174 Q155 184 135 162 Q111 137 116 85Z"
                fill="#c79278"
                stroke="#e8b698"
                stroke-width="2"
              />

              <path
                d="M113 83 Q124 54 154 59 Q197 58 203 94 Q191 73 166 75 Q145 71 113 99Z"
                fill="#302432"
              />

              <path
                d="M99 98 Q89 134 104 192 M183 90 Q189 143 183 195"
                fill="none"
                stroke="#a88283"
                stroke-width="2"
                opacity=".75"
              />

              <!-- Ojo y sonrisa -->

              <path
                d="M181 115 Q190 112 196 117"
                stroke="#583b43"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
              />
              <circle cx="189" cy="117" r="2.5" fill="#31202d"/>

              <path
                d="M190 153 Q198 157 204 152"
                stroke="#80485b"
                stroke-width="2.4"
                fill="none"
                stroke-linecap="round"
              />

              <!-- Corona -->

              <path
                d="M112 34 L118 8 L139 23 L153 0 L167 23 L188 8 L195 34 Z"
                fill="none"
                stroke="#f1cd89"
                stroke-width="3.3"
                stroke-linejoin="round"
              />
              <path
                d="M113 39 H195"
                stroke="#f1cd89"
                stroke-width="3"
              />
              <circle cx="153" cy="4" r="4" fill="#f1cd89"/>

              <path
                d="M106 194 Q146 214 192 193"
                fill="none"
                stroke="#e8c796"
                stroke-width="2"
              />

            </g>

          </svg>

          <span class="cover-princesses__caption">
            DOS CORONAS. LA MISMA BELLEZA.
          </span>

        </div>
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

  page(
    "el-espejo",
    "Capítulo II · La princesa y el espejo",
    "Pero había un problema.",
    `
    <p class="story">
      Mia ya era una princesa. Sin embargo, antes de
      que el mundo pudiera reconocerla como tal,
      la película nos muestra que debía pasar
      por un cambio de imagen.
    </p>

    <div class="ornament-line">✦</div>

    <p class="story">
      Nuevas gafas. Otra ropa. Las cejas arregladas.
      Y, como parte de aquella transformación...
    </p>

    <p class="narrative-quote">
      <strong>Le alisaron el pelo.</strong>
    </p>

    <p class="story">
      ¿Era ese el secreto para parecer elegante?
    </p>
    `
  ),

  page(
    "transformacion",
    "Capítulo II · La princesa y el espejo",
    "La magia del «antes y después».",
    `
    <div class="media-duo">
      <figure>
        ${img(
          "curly-portrait",
          "",
          "Ilustración conceptual del cabello crespo"
        )}
        <figcaption>ANTES</figcaption>
      </figure>

      <figure>
        ${img(
          "straight-portrait",
          "",
          "Ilustración conceptual del cabello liso"
        )}
        <figcaption>DESPUÉS</figcaption>
      </figure>
    </div>

    <span class="media-caption">
      Ilustraciones provisionales. Reemplazar por
      fotogramas reales de la transformación de Mia.
    </span>

    <p class="story">
      Nadie pronuncia necesariamente la frase
      «el pelo crespo es feo». El cambio ocurre
      frente a nuestros ojos, acompañado por una
      nueva forma de presentar al personaje.
    </p>

    ${margin(
      "Stuart Hall (1997) permite leer esta escena desde la teoría de la representación: las imágenes participan en la construcción de significados culturales. Aquí analizamos una interpretación del montaje, no una intención demostrada de sus creadores."
    )}
    `
  ),

  page(
    "la-tesis",
    "Capítulo II · La princesa y el espejo",
    "La pregunta que cambió el cuento.",
    `
    <p class="story">
      Entonces una pregunta quedó suspendida
      entre las páginas:
    </p>

    <p class="narrative-quote">
      Si Mia ya era princesa antes de su transformación,
      ¿por qué parecía necesario cambiar su cabello
      para que los demás la vieran como tal?
    </p>

    <div class="thesis-page">
      <h3>La tesis de este cuento</h3>

      <p>
        El cine, la publicidad y las redes sociales han
        contribuido a construir ideales de belleza que
        han privilegiado determinadas texturas y estilos
        de cabello. Aunque muchas representaciones han
        empezado a cuestionarlos, los estándares reaparecen
        bajo nuevas formas. La belleza y la elegancia no
        dependen de llevar el pelo liso o crespo; poder
        elegir sin presión debería ser lo importante.
      </p>
    </div>

    <p class="small">
      Esta tesis se discutirá con imágenes,
      investigaciones y una experiencia autobiográfica.
    </p>
    `
  ),

  // ==================================================
  // CAPÍTULO III
  // ==================================================

  page(
    "reloj-atras",
    "Capítulo III · Un hechizo muy antiguo",
    "Pero el hechizo no empezó con Mia.",
    `
    <div class="chapter-opener chapter-opener--midnight">
      <span class="num">✦ 1900 ✦</span>
      <h2>Había otra historia<br>antes de este cuento.</h2>

      <p>
        Para entender la transformación de una princesa
        en 2001, debemos volver muchas décadas atrás.
      </p>

      <span class="ornament">❦</span>
    </div>
    `,
    "chapter"
  ),

  page(
    "primeros-anuncios",
    "Capítulo III · Un hechizo muy antiguo",
    "Los anuncios también contaban cuentos.",
    `
    <p class="story">
      En el siglo XX, la publicidad capilar no solo
      ofrecía productos: también hablaba de aspiraciones,
      presentación personal y maneras de encajar en
      una sociedad que no recibía de la misma forma
      todas las apariencias.
    </p>

    ${pending("Una promesa de belleza", "1915")}

    <p class="small">
      El archivo de Poro College (1915) sirve para
      estudiar los negocios capilares afroamericanos
      en su contexto histórico.
    </p>

    <a
      class="small"
      href="https://nmaahc.si.edu/object/nmaahc_2011.170.2"
      target="_blank"
      rel="noopener noreferrer"
    >Consultar archivo del Smithsonian ↗</a>
    `
  ),

  page(
    "historia-y-poder",
    "Capítulo III · Un hechizo muy antiguo",
    "Había algo más que moda.",
    `
    <p class="story">
      La textura del cabello se relacionó, en distintos
      contextos históricos, con juicios sobre belleza,
      respetabilidad, raza y pertenencia.
    </p>

    <p class="story">
      Y sin embargo, la historia no era igual para todas
      las mujeres, ni cada decisión de alisarse
      significaba lo mismo.
    </p>

    ${margin(
      "<strong>Emma Dabiri (2019)</strong>, en <cite>Don't Touch My Hair</cite>, estudia el cabello afro como un asunto de identidad, historia y poder."
    )}

    <div class="ornament-line">✦</div>

    <p class="story">
      Los ideales parecían fijos. Pero ya había mujeres
      decididas a discutirlos.
    </p>
    `
  ),

  page(
    "resistencia",
    "Capítulo III · Un hechizo muy antiguo",
    "Las princesas también podían resistirse.",
    `
    <p class="historic-year">1960s</p>

    <p class="story">
      Con movimientos de reivindicación como
      <em>Black Is Beautiful</em>, el cabello afro natural
      se convirtió también en símbolo de orgullo,
      identidad y resistencia cultural.
    </p>

    <p class="story">
      La aceptación del cabello natural no comenzó
      en las redes sociales. Tiene una historia
      mucho más profunda.
    </p>

    <p class="small">
      PENDIENTE: insertar una fotografía o campaña
      de época con fecha, autoría y contexto verificados.
    </p>
    `
  ),

  page(
    "el-frizz",
    "Capítulo III · Un hechizo muy antiguo",
    "Después vino la promesa del «control».",
    `
    <p class="story">
      A finales del siglo XX y comienzos del XXI,
      muchos anuncios prometían controlar el volumen,
      dominar el frizz o dejar el cabello
      perfectamente manejable.
    </p>

    <div class="magazine-ad" role="img"
      aria-label="Ilustración editorial, no anuncio original">
      <span class="ad-small">
        ESTÉTICA RECREADA · NO ANUNCIO REAL
      </span>
      <span class="ad-headline">
        ¿Y si tu pelo<br>
        necesitara una<br>
        <em>solución?</em>
      </span>
      <span class="ad-small">
        UNA PREGUNTA SOBRE EL LENGUAJE PUBLICITARIO
      </span>
    </div>

    <p class="small">
      El frizz y el cabello crespo no son lo mismo.
      El análisis deberá comparar mensajes de anuncios
      específicos.
    </p>

    ${margin(
      "Marshall McLuhan (1964) ayuda a pensar cómo los medios y sus formatos influyen en la forma en que circulan estas ideas."
    )}
    `
  ),

  // ==================================================
  // CAPÍTULO IV
  // ==================================================

  page(
    "otra-nina",
    "Capítulo IV · La otra niña",
    "Y mientras tanto...",
    `
    <div class="chapter-opener">
      <span class="num">✧</span>

      <h2>En otra parte del mundo<br>había otra niña.</h2>

      <p>
        No vivía en un castillo ni había descubierto
        ningún reino secreto. Pero también crecía
        rodeada de películas, anuncios y mensajes
        sobre lo que significaba ser bonita.
      </p>

      <span class="ornament">❦</span>
      <p class="small">Esa niña era yo.</p>
    </div>
    `,
    "chapter"
  ),

  page(
    "mis-fotos-antes",
    "Capítulo IV · La otra niña",
    "Yo también quería cambiar.",
    `
    <div class="photo-hole">
      <strong>
        Aquí irá una foto mía<br>
        cuando me alisaba<br>
        el pelo.
      </strong>

      <small>FOTOGRAFÍA PERSONAL · POR AGREGAR</small>
    </div>

    <p class="story">
      Durante una etapa de mi vida me alisaba
      el cabello porque no me gustaban mis crespos.
    </p>

    <p class="small">
      PENDIENTE: completar con un recuerdo real,
      una fecha aproximada y cómo me sentía entonces.
    </p>
    `
  ),

  page(
    "eleccion-o-presion",
    "Capítulo IV · La otra niña",
    "Pero esta historia no es contra el pelo liso.",
    `
    <p class="story">
      Hoy sé que no hay nada malo con alisarse el cabello.
      Tampoco con llevarlo rizado, crespo, recogido
      o como cada quien prefiera.
    </p>

    <p class="narrative-quote">
      El problema nunca fue alisarme el pelo.
      Fue sentir que debía hacerlo para ser bonita.
    </p>

    ${margin(
      "Ingrid Banks (2000), en <cite>Hair Matters</cite>, examina las relaciones entre cabello, identidad y elecciones personales. Su trabajo ayuda a cuestionar la idea simplista de que alisarse siempre equivale a rechazo de la textura natural."
    )}

    <p class="story">
      Entonces comprendí que el verdadero hechizo
      no estaba en los rizos: estaba en la idea de
      que solo una apariencia merecía admiración.
    </p>
    `
  ),

  // ==================================================
  // CAPÍTULO V
  // ==================================================

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

  page(
    "valiente",
    "Capítulo V · Reescribir el cuento",
    "Otra princesa apareció.",
    `
    <span class="page-kicker">2012 · VALIENTE</span>

    ${img(
      "curly-portrait",
      "story-portrait",
      "Ilustración conceptual provisional de una princesa con rizos"
    )}

    <p class="story">
      Mérida tenía una gran melena de rizos.
      Su cabello no necesitaba una transformación
      para convertirla en protagonista
      de su propia historia.
    </p>

    <p class="small">
      Fotograma pendiente de <cite>Valiente</cite> (2012).
    </p>
    `
  ),

  page(
    "dove",
    "Capítulo V · Reescribir el cuento",
    "Y algunas marcas cambiaron su discurso.",
    `
    <span class="page-kicker">2015 · LOVE YOUR CURLS</span>

    <div class="magazine-ad" role="img"
      aria-label="Recreación conceptual, no anuncio real">
      <span class="ad-small">
        ESPACIO PARA ANUNCIO ORIGINAL
      </span>
      <span class="ad-headline">
        Tus rizos<br>
        <em>también</em><br>
        merecen amor.
      </span>
      <span class="ad-small">
        DOVE 2015 · INSERTAR PIEZA DOCUMENTADA
      </span>
    </div>

    <p class="story">
      La campaña <cite>Love Your Curls</cite> promovió
      una mirada más positiva del cabello rizado.
      Era un cambio visible en el mensaje publicitario.
    </p>

    ${margin(
      "Pero aquí aparece una contradicción: la aceptación también puede convertirse en una estrategia de venta. Una campaña puede cuestionar un estereotipo y comercializar esa reivindicación."
    )}

    <a class="small"
      href="https://www.prnewswire.com/news-releases/dove-hair-launches-poetic-tribute-to-curls-inspired-by-stories-from-real-women-300084598.html"
      target="_blank"
      rel="noopener noreferrer"
    >Fuente sobre la campaña ↗</a>
    `
  ),

  page(
    "encanto",
    "Capítulo V · Reescribir el cuento",
    "Y la historia llegó más cerca de casa.",
    `
    <span class="page-kicker">
      2021 · ENCANTO · COLOMBIA
    </span>

    ${img(
      "curly-portrait",
      "story-portrait story-portrait--small",
      "Ilustración conceptual provisional"
    )}

    <p class="story">
      Mirabel, protagonista de <cite>Encanto</cite>,
      lleva sus rizos naturales. La película permite
      reconocer distintas texturas de cabello en
      una historia situada en Colombia.
    </p>

    ${margin(
      "María Paula González Herrera (2019), en <cite>Entre rizo y rizo</cite>, investiga percepciones del cabello afro y rizado en Colombia a partir de medios y testimonios."
    )}

    <a class="small"
      href="https://intellectum.unisabana.edu.co/entities/publication/4f61ed3e-6c40-4f83-93f4-ee7e6a35af96"
      target="_blank"
      rel="noopener noreferrer"
    >Leer investigación colombiana ↗</a>
    `
  ),

  // ==================================================
  // CAPÍTULO VI
  // ==================================================

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

  page(
    "que-cambio",
    "Capítulo VI · Los nuevos hechizos",
    "¿Y si no todo había cambiado?",
    `
    <p class="story">
      No se trata de decir que el
      <em>Clean Girl Look</em> está mal.
      Se trata de preguntarnos por qué expresiones
      como «limpio», «arreglado» o «elegante»
      todavía pueden asociarse con tener
      cada cabello bajo control.
    </p>

    ${margin(
      "Marta Ezquerra Fernández (2026) analiza cien videos de TikTok relacionados con la estética <em>Clean Girl</em> y estudia la estandarización visual de ciertas expectativas de feminidad."
    )}

    <p class="narrative-quote">
      El problema nunca fue elegir un peinado.
      Fue creer que solo uno podía ser bonito.
    </p>

    <a class="small"
      href="https://firstmonday.org/ojs/index.php/fm/article/view/14323"
      target="_blank"
      rel="noopener noreferrer"
    >Leer estudio sobre TikTok ↗</a>
    `
  ),

  // ==================================================
  // CAPÍTULO VII
  // ==================================================

  page(
    "anne",
    "Capítulo VII · El final que yo elijo",
    "Veinticinco años después...",
    `
    <span class="page-kicker">
      2026 · EL DIARIO DE LA PRINCESA
    </span>

    <p class="story">
      La historia regresó al principio.
      En una entrevista de 2026, Anne Hathaway
      reflexionó sobre el contraste que habían
      construido entre el cabello rizado
      y el cabello liso de Mia.
    </p>

    ${img(
      "curly-portrait",
      "story-portrait story-portrait--small",
      "Ilustración conceptual provisional"
    )}

    <p class="story">
      Reconoció que aquella decisión transmitió
      una interpretación negativa que no habían buscado.
    </p>

    <p class="small">
      La entrevista permite distinguir la intención
      de la producción del significado que puede
      recibir el público.
    </p>

    <a class="small"
      href="https://people.com/anne-hathaway-the-princess-diaries-worlds-most-beautiful-exclusive-11954368"
      target="_blank"
      rel="noopener noreferrer"
    >Entrevista en PEOPLE ↗</a>
    `
  ),

  page(
    "yo-hoy",
    "Capítulo VII · El final que yo elijo",
    "Y la otra niña también había crecido.",
    `
    <div class="photo-hole photo-hole--now">
      <strong>
        Mi fotografía actual<br>
        con mis crespos<br>
        naturales
      </strong>

      <small>FOTOGRAFÍA PERSONAL · POR AGREGAR</small>
    </div>

    <p class="story">
      Hoy quiero poder llevar mis crespos porque
      me gustan, no porque una tendencia
      me obligue a reivindicarlos.
    </p>

    <p class="story">
      Y quiero poder alisarlos, si un día me provoca,
      sin que eso signifique que rechazo quién soy.
    </p>
    `
  ),

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

  page(
    "autores-1",
    "Apéndice · Notas del cuento",
    "Las voces detrás de la historia.",
    `
    <p class="story">
      Este cuento es también un ensayo:
      las escenas y anuncios se interpretan
      a partir de teorías y fuentes que pueden
      respaldar, cuestionar o matizar el argumento.
    </p>

    <ol class="refs">
      <li>
        Hall, S. (Ed.). (1997).
        <cite>Representation: Cultural Representations
        and Signifying Practices</cite>. SAGE.
      </li>

      <li>
        McLuhan, M. (1964).
        <cite>Understanding Media:
        The Extensions of Man</cite>.
      </li>

      <li>
        Dabiri, E. (2019).
        <cite>Don't Touch My Hair</cite>.
      </li>

      <li>
        Banks, I. (2000).
        <cite>Hair Matters: Beauty, Power,
        and Black Women's Consciousness</cite>.
        NYU Press.
      </li>

      <li>
        González Herrera, M. P. (2019).
        <cite>Entre rizo y rizo</cite>.
        Universidad de La Sabana.
      </li>

      <li>
        Ezquerra Fernández, M. (2026).
        <cite>Clean Girl aesthetic and neoliberal
        femininity performance on TikTok</cite>.
        First Monday.
      </li>
    </ol>
    `
  ),

  page(
    "fuentes-2",
    "Apéndice · Notas del cuento",
    "Las imágenes detrás del cuento.",
    `
    <p class="page-kicker">
      FUENTES PRIMARIAS Y AUDIOVISUALES
    </p>

    <ol class="refs">
      <li>
        Marshall, G. (Dir.). (2001).
        <cite>The Princess Diaries</cite>.
        Walt Disney Pictures.
      </li>

      <li>
        Andrews, M. y Chapman, B. (Dirs.). (2012).
        <cite>Brave</cite>.
        Pixar Animation Studios.
      </li>

      <li>
        Bush, J. y Howard, B. (Dirs.). (2021).
        <cite>Encanto</cite>.
        Walt Disney Animation Studios.
      </li>

      <li>
        Dove (2015).
        <cite>Love Your Curls</cite> [Campaña].
      </li>

      <li>
        Smithsonian / National Museum of African
        American History and Culture.
        Documento de Poro College (1915).
      </li>

      <li>
        Hathaway, A. (2026).
        Entrevista en <cite>PEOPLE</cite>.
      </li>
    </ol>

    <p class="small">
      PENDIENTE: completar las referencias de cada
      anuncio histórico, los créditos de los fotogramas
      y sus enlaces antes de la entrega.
    </p>
    `
  ),

  page(
    "declaracion",
    "Apéndice · Notas del cuento",
    "Cómo se hizo este cuento.",
    `
    <p class="story">
      El formato de libro interactivo es una decisión
      narrativa: permite que el lector avance de una
      historia aparentemente inocente hacia una pregunta
      histórica, social y personal.
    </p>

    <div class="paper-note">
      <p>
        <strong>Herramientas:</strong>
        HTML, CSS y JavaScript para la estructura,
        el diseño y el paso de páginas.
      </p>

      <p>
        <strong>Uso de inteligencia artificial:</strong>
        antes de la entrega final, añadir aquí las
        herramientas utilizadas, los prompts exactos
        y una reflexión crítica sobre posibles sesgos,
        errores y limitaciones.
      </p>
    </div>

    <p class="small">
      Los créditos y la investigación son tan importantes
      como el diseño del cuento.
    </p>
    `
  ),

  // ==================================================
  // CONTRAPORTADA
  // ==================================================

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
