import { MenuCoinButton } from './MenuCoinButton.jsx';

export default { title: 'Superficies/MenuCoinButton', component: MenuCoinButton };

export const Monedas = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 560 }}>
      <MenuCoinButton symbol="₿" color="#f7931a" label="Comprar Bitcoin" code="BTC" />
      <MenuCoinButton symbol="$" color="#2775ca" label="Comprar USDC" code="USDC" />
      <MenuCoinButton symbol="Ξ" color="#627eea" label="Comprar Ethereum" code="ETH" />
      <MenuCoinButton symbol="▲" color="#ff0013" label="Comprar Tron" code="TRX" />
    </div>
  ),
};
