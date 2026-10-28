import { PaymentAccountRow } from './PaymentAccountRow.jsx';

export default { title: 'Comercio/PaymentAccountRow', component: PaymentAccountRow };

const noop = () => {};

export const WalletPrincipal = {
  args: {
    icon: 'T',
    name: 'TON Wallet',
    detail: 'UQDemo···0000',
    primary: true,
    meta: 'Creado: 12 de marzo de 2024 · Red TON',
    onCopy: noop,
    onShowQR: noop,
    onEdit: noop,
    onDelete: noop,
  },
};

export const Tarjeta = {
  args: {
    icon: 'C',
    name: 'Tarjeta CUP',
    detail: '···· 0000',
    onCopy: noop,
    onEdit: noop,
    onDelete: noop,
  },
};

export const ListaDeMetodos = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 520 }}>
      <PaymentAccountRow icon="T" name="TON Wallet" detail="UQDemo···0000" primary meta="Creado: 12 de marzo de 2024 · Red TON" onCopy={noop} onShowQR={noop} onEdit={noop} onDelete={noop} />
      <PaymentAccountRow icon="✉" name="TropiPay" detail="demo@peetoo.example" onCopy={noop} onShowQR={noop} onEdit={noop} onDelete={noop} />
      <PaymentAccountRow icon="$" name="Efectivo USD" detail="Entrega en persona · Centro Habana" onEdit={noop} onDelete={noop} />
    </div>
  ),
};
