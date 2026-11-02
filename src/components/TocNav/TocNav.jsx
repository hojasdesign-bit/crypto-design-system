import React from 'react';
import styles from './TocNav.module.css';
import { cn } from '../../utils.js';

/**
 * TocNav — la tarjeta «En esta página» del lateral de las páginas de
 * contenido: título y enlaces a las anclas de la página. El padre la
 * hace fija en escritorio (en el glosario, sticky top 120 en ≥1024px).
 * Enlace: { href, label, onClick }
 */
export function TocNav({ title = 'En esta página', links = [], className = '', ...rest }) {
  return (
    <nav className={cn(styles.nav, className)} aria-label={title} {...rest}>
      <h3 className={styles.title}>{title}</h3>
      {links.map((link) => (
        <a key={link.href} className={styles.link} href={link.href} onClick={link.onClick}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
