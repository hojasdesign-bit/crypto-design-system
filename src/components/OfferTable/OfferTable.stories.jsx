import { OfferTable } from './OfferTable.jsx';

export default { title: 'Comercio/OfferTable', component: OfferTable };

const NET = {
  base: { name: 'Base', symbol: 'B', color: '#0052ff' },
  tron: { name: 'Tron', symbol: 'T', color: '#eb0029' },
  polygon: { name: 'Polygon', symbol: 'P', color: '#8247e5' },
  bnb: { name: 'BNB Chain', symbol: 'B', color: '#f0b90b' },
};
const USDC = { code: 'USDC', symbol: '$', color: '#2775ca' };
const USDT = { code: 'USDT', symbol: '₮', color: '#26a17b' };
const USD = { code: 'USD', symbol: '$', color: '#3f9e4d' };
const CUP = { code: 'CUP', symbol: '$', color: '#c0392b' };
const MLC = { code: 'MLC', symbol: 'M', color: '#7d3c98' };

export const MercadoCrypto = {
  args: {
    offers: [
      {
        id: 1, give: USDC, receive: USD, available: '25.000 USDC', limits: '50 – 25.000 USD',
        price: '1,00 USD', priceNote: 'por USDC', methods: ['Efectivo', 'Transferencia Bancaria', 'Wise'],
        networks: [NET.base, NET.tron, NET.polygon],
        trader: { name: 'criptoblue', verified: true, verification: 'premium', tier: 'Premium', trades: 10060, completion: 100 },
        ctaLabel: 'Comprar USDC',
      },
      {
        id: 2, give: USDT, receive: USD, available: '3.392 USDT', limits: '20 – 3.000 USD',
        price: '1,01 USD', priceNote: 'por USDT', methods: ['Transferencia Bancaria'],
        networks: [NET.tron],
        trader: { name: 'yosusenador', verified: true, trades: 3392, completion: 100 },
        ctaLabel: 'Comprar USDT',
      },
      {
        id: 3, give: USDC, receive: CUP, available: '702 USDC', limits: '10 – 700 USD',
        price: '420 CUP', priceNote: 'por USDC', methods: ['Efectivo', 'Transferencia Bancaria', 'Wise', 'SEPA'],
        networks: [NET.base, NET.bnb],
        trader: { name: 'tucambioalpoars', verified: true, trades: 702, completion: 98 },
        ctaLabel: 'Comprar USDC',
      },
    ],
  },
};

export const MercadoDivisa = {
  args: {
    offers: [
      { id: 4, give: USD, receive: CUP, available: '5.000 USD', limits: '50 – 5.000 USD', price: '420 CUP', priceNote: 'por USD', methods: ['Efectivo'], networks: [], trader: { name: 'criptoblue', verified: true, verification: 'premium', tier: 'Premium', trades: 10060, completion: 100 }, ctaLabel: 'Comprar USD' },
      { id: 5, give: USD, receive: MLC, available: '1.200 USD', limits: '20 – 1.200 USD', price: '1,18 MLC', priceNote: 'por USD', methods: ['Transferencia Bancaria'], networks: [], trader: { name: 'yosusenador', verified: true, trades: 3392, completion: 100 }, ctaLabel: 'Comprar USD' },
    ],
  },
};

export const MisOfertas = {
  args: {
    offers: [
      { id: 6, give: USDC, receive: USD, available: '25.000 USDC', limits: '50 – 25.000 USD', price: '1,00 USD', priceNote: 'por USDC', methods: ['Efectivo', 'Transferencia Bancaria'], networks: [NET.base], trader: { name: 'criptoblue', verified: true, verification: 'premium', tier: 'Premium', trades: 10060, completion: 100 }, own: true },
      { id: 7, give: USDT, receive: CUP, available: '900 USDT', limits: '10 – 900 USD', price: '425 CUP', priceNote: 'por USDT', methods: ['Efectivo'], networks: [NET.tron], trader: { name: 'criptoblue', verified: true, verification: 'premium', tier: 'Premium', trades: 10060, completion: 100 }, own: true, paused: true },
    ],
  },
};

export const Vacia = { args: { offers: [] } };
