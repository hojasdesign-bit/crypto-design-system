import { useState } from 'react';
import { CurrencySelect } from './CurrencySelect.jsx';

export default {
  title: 'Formularios/CurrencySelect',
  component: CurrencySelect,
};

const MONEDAS = [
  { code: 'BTC', name: 'Bitcoin', symbol: 'B', color: '#f7931a' },
  { code: 'ETH', name: 'Ethereum', symbol: 'E', color: '#627eea' },
  { code: 'USDC', name: 'USD Coin', symbol: '$', color: '#2775ca' },
  { code: 'SOL', name: 'Solana', symbol: 'S', color: '#9945ff' },
  { code: 'USDT', name: 'Tether', symbol: 'T', color: '#26a17b' },
];

function DemoBasico() {
  const [moneda, setMoneda] = useState('BTC');
  return <CurrencySelect label="Moneda" value={moneda} options={MONEDAS} onChange={setMoneda} />;
}

export const Basico = { render: () => <DemoBasico /> };

function DemoSinEtiqueta() {
  const [moneda, setMoneda] = useState('USDC');
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <CurrencySelect value={moneda} options={MONEDAS} onChange={setMoneda} />
      <span style={{ color: 'var(--cds-muted)', fontSize: '0.875rem' }}>
        Seleccionada: <strong style={{ color: 'var(--cds-ink)' }}>{moneda}</strong>
      </span>
    </div>
  );
}

export const SinEtiqueta = { render: () => <DemoSinEtiqueta /> };

function DemoPocas() {
  const [moneda, setMoneda] = useState('ETH');
  return <CurrencySelect label="Red" value={moneda} options={MONEDAS.slice(0, 2)} onChange={setMoneda} />;
}

export const PocasOpciones = { render: () => <DemoPocas /> };
