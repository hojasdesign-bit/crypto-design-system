import React from 'react';

/**
 * MethodIcon — el glifo genérico de un método de pago (como los de la
 * página de Swapped): formas simples en trazo currentColor, SIN copiar
 * los logos de marca (Apple Pay, Google Pay, Skrill…). Un método sin
 * glifo no dibuja nada. `size` es el alto en px (35 en la referencia).
 */
function Glyph({ size, children }) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" height={size} width={size}>
      <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

const GLYPHS = {
  'Apple Pay': (size) => (
    <Glyph size={size}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M10.5 19 h3" />
    </Glyph>
  ),
  Card: (size) => (
    <Glyph size={size}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10 h20" />
    </Glyph>
  ),
  'Google Pay': (size) => (
    <Glyph size={size}>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <rect x="15" y="10" width="4" height="5" rx="1" fill="currentColor" stroke="none" />
    </Glyph>
  ),
  PaySafeCard: (size) => (
    <Glyph size={size}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M7 9 v6 M10 9 v6 M13 9 v6 M16.5 9 v6" />
    </Glyph>
  ),
  'Bank Transfer': (size) => (
    <Glyph size={size}>
      <path d="M3 10 L12 4 L21 10" />
      <path d="M6 12 v6 M12 12 v6 M18 12 v6" />
      <path d="M4 20 h16" />
    </Glyph>
  ),
  Skrill: (size) => (
    <Glyph size={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 v10 M8 11 l4 -4 4 4" />
    </Glyph>
  ),
  'Rapid Transfer': (size) => (
    <Glyph size={size}>
      <path d="M13 2 L5 14 h6 l-2 8 8 -12 h-6 l2 -8" />
    </Glyph>
  ),
};

export function MethodIcon({ method, size = 35 }) {
  const glyph = GLYPHS[method];
  return glyph ? glyph(size) : null;
}
