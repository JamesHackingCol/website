# James Hacking Colombia

Sitio estático (HTML + CSS + JS puro, sin frameworks ni dependencias de build) para una
tienda/portafolio de servicios de ciberseguridad ética: auditorías, formación y hardware
de laboratorio para pentesting.

## Estructura

```
james-hacking-colombia/
├── index.html        → Inicio (hero, destacados, áreas de especialización, CTA)
├── formacion.html     → Catálogo de cursos y bootcamps
├── hardware.html       → Catálogo de dispositivos de laboratorio
├── css/
│   └── style.css     → Estilos globales (un solo archivo, compartido por las 3 páginas)
├── js/
│   └── script.js      → Menú móvil, año automático del footer, animación de la terminal
├── assets/            → Carpeta vacía lista para tus imágenes (ver TODOs en el HTML)
└── README.md
```

## Cosas por completar antes de publicar

Busca los comentarios `TODO` en el código:

1. **Imágenes**: en cada tarjeta de `index.html`, `formacion.html` y `hardware.html` hay
   un comentario `<!-- TODO: <img src="assets/..."> -->` justo donde debe ir la foto real.
   Solo agrega tus imágenes a `assets/` y descomenta/reemplaza esa línea.
2. **Números de WhatsApp**: busca `TODO: WHATSAPP` — todos los botones "Comprar",
   "Agendar auditoría", "Cotizar por WhatsApp" y el ícono flotante usan
   `https://wa.me/573000000000`. Reemplaza `573000000000` por tu número real
   (código de país + número, sin espacios ni signos).
3. **Precios**: los precios están como `$ 000.000`, reemplázalos por los reales.
4. **Textos**: los títulos, descripciones y specs de cada tarjeta son de ejemplo —
   ajústalos a tus servicios reales.

## Cómo verlo localmente

No necesita servidor: abre `index.html` directamente en el navegador, o si prefieres
un servidor local simple:

```bash
python3 -m http.server 8000
```

y visita `http://localhost:8000`.

## Notas de diseño

- Tipografía: JetBrains Mono (títulos/terminal) + Inter (texto), cargadas desde Google Fonts.
- Paleta: fondo carbón-azulado (`#0b0e14`) con acentos ámbar (`#f5a623`) y cian (`#4fd1c5`).
- El bloque de terminal del hero usa un efecto de "escritura" hecho en `js/script.js`,
  respeta `prefers-reduced-motion`.
- El carrito de compras se omitió a propósito en la barra de navegación.
