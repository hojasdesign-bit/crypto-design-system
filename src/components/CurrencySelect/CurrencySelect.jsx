import { useEffect, useRef, useState } from 'react';
import styles from './CurrencySelect.module.css';
import { cn } from '../../utils.js';
import { TokenIcon } from '../TokenIcon/TokenIcon.jsx';

/**
 * CurrencySelect — selector de moneda en forma de píldora.
 * Muestra la moneda seleccionada (icono + código + chevron);
 * al abrir, lista las opciones con icono, código y nombre.
 * Se cierra al hacer clic fuera y con Escape.
 */
export function CurrencySelect({
  label,
  value,
  options = [],
  onChange,
  id: idProp,
  className = '',
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const selected = options.find((o) => o.code === value) || options[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open ]);

  const choose = (opt) => {
    onChange?.(opt.code, opt);
    setOpen(false);
  };

  return (
    <div className={cn(styles.root, className)} ref={rootRef}>
      {label && (
        <span className={styles.label} id={idProp}>
          {label}
        </span>
      )}
      <button
        type="button"
        ref={triggerRef}
        className={cn(styles.trigger, open && styles.open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={label ? idProp : undefined}
        onClick={() => setOpen((o) => !o)}
      >
        {selected && <TokenIcon symbol={selected.symbol} color={selected.color} size={28} />}
        <span className={styles.code}>{selected ? selected.code : '—'}</span>
        <svg className={styles.chevron} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className={styles.menu} role="listbox" aria-label={label || 'Seleccionar moneda'}>
          {options.map((opt) => {
            const isSelected = selected && opt.code === selected.code;
            return (
              <li key={opt.code} className={styles.item}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={cn(styles.option, isSelected && styles.selected)}
                  onClick={() => choose(opt)}
                >
                  <TokenIcon symbol={opt.symbol} color={opt.color} size={28} />
                  <span className={styles.optionCode}>{opt.code}</span>
                  <span className={styles.optionName}>{opt.name}</span>
                  {isSelected && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
