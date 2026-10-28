import { TraderCell } from './TraderCell.jsx';

export default { title: 'Comercio/TraderCell', component: TraderCell };

export const Premium = {
  args: { trader: { name: 'criptoblue', verified: true, verification: 'premium', tier: 'Premium', trades: 10060, completion: 100 }, href: '#' },
};
export const Estandar = {
  args: { trader: { name: 'yosusenador', verified: true, trades: 3392, completion: 100 }, href: '#' },
};
export const ConScore = {
  args: { trader: { name: 'Camila Prieto', verified: true, trades: 233, completion: 99, score: 84, online: true } },
};
export const SinVerificar = {
  args: { trader: { name: 'tucambioalpoars', trades: 702, completion: 98 } },
};
