import { OverflowChips } from './OverflowChips.jsx';
import { NetworkChip } from '../NetworkChip/NetworkChip.jsx';

export default { title: 'Datos/OverflowChips', component: OverflowChips };

export const MetodosDePago = {
  args: { items: ['Efectivo', 'Transferencia Bancaria', 'Wise', 'SEPA', 'Zelle'], maxVisible: 2 },
};

export const SinExceso = { args: { items: ['Efectivo', 'Mercado Pago'] } };

const REDES = [
  { label: 'Base', symbol: 'B', color: '#0052ff' },
  { label: 'Tron', symbol: 'T', color: '#eb0029' },
  { label: 'Polygon', symbol: 'P', color: '#8247e5' },
  { label: 'Arbitrum', symbol: 'A', color: '#28a0f0' },
];

export const RedesConRender = {
  args: {
    items: REDES,
    maxVisible: 2,
    renderItem: (n) => <NetworkChip name={n.label} symbol={n.symbol} color={n.color} />,
  },
};
