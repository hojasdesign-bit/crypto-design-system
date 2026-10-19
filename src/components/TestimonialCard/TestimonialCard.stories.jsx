import { TestimonialCard } from './TestimonialCard.jsx';

export default {
  title: 'Comercio/TestimonialCard',
  component: TestimonialCard,
};

export const PorDefecto = {
  args: {
    quote: 'Compré mis primeros BTC en menos de cinco minutos. El proceso fue clarísimo de principio a fin.',
    author: 'María González',
    role: 'Compradora verificada',
  },
};

export const SinRol = {
  args: {
    quote: 'La mejor experiencia comprando crypto que he tenido. Rápido, seguro y sin sorpresas.',
    author: 'Carlos Ruiz',
  },
};
