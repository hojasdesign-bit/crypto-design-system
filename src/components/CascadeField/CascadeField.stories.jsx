import { useState } from 'react';
import { CascadeField } from './CascadeField.jsx';
import { TokenIcon } from '../TokenIcon/TokenIcon.jsx';

export default { title: 'Formularios/CascadeField', component: CascadeField };

const ACTIVOS = [
  {
    value: 'USDC', label: 'USDC', description: 'USD Coin', icon: <TokenIcon symbol="$" color="#2775ca" size={24} />,
    options: [
      { value: 'base', label: 'Base' },
      { value: 'tron', label: 'Tron' },
      { value: 'polygon', label: 'Polygon' },
    ],
  },
  {
    value: 'USDT', label: 'USDT', description: 'Tether', icon: <TokenIcon symbol="₮" color="#26a17b" size={24} />,
    options: [
      { value: 'tron', label: 'Tron' },
      { value: 'base', label: 'Base' },
      { value: 'bnb', label: 'BNB Chain' },
    ],
  },
  {
    value: 'BTC', label: 'Bitcoin', description: 'BTC', icon: <TokenIcon symbol="B" color="#f7931a" size={24} />,
    options: [
      { value: 'bitcoin', label: 'Bitcoin' },
      { value: 'lightning', label: 'Lightning' },
    ],
  },
];

function DemoCriptoRed() {
  const [v, setV] = useState({ first: null, second: null });
  return (
    <div style={{ width: 460, minHeight: 380 }}>
      <CascadeField
        label="Activo y red"
        options={ACTIVOS}
        value={v}
        onChange={setV}
        firstPlaceholder="Escribe o elige un activo"
        secondPlaceholder="Elige una red"
        firstAriaLabel="Activo"
        secondAriaLabel="Red"
        hint="La red depende del activo elegido."
      />
      <p style={{ marginTop: 14, color: 'var(--cds-muted)', fontSize: '0.875rem' }}>
        Selección: <strong style={{ color: 'var(--cds-ink)' }}>{v.first || '—'}{v.second ? ` · ${v.second}` : ''}</strong>
      </p>
    </div>
  );
}
export const CriptoYRed = { render: () => <DemoCriptoRed /> };

function DemoPrecargado() {
  const [v, setV] = useState({ first: 'USDC', second: 'base' });
  return (
    <div style={{ width: 460, minHeight: 380 }}>
      <CascadeField
        label="Activo y red"
        options={ACTIVOS}
        value={v}
        onChange={setV}
        firstAriaLabel="Activo"
        secondAriaLabel="Red"
      />
    </div>
  );
}
export const Precargado = { render: () => <DemoPrecargado /> };

export const ConError = {
  args: {
    label: 'Activo y red',
    options: ACTIVOS,
    value: { first: null, second: null },
    error: 'Elige un activo y una red para continuar.',
    firstAriaLabel: 'Activo',
    secondAriaLabel: 'Red',
  },
};
