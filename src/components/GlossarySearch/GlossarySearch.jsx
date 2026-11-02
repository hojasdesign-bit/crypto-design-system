import React from 'react';
import styles from './GlossarySearch.module.css';
import { cn } from '../../utils.js';

/**
 * GlossarySearch — el buscador en vivo del glosario: superficie de
 * tarjeta (no de campo), radio 12, icono de 16px y sin botón de
 * limpiar. Difiere de SearchInput (campo de panel/blog, con botón
 * para limpiar): este es el buscador de las páginas de contenido.
 */
export function GlossarySearch({ value, onChange, placeholder = 'Buscar términos…', className = '', ...rest }) {
  return (
    <div className={cn(styles.root, className)}>
      <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={rest['aria-label'] || 'Buscar en el glosario'}
        {...rest}
      />
    </div>
  );
}
