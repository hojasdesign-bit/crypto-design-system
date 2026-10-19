import React from 'react';
import { SwapCard } from './SwapCard.jsx';

export default {
  title: 'Comercio/SwapCard',
  component: SwapCard,
};

const baseProps = {
  receiveAmount: '0.00381',
  onPayCurrencyClick: () => {},
  onReceiveCurrencyClick: () => {},
  onSwap: () => {},
  onSubmit: () => {},
  paymentMethod: { name: 'Tarjeta Visa ···· 4242', fee: '1.75% comisión', badge: 'Popular' },
  footnote: 'El tipo de cambio se confirma antes de pagar. Sin cargos ocultos.',
};

export const PorDefecto = {
  render: () => {
    const [amount, setAmount] = React.useState('250');
    const [quick, setQuick] = React.useState(200);
    return (
      <SwapCard
        {...baseProps}
        payAmount={amount}
        onPayAmountChange={(e) => {
          setAmount(e.target.value);
          setQuick(null);
        }}
        activeQuick={quick}
        onQuickSelect={(v) => {
          setQuick(v);
          setAmount(String(v));
        }}
        ctaLabel="Comprar BTC"
      />
    );
  },
};

export const CtaOscuro = {
  render: () => {
    const [amount, setAmount] = React.useState('500');
    return (
      <SwapCard
        {...baseProps}
        payAmount={amount}
        onPayAmountChange={(e) => setAmount(e.target.value)}
        receiveAmount="0.24"
        receiveCurrency={{ code: 'ETH', symbol: 'Ξ', color: '#627eea' }}
        ctaLabel="Comprar ETH"
        ctaVariant="dark"
        quickAmounts={[100, 500, 1000, 5000]}
        activeQuick={500}
        onQuickSelect={(v) => setAmount(String(v))}
        paymentMethod={{ name: 'Transferencia bancaria', fee: '0.5% comisión' }}
      />
    );
  },
};

export const SinChips = {
  args: {
    ...baseProps,
    payAmount: '1000',
    quickAmounts: [],
    ctaLabel: 'Comprar BTC',
    paymentMethod: { name: 'Apple Pay', fee: '2.1% comisión' },
  },
};
