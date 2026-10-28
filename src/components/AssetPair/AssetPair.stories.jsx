import { AssetPair } from './AssetPair.jsx';

export default { title: 'Datos/AssetPair', component: AssetPair };

const USDC = { code: 'USDC', symbol: '$', color: '#2775ca' };
const USDT = { code: 'USDT', symbol: '₮', color: '#26a17b' };
const USD = { code: 'USD', symbol: '$', color: '#3f9e4d' };
const CUP = { code: 'CUP', symbol: '$', color: '#c0392b' };

export const CriptoFiat = { args: { from: USDC, to: USD } };
export const Invertido = { args: { from: USDC, to: USD, reverse: true } };
export const FiatFiat = { args: { from: USD, to: CUP } };

export const Tamanos = {
  render: () => (
    <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
      <AssetPair from={USDT} to={USD} size={30} />
      <AssetPair from={USDT} to={USD} size={44} />
      <AssetPair from={USDT} to={USD} size={58} />
    </div>
  ),
};
