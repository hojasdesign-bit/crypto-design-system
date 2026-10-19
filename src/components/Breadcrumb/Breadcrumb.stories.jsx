import { Breadcrumb } from './Breadcrumb.jsx';

export default {
  title: 'Datos/Breadcrumb',
  component: Breadcrumb,
};

export const Basico = {
  args: {
    items: [
      { label: 'Inicio', href: '#' },
      { label: 'Comprar', href: '#' },
      { label: 'Bitcoin' },
    ],
  },
};

export const Largo = {
  args: {
    items: [
      { label: 'Inicio', href: '#' },
      { label: 'Mercados', href: '#' },
      { label: 'Criptomonedas', href: '#' },
      { label: 'Ethereum', href: '#' },
      { label: 'Comprar ETH' },
    ],
  },
};
