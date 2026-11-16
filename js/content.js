/* CONTENT LAYER
 * One object = one physical page. Storytelling always comes first; the scholarly
 * analysis appears as a margin note / an artifact found inside the same book.
 * Replace placeholder illustrations by documented primary sources in assets/images.
 */
const ART = 'assets/illustrations/';
const img = (name, cls='story-portrait', alt='Ilustración editorial provisional') => `<img class="${cls}" src="${ART}${name}.svg" alt="${alt}">`;
const margin = (text) => `<aside class="paper-note"><p>${text}</p></aside>`;
const pending = (title, year) => `<div class="newspaper" aria-label="Espacio pendiente para un anuncio histórico verificado"><span class="date">ARCHIVO POR DOCUMENTAR · ${year}</span><h3>${title}</h3><p>Esta composición es un marcador editorial, NO una publicidad histórica original.</p><span class="ad-badge">AÑADIR ANUNCIO CON FUENTE</span></div>`;
function page(id, chapter, title, body, kind='story', opts={}) {
  return {id,chapter,title,body,kind,...opts};
}

export const chapters = [
  {page:0,number:'00',label:'La portada'},
  {page:1,number:'01',label:'Había una vez...'},
  {page:3,number:'02',label:'La princesa y el espejo'},
  {page:6,number:'03',label:'Un hechizo muy antiguo'},
  {page:11,number:'04',label:'La otra niña'},
  {page:14,number:'05',label:'El cuento empieza a cambiar'},
  {page:18,number:'06',label:'¿Y si el hechizo sigue vivo?'},
  {page:21,number:'07',label:'El final que yo elijo'},
  {page:24,number:'08',label:'Las notas del cuento'}
];

export const pages = [
  page('portada','Portada','¿Acaso no soy una princesa?',`
    <div class="cover-inner">
      <span class="cover-tiny">ÉRASE UNA VEZ...</span>
      <div><img src="assets/illustrations/crown-ornament.svg" alt="" class="cover-crown"><h1 class="cover-title">¿ACASO NO SOY<br><em>UNA PRINCESA?</em></h1></div>
      <p class="cover-subtitle">La belleza que nos enseñaron a esconder</p>
      <span class="cover-seal" aria-hidden="true">✦</span>
      <span class="cover-bylines">UN ENSAYO MULTIMEDIA<br>NUEVOS MEDIOS · 2026</span>
    </div>`, 'cover'),

  page('erase-una-vez','Capítulo I · Había una vez','Érase una vez...',`
    <p class="story dropcap">Había una vez una niña a la que le contaron que las princesas vivían en castillos, usaban vestidos preciosos y tenían el pelo perfectamente peinado.</p>
    <p class="story">Aquella niña todavía no sabía mucho sobre el mundo. Pero ya estaba aprendiendo una regla silenciosa:</p>
    <p class="narrative-quote">Para ser vista como princesa, primero había que parecerlo.</p>
    <div class="ornament-line">✦</div>
    <p class="small">Este comienzo utiliza deliberadamente la forma de un cuento de hadas. Las páginas siguientes analizan una película real y las ideas culturales que permite cuestionar.</p>`),

  page('princesa-mia','Capítulo I · Había una vez','La niña tenía un nombre.',`
    <p class="story">Se llamaba <strong>Mia Thermopolis</strong>. Era adolescente, vivía en San Francisco y descubrió que, aunque nunca lo hubiera imaginado, era heredera de un reino.</p>
    ${img('curly-portrait','story-portrait','Ilustración editorial provisional; no representa un fotograma de la película')}
    <p class="story">No llevaba corona ni se parecía a las princesas de los cuentos. Su cabello era abundante, con rizos y volumen.</p>
    <p class="small">El diario de la princesa · The Princess Diaries · 2001</p>`),

  page('el-espejo','Capítulo II · La princesa y el espejo','Pero había un problema.',`
    <p class="story">Mia ya era una princesa. Sin embargo, antes de que el mundo pudiera reconocerla como tal, la película nos muestra que debía pasar por un cambio de imagen.</p>
    <div class="ornament-line">✦</div>
    <p class="story">Nuevas gafas. Otra ropa. Las cejas arregladas. Y, como parte de aquella transformación...</p>
    <p class="narrative-quote"><strong>Le alisaron el pelo.</strong></p>
    <p class="story">¿Era ese el secreto para parecer elegante?</p>`),

  page('transformacion','Capítulo II · La princesa y el espejo','La magia del «antes y después».',`
    <div class="media-duo">
      <figure>${img('curly-portrait','','Ilustración conceptual del cabello crespo')}<figcaption>ANTES</figcaption></figure>
      <figure>${img('straight-portrait','','Ilustración conceptual del cabello liso')}<figcaption>DESPUÉS</figcaption></figure>
    </div>
    <span class="media-caption">Ilustraciones originales provisionales. Reemplazar por fotogramas reales de la transformación de Mia.</span>
    <p class="story">Nadie pronuncia necesariamente la frase «el pelo crespo es feo». El cambio ocurre frente a nuestros ojos, acompañado por una nueva forma de presentar al personaje.</p>
    ${margin('Stuart Hall (1997) permite leer esta escena desde la teoría de la representación: las imágenes participan en la construcción de significados culturales. Aquí analizamos una interpretación del montaje, no una intención demostrada de sus creadores.')}`),

  page('la-tesis','Capítulo II · La princesa y el espejo','La pregunta que cambió el cuento.',`
    <p class="story">Entonces una pregunta quedó suspendida entre las páginas:</p>
    <p class="narrative-quote">Si Mia ya era princesa antes de su transformación, ¿por qué parecía necesario cambiar su cabello para que los demás la vieran como tal?</p>
    <div class="thesis-page">
      <h3>La tesis de este cuento</h3>
      <p>El cine, la publicidad y las redes sociales han contribuido a construir ideales de belleza que han privilegiado determinadas texturas y estilos de cabello. Aunque muchas representaciones han empezado a cuestionarlos, los estándares reaparecen bajo nuevas formas. La belleza y la elegancia no dependen de llevar el pelo liso o crespo; poder elegir sin presión debería ser lo importante.</p>
    </div>
    <p class="small">Esta tesis se discutirá con imágenes, investigaciones y una experiencia autobiográfica.</p>`),

  page('reloj-atras','Capítulo III · Un hechizo muy antiguo','Pero el hechizo no empezó con Mia.',`
    <div class="chapter-opener chapter-opener--midnight">
      <span class="num">✦ 1900 ✦</span>
      <h2>Había otra historia<br>antes de este cuento.</h2>
      <p>Para entender la transformación de una princesa en 2001, debemos volver muchas décadas atrás.</p>
      <span class="ornament">❦</span>
    </div>`, 'chapter'),

  page('primeros-anuncios','Capítulo III · Un hechizo muy antiguo','Los anuncios también contaban cuentos.',`
    <p class="story">En el siglo XX, la publicidad capilar no solo ofrecía productos: también hablaba de aspiraciones, presentación personal y maneras de encajar en una sociedad que no recibía de la misma forma todas las apariencias.</p>
    ${pending('Una promesa de belleza','1915')}
    <p class="small">El archivo de Poro College (1915) sirve para estudiar los negocios capilares afroamericanos en su contexto histórico; no debe simplificarse toda la historia a una sola técnica de alisado.</p>
    <a class="small" href="https://nmaahc.si.edu/object/nmaahc_2011.170.2" target="_blank" rel="noopener noreferrer">Consultar archivo del Smithsonian ↗</a>`),

  page('historia-y-poder','Capítulo III · Un hechizo muy antiguo','Había algo más que moda.',`
    <p class="story">La textura del cabello se relacionó, en distintos contextos históricos, con juicios sobre belleza, respetabilidad, raza y pertenencia.</p>
    <p class="story">Y sin embargo, la historia no era igual para todas las mujeres, ni cada decisión de alisarse significaba lo mismo.</p>
    ${margin('<strong>Emma Dabiri (2019)</strong>, en <cite>Don\'t Touch My Hair</cite>, estudia el cabello afro como un asunto de identidad, historia y poder. Esta mirada ayuda a distinguir una preferencia de estilo de las presiones raciales y sociales.')}
    <div class="ornament-line">✦</div>
    <p class="story">Los ideales parecían fijos. Pero ya había mujeres decididas a discutirlos.</p>`),

  page('resistencia','Capítulo III · Un hechizo muy antiguo','Las princesas también podían resistirse.',`
    <p class="historic-year">1960s</p>
    <p class="story">Con movimientos de reivindicación como <em>Black Is Beautiful</em>, el cabello afro natural se convirtió también en símbolo de orgullo, identidad y resistencia cultural.</p>
    <p class="story">La aceptación del cabello natural no comenzó en las redes sociales. Tiene una historia mucho más profunda.</p>
    <p class="small">PENDIENTE: insertar una fotografía o campaña de época con fecha, autoría y contexto verificados.</p>`),

  page('el-frizz','Capítulo III · Un hechizo muy antiguo','Después vino la promesa del «control».',`
    <p class="story">A finales del siglo XX y comienzos del XXI, muchos anuncios prometían controlar el volumen, dominar el frizz o dejar el cabello perfectamente manejable.</p>
    <div class="magazine-ad" role="img" aria-label="Ilustración editorial conceptual, no anuncio original"><span class="ad-small">ESTÉTICA RECREADA · NO ANUNCIO REAL</span><span class="ad-headline">¿Y si tu pelo<br>necesitara una<br><em>solución?</em></span><span class="ad-small">UNA PREGUNTA SOBRE EL LENGUAJE PUBLICITARIO</span></div>
    <p class="small">El frizz y el cabello crespo no son lo mismo. El análisis deberá comparar mensajes de anuncios específicos, no dar por sentado que todo producto anti-frizz rechaza los rizos.</p>
    ${margin('Marshall McLuhan (1964) ayuda a pensar cómo los medios y sus formatos influyen en la forma en que circulan estas ideas. La interpretación de cada anuncio se apoyará en su texto y composición reales.')}`),

  page('otra-nina','Capítulo IV · La otra niña','Y mientras tanto...',`
    <div class="chapter-opener">
      <span class="num">✧</span>
      <h2>En otra parte del mundo<br>había otra niña.</h2>
      <p>No vivía en un castillo ni había descubierto ningún reino secreto. Pero también crecía rodeada de películas, anuncios y mensajes sobre lo que significaba ser bonita.</p>
      <span class="ornament">❦</span>
      <p class="small">Esa niña era yo.</p>
    </div>`, 'chapter'),

  page('mis-fotos-antes','Capítulo IV · La otra niña','Yo también quería cambiar.',`
    <div class="photo-hole"><strong>Aquí irá una foto mía<br>cuando me alisaba<br>el pelo.</strong><small>FOTOGRAFÍA PERSONAL · POR AGREGAR</small></div>
    <p class="story">Durante una etapa de mi vida me alisaba el cabello porque no me gustaban mis crespos.</p>
    <p class="small">PENDIENTE: completar con un recuerdo real, una fecha aproximada y la explicación de cómo me sentía entonces.</p>`),

  page('eleccion-o-presion','Capítulo IV · La otra niña','Pero esta historia no es contra el pelo liso.',`
    <p class="story">Hoy sé que no hay nada malo con alisarse el cabello. Tampoco con llevarlo rizado, crespo, recogido o como cada quien prefiera.</p>
    <p class="narrative-quote">El problema nunca fue alisarme el pelo. Fue sentir que debía hacerlo para ser bonita.</p>
    ${margin('Ingrid Banks (2000), en <cite>Hair Matters</cite>, examina las relaciones entre cabello, identidad y elecciones personales. Su trabajo ayuda a cuestionar la idea simplista de que alisarse siempre equivale a rechazo de la textura natural.')}
    <p class="story">Entonces comprendí que el verdadero hechizo no estaba en los rizos: estaba en la idea de que solo una apariencia merecía admiración.</p>`),

  page('cuento-cambia','Capítulo V · Reescribir el cuento','Pero las historias también pueden cambiar.',`
    <div class="chapter-opener chapter-opener--midnight">
      <span class="num">✦</span>
      <h2>Y, poco a poco,<br>el cuento comenzó<br>a reescribirse.</h2>
      <p>No sucedió en un solo año. No fue una transformación perfecta. Pero cada vez aparecieron más imágenes que desafiaban el ideal único.</p>
      <span class="ornament">✧</span>
    </div>`, 'chapter'),

  page('valiente','Capítulo V · Reescribir el cuento','Otra princesa apareció.',`
    <span class="page-kicker">2012 · VALIENTE</span>
    ${img('curly-portrait','story-portrait','Ilustración conceptual provisional; sustituir por fotograma de Mérida de Valiente')}
    <p class="story">Mérida tenía una gran melena de rizos. Su cabello no necesitaba una transformación para convertirla en protagonista de su propia historia.</p>
    <p class="small">Fotograma pendiente de <cite>Valiente</cite> (2012). El análisis debe considerar también las particularidades de su personaje y no reducir la película al peinado.</p>`),

  page('dove','Capítulo V · Reescribir el cuento','Y algunas marcas cambiaron su discurso.',`
    <span class="page-kicker">2015 · LOVE YOUR CURLS</span>
    <div class="magazine-ad" role="img" aria-label="Recreación conceptual para mostrar dónde irá la campaña Dove"><span class="ad-small">ESPACIO PARA ANUNCIO ORIGINAL</span><span class="ad-headline">Tus rizos<br><em>también</em><br>merecen amor.</span><span class="ad-small">DOVE 2015 · INSERTAR PIEZA DOCUMENTADA</span></div>
    <p class="story">La campaña <cite>Love Your Curls</cite> promovió una mirada más positiva del cabello rizado. Era un cambio visible en el mensaje publicitario.</p>
    ${margin('Pero aquí aparece una contradicción interesante: la aceptación también puede convertirse en una estrategia de venta. Una campaña puede cuestionar un estereotipo y, al mismo tiempo, comercializar esa reivindicación.')}
    <a class="small" href="https://www.prnewswire.com/news-releases/dove-hair-launches-poetic-tribute-to-curls-inspired-by-stories-from-real-women-300084598.html" target="_blank" rel="noopener noreferrer">Fuente sobre la campaña ↗</a>`),

  page('encanto','Capítulo V · Reescribir el cuento','Y la historia llegó más cerca de casa.',`
    <span class="page-kicker">2021 · ENCANTO · COLOMBIA</span>
    ${img('curly-portrait','story-portrait story-portrait--small','Ilustración provisional; sustituir por imagen de Mirabel en Encanto')}
    <p class="story">Mirabel, protagonista de <cite>Encanto</cite>, lleva sus rizos naturales. Y la película permite reconocer distintas texturas de cabello en una historia situada en Colombia.</p>
    ${margin('María Paula González Herrera (2019), en <cite>Entre rizo y rizo</cite>, investiga percepciones del cabello afro y rizado en Colombia a partir de medios y testimonios. Es un puente entre la historia global y nuestro contexto.')}
    <a class="small" href="https://intellectum.unisabana.edu.co/entities/publication/4f61ed3e-6c40-4f83-93f4-ee7e6a35af96" target="_blank" rel="noopener noreferrer">Leer investigación colombiana ↗</a>`),

  page('nuevos-hechizos','Capítulo VI · Los nuevos hechizos','Pero algo del viejo hechizo sobrevivió.',`
    <p class="story">El cuento parecía ir hacia un final feliz: más personajes, más campañas, más conversaciones sobre el pelo natural.</p>
    <p class="story">Y, sin embargo, llegó una nueva pregunta.</p>
    <div class="ornament-line">✦</div>
    <p class="narrative-quote">¿Qué ocurre cuando los estándares de belleza no desaparecen, sino que se disfrazan de una nueva tendencia?</p>
    <p class="story">Esta vez el cuento ya no se contaba en la televisión. Se contaba en las pantallas de nuestros teléfonos.</p>`),

  page('clean-girl','Capítulo VI · Los nuevos hechizos','El nuevo ideal tenía un nombre.',`
    <span class="page-kicker">2020s · REDES SOCIALES</span>
    <div class="social-card"><div class="social-card__top"><span>✧ tendencia</span><span>♡ · · ·</span></div><img src="${ART}bun-portrait.svg" alt="Ilustración conceptual de un peinado recogido y pulido"><div class="social-card__bottom">#CleanGirlLook · Ilustración, no publicación real</div></div>
    <p class="story">Un recogido pulido. Una estética minimalista. La promesa de verse perfecta casi sin esfuerzo.</p>
    <p class="small">Vestir o peinarse así es una elección válida. Lo que discutimos es el significado cultural de presentar una sola apariencia como sinónimo de pulcritud.</p>`),

  page('que-cambio','Capítulo VI · Los nuevos hechizos','¿Y si no todo había cambiado?',`
    <p class="story">No se trata de decir que el <em>Clean Girl Look</em> está mal. Se trata de preguntarnos por qué expresiones como «limpio», «arreglado» o «elegante» todavía pueden asociarse con tener cada cabello bajo control.</p>
    ${margin('Marta Ezquerra Fernández (2026) analiza cien videos de TikTok relacionados con la estética <em>Clean Girl</em> y estudia la estandarización visual de ciertas expectativas de feminidad. El estudio no demuestra que todas las personas interpreten esa estética del mismo modo.')}
    <p class="narrative-quote">El problema nunca fue elegir un peinado. Fue creer que solo uno podía ser bonito.</p>
    <a class="small" href="https://firstmonday.org/ojs/index.php/fm/article/view/14323" target="_blank" rel="noopener noreferrer">Leer estudio sobre TikTok ↗</a>`),

  page('anne','Capítulo VII · El final que yo elijo','Veinticinco años después...',`
    <span class="page-kicker">2026 · EL DIARIO DE LA PRINCESA</span>
    <p class="story">La historia regresó al principio. En una entrevista de 2026, Anne Hathaway reflexionó sobre el contraste que habían construido entre el cabello rizado y el cabello liso de Mia.</p>
    ${img('curly-portrait','story-portrait story-portrait--small','Ilustración conceptual provisional; no es una foto de Anne Hathaway')}
    <p class="story">Reconoció que aquella decisión transmitió una interpretación negativa que no habían buscado.</p>
    <p class="small">No es una prueba sobre lo que todas las niñas entendieron. Es una fuente valiosa para distinguir la intención de la producción del significado que puede recibir el público.</p>
    <a class="small" href="https://people.com/anne-hathaway-the-princess-diaries-worlds-most-beautiful-exclusive-11954368" target="_blank" rel="noopener noreferrer">Entrevista en PEOPLE ↗</a>`),

  page('yo-hoy','Capítulo VII · El final que yo elijo','Y la otra niña también había crecido.',`
    <div class="photo-hole photo-hole--now"><strong>Mi fotografía actual<br>con mis crespos<br>naturales</strong><small>FOTOGRAFÍA PERSONAL · POR AGREGAR</small></div>
    <p class="story">Hoy quiero poder llevar mis crespos porque me gustan, no porque una tendencia me obligue a reivindicarlos.</p>
    <p class="story">Y quiero poder alisarlos, si un día me provoca, sin que eso signifique que rechazo quién soy.</p>`),

  page('moraleja','Capítulo VII · El final que yo elijo','La moraleja nunca fue tener rizos.',`
    <div class="promise"><p class="story">El pelo liso es bonito.<br>El pelo crespo también.</p><p class="story">Ambos pueden ser elegantes, naturales y especiales.</p><div class="ornament-line">✦</div><strong>La belleza no debería depender de la textura del cabello.</strong></div>
    <p class="story">Alisarlo o llevarlo natural debería ser una elección, <em>nunca una condición para sentirse bonita o aceptada.</em></p>`),

  page('yo-princesa','Capítulo VII · El final que yo elijo','Y así terminó el cuento...',`
    <div class="chapter-opener">
      <span class="ornament">♛</span>
      <p>Volví a mirar la historia con la que crecí, pero esta vez la entendí de otra manera.</p>
      <h2>Mia siempre fue<br>una princesa.<br><em>Y yo también.</em></h2>
      <p>FIN DEL CUENTO.<br>NO DEL PENSAMIENTO.</p>
      <span class="ornament">❦</span>
    </div>`, 'chapter'),

  page('autores-1','Apéndice · Notas del cuento','Las voces detrás de la historia.',`
    <p class="story">Este cuento es también un ensayo: las escenas y los anuncios se interpretan a partir de teorías y fuentes que pueden respaldar, cuestionar o matizar el argumento.</p>
    <ol class="refs">
      <li>Hall, S. (Ed.). (1997). <cite>Representation: Cultural Representations and Signifying Practices</cite>. SAGE.</li>
      <li>McLuhan, M. (1964). <cite>Understanding Media: The Extensions of Man</cite>.</li>
      <li>Dabiri, E. (2019). <cite>Don't Touch My Hair</cite>.</li>
      <li>Banks, I. (2000). <cite>Hair Matters: Beauty, Power, and Black Women's Consciousness</cite>. NYU Press.</li>
      <li>González Herrera, M. P. (2019). <cite>Entre rizo y rizo</cite>. Universidad de La Sabana. <a href="https://intellectum.unisabana.edu.co/entities/publication/4f61ed3e-6c40-4f83-93f4-ee7e6a35af96" target="_blank" rel="noopener noreferrer">Fuente ↗</a></li>
      <li>Ezquerra Fernández, M. (2026). <cite>Clean Girl aesthetic and neoliberal femininity performance on TikTok</cite>. <em>First Monday</em>. <a href="https://firstmonday.org/ojs/index.php/fm/article/view/14323" target="_blank" rel="noopener noreferrer">Fuente ↗</a></li>
    </ol>`),

  page('fuentes-2','Apéndice · Notas del cuento','Las imágenes detrás del cuento.',`
    <p class="page-kicker">FUENTES PRIMARIAS Y AUDIOVISUALES</p>
    <ol class="refs">
      <li>Marshall, G. (Dir.). (2001). <cite>The Princess Diaries</cite> [película]. Walt Disney Pictures.</li>
      <li>Andrews, M. y Chapman, B. (Dirs.). (2012). <cite>Brave</cite> [película]. Pixar Animation Studios.</li>
      <li>Bush, J. y Howard, B. (Dirs.). (2021). <cite>Encanto</cite> [película]. Walt Disney Animation Studios.</li>
      <li>Dove (2015). <cite>Love Your Curls</cite> [campaña]. <a href="https://www.prnewswire.com/news-releases/dove-hair-launches-poetic-tribute-to-curls-inspired-by-stories-from-real-women-300084598.html" target="_blank" rel="noopener noreferrer">Ver ↗</a></li>
      <li>Smithsonian / National Museum of African American History and Culture. Documento de Poro College (1915). <a href="https://nmaahc.si.edu/object/nmaahc_2011.170.2" target="_blank" rel="noopener noreferrer">Archivo ↗</a></li>
      <li>Hathaway, A. (2026). Entrevista en <cite>PEOPLE</cite>. <a href="https://people.com/anne-hathaway-the-princess-diaries-worlds-most-beautiful-exclusive-11954368" target="_blank" rel="noopener noreferrer">Consultar ↗</a></li>
    </ol>
    <p class="small">PENDIENTE: completar fuentes precisas de cada anuncio histórico y los créditos de fotogramas antes de la entrega. Las ilustraciones actuales son recursos editoriales provisionales.</p>`),

  page('declaracion','Apéndice · Notas del cuento','Cómo se hizo este cuento.',`
    <p class="story">El formato de libro interactivo es una decisión narrativa: permite que el lector avance de una historia aparentemente inocente hacia una pregunta histórica, social y personal.</p>
    <div class="paper-note"><p><strong>Herramientas:</strong> HTML, CSS y JavaScript para la estructura, el diseño y el paso de páginas. Las ilustraciones editoriales son provisionales.</p><p><strong>Uso de inteligencia artificial:</strong> antes de la entrega final, añadir aquí las herramientas utilizadas, los prompts exactos y una reflexión crítica sobre posibles sesgos, errores y limitaciones.</p></div>
    <p class="small">Esta sección forma parte del ensayo: los créditos y la investigación son tan importantes como su diseño.</p>`),

  page('contraportada','Contraportada','El final del libro',`
    <div><div class="back-cover-ornament">❦</div><p class="back-cover-text">La belleza no estaba escondida en mis crespos.<br>Estaba escondida en la forma en que había aprendido a mirarlos.</p><div class="ornament-line">✦</div><span class="back-cover-sub">FIN · ¿ACASO NO SOY UNA PRINCESA?</span></div>`, 'backcover')
];
