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

export const ConLogo = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 560 }}>
      <MenuCoinButton symbol="$" color="#2775ca" label="Comprar USDC" code="USDC" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Ccircle cx='64' cy='64' r='64' fill='%232775ca'/%3E%3Ctext x='64' y='86' font-size='72' text-anchor='middle' fill='white' font-family='Arial'%3E$%3C/text%3E%3C/svg%3E" />
      <MenuCoinButton symbol="₮" color="#26a17b" label="Comprar Tether" code="USDT" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Ccircle cx='64' cy='64' r='64' fill='%2326a17b'/%3E%3Ctext x='64' y='86' font-size='72' text-anchor='middle' fill='white' font-family='Arial'%3E%E2%82%AE%3C/text%3E%3C/svg%3E" />
      <MenuCoinButton symbol="Ξ" color="#627eea" label="Comprar Ethereum" code="ETH" />
    </div>
  ),
};
