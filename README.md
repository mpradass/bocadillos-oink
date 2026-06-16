# (oink) Bocadillos — momento bocata

Web de **(oink) Bocadillos**, bocadillería de jamón ibérico abierta 24 h con tres tiendas en Madrid Centro: **Gran Vía 22**, **Arenal 14** e **Infantas 22**.

Sitio estático (HTML + CSS + JavaScript vanilla), sin dependencias ni build.

## Estructura

```
index.html        Página completa
css/              main.css + tokens.css (paleta y tipografía)
js/               carrusel.js (carta) + main.js (animaciones, contadores)
productos.js      Datos de la carta y de las tiendas (edítalo aquí)
img/              Logo, fotos de producto y del local, capas del bocata 3D
robots.txt        SEO
sitemap.xml       SEO
```

## Cómo verlo en local

Al ser estático, basta con abrir `index.html` en el navegador. Para que carguen
bien las rutas (carrusel, mapas), mejor con un servidor local:

```bash
npx serve .
# o
python -m http.server
```

## Editar la carta

Abre `productos.js` y modifica el array `PRODUCTOS` (nombre, descripción, precio,
imagen, categoría). Las fotos van en `img/productos/`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio placeholder `https://www.bocadillosoink.es` por el real
      en `index.html` (canonical/Open Graph), `sitemap.xml` y `robots.txt`.
- [ ] Añadir el logo real en `img/logo.png`.

---

© (oink) Bocadillos · Madrid
