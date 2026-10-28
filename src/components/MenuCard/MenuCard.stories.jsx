import { MenuCard } from './MenuCard.jsx';

export default { title: 'Superficies/MenuCard', component: MenuCard };

export const Tarjetas = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 720 }}>
      <MenuCard title="Rampa de compra" description="Deja que tus usuarios compren y vendan crypto con métodos de pago locales." />
      <MenuCard title="Conexión de depósitos" description="Deja que tus usuarios depositen directo desde sus cuentas de exchange y wallets." />
    </div>
  ),
};
