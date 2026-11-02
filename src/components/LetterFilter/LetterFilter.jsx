import React from 'react';
import styles from './LetterFilter.module.css';
import { cn } from '../../utils.js';

/**
 * LetterFilter — el filtro por letra del glosario: «Todos», «#» y A–Z
 * en botones de 32×32. La letra activa lleva borde en tinta; las
 * letras sin términos van desactivadas (`disabled` en la opción).
 * Opción: { value, label, disabled }
 */
export function LetterFilter({ value = 'all', options = [], onChange, className = '', ...rest }) {
  return (
    <div className={cn(styles.root, className)} role="group" aria-label="Filtrar por letra" {...rest}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={cn(styles.btn, value === opt.value && styles.active)}
          disabled={opt.disabled}
          onClick={() => onChange?.(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
