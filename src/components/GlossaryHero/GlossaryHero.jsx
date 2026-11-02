import React from 'react';
import styles from './GlossaryHero.module.css';
import { cn } from '../../utils.js';

/**
 * GlossaryHero — el héroe de las páginas de contenido (índice del
 * glosario y detalle de término): columna centrada 628, título 60/72
 * (40/50 en móvil), subtítulo 16/22 y decoración de resplandor violeta
 * + rejilla tenue en CSS, sin imágenes.
 */
export function GlossaryHero({ title, subtitle, className = '', ...rest }) {
  return (
    <div className={cn(styles.hero, className)} {...rest}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
