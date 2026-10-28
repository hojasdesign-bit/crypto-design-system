import { useState } from 'react';
import { SwapJoined } from './SwapJoined.jsx';

export default { title: 'Comercio/SwapJoined', component: SwapJoined };

const CAD = { code: 'CAD', symbol: '$', color: '#3b82f6' };
const USD = { code: 'USD', symbol: '$', color: '#3f9e4d' };
const BTC = { code: 'BTC', symbol: '₿', color: '#f7931a' };
const USDC = { code: 'USDC', symbol: '$', color: '#2775ca' };

/* Los mismos valores de la réplica, pero con los inputs unidos */
export const Unidos = {
  args: {
    payAmount: '316.00',
    receiveAmount: '0.002739',
    payCurrency: CAD,
    receiveCurrency: BTC,
  },
  decorators: [(Story) => <div style={{ width: 352 }}><Story /></div>],
};

function DemoEditable() {
  const [pay, setPay] = useState('200');
  const [quick, setQuick] = useState(200);
  const n = parseFloat(String(pay).replace(',', '.')) || 0;
  return (
    <div style={{ width: 352 }}>
      <SwapJoined
        payAmount={pay}
        onPayAmountChange={(e) => { setPay(e.target.value); setQuick(null); }}
        receiveAmount={(n * 0.99).toFixed(2)}
        payCurrency={USD}
        receiveCurrency={USDC}
        activeQuick={quick}
        onQuickSelect={(a) => { setPay(String(a)); setQuick(a); }}
      />
    </div>
  );
}
export const Editable = { render: () => <DemoEditable /> };

function DemoConFlip() {
  const [payCur, setPayCur] = useState(USD);
  const [recCur, setRecCur] = useState(BTC);
  const [pay, setPay] = useState('100');
  const [rec, setRec] = useState('0.00102');
  const flip = () => {
    setPayCur(recCur);
    setRecCur(payCur);
    setPay(rec);
    setRec(pay);
  };
  return (
    <div style={{ width: 352 }}>
      <SwapJoined
        payAmount={pay}
        onPayAmountChange={(e) => setPay(e.target.value)}
        receiveAmount={rec}
        payCurrency={payCur}
        receiveCurrency={recCur}
        onFlip={flip}
        quickAmounts={[]}
      />
    </div>
  );
}
export const ConBotonDeIntercambio = { render: () => <DemoConFlip /> };
