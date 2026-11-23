# ¿Acaso no soy una princesa?

**La belleza que nos enseñaron a esconder.** Ensayo multimedia interactivo para CBU Nuevos Medios (2026).

Un libro digital sobre cómo el cine, la publicidad y la representación del pelo crespo pueden reforzar o cuestionar los ideales de belleza. Incluye una línea de tiempo, anuncios históricos, análisis y bibliografía.

## Abrir el libro publicado

**https://julianaduranl.github.io/acaso-no-soy-una-princesa/**

> El enlace estará disponible cuando se active GitHub Pages en los ajustes del repositorio.

## Activar GitHub Pages

1. Abre [Settings → Pages](https://github.com/julianaduranl/acaso-no-soy-una-princesa/settings/pages).
2. En **Build and deployment → Source**, elige **Deploy from a branch**.
3. En **Branch**, selecciona **main** y **/(root)**, y guarda con **Save**.

La página usa `index.html` en la raíz y archivos relativos (`css/`, `js/`, `assets/`). No necesita compilación ni un servidor de aplicación. El archivo `.nojekyll` deshabilita el procesamiento con Jekyll para publicar los archivos tal como están. Los cambios posteriores a `main` se publican automáticamente después de activar Pages.

## Probarlo localmente

```bash
python3 -m http.server 5500
```

Visita `http://localhost:5500/`. Usa las flechas o los botones del libro para pasar páginas.
