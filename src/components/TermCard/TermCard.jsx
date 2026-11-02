import React from 'react';
import styles from './TermCard.module.css';
import { cn } from '../../utils.js';

const ArrowIcon = (
  <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * TermCard — la tarjeta de término del glosario: título, extracto y
 * «Leer más ↗». Variante `index` (lista: título 500, extracto
 * atenuado) y `related` (otros términos: título 700, extracto en
 * tinta con límite de 2 líneas, «Leer más» 700).
 */
export function TermCard({ title, excerpt, readMoreLabel = 'Leer más', href = '#', onClick, variant = 'index', className = '', ...rest }) {
  return (
    <a
      className={cn(styles.card, variant === 'related' && styles.related, className)}
      href={href}
      onClick={onClick}
      {...rest}
    >
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
      </div>
      <span className={styles.more}>{readMoreLabel} {ArrowIcon}</span>
    </a>
  );
}
