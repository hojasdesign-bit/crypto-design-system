import React from 'react';
import styles from './SwapCard.module.css';
import { cn } from '../../utils.js';

/**
 * SwapCard — widget de compra de crypto (~400px, autocontenido).
 * Filas "Usted paga" / "Usted recibe", botón circular de intercambio,
 * chips de montos rápidos, fila "Pagar con", CTA a ancho completo y nota al pie.
 */
export function SwapCard({
  payLabel = 'Usted paga',
  receiveLabel = 'Usted recibe',
  payAmount = '100',
  receiveAmount = '0.0042',
  onPayAmountChange,
  payCurrency = { code: 'USD', symbol: '$', color: '#3b82f6' },
  receiveCurrency = { code: 'BTC', symbol: '₿', color: '#f7931a' },
  onSwap,
  onPayCurrencyClick,
  onReceiveCurrencyClick,
  quickAmounts = [100, 200, 500, 1000],
  activeQuick = null,
  onQuickSelect,
  paymentMethod = { name: 'Tarjeta de débito', fee: '1.75% comisión', badge: null },
  ctaLabel = 'Comprar BTC',
  ctaVariant = 'primary',
  onSubmit,
  footnote,
  className = '',
  ...rest
}) {
  return (
    <article className={cn(styles.card, className)} {...rest}>
      {/* ---- Usted paga ---- */}
      <div className={styles.field}>
        <div className={styles.fieldTop}>
          <span className={styles.label}>{payLabel}</span>
          <CurrencyPill currency={payCurrency} onClick={onPayCurrencyClick} label={`Moneda de pago: ${payCurrency.code}`} />
        </div>
        <input
          className={styles.amount}
          value={payAmount}
          onChange={onPayAmountChange}
          inputMode="decimal"
          aria-label={payLabel}
          placeholder="0"
        />
      </div>

      {/* ---- Botón de intercambio ---- */}
      <div className={styles.swapWrap}>
        <button type="button" className={styles.swap} onClick={onSwap} aria-label="Intercambiar monedas">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M5.5 2.5v10M5.5 2.5L3 5M5.5 2.5L8 5M12.5 15.5v-10M12.5 15.5l2.5-2.5M12.5 15.5L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ---- Usted recibe ---- */}
      <div className={styles.field}>
        <div className={styles.fieldTop}>
          <span className={styles.label}>{receiveLabel}</span>
          <CurrencyPill currency={receiveCurrency} onClick={onReceiveCurrencyClick} label={`Moneda a recibir: ${receiveCurrency.code}`} />
        </div>
        <div className={styles.amountStatic} aria-live="polite" aria-label={receiveLabel}>
          {receiveAmount}
        </div>
      </div>

      {/* ---- Montos rápidos ---- */}
      {quickAmounts.length > 0 && (
        <div className={styles.quicks} role="group" aria-label="Montos rápidos">
          {quickAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              className={cn(styles.chip, activeQuick === amount && styles.chipActive)}
              onClick={() => onQuickSelect?.(amount)}
              aria-pressed={activeQuick === amount}
            >
              {formatQuick(amount)}
            </button>
          ))}
        </div>
      )}

      {/* ---- Pagar con ---- */}
      <span className={styles.payMethodLabel}>Pagar con</span>
      <div className={styles.payMethod}>
        <span className={styles.pmIcon} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1.5" y="3.5" width="15" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M1.5 7h15" stroke="currentColor" strokeWidth="1.6" />
            <path d="M4 12.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
        <span className={styles.pmTexts}>
          <span className={styles.pmName}>{paymentMethod.name}</span>
          {paymentMethod.fee && <span className={styles.pmFee}>{paymentMethod.fee}</span>}
        </span>
        <span className={styles.pmRight}>
          {paymentMethod.badge && <span className={styles.pmBadge}>{paymentMethod.badge}</span>}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={styles.chevronMuted}>
            <path d="M5 2.5L9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {/* ---- CTA ---- */}
      <button
        type="button"
        className={cn(styles.cta, styles[ctaVariant === 'dark' ? 'ctaDark' : 'ctaPrimary'])}
        onClick={onSubmit}
      >
        {ctaLabel}
      </button>

      {footnote && <p className={styles.footnote}>{footnote}</p>}
    </article>
  );
}

/** Píldora de moneda: círculo con el símbolo, código y chevron. */
function CurrencyPill({ currency, onClick, label }) {
  return (
    <button type="button" className={styles.pill} onClick={onClick} aria-label={label}>
      <span className={styles.coin} style={{ backgroundColor: currency.color }} aria-hidden="true">
        {currency.symbol}
      </span>
      <span>{currency.code}</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/** 1000 → "$1k", 250 → "$250". */
function formatQuick(amount) {
  return amount >= 1000 ? `$${amount / 1000}k` : `$${amount}`;
}
