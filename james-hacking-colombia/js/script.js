/* =========================================================
   James Hacking Colombia — script global
   ========================================================= */

// ---- Menú móvil ----
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // ---- Año automático en el footer ----
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Efecto de escritura en la terminal del hero (solo si existe) ----
  const terminalBody = document.querySelector("[data-terminal]");
  if (terminalBody && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typeTerminalLines(terminalBody);
  }
});

/**
 * Anima las líneas dentro de .terminal-body una sola vez al cargar.
 * Cada línea ya debe existir en el HTML con la clase .line y el
 * texto final dentro de un atributo data-text.
 */
function typeTerminalLines(container) {
  const lines = Array.from(container.querySelectorAll(".line[data-text]"));
  lines.forEach((line) => (line.textContent = ""));

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) return;
    const line = lines[lineIndex];
    const fullText = line.getAttribute("data-text");
    let charIndex = 0;

    const interval = setInterval(() => {
      line.textContent = fullText.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex >= fullText.length) {
        clearInterval(interval);
        lineIndex++;
        setTimeout(typeLine, 220);
      }
    }, 18);
  }

  typeLine();
}

/* =========================================================
   NOTA PARA EL BOTÓN "COTIZAR POR WHATSAPP" / RECOMENDACIÓN
   Si más adelante agregas un formulario de diagnóstico
   (tipo "¿qué necesitas proteger?"), puedes construir aquí
   el mensaje dinámico y actualizar el href del botón antes
   de que el usuario haga clic. Por ahora los enlaces de
   WhatsApp están fijos en el HTML (buscar TODO: WHATSAPP).
   ========================================================= */
