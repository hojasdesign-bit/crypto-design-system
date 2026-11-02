import React from 'react';
import styles from './TermGroup.module.css';
import { cn } from '../../utils.js';

/**
 * TermGroup — un grupo del índice del glosario: la letra como
 * encabezado y la columna de tarjetas debajo. En escritorio (≥1024px)
 * la letra va en una columna de 88px con margen 70 y las tarjetas en
 * 678px; el primer grupo del índice no lleva separador superior.
 */
export function TermGroup({ letter, children, className = '', ...rest }) {
  return (
    <section className={cn(styles.group, className)} {...rest}>
      <h2 className={styles.letter}>{letter}</h2>
      <div className={styles.cards}>{children}</div>
    </section>
  );
}
