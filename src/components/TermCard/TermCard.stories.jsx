import { TermCard } from './TermCard.jsx';

export default { title: 'Contenido/TermCard', component: TermCard };

export const Indice = {
  args: {
    title: 'Stablecoin',
    excerpt: 'Una criptomoneda diseñada para mantener un valor estable frente a una moneda fiat, como el dólar.',
  },
};

export const Relacionada = {
  args: {
    title: 'Custodia',
    excerpt: 'Quién guarda las llaves de tus fondos: en custodia propia las guardas tú; en custodia de un tercero, las guarda una plataforma o un banco por ti, con sus riesgos y sus ventajas.',
    variant: 'related',
  },
};
