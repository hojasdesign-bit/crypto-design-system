import { CryptoBuyCard } from './CryptoBuyCard.jsx';

export default { title: 'Comercio/CryptoBuyCard', component: CryptoBuyCard };

const USDC_LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Ccircle cx='64' cy='64' r='64' fill='%232775ca'/%3E%3Ctext x='64' y='86' font-size='72' text-anchor='middle' fill='white' font-family='Arial'%3E$%3C/text%3E%3C/svg%3E";

export const ConLogo = {
  args: { name: 'USDC', ticker: 'USDC', logo: USDC_LOGO },
};

export const ConInicial = {
  args: { name: 'Tether', ticker: 'USDT', color: '#26a17b' },
};
