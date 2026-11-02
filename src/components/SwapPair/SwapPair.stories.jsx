import { useState } from 'react';
import { SwapPair } from './SwapPair.jsx';

export default { title: 'Comercio/SwapPair', component: SwapPair };

const CAD = { code: 'CAD', symbol: '$', color: '#3b82f6' };
const USD = { code: 'USD', symbol: '$', color: '#3f9e4d' };
const BTC = { code: 'BTC', symbol: '₿', color: '#f7931a' };
const USDC = { code: 'USDC', symbol: '$', color: '#2775ca' };

/* Fiel a la réplica: CAD → BTC, sin botón de intercambio */
export const ComoLaReplica = {
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
      <SwapPair
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
      <SwapPair
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

export const ConError = {
  render: () => (
    <div style={{ width: 352 }}>
      <SwapPair
        payAmount="0"
        receiveAmount="0,00"
        payCurrency={{ code: 'USD', symbol: '$', color: '#3b82f6' }}
        receiveCurrency={{ code: 'USDC', symbol: '$', color: '#2775ca' }}
        error
        quickAmounts={[]}
      />
    </div>
  ),
};

export const PildorasConLogoYSinChevron = {
  render: () => (
    <div style={{ width: 352 }}>
      <SwapPair
        payAmount="100"
        receiveAmount="99,00"
        payCurrency={{ code: 'USD', symbol: '$', color: '#3b82f6' }}
        receiveCurrency={{ code: 'USDC', symbol: '$', color: '#2775ca', src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Ccircle cx='64' cy='64' r='64' fill='%232775ca'/%3E%3Ctext x='64' y='86' font-size='72' text-anchor='middle' fill='white' font-family='Arial'%3E$%3C/text%3E%3C/svg%3E" }}
        quickAmounts={[]}
      />
    </div>
  ),
};
