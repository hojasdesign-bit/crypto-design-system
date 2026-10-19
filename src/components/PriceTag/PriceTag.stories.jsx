import { PriceTag } from './PriceTag.jsx';

export default {
  title: 'Datos/PriceTag',
  component: PriceTag,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    trend: { control: 'select', options: ['up', 'down', null] },
  },
};

export const Basico = { args: { amount: '98.420,50', currency: 'USD' } };
export const AlAlza = { args: { amount: '0,0042', currency: 'BTC', trend: 'up' } };
export const AlaBaja = { args: { amount: '3.120,00', currency: 'ETH', trend: 'down' } };
export const Grande = { args: { amount: '250,00', currency: 'USDC', size: 'lg', trend: 'up' } };

export const Combinaciones = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <PriceTag amount="98.420,50" currency="USD" size="lg" trend="up" />
      <PriceTag amount="3.120,00" currency="ETH" trend="down" />
      <PriceTag amount="1,00" currency="USDT" size="sm" />
    </div>
  ),
};
