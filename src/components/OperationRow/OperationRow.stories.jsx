import { OperationRow } from './OperationRow.jsx';

export default { title: 'Comercio/OperationRow', component: OperationRow };

const USDC = { code: 'USDC', symbol: '$', color: '#2775ca' };
const USDT = { code: 'USDT', symbol: '₮', color: '#26a17b' };
const USD = { code: 'USD', symbol: '$', color: '#3f9e4d' };
const CUP = { code: 'CUP', symbol: '$', color: '#c0392b' };
const noop = () => {};

export const Historial = {
  render: () => (
    <div style={{ width: 580, border: '1px solid var(--cds-border)', borderRadius: 16, overflow: 'hidden' }}>
      <OperationRow status="completed" side="buy" give={USDC} receive={USD} counterparty="yosusenador" date="2 jul" amount="500 USDC" price="1 USD / 1 USDC" onClick={noop} />
      <OperationRow status="completed" side="sell" give={USDT} receive={CUP} counterparty="tucambioalpoars" date="28 jun" amount="120 USDT" price="420 CUP / 1 USDT" onClick={noop} />
      <OperationRow status="pending" side="buy" give={USDC} receive={USD} counterparty="criptoblue" date="Hoy" amount="250 USDC" price="1 USD / 1 USDC" onClick={noop} />
      <OperationRow status="cancelled" side="sell" give={USDT} receive={USD} counterparty="mdp.trading" date="20 jun" amount="80 USDT" price="0,99 USD / 1 USDT" onClick={noop} />
    </div>
  ),
};

export const EnCurso = {
  args: {
    status: 'in_progress', side: 'buy', give: USDC, receive: USD,
    counterparty: 'Camila Prieto', date: 'Ahora', amount: '850 USDC', price: '1,03 USD / 1 USDC',
  },
};
