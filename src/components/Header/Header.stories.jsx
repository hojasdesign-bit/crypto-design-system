import { Header } from './Header.jsx';

export default { title: 'Superficies/Header', component: Header };

const SOCIALS = [
  { label: 'X', href: '#', icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>) },
  { label: 'LinkedIn', href: '#', icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="800" fill="currentColor">in</text></svg>) },
  { label: 'Instagram', href: '#', icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /></svg>) },
];

const LINKS = [
  { label: 'Blog', href: '#' },
  { label: 'Glosario', href: '#' },
  { label: 'Legal', href: '#' },
  { label: 'FAQ', href: '#' },
];

const MONEDAS_COMPRA = [
  { symbol: '₿', color: '#f7931a', label: 'Comprar Bitcoin', code: 'BTC', href: '#' },
  { symbol: '$', color: '#2775ca', label: 'Comprar USDC', code: 'USDC', href: '#' },
  { symbol: 'Ξ', color: '#627eea', label: 'Comprar Ethereum', code: 'ETH', href: '#' },
  { symbol: '▲', color: '#ff0013', label: 'Comprar Tron', code: 'TRX', href: '#' },
  { symbol: '◎', color: '#9945ff', label: 'Comprar Solana', code: 'SOL', href: '#' },
  { symbol: '✕', color: '#3a3a44', label: 'Comprar Ripple', code: 'XRP', href: '#' },
  { symbol: 'Ł', color: '#345d9d', label: 'Comprar Litecoin', code: 'LTC', href: '#' },
  { symbol: '⬡', color: '#8247e5', label: 'Comprar Polygon', code: 'POL', href: '#' },
];
const MONEDAS_VENTA = MONEDAS_COMPRA.map((m) => ({ ...m, label: m.label.replace('Comprar', 'Vender') }));

export const Completo = {
  args: {
    brand: { label: 'Crypto DS', href: '#' },
    brandIcon: 'C',
    cta: { label: 'Comprar crypto', href: '#' },
    items: [
      {
        label: 'Comprar crypto',
        dropdown: {
          intro: { title: 'Comprar crypto', description: 'Compra crypto al instante con tarjeta, transferencia, Apple Pay, Google Pay o tu método local favorito.' },
          coins: MONEDAS_COMPRA,
          links: LINKS,
          socials: SOCIALS,
        },
      },
      {
        label: 'Vender crypto',
        dropdown: {
          intro: { title: 'Vender crypto', description: 'Vende crypto al instante a tu cuenta bancaria o tarjeta.' },
          coins: MONEDAS_VENTA,
          links: LINKS,
          socials: SOCIALS,
        },
      },
      {
        label: 'Negocios',
        dropdown: {
          cards: [
            { title: 'Rampa de compra', description: 'Deja que tus usuarios compren y vendan crypto con métodos de pago locales.', href: '#' },
            { title: 'Conexión de depósitos', description: 'Deja que tus usuarios depositen directo desde sus cuentas de exchange y wallets.', href: '#' },
          ],
          banner: { title: 'Convierte tu red en ingresos recurrentes', description: 'Gana comisiones refiriendo socios a nuestros productos.', ctaLabel: 'Programa de referidos', href: '#' },
          links: LINKS,
          socials: SOCIALS,
        },
      },
      {
        label: 'Empresa',
        dropdown: {
          primaryLinks: [
            { label: 'Sobre nosotros', href: '#' },
            { label: 'Empleos', href: '#' },
            { label: 'Prensa', href: '#' },
            { label: 'Contacto', href: '#' },
          ],
          links: LINKS,
          socials: SOCIALS,
        },
      },
      { label: 'Soporte', href: '#' },
    ],
  },
};

export const SoloEnlaces = {
  args: {
    brand: { label: 'Crypto DS', href: '#' },
    brandIcon: 'C',
    cta: { label: 'Empezar', href: '#' },
    items: [
      {
        label: 'Producto',
        dropdown: {
          primaryLinks: [
            { label: 'Mercado P2P', href: '#' },
            { label: 'On-ramp', href: '#' },
            { label: 'Wallet', href: '#' },
          ],
          links: LINKS,
          socials: SOCIALS,
        },
      },
      { label: 'Precios', href: '#' },
      { label: 'Ayuda', href: '#' },
    ],
  },
};
