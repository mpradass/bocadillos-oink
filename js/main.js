/**
 * main.js — Comportamientos generales de la página (oink)
 */

document.documentElement.classList.add('js');

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initReveal();
  initAbierto();
  initHeroParallax();
  initContadores();
});

/* Navbar: clase .scrolled al pasar de 60px */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
  const check = () => navbar.classList.toggle("scrolled", window.scrollY > 60);
  window.addEventListener("scroll", check, { passive: true });
  check();
}

/* Animaciones de entrada con IntersectionObserver */
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!els.length) return;
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); }
    }),
    { threshold: 0.1 }
  );
  els.forEach(el => obs.observe(el));
}

/* Parallax 3D del bocata del hero: cada capa se mueve según el ratón */
function initHeroParallax() {
  const hero  = document.querySelector(".hero");
  const scene = document.querySelector(".hero-scene");
  if (!hero || !scene) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const capas = scene.querySelectorAll(".bl");
  let raf;

  hero.addEventListener("mousemove", e => {
    const r = scene.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      capas.forEach(capa => {
        const d = parseFloat(capa.dataset.depth) || 0;
        capa.style.transform = `translate(${dx * d * 16}px, ${dy * d * 16}px)`;
      });
    });
  });

  hero.addEventListener("mouseleave", () => {
    capas.forEach(capa => { capa.style.transform = "translate(0,0)"; });
  });
}

/* Contadores de la banda de cifras: animan de 0 al valor al entrar en pantalla.
   Soporta data-prefix, data-suffix y data-decimals (formatea con coma). */
function initContadores() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const formatear = (valor, decimales) => {
    const fijo = valor.toFixed(decimales);
    return decimales > 0 ? fijo.replace(".", ",") : fijo;
  };

  const animar = el => {
    const objetivo  = parseFloat(el.dataset.count) || 0;
    const decimales = parseInt(el.dataset.decimals) || 0;
    const prefijo   = el.dataset.prefix || "";
    const sufijo    = el.dataset.suffix || "";
    const pinta = v => { el.textContent = prefijo + formatear(v, decimales) + sufijo; };

    if (reduce) { pinta(objetivo); return; }

    const dur = 1400, t0 = performance.now();
    const paso = ahora => {
      const p = Math.min((ahora - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      pinta(objetivo * eased);
      if (p < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  };

  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { animar(e.target); obs.unobserve(e.target); }
    }),
    { threshold: 0.4 }
  );
  nums.forEach(n => obs.observe(n));
}

/* Estado abierto/cerrado: (oink) Arenal está abierto 24h */
function initAbierto() {
  const badge = document.querySelector(".sobre__image-badge");
  if (!badge) return;
  /* Siempre abierto, pero podemos añadir lógica de festivos aquí si hace falta */
  badge.innerHTML = `<span class="dot-green"></span> Abierto ahora · 24h`;
}
