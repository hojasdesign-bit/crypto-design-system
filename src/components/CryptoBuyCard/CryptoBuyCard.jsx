import React from 'react';
import styles from './CryptoBuyCard.module.css';
import { cn } from '../../utils.js';

/**
 * CryptoBuyCard — la tarjeta «Más criptos» de la página de Swapped:
 * disco de 28px con el logo (o la inicial sobre el color) y el texto
 * «Comprar {nombre} ({ticker})». Presentacional: en peetoo no lleva
 * acción; si hace falta navegar, se envuelve en un enlace.
 */
export function CryptoBuyCard({ name, ticker, logo, color, className = '', ...rest }) {
  return (
    <span className={cn(styles.card, className)} {...rest}>
      <span className={styles.disc} style={logo ? undefined : { backgroundColor: color }}>
        {logo ? <img className={styles.logo} src={logo} alt="" /> : ticker[0]}
      </span>
      <span className={styles.name}>Comprar {name} ({ticker})</span>
    </span>
  );
}
