import { NetworkChip } from './NetworkChip.jsx';

export default { title: 'Datos/NetworkChip', component: NetworkChip };

export const Redes = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <NetworkChip name="Base" symbol="B" color="#0052ff" />
      <NetworkChip name="Tron" symbol="T" color="#eb0029" />
      <NetworkChip name="Polygon" symbol="P" color="#8247e5" />
      <NetworkChip name="BNB Chain" symbol="B" color="#f0b90b" />
      <NetworkChip name="Arbitrum" symbol="A" color="#28a0f0" />
    </div>
  ),
};

export const Pequeno = { args: { name: 'Base', symbol: 'B', color: '#0052ff', size: 'sm' } };
