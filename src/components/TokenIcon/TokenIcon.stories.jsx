import { TokenIcon } from './TokenIcon.jsx';

export default {
  title: 'Datos/TokenIcon',
  component: TokenIcon,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
};

export const Bitcoin = { args: { symbol: '₿', color: '#f7931a' } };
export const Ethereum = { args: { symbol: 'Ξ', color: '#627eea' } };
export const PorDefecto = { args: { symbol: 'U' } };

export const Tamanos = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <TokenIcon symbol="₿" color="#f7931a" size="sm" />
      <TokenIcon symbol="Ξ" color="#627eea" size="md" />
      <TokenIcon symbol="S" color="linear-gradient(135deg, #9945ff, #14f195)" size="lg" />
      <TokenIcon symbol="₮" color="#26a17b" size="xl" />
    </div>
  ),
};

export const ConDegradado = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <TokenIcon symbol="₿" color="#f7931a" />
      <TokenIcon symbol="Ξ" color="#627eea" />
      <TokenIcon symbol="◎" color="linear-gradient(135deg, #9945ff, #14f195)" />
      <TokenIcon symbol="C" />
    </div>
  ),
};
