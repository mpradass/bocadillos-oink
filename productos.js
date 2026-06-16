/**
 * productos.js — Carta de (oink) Bocadillos
 *
 * Cómo editar:
 *  - Cambia nombre, descripcion, precio o badge directamente aquí.
 *  - Para las imágenes: pon el archivo en /img/productos/ y actualiza "imagen".
 *  - badge puede ser: "estrella", "nuevo", "temporada", "24h", o null.
 *  - Para añadir un producto, copia un bloque { ... } y pégalo al final del array.
 *  - Para quitar un producto, borra su bloque { ... } entero.
 *
 * CATEGORÍAS disponibles: "bocadillo", "bocapack", "desayuno", "pulguita", "bebida"
 */

const PRODUCTOS = [

  /* ── BOCADILLOS CLÁSICOS ── */
  {
    id: 1,
    categoria: "bocadillo",
    nombre: "Jamón Ibérico",
    descripcion: "Jamón ibérico de bellota cortado al momento. Pan crujiente, tomate y AOVE. El original.",
    precio: "desde 3,90 €",
    imagen: "img/productos/jamon.jpg",
    badge: "estrella",
    en: "Iberian Ham",
  },
  {
    id: 2,
    categoria: "bocadillo",
    nombre: "Jamón y Queso",
    descripcion: "Jamón ibérico con queso fundido. La combinación que nunca falla.",
    precio: "desde 4,90 €",
    imagen: "img/productos/jamon-queso.jpg",
    badge: null,
    en: "Iberian Ham and Cheese",
  },
  {
    id: 3,
    categoria: "bocadillo",
    nombre: "Chorizo",
    descripcion: "Chorizo ibérico. Pimentón de la Vera, curado en bodega. Picante o dulce.",
    precio: "desde 3,10 €",
    imagen: "img/productos/chorizo.jpg",
    badge: null,
    en: "Chorizo",
  },
  {
    id: 4,
    categoria: "bocadillo",
    nombre: "Salchichón",
    descripcion: "Salchichón ibérico. Curado lento, sabor profundo. Clásico de siempre.",
    precio: "desde 3,10 €",
    imagen: "img/productos/salchichon.jpg",
    badge: null,
    en: "Spicy Sausage",
  },
  {
    id: 5,
    categoria: "bocadillo",
    nombre: "Tortilla",
    descripcion: "Tortilla de patata casera. Jugosa por dentro, dorada por fuera. El bocata español por excelencia.",
    precio: "desde 3,10 €",
    imagen: "img/productos/tortilla.jpg",
    badge: null,
    en: "Spanish Omelette",
  },
  {
    id: 6,
    categoria: "bocadillo",
    nombre: "Queso",
    descripcion: "Queso curado. Solo queso, buen pan y aceite. No hace falta más.",
    precio: "desde 3,10 €",
    imagen: "img/productos/queso.jpg",
    badge: null,
    en: "Cheese",
  },
  {
    id: 7,
    categoria: "bocadillo",
    nombre: "Sandwich Mixto",
    descripcion: "Jamón york y queso en pan de molde tostado. El sándwich de toda la vida.",
    precio: "3,90 €",
    imagen: "img/productos/sandwich-mixto.jpg",
    badge: null,
    en: "Cheese Sandwich",
  },

  /* ── BOCAPACKS (bocadillo + bebida) ── */
  {
    id: 8,
    categoria: "bocapack",
    nombre: "Bocapack Pequeño",
    descripcion: "Bocadillo pequeño (jamón, tortilla, chorizo, salchichón, york o queso) + bebida.",
    precio: "desde 3,40 €",
    imagen: "img/productos/bocapack-pequeno.jpg",
    badge: null,
    en: "Small Bocapack",
  },
  {
    id: 9,
    categoria: "bocapack",
    nombre: "Bocapack Mediano",
    descripcion: "Bocadillo mediano + bebida a elegir. Perfecto para un momento bocata rápido.",
    precio: "desde 4,70 €",
    imagen: "img/productos/bocapack-mediano.jpg",
    badge: null,
    en: "Medium Bocapack",
  },
  {
    id: 10,
    categoria: "bocapack",
    nombre: "Bocapack Grande",
    descripcion: "Bocadillo grande + bebida. Para los que saben lo que quieren.",
    precio: "desde 5,50 €",
    imagen: "img/productos/bocapack-grande.jpg",
    badge: "estrella",
    en: "Large Bocapack",
  },
  {
    id: 11,
    categoria: "bocapack",
    nombre: "Bocapack Mixto + bebida",
    descripcion: "Jamón, tortilla y bebida. El combo que lo tiene todo.",
    precio: "5,50 €",
    imagen: "img/productos/bocapack-mixto.jpg",
    badge: null,
    en: "Mixed Bocapack",
  },

  /* ── DESAYUNOS (8h–12h, Lunes–Viernes) ── */
  {
    id: 12,
    categoria: "desayuno",
    nombre: "Menú Dulce",
    descripcion: "Café o infusión + bollo, donut o berlina. De 8h a 12h, lunes a viernes.",
    precio: "3,40 €",
    imagen: "img/productos/menu-dulce.jpg",
    badge: "desayuno",
    en: "Sweet Breakfast Menu",
  },
  {
    id: 13,
    categoria: "desayuno",
    nombre: "Menú Salado",
    descripcion: "Café o infusión + bocadillo pequeño a elegir. De 8h a 12h, lunes a viernes.",
    precio: "3,80 €",
    imagen: "img/productos/menu-salado.jpg",
    badge: "desayuno",
    en: "Savoury Breakfast Menu",
  },
  {
    id: 14,
    categoria: "desayuno",
    nombre: "Zumo de Naranja Natural",
    descripcion: "Naranja exprimida al momento. Fresh orange juice. ½ litro o 1 litro.",
    precio: "6 € / 13 €",
    imagen: "img/productos/zumo-naranja.jpg",
    badge: null,
    en: "Fresh Orange Juice",
  },

  /* ── PULGUITAS ── */
  {
    id: 15,
    categoria: "pulguita",
    nombre: "Caja 10 Pulguitas Jamón",
    descripcion: "Diez mini bocadillos de jamón o tortilla. Perfectas para compartir.",
    precio: "20,50 €",
    imagen: "img/productos/pulguitas-jamon.jpg",
    badge: null,
    en: "10 Mini Iberian Ham Rolls",
  },
  {
    id: 16,
    categoria: "pulguita",
    nombre: "Caja 10 Pulguitas Mixtas",
    descripcion: "Diez mini bocadillos variados (chorizo, salchichón, york o queso). Surtido cerrado.",
    precio: "18,10 €",
    imagen: "img/productos/pulguitas-mixtas.jpg",
    badge: null,
    en: "10 Assorted Mini Rolls",
  },

];

/* ── INFORMACIÓN DE LA MARCA Y LAS TIENDAS ──
   Datos de referencia. Las tarjetas visibles se editan en index.html
   (sección "Nuestras tiendas" y footer). Mantén ambos sitios al día. */
const INFO_LOCAL = {
  nombre: "(oink)",
  tagline: "momento bocata",
  horario: "Abierto 24h",
  instagram: "https://www.instagram.com/bocadillos_oink/",
};

const TIENDAS = [
  {
    nombre: "Gran Vía",
    direccion: "Calle Gran Vía, 22 · Madrid Centro",
    telefono: "915 21 61 40",
    google_maps: "https://share.google/ljxnvtno7h41REfv2",
  },
  {
    nombre: "Arenal",
    direccion: "Calle Arenal, 14 · Madrid Centro",
    telefono: "681 87 56 81",
    google_maps: "https://share.google/nc764YS8xhuCzhGAs",
  },
  {
    nombre: "Infantas",
    direccion: "Calle de las Infantas, 22 · Madrid Centro",
    telefono: "910 66 44 36",
    google_maps: "https://share.google/VqsS648IWBHvdLLyf",
  },
];
