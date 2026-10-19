import { OrderSummary } from './OrderSummary.jsx';

export default {
  title: 'Comercio/OrderSummary',
  component: OrderSummary,
};

export const PorDefecto = {
  args: {
    rows: [
      { label: 'Recibes', value: '0.00381 BTC' },
      { label: 'Subtotal', value: '$250.00' },
      { label: 'Comisión (1.75%)', value: '$4.38' },
      { label: 'Comisión de red', value: '$2.40' },
    ],
    total: '$256.78',
    ctaLabel: 'Confirmar compra',
    onCta: () => {},
  },
};

export const SinCta = {
  args: {
    title: 'Detalle',
    rows: [
      { label: 'Subtotal', value: '$100.00' },
      { label: 'Comisión', value: '$1.75' },
    ],
    total: '$101.75',
  },
};
