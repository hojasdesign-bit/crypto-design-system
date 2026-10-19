import { FeeRow } from './FeeRow.jsx';

export default {
  title: 'Comercio/FeeRow',
  component: FeeRow,
};

export const Normal = {
  args: { label: 'Comisión de red', value: '$2.40' },
};

export const Total = {
  args: { label: 'Total a pagar', value: '$254.15', total: true },
};

export const Atenuada = {
  args: { label: 'Descuento aplicado', value: '−$5.00', muted: true },
};

export const Desglose = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 360 }}>
      <FeeRow label="Subtotal" value="$250.00" />
      <FeeRow label="Comisión (1.75%)" value="$4.38" />
      <FeeRow label="Comisión de red" value="$2.40" />
      <FeeRow label="Total a pagar" value="$256.78" total />
    </div>
  ),
};
