import { useState } from 'react';
import { AmountField } from './AmountField.jsx';

export default {
  title: 'Formularios/AmountField',
  component: AmountField,
};

const BTC = { code: 'BTC', symbol: 'B', color: '#f7931a' };
const ETH = { code: 'ETH', symbol: 'E', color: '#627eea' };
const USDC = { code: 'USDC', symbol: '$', color: '#2775ca' };

function DemoBasico() {
  const [valor, setValor] = useState('');
  return (
    <div style={{ maxWidth: 420 }}>
      <AmountField
        label="Usted paga"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        currency={BTC}
        onCurrencyClick={() => alert('Abrir selector de moneda')}
      />
    </div>
  );
}

export const Basico = { render: () => <DemoBasico /> };

function DemoRecibe() {
  const [valor, setValor] = useState('0.0042');
  return (
    <div style={{ maxWidth: 420 }}>
      <AmountField
        label="Usted recibe"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        currency={ETH}
        onCurrencyClick={() => alert('Abrir selector de moneda')}
      />
    </div>
  );
}

export const UstedRecibe = { render: () => <DemoRecibe /> };

export const SoloLectura = {
  args: {
    label: 'Usted recibe (estimado)',
    value: '98.50',
    currency: USDC,
    readOnly: true,
  },
  render: (args) => (
    <div style={{ maxWidth: 420 }}>
      <AmountField {...args} />
    </div>
  ),
};

export const SinSelector = {
  render: () => (
    <div style={{ maxWidth: 420 }}>
      <AmountField label="Monto" value="250" currency={USDC} />
    </div>
  ),
};
