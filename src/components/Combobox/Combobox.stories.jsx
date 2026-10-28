import { useState } from 'react';
import { Combobox } from './Combobox.jsx';
import { TokenIcon } from '../TokenIcon/TokenIcon.jsx';

export default { title: 'Formularios/Combobox', component: Combobox };

const REDES = [
  { value: 'any', label: 'Cualquier blockchain', icon: <TokenIcon symbol="✦" color="#4608e3" size={24} /> },
  { value: 'base', label: 'Base', description: 'Sin gas en Peetoo', icon: <TokenIcon symbol="B" color="#0052ff" size={24} /> },
  { value: 'tron', label: 'Tron', icon: <TokenIcon symbol="T" color="#eb0029" size={24} /> },
  { value: 'polygon', label: 'Polygon', icon: <TokenIcon symbol="P" color="#8247e5" size={24} /> },
  { value: 'bnb', label: 'BNB Chain', icon: <TokenIcon symbol="B" color="#f0b90b" size={24} /> },
  { value: 'arbitrum', label: 'Arbitrum', icon: <TokenIcon symbol="A" color="#28a0f0" size={24} /> },
  { value: 'optimism', label: 'Optimism', icon: <TokenIcon symbol="O" color="#ff0420" size={24} /> },
];

function DemoBlockchain() {
  const [red, setRed] = useState('any');
  return (
    <div style={{ width: 340, minHeight: 470 }}>
      <Combobox label="Red blockchain" panelTitle="Seleccionar red" searchPlaceholder="Buscar red…" value={red} options={REDES} onChange={setRed} />
    </div>
  );
}
export const Blockchain = { render: () => <DemoBlockchain /> };

const METODOS = [
  { value: 'any', label: 'Cualquier método' },
  { value: 'efectivo', label: 'Efectivo' },
  { value: 'transferencia', label: 'Transferencia Bancaria' },
  { value: 'wise', label: 'Wise' },
];

function DemoMetodo() {
  const [m, setM] = useState('any');
  return (
    <div style={{ width: 340, minHeight: 300 }}>
      <Combobox label="Método de pago" value={m} options={METODOS} onChange={setM} />
    </div>
  );
}
export const MetodoDePago = { render: () => <DemoMetodo /> };

export const ConError = {
  args: {
    label: 'Red blockchain',
    placeholder: 'Selecciona una red',
    options: REDES,
    error: 'La red es obligatoria para publicar la oferta.',
  },
};
