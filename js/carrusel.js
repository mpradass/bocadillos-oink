/**
 * carrusel.js
 * Lee PRODUCTOS de productos.js, renderiza las cards y gestiona:
 *  - Scroll horizontal con snap
 *  - Botones prev/next y dots
 *  - Arrastre con ratón
 *  - Filtrado por categoría (botones .filtro-btn)
 */

const CAT_LABELS = {
  bocadillo: "Bocadillo",
  bocapack:  "Bocapack",
  desayuno:  "Desayuno",
  pulguita:  "Pulguita",
  bebida:    "Bebida",
};

const BADGE_LABELS = {
  estrella:  "⭐ Estrella",
  nuevo:     "Nuevo",
  temporada: "Temporada",
  desayuno:  "8h–12h",
};

function crearCard(producto) {
  const badge = producto.badge && BADGE_LABELS[producto.badge]
    ? `<span class="badge badge--${producto.badge}">${BADGE_LABELS[producto.badge]}</span>`
    : "";

  const img = producto.imagen
    ? `<img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'producto-card__img-placeholder\\'>🥖</div>'">`
    : `<div class="producto-card__img-placeholder">🥖</div>`;

  const en = producto.en
    ? `<span style="font-size:.7em;opacity:.5;font-style:italic"> / ${producto.en}</span>`
    : "";

  const card = document.createElement("article");
  card.className = "producto-card";
  card.dataset.categoria = producto.categoria || "otro";
  card.setAttribute("role", "listitem");

  card.innerHTML = `
    <div class="producto-card__img-wrap">
      ${img}
      ${badge}
    </div>
    <div class="producto-card__body">
      <p class="producto-card__cat">${CAT_LABELS[producto.categoria] || producto.categoria}</p>
      <h3 class="producto-card__nombre">${producto.nombre}${en}</h3>
      ${producto.descripcion ? `<p class="producto-card__descripcion">${producto.descripcion}</p>` : ""}
      ${producto.precio ? `<p class="producto-card__precio">${producto.precio}</p>` : ""}
    </div>
  `;
  return card;
}

function iniciarCarrusel() {
  const track   = document.getElementById("carrusel-track");
  const btnPrev = document.getElementById("carrusel-prev");
  const btnNext = document.getElementById("carrusel-next");
  const dotsEl  = document.getElementById("carrusel-dots");

  if (!track || typeof PRODUCTOS === "undefined") return;

  // Renderizar todas las cards
  PRODUCTOS.forEach(p => track.appendChild(crearCard(p)));

  // ── FILTROS ──────────────────────────────────────────────
  const filtroBtns = document.querySelectorAll(".filtro-btn");
  let filtroActual = "todos";

  filtroBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filtroActual = btn.dataset.filtro;

      filtroBtns.forEach(b => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });

      const cards = track.querySelectorAll(".producto-card");
      cards.forEach(card => {
        const visible = filtroActual === "todos" || card.dataset.categoria === filtroActual;
        card.classList.toggle("oculto", !visible);
      });

      track.scrollTo({ left: 0, behavior: "instant" });
      actualizarDots();
      actualizarBotones();
    });
  });

  // ── DOTS ─────────────────────────────────────────────────
  function cardsVisibles() {
    return Array.from(track.querySelectorAll(".producto-card:not(.oculto)"));
  }

  function reconstruirDots() {
    if (!dotsEl) return;
    dotsEl.innerHTML = "";
    cardsVisibles().forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "carrusel-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Producto ${i + 1}`);
      dot.addEventListener("click", () => scrollToVisible(i));
      dotsEl.appendChild(dot);
    });
  }

  reconstruirDots();

  // ── SCROLL HELPERS ───────────────────────────────────────
  function anchoCard() {
    const first = cardsVisibles()[0];
    if (!first) return 300;
    return first.offsetWidth + parseInt(getComputedStyle(track).gap || "20");
  }

  function idxActual() {
    return Math.round(track.scrollLeft / anchoCard());
  }

  function scrollToVisible(i) {
    track.scrollTo({ left: i * anchoCard(), behavior: "smooth" });
  }

  btnPrev?.addEventListener("click", () => {
    track.scrollBy({ left: -anchoCard(), behavior: "smooth" });
  });

  btnNext?.addEventListener("click", () => {
    track.scrollBy({ left: anchoCard(), behavior: "smooth" });
  });

  // ── ESTADO (dots + botones) ───────────────────────────────
  function actualizarDots() {
    reconstruirDots();
  }

  function actualizarBotones() {
    const idx = idxActual();
    const total = cardsVisibles().length;
    if (btnPrev) btnPrev.disabled = idx === 0;
    if (btnNext) btnNext.disabled = idx >= total - 1;
    const dots = dotsEl?.querySelectorAll(".carrusel-dot");
    dots?.forEach((d, i) => d.classList.toggle("active", i === idx));
  }

  let raf;
  track.addEventListener("scroll", () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(actualizarBotones);
  }, { passive: true });

  actualizarBotones();

  // ── DRAG CON RATÓN ───────────────────────────────────────
  let isDown = false, startX = 0, scrollLeft = 0;

  track.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener("mouseleave", () => { isDown = false; });
  track.addEventListener("mouseup",    () => { isDown = false; });
  track.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollLeft - (x - startX) * 1.2;
  });
}

document.addEventListener("DOMContentLoaded", iniciarCarrusel);
