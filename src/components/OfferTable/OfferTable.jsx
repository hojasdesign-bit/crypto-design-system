import React from 'react';
import styles from './OfferTable.module.css';
import { cn } from '../../utils.js';
import { AssetPair } from '../AssetPair/AssetPair.jsx';
import { TraderCell } from '../TraderCell/TraderCell.jsx';
import { OverflowChips } from '../OverflowChips/OverflowChips.jsx';
import { NetworkChip } from '../NetworkChip/NetworkChip.jsx';
import { Button } from '../Button/Button.jsx';
import { IconButton } from '../IconButton/IconButton.jsx';

const PauseIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 5v14M15 5v14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
);
const PlayIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" /></svg>
);
const EyeIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" /></svg>
);

/**
 * OfferTable — la tabla de ofertas del mercado P2P, como la de peetoo:
 * par Das/Recibes (solo círculos), disponible y límites, precio con el
 * badge del método de pago (una oferta lleva UN solo método), redes con
 * desborde +N, anunciante y acción. En móvil cada fila pasa a ser una
 * tarjeta (par/anunciante, montos, redes, precio/acción).
 * Con `own` en una oferta, la acción pasa a ser pausar/reanudar y ver
 * (la vista de «Mis ofertas»).
 * Oferta: { id, give, receive, reverse, available, limits, price,
 * priceTitle, priceNote, method, methodLabel, networks[{name,symbol,
 * color}], trader, ctaLabel, own, paused }
 * `priceTitle` es el valor exacto que se muestra al pasar el cursor
 * cuando `price` viene abreviado (p. ej. «1,04k»); `methodLabel` es la
 * etiqueta corta del badge (p. ej. «Cash» o «Bank») y `method` el nombre
 * completo que aparece al pasar el cursor sobre el badge.
 */
export function OfferTable({ offers = [], onAction, onTogglePause, onView, className = '', ...rest }) {
  return (
    <div className={cn(styles.wrap, className)} {...rest}>
      <div className={styles.list} role="table" aria-label="Ofertas del mercado">
        <div className={styles.head} role="row">
          <div className={styles.cell} role="columnheader">Das / Recibes</div>
          <div className={styles.cell} role="columnheader">Disponible / Min - Max</div>
          <div className={styles.cell} role="columnheader">Precio</div>
          <div className={styles.cell} role="columnheader">Red blockchain</div>
          <div className={styles.cell} role="columnheader">Anunciante</div>
          <div className={styles.cell} role="columnheader"><span className={styles.srOnly}>Acciones</span></div>
        </div>
        {offers.map((o, i) => (
          <div key={o.id ?? i} className={cn(styles.row, o.paused && styles.paused)} role="row">
            <div className={cn(styles.cell, styles.pair)} role="cell">
              <AssetPair from={o.give} to={o.receive} reverse={o.reverse} size={44} />
            </div>
            <div className={cn(styles.cell, styles.amounts)} role="cell">
              <div className={styles.amount}>{o.available}</div>
              {o.limits && <div className={styles.sub}>{o.limits}</div>}
            </div>
            <div className={cn(styles.cell, styles.priceCell)} role="cell">
              <div className={styles.price}>
                <span className={styles.priceValue} title={o.priceTitle}>{o.price}</span>{' '}
                {(o.methodLabel || o.method) && (
                  <span
                    className={styles.methodBadge}
                    title={o.methodLabel && o.method && o.method !== o.methodLabel ? o.method : undefined}
                  >
                    {o.methodLabel || o.method}
                  </span>
                )}
              </div>
              {o.priceNote && <div className={styles.sub}>{o.priceNote}</div>}
            </div>
            <div className={cn(styles.cell, styles.chains)} role="cell">
              {o.networks?.length ? (
                <OverflowChips
                  items={o.networks}
                  maxVisible={2}
                  renderItem={(n) => <NetworkChip name={n.name} symbol={n.symbol} color={n.color} />}
                />
              ) : (
                <span className={styles.sub}>—</span>
              )}
            </div>
            <div className={cn(styles.cell, styles.trader)} role="cell">
              <TraderCell trader={o.trader} />
            </div>
            <div className={cn(styles.cell, styles.actions)} role="cell">
              {o.own ? (
                <span className={styles.ownActions}>
                  <IconButton label={o.paused ? 'Reanudar oferta' : 'Pausar oferta'} size="lg" onClick={() => onTogglePause?.(o)}>
                    {o.paused ? PlayIcon : PauseIcon}
                  </IconButton>
                  <IconButton label="Ver detalles" size="lg" onClick={() => onView?.(o)}>
                    {EyeIcon}
                  </IconButton>
                </span>
              ) : (
                <Button size="md" onClick={() => onAction?.(o)}>
                  {o.ctaLabel || 'Comprar'}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      {offers.length === 0 && <p className={styles.empty}>No hay ofertas que coincidan con los filtros.</p>}
    </div>
  );
}
