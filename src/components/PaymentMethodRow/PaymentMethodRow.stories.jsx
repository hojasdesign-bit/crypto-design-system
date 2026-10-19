import React from 'react';
import { PaymentMethodRow } from './PaymentMethodRow.jsx';

export default {
  title: 'Comercio/PaymentMethodRow',
  component: PaymentMethodRow,
};

export const PorDefecto = {
  args: {
    name: 'Tarjeta de débito',
    sublabel: 'Visa ···· 4242',
    fee: '1.75% comisión',
  },
};

export const Seleccionada = {
  args: {
    name: 'Tarjeta de débito',
    sublabel: 'Visa ···· 4242',
    fee: '1.75% comisión',
    badge: 'Popular',
    selected: true,
  },
};

export const Lista = {
  render: () => {
    const [selected, setSelected] = React.useState('tarjeta');
    const methods = [
      { id: 'tarjeta', name: 'Tarjeta de débito', sublabel: 'Visa ···· 4242', fee: '1.75% comisión', badge: 'Popular' },
      { id: 'banco', name: 'Transferencia bancaria', sublabel: 'Llega en 1–3 días', fee: '0.5% comisión' },
      { id: 'apple', name: 'Apple Pay', sublabel: 'Pago instantáneo', fee: '2.1% comisión' },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 420 }}>
        {methods.map((m) => (
          <PaymentMethodRow
            key={m.id}
            name={m.name}
            sublabel={m.sublabel}
            fee={m.fee}
            badge={m.badge}
            selected={selected === m.id}
            onClick={() => setSelected(m.id)}
          />
        ))}
      </div>
    );
  },
};
